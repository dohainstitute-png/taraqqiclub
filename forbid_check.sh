#!/usr/bin/env bash
set -euo pipefail
F=".guard/forbidden.txt"
[[ -f "$F" ]] || { echo "❌ Missing $F"; exit 1; }

while IFS= read -r pat; do
  [[ -z "${pat// }" ]] && continue
  [[ "$pat" =~ ^# ]] && continue
  if grep -R --line-number -E "$pat" src components lib pages app >/dev/null 2>&1; then
    echo "❌ Forbidden pattern found: $pat"
    exit 1
  fi
done < "$F"

echo "✅ Forbidden PASS"
