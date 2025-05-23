This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started (Dev. Environnement)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Local Deployment

To deploy the Next.js app in your local environement, you must :

1. First, generate Production version's with run the command : 
```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```
It's make a '.next' directory which is your application compiled. 

2. Secondly, run the App in production server run :
```bash
npm start
#or
yarn start
#or
pnpm start
#
bun start
```

3. Access the App in production in localhost like :

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

More informations about # Deployment # in others environements, read :
- [How to deploy your Next.js application](https://nextjs.org/docs/pages/getting-started/deploying) - Node.js, Docker, Static export, Adapters.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
