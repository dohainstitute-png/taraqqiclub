#!/usr/bin/env bash
set -euo pipefail

./stationctl.sh

# shellcheck disable=SC1091
source .guard/state.env
id=$(printf "%03d" "$NEXT_STATION")

./checkpoint.sh "checkpoint before STATION $id"
echo "✅ Ready to run STATION $id"
