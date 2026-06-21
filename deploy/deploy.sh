#!/usr/bin/env bash
# Production deploy script for alazab.dev
# Run on the server (3.76.123.170) as the deploy user.
# Usage:  ./deploy.sh
set -euo pipefail

REPO_DIR="/var/www/alazab.dev/repo"
RELEASES_DIR="/var/www/alazab.dev/releases"
CURRENT_LINK="/var/www/alazab.dev/current"
BRANCH="${BRANCH:-main}"
TS="$(date +%Y%m%d-%H%M%S)"
RELEASE="$RELEASES_DIR/$TS"

echo "▶ Pulling latest from $BRANCH"
cd "$REPO_DIR"
git fetch --all --prune
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "▶ Installing dependencies"
npm ci

echo "▶ Building production bundle"
npm run build

echo "▶ Publishing release $TS"
mkdir -p "$RELEASE"
cp -a dist/. "$RELEASE/"

ln -sfn "$RELEASE" "$CURRENT_LINK"

echo "▶ Reloading nginx"
sudo nginx -t
sudo systemctl reload nginx

echo "▶ Cleaning old releases (keep last 5)"
ls -1dt "$RELEASES_DIR"/*/ | tail -n +6 | xargs -r rm -rf

echo "✅ Deployed: $RELEASE -> $CURRENT_LINK"
