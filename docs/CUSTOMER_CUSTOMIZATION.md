# Customer Customization Guide

This repository is the CavadaLabs SRL AI interface and white-label base for
customer-specific builds. Use this checklist when preparing a branded build for
a client.

## Goals

- Replace the neutral default identity with the customer's identity.
- Keep customer-specific values centralized where possible.
- Avoid renaming internal `onyx` Python packages, database keys, queues, imports,
  or historical type names unless a dedicated technical rename project is planned.

## Customer Inputs

Collect these before editing:

- Product/application display name.
- Customer legal name and preferred short name.
- Logo asset: square PNG/JPG for app icon and sidebar.
- Optional logotype asset if a wordmark is required.
- Favicon preference, if different from the square logo.
- Primary help/documentation URL.
- Support email address.
- Sales or billing contact URL/email.
- Privacy policy, terms, consent, and first-visit notice text.
- Default greeting message.
- Chat header text and footer disclaimer text.
- Preferred login/onboarding copy.
- Whether vendor attribution should be visible.
- Deployment domain and any tenant subdomain pattern.

## Main Source Of Truth

Start with [web/src/lib/branding.ts](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/src/lib/branding.ts).

Update:

- `DEFAULT_APPLICATION_NAME`
- `DEFAULT_APPLICATION_DESCRIPTION`
- `DEFAULT_APP_SLOGAN`
- `DEFAULT_VENDOR_NAME`
- `DEFAULT_VENDOR_SHORT_NAME`
- `DEFAULT_POWERED_BY_LABEL`
- `DEFAULT_HELP_URL`
- `DEFAULT_SUPPORT_EMAIL`
- `DEFAULT_FAVICON_PATH`

Environment overrides currently supported:

- `NEXT_PUBLIC_HELP_URL`
- `NEXT_PUBLIC_SUPPORT_EMAIL`
- `NEXT_PUBLIC_DOCS_BASE_URL`
- `NEXT_PUBLIC_APP_DOMAIN`

## Default LLM Provider

This CavadaLabs branch configures a default OpenAI-compatible LLM during backend
setup from [backend/onyx/setup.py](/Users/davidcavada/dev/cavadalabs/default-llm-interface/backend/onyx/setup.py).

Current defaults:

- `CAVADALABS_DEFAULT_LLM_PROVIDER_NAME`: `CavadaLabs Qwen Vision`
- `CAVADALABS_DEFAULT_LLM_API_BASE`: `http://192.168.0.20:8001/v1`
- `CAVADALABS_DEFAULT_LLM_MODEL`: `qwen3.6-35b-vision`
- `CAVADALABS_DEFAULT_LLM_API_KEY`: unset
- `CAVADALABS_DEFAULT_LLM_ENABLED`: `true`

For a customer build, replace these values or disable the auto-provider and
configure the provider through `/admin/configuration/language-models`.

## Runtime Appearance Settings

If Enterprise settings are available, prefer configuring customer values through
the admin UI at `/admin/theme` before hardcoding.

Fields already supported:

- `application_name`
- `use_custom_logo`
- `use_custom_logotype`
- `logo_display_style`
- `custom_greeting_message`
- `custom_header_content`
- `custom_lower_disclaimer_content`
- `show_first_visit_notice`
- `custom_popup_header`
- `custom_popup_content`
- `enable_consent_screen`
- `consent_screen_prompt`
- `custom_help_link_url`
- `custom_help_link_label`
- `hide_onyx_branding`

Relevant frontend files:

- [web/src/app/ee/admin/theme/page.tsx](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/src/app/ee/admin/theme/page.tsx)
- [web/src/app/ee/admin/theme/AppearanceThemeSettings.tsx](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/src/app/ee/admin/theme/AppearanceThemeSettings.tsx)
- [web/src/app/ee/admin/theme/Preview.tsx](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/src/app/ee/admin/theme/Preview.tsx)

## Visual Assets

Default white-label assets:

- [web/public/default-icon.svg](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/public/default-icon.svg)
- [web/src/refresh-components/DefaultLogoMark.tsx](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/src/refresh-components/DefaultLogoMark.tsx)

Customer-specific options:

- Upload the customer logo through `/admin/theme` when possible.
- Replace `web/public/default-icon.svg` only if the base fallback itself should
  become customer-specific.
- Check any remaining direct logo usage with:

```bash
rg -n "SvgOnyxLogo|OnyxLogoTypeIcon|onyx.ico|logo-dark|logotype" web/src web/public
```

## UI Copy Hotspots

Review these customer-facing areas after setting the main branding constants:

- Login and signup flows under `web/src/app/auth/`.
- Onboarding under `web/src/sections/onboarding/`.
- Sidebar and account menu under `web/src/sections/sidebar/`.
- App footer in [web/src/layouts/app-layouts.tsx](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/src/layouts/app-layouts.tsx).
- New tab / NRF UI under `web/src/app/nrf/`.
- Admin billing pages under `web/src/app/admin/billing/`.
- Error pages under `web/src/components/errorPages/`.
- Build Mode copy under `web/src/app/craft/`.
- Slack/Discord bot settings under `web/src/app/admin/bots/` and
  `web/src/app/admin/discord-bot/`.

Search commands:

```bash
rg -n "Onyx|Danswer|onyx\\.app|docs\\.onyx\\.app|support@onyx\\.app|Powered by" web/src web/public
rg -n "Default LLM Interface|CavadaLabs|cavadalabs\\.com|example\\.com" web/src web/public backend
```

## Backend Defaults

Backend fallback branding starts here:

- [backend/onyx/configs/constants.py](/Users/davidcavada/dev/cavadalabs/default-llm-interface/backend/onyx/configs/constants.py)
- [backend/onyx/auth/email_utils.py](/Users/davidcavada/dev/cavadalabs/default-llm-interface/backend/onyx/auth/email_utils.py)
- [backend/onyx/configs/app_configs.py](/Users/davidcavada/dev/cavadalabs/default-llm-interface/backend/onyx/configs/app_configs.py)

Review:

- `ONYX_DEFAULT_APPLICATION_NAME`
- fallback sender email
- `Message-ID` domain
- support/billing links
- tracing/analytics project defaults
- notification titles
- release-note titles
- LLM provider headers such as `HTTP-Referer` and `X-Title`

## Documentation And Ownership

For a customer fork, update:

- [README.md](/Users/davidcavada/dev/cavadalabs/default-llm-interface/README.md)
- [web/README.md](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/README.md)
- Any deployment notes shared with the customer.
- Any private customer runbooks outside this repository.

Preserve upstream license notices unless CavadaLabs legal explicitly approves a
different licensing layout.

## Technical Boundaries

Do not treat these as customer branding by default:

- Python package paths under `backend/onyx`.
- Imports from `onyx.*`.
- Database keys, Redis keys, cookie names, queue names, and migration history.
- Type names such as `OnyxDocument`.
- Container names expected by local tooling.
- EE license files copied from upstream.

Changing those requires a separate rename/refactor plan with database,
deployment, test, and migration coverage.

## Verification

Run at least:

```bash
cd web
npm run types:check
npm run lint
```

For backend changes:

```bash
source .venv/bin/activate
pytest -xv backend/tests/unit
```

Manual UI check:

- Login screen shows the customer name/logo/fallback.
- Browser tab title and favicon are correct.
- Sidebar logo, footer, and account menu are correct.
- `/admin/theme` preview matches expected branding.
- Error pages do not mention upstream branding.
- Billing/support links point to customer/CavadaLabs destinations.
- First-visit notice and consent text are customer-approved.
