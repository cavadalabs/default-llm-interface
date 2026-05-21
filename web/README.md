# CavadaLabs AI Web Frontend

Next.js frontend for CavadaLabs AI.

## Development

Install dependencies:

```bash
npm i
```

Run the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If you need to point the frontend at a different backend, create
`web/.env.local`:

```text
INTERNAL_URL=https://your-backend.example.com/api
DEBUG_AUTH_COOKIE=your_cookie_value_here
```

`DEBUG_AUTH_COOKIE` is only used in development mode. Keep `.env.local` private
and never commit real authentication cookies.

## Branding

Default frontend branding is centralized in:

- [src/lib/branding.ts](/Users/davidcavada/dev/cavadalabs/default-llm-interface/web/src/lib/branding.ts)

Customer customization workflow:

- [../docs/CUSTOMER_CUSTOMIZATION.md](/Users/davidcavada/dev/cavadalabs/default-llm-interface/docs/CUSTOMER_CUSTOMIZATION.md)

## Testing

Type check:

```bash
npm run types:check
```

Lint:

```bash
npm run lint
```

Playwright:

```bash
npx playwright install
npx playwright test
```

Screenshots and Playwright output are written under `web/output/`.
