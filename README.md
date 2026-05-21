# CavadaLabs AI

Proprietary CavadaLabs SRL AI assistant interface.

This repository contains the CavadaLabs AI assistant interface with chat,
connectors, search/RAG, agents, actions, model-provider configuration, and admin
tools. It is also maintained as an internal CavadaLabs delivery base for
customer-specific builds.

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

## Default Local Model

This branch auto-configures the CavadaLabs default LLM provider during backend
setup:

- Provider type: OpenAI-compatible
- Provider name: `CavadaLabs Qwen Vision`
- API base: `http://192.168.0.20:8001/v1`
- Model: `qwen3.6-35b-vision`

Override with:

```bash
CAVADALABS_DEFAULT_LLM_ENABLED=true
CAVADALABS_DEFAULT_LLM_PROVIDER_NAME="CavadaLabs Qwen Vision"
CAVADALABS_DEFAULT_LLM_API_BASE=http://192.168.0.20:8001/v1
CAVADALABS_DEFAULT_LLM_MODEL=qwen3.6-35b-vision
CAVADALABS_DEFAULT_LLM_API_KEY=
```

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
