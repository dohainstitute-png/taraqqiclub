#!/usr/bin/env bash
set -euo pipefail
# shellcheck disable=SC1091
source .guard/state.env
NEXT_STATION=$((NEXT_STATION + 1))
echo "NEXT_STATION=$NEXT_STATION" > .guard/state.env
echo "✅ Advanced to NEXT_STATION=$NEXT_STATION"
