# Hostinger Native GitHub Deployment

Use one Hostinger GitHub deployment for the production site.

## Final production routes

- Store: https://bjelectronics.shop
- Admin: https://bjelectronics.shop/admin
- API health: https://bjelectronics.shop/api/health
- Products API: https://bjelectronics.shop/api/products
- Orders API: https://bjelectronics.shop/api/orders

## Hostinger settings

Root directory: ./
Framework: Next.js
Node version: 20 or newer
Build command: npm run build
Start command: npm run start

## Environment variables

No environment variable is required for the basic production build.

Optional future variables:
- DATABASE_URL
- JWT_SECRET
- STRIPE_SECRET_KEY

## Important

Do not use npm run start:api in the build command.
Do not deploy the old api folder separately for the same-domain /api route.
The /api route is now served by the Next.js app inside /store/app/api.

## Deployment result

After a successful Hostinger deployment, open:

https://bjelectronics.shop
https://bjelectronics.shop/admin
https://bjelectronics.shop/api/health
