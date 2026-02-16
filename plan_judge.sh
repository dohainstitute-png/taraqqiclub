#!/usr/bin/env bash
set -euo pipefail

PLAN_FILE="plan.md"
ALLOW_FILE=".guard/allowed.txt"

if [[ ! -f "$PLAN_FILE" ]]; then
  echo "❌ Missing plan.md"
  exit 1
fi
if [[ ! -f "$ALLOW_FILE" ]]; then
  echo "❌ Missing .guard/allowed.txt"
  exit 1
fi

# Load allow patterns
mapfile -t allow < <(grep -vE '^\s*#|^\s*$' "$ALLOW_FILE" || true)

matches_allowed() {
  local file="$1"
  for pat in "${allow[@]}"; do
    if [[ "$pat" == */** ]]; then
      local prefix="${pat%/**}"
      [[ "$file" == "$prefix/"* ]] && return 0
    fi
    [[ "$file" == $pat ]] && return 0
  done
  return 1
}

# Mandatory section: FILES_TO_EDIT
section="$(awk '
  BEGIN{inside=0}
  /^FILES_TO_EDIT:\s*$/ {inside=1; next}
  inside==1 && /^[A-Z_]+:\s*$/ {exit}
  inside==1 {print}
' "$PLAN_FILE")"

if [[ -z "${section// }" ]]; then
  echo "❌ PLAN REJECTED: Missing FILES_TO_EDIT section"
  exit 1
fi

files="$(echo "$section" | sed -n 's/^- \s*//p' | sed '/^\s*$/d' | sort -u)"

# Hard forbidden mentions inside plan
FORBID_REGEX='(^|/)(app/|blueprint\.md|progress_log|change_audit|\.env|next\.config|firebase/|\.guard/|\.idx/|stations\.md|package\.json|package-lock\.json|yarn\.lock|pnpm-lock\.yaml)'

bad=""
while IFS= read -r f; do
  [[ -z "${f// }" ]] && continue

  if echo "$f" | grep -Eq "$FORBID_REGEX"; then
    bad+="FORBIDDEN_IN_PLAN: $f"$'\n'
    continue
  fi

  if ! matches_allowed "$f"; then
    bad+="OUTSIDE_ALLOWLIST: $f"$'\n'
  fi
done <<< "$files"

if [[ -n "$bad" ]]; then
  echo "❌ PLAN REJECTED"
  echo "$bad"
  exit 1
fi

echo "✅ PLAN PASS"
