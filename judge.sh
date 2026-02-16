#!/usr/bin/env bash
set -euo pipefail
BASE_REF="$(cat .guard/base_ref)"

revert() {
  echo "↩️  Reverting to checkpoint..."
  git reset --hard "$BASE_REF" >/dev/null || true
  git clean -fd >/dev/null || true
}

./court.sh || { revert; exit 1; }
./budget_check.sh || { revert; exit 1; }
./forbid_check.sh || { revert; exit 1; }
./req_check.sh || { revert; exit 1; }

if [[ -f package.json ]]; then
  if npm -s run | grep -qE '^\s*build\b'; then
    echo "Running build..."
    npm -s run build >/dev/null 2>&1 || { echo "❌ Build FAILED"; revert; exit 1; }
    echo "✅ Build OK"
  fi
fi

echo "✅ JUDGE PASS"
