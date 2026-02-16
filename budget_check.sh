#!/usr/bin/env bash
set -euo pipefail
BASE="$(cat .guard/base_ref)"
B=".guard/budget.json"
[[ -f "$B" ]] || { echo "❌ Missing $B"; exit 1; }

max_files="$(python -c 'import json;print(json.load(open(".guard/budget.json"))["max_files"])')"
max_add="$(python -c 'import json;print(json.load(open(".guard/budget.json"))["max_add"])')"
max_del="$(python -c 'import json;print(json.load(open(".guard/budget.json"))["max_del"])')"

files="$(git diff --name-only "$BASE" | wc -l | tr -d ' ')"
adds=0; dels=0
while read -r a d _; do
  [[ "$a" == "-" ]] && a=0
  [[ "$d" == "-" ]] && d=0
  adds=$((adds + a))
  dels=$((dels + d))
done < <(git diff --numstat "$BASE")

if (( files > max_files )); then echo "❌ Budget: too many files ($files > $max_files)"; exit 1; fi
if (( adds > max_add )); then echo "❌ Budget: too many additions ($adds > $max_add)"; exit 1; fi
if (( dels > max_del )); then echo "❌ Budget: too many deletions ($dels > $max_del)"; exit 1; fi

echo "✅ Budget PASS"
