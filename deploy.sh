#!/usr/bin/env bash
#
# Manual deploy — the ESCAPE HATCH, not the normal path.
#
# Normally you deploy by pushing:   git push origin main
# GitHub Actions builds and ships it (.github/workflows/deploy.yml).
#
# Use this script only when Actions is unavailable and you need the site
# updated now. It uses the same atomic release scheme as CI, so the two
# can't fight with each other.
#
set -euo pipefail

APP_NAME=mattmn
DEPLOY_HOST=mattmn.com
DEPLOY_USER=deploy
BUILD_DIR=client/build

GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'

cd "$(dirname "$0")"

# Warn about a state that would make this deploy unreproducible.
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}Warning: you have uncommitted changes.${NC}"
    echo "Whatever you deploy now will exist only on the server."
    read -rp "Continue anyway? [y/N] " reply
    [[ "$reply" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 1; }
fi

RELEASE="manual-$(date +%Y%m%d-%H%M%S)-$(git rev-parse --short HEAD)"

echo -e "${YELLOW}Building...${NC}"
( cd client && npm ci && CI=false npm run build )

[ -f "$BUILD_DIR/index.html" ] || {
    echo -e "${RED}Build produced no index.html. Aborting.${NC}"; exit 1;
}
echo -e "${GREEN}Build OK ($(find "$BUILD_DIR" -type f | wc -l) files)${NC}"

echo -e "${YELLOW}Uploading release ${RELEASE}...${NC}"
ssh "${DEPLOY_USER}@${DEPLOY_HOST}" "mkdir -p /srv/${APP_NAME}/releases/${RELEASE}"
rsync -az --delete --info=stats1 \
    "${BUILD_DIR}/" \
    "${DEPLOY_USER}@${DEPLOY_HOST}:/srv/${APP_NAME}/releases/${RELEASE}/"

echo -e "${YELLOW}Activating...${NC}"
ssh "${DEPLOY_USER}@${DEPLOY_HOST}" "activate-release ${APP_NAME} ${RELEASE}"

echo -e "${YELLOW}Verifying...${NC}"
code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 https://mattmn.com)
if [ "$code" = "200" ]; then
    echo -e "${GREEN}Deployed. https://mattmn.com -> ${code}${NC}"
else
    echo -e "${RED}Site returned ${code}. Roll back with:${NC}"
    echo "  ssh ${DEPLOY_USER}@${DEPLOY_HOST} 'ls -1t /srv/${APP_NAME}/releases'"
    echo "  ssh ${DEPLOY_USER}@${DEPLOY_HOST} 'activate-release ${APP_NAME} <previous-release>'"
    exit 1
fi
