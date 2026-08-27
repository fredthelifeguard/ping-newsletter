#!/usr/bin/env bash
# Publish the GIF poll tally from Microsoft Forms to the live page.
# Usage: scripts/update-results.sh <option-a> <option-b> <option-c>   e.g. scripts/update-results.sh 4 7 2
set -euo pipefail
[[ $# -eq 3 ]] || { echo "usage: $0 A B C"; exit 1; }
cd "$(dirname "$0")/.."
now=$(date -u +%Y-%m-%dT%H:%M:%SZ)
printf '{\n  "updated": "%s",\n  "counts": { "option-a": %d, "option-b": %d, "option-c": %d }\n}\n' "$now" "$1" "$2" "$3" > issues/issue-01-results.json
git add issues/issue-01-results.json
git commit -qm "Poll results: a=$1 b=$2 c=$3"
git push -q
echo "Published a=$1 b=$2 c=$3 at $now (Pages updates in ~1 min)"
