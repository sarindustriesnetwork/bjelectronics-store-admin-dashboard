# Hostinger Native GitHub Deployment

Use three separate Hostinger deployments.

## API
Root directory: /api
Entry file: server.js
Start command: npm start
Test after deployment: https://api.bjelectronics.shop/health

## Store
Root directory: /store
Framework: Next.js
Node version: 20
Build command: npm run build
Start command: npm run start
Environment variable: NEXT_PUBLIC_API_URL=https://api.bjelectronics.shop

## Admin
Root directory: /admin
Framework: Next.js
Node version: 20
Build command: npm run build
Start command: npm run start
Environment variable: NEXT_PUBLIC_API_URL=https://api.bjelectronics.shop

## Deployment order
1. Deploy API first.
2. Deploy Store second.
3. Deploy Admin last.

## Production domains
Store: https://bjelectronics.shop
Admin: https://bjelectronics.shop/admin
API: https://api.bjelectronics.shop
