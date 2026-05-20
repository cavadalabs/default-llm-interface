# Default LLM Interface

Proprietary CavadaLabs SRL white-label base for customer-specific LLM
interfaces.

This repository contains a customizable AI assistant interface with chat,
connectors, search/RAG, agents, actions, model-provider configuration, and admin
tools. It is maintained as an internal CavadaLabs delivery base: the default UI
is intentionally neutral, and customer branding should be applied only at the
documented customization points.

## Ownership

Copyright (c) 2026 CavadaLabs SRL.

This repository is proprietary to CavadaLabs SRL and is not intended for public
distribution. It may include upstream open-source and enterprise components; all
upstream copyright and license notices must be preserved.

## Repository Layout

- `backend/` - Python/FastAPI backend, workers, database logic, integrations.
- `web/` - Next.js frontend application.
- `desktop/`, `cli/`, `widget/` - auxiliary clients and tooling.
- `deployment/` - deployment assets.
- `docs/` - internal operational documentation.

## Branding And Customer Customization

Before preparing a build for a customer, read:

- [docs/CUSTOMER_CUSTOMIZATION.md](/Users/davidcavada/dev/cavadalabs/default-llm-interface/docs/CUSTOMER_CUSTOMIZATION.md)

The primary frontend defaults live in:

- [web/src/lib/branding.ts](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/src/lib/branding.ts)

Do not rename internal `onyx` package paths, database keys, queue names, or type
names as part of a branding pass. Those are technical identifiers and require a
separate refactor plan.

## Local Development

Backend commands generally expect the Python virtual environment:

```bash
source .venv/bin/activate
```

Frontend development:

```bash
cd web
npm i
npm run dev
```

Open:

```text
http://localhost:3000
```

If the full local stack is running, a development login is usually:

```text
email: a@example.com
password: a
```

## Verification

Frontend:

```bash
cd web
npm run types:check
npm run lint
```

Backend unit tests:

```bash
source .venv/bin/activate
pytest -xv backend/tests/unit
```

End-to-end tests:

```bash
cd web
npx playwright test
```

## Notes For Agents

- Prefer runtime appearance settings under `/admin/theme` when possible.
- Keep customer-specific values in documented configuration points.
- Preserve license notices from upstream components.
- Do not commit secrets, customer credentials, API keys, or private deployment
  material.
