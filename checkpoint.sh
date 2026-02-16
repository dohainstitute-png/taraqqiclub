#!/usr/bin/env bash
set -euo pipefail
mkdir -p .guard
msg="${1:-checkpoint}"
git add -A
git commit -m "$msg" >/dev/null 2>&1 || true
git rev-parse HEAD > .guard/base_ref
echo "✅ Checkpoint saved: $(cat .guard/base_ref)"
