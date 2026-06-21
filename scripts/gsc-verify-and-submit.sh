#!/usr/bin/env bash
# scripts/gsc-verify-and-submit.sh
# Verifies https://alazab.dev/ ownership in Google Search Console (META method),
# adds the site, and submits the sitemap.
#
# Run this AFTER deploying the latest build to https://alazab.dev so that the
# <meta name="google-site-verification" ...> tag is live in the production HTML.
#
# Requires the following env vars (already available in the Lovable sandbox):
#   - LOVABLE_API_KEY
#   - GOOGLE_SEARCH_CONSOLE_API_KEY
#
# Usage:
#   bash scripts/gsc-verify-and-submit.sh

set -euo pipefail

SITE="https://alazab.dev/"
SITE_ENC="https%3A%2F%2Falazab.dev%2F"
SITEMAP="https://alazab.dev/sitemap.xml"
SITEMAP_ENC="https%3A%2F%2Falazab.dev%2Fsitemap.xml"
GW="https://connector-gateway.lovable.dev/google_search_console"
AUTH=(-H "Authorization: Bearer ${LOVABLE_API_KEY}" -H "X-Connection-Api-Key: ${GOOGLE_SEARCH_CONSOLE_API_KEY}")

echo "1/4  Sanity check — meta tag present on production?"
if curl -s -m 10 "$SITE" | grep -q 'google-site-verification'; then
  echo "    OK — verification meta tag found."
else
  echo "    ERROR: meta tag not found on $SITE. Deploy the latest build first."
  exit 1
fi

echo "2/4  Calling Google siteVerification.verify (META)..."
curl -fsS -X POST "${GW}/siteVerification/v1/webResource?verificationMethod=META" \
  "${AUTH[@]}" -H "Content-Type: application/json" \
  -d "{\"site\":{\"identifier\":\"${SITE}\",\"type\":\"SITE\"}}" | tee /tmp/gsc-verify.json
echo

echo "3/4  Adding site to Search Console property list..."
curl -fsS -X PUT "${GW}/webmasters/v3/sites/${SITE_ENC}" "${AUTH[@]}" -o /dev/null -w "HTTP %{http_code}\n"

echo "4/4  Submitting sitemap..."
curl -fsS -X PUT "${GW}/webmasters/v3/sites/${SITE_ENC}/sitemaps/${SITEMAP_ENC}" \
  "${AUTH[@]}" -o /dev/null -w "HTTP %{http_code}\n"

echo
echo "Done. Verify in https://search.google.com/search-console"
