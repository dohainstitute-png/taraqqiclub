#!/usr/bin/env bash
set -euo pipefail
REQ=".guard/requirements.txt"
[[ -f "$REQ" ]] || { echo "❌ Missing $REQ"; exit 1; }
fail(){ echo "❌ $1"; exit 1; }

while IFS= read -r line; do
  [[ -z "${line// }" ]] && continue
  [[ "$line" =~ ^# ]] && continue
  cmd="${line%% *}"
  rest="${line#* }"
  case "$cmd" in
    FILE)
      [[ -f "$rest" ]] || fail "Missing file: $rest"
      ;;
    CONTAINS)
      file="${rest%% *}"
      needle="${rest#* }"
      [[ -f "$file" ]] || fail "Missing file for CONTAINS: $file"
      grep -qF "$needle" "$file" || fail "Not found in $file: $needle"
      ;;
    *)
      fail "Unknown rule: $cmd"
      ;;
  esac
done < "$REQ"

echo "✅ Requirements PASS"
