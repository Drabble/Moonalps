# Moonalps - Web frontend

The frontend of Moonalps is a Next.js application (runs on top of React). It interacts with the Strapi (headless CMS) backend to load data. It has [on-demand revalidation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation) triggered by a webhook in Strapi. Make sure you set the correct paths in `/pages/api/revalidate.ts`.

## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The application is deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

When deploying the application make sure to set the two following env. variables in Vercel:

- **REVALIDATE_SECRET** - allows us to call https://<your-site.com>/api/revalidate?secret= to revalidate with the secret
- **STRAPI_URL** - url to access Strapi

## Additional docs

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Vercel Platform](https://vercel.com/docs) - the Vercel documentation.
- [Strapi + Vercel tutorial](https://www.youtube.com/watch?v=9l3r0EFp9ow&list=LL&index=1) - a tutorial to deploy next + strapi on Vercel + Heroku free tiers.

