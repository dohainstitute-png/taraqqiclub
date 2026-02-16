#!/usr/bin/env bash
set -euo pipefail

ALLOW_FILE=".guard/allowed.txt"
BASE_REF_FILE=".guard/base_ref"

if [[ ! -f "$ALLOW_FILE" ]]; then
  echo "❌ Missing $ALLOW_FILE"
  exit 1
fi

if [[ ! -f "$BASE_REF_FILE" ]]; then
  echo "❌ Missing $BASE_REF_FILE. Run ./checkpoint.sh first."
  exit 1
fi

BASE_REF="$(cat "$BASE_REF_FILE")"
changed_tracked="$(git diff --name-only "$BASE_REF" || true)"
changed_untracked="$(git ls-files --others --exclude-standard || true)"
changed="$(printf "%s\n%s\n" "$changed_tracked" "$changed_untracked" | sed '/^\s*$/d' || true)"

if [[ -z "${changed// }" ]]; then
  echo "✅ No changes detected."
  exit 0
fi

BLOCKED_REGEX='^(package\.json|package-lock\.json|pnpm-lock\.yaml|yarn\.lock|tsconfig(\..*)?\.json|vite\.config\..*|next\.config\..*|firebase\.json|\.firebaserc)$'
blocked="$(echo "$changed" | grep -E "$BLOCKED_REGEX" || true)"
if [[ -n "$blocked" ]]; then
  echo "❌ BLOCKED files changed:"
  echo "$blocked"
  echo "↩️  Reverting to checkpoint..."
  git reset --hard "$BASE_REF" >/dev/null
  git clean -fd >/dev/null || true
  exit 1
fi

matches_allowed() {
  local file="$1"
  while IFS= read -r pat; do
    pat="${pat//$'\r'/}"
    [[ -z "${pat// }" ]] && continue
    [[ "$pat" =~ ^# ]] && continue
    if [[ "$pat" == */** ]]; then
      local prefix="${pat%/**}"
      if [[ "$file" == "$prefix/"* ]]; then return 0; fi
    fi
    if [[ "$file" == $pat ]]; then return 0; fi
  done < "$ALLOW_FILE"
  return 1
}

viol=""
while IFS= read -r f; do
  # Ignore internal checkpoint ref file (auto-changes)
  [[ "$f" == ".guard/base_ref" ]] && continue
  [[ "$f" == ".guard/state.env" ]] && continue
  [[ -z "$f" ]] && continue
  if ! matches_allowed "$f"; then viol+="$f"$'\n'; fi
done <<< "$changed"

if [[ -n "$viol" ]]; then
  echo "❌ Outside allowlist (forbidden):"
  echo "$viol"
  echo "↩️  Reverting forbidden changes..."
  while IFS= read -r vf; do
    [[ -z "${vf// }" ]] && continue
    if git ls-files --error-unmatch "$vf" >/dev/null 2>&1; then
      git restore --source "$BASE_REF" -- "$vf" || true
    else
      rm -rf -- "$vf" || true
    fi
  done <<< "$viol"
  exit 1
fi

echo "✅ File-scope PASS."
