# Bankertimes Frontend

A Next.js 14 frontend for a banking news platform UI clone with multilingual support, authentication flows, pricing integration, and an admin dashboard.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Stripe (checkout integration)

## Features

- UI clone for a modern banking/media website
- Login and signup flows
- Admin dashboard interface
- Language selector with 20 languages
- Stripe checkout endpoint and pricing UI
- Shared branding across public and admin surfaces

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create local environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

3. Fill in values in `.env.local`.

4. Run development server:

```bash
npm run dev
```

## Environment Variables

Secrets must stay in `.env.local` and must never be committed.

Required variables:

- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_ADMIN_EMAIL`
- `NEXT_PUBLIC_ADMIN_PASSWORD`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

Optional but recommended for production Stripe subscriptions:

- `STRIPE_PRICE_PROFESSIONAL_MONTHLY`
- `STRIPE_PRICE_PROFESSIONAL_YEARLY`
- `STRIPE_PRICE_ENTERPRISE_MONTHLY`
- `STRIPE_PRICE_ENTERPRISE_YEARLY`

If these optional price IDs are not set, the checkout API falls back to server-defined amount values.

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run lint checks
