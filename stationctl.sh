#!/usr/bin/env bash
set -euo pipefail

STATIONS_FILE="stations.md"
STATE_FILE=".guard/state.env"

mkdir -p .guard

# state
if [[ ! -f "$STATE_FILE" ]]; then
  echo "NEXT_STATION=1" > "$STATE_FILE"
fi
# shellcheck disable=SC1090
source "$STATE_FILE"

id=$(printf "%03d" "$NEXT_STATION")

start_line=$(grep -n "^## STATION $id" "$STATIONS_FILE" | head -n1 | cut -d: -f1 || true)
if [[ -z "${start_line:-}" ]]; then
  echo "✅ No more stations. (NEXT_STATION=$NEXT_STATION)"
  exit 0
fi

next_header_line=$(tail -n +"$((start_line+1))" "$STATIONS_FILE" | grep -n "^## STATION " | head -n1 | cut -d: -f1 || true)
if [[ -n "${next_header_line:-}" ]]; then
  end_line=$(( start_line + next_header_line - 2 ))
else
  end_line=$(wc -l < "$STATIONS_FILE")
fi

block=$(sed -n "${start_line},${end_line}p" "$STATIONS_FILE")

extract_list () {
  local section="$1"
  echo "$block" | awk -v sec="$section" '
    BEGIN{inside=0}
    $0 ~ "^"sec":" {inside=1; next}
    inside==1 && $0 ~ "^[A-Z_]+:" {exit}
    inside==1 && $0 ~ "^- " {sub(/^- /,""); print}
  '
}

extract_list "ALLOW" > .guard/allowed.txt
extract_list "REQUIRE" > .guard/requirements.txt
extract_list "FORBIDDEN" > .guard/forbidden.txt

max_files=12; max_add=600; max_del=600
while IFS= read -r line; do
  case "$line" in
    max_files=*) max_files="${line#max_files=}" ;;
    max_add=*)   max_add="${line#max_add=}" ;;
    max_del=*)   max_del="${line#max_del=}" ;;
  esac
done < <(extract_list "BUDGET" || true)

cat > .guard/budget.json <<JSON
{
  "max_files": $max_files,
  "max_add": $max_add,
  "max_del": $max_del
}
JSON

title=$(echo "$block" | head -n1 | sed 's/^## STATION [0-9]\{3\} — //')
echo "✅ Prepared STATION $id — $title"
