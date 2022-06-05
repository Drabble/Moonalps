# Moonalps - CMS backend

The backend of Moonalps is a Strapi application (headless CMS). It is used by the frontend to load data.

## Getting Started

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```bash
yarn install
yarn develop
```

Open [http://localhost:1337](http://localhost:1337) with your browser to see the result.


- `yarn build` - Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)
- `yarn start` - Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

## Deployment


Storage is configured to use Cloudinary, a Cloud provider for file storage. It needs to be configured with a few environement variables that can be found on the Cloudinary dashboard page. The Strapi plugin for Cloudinary is here: [Cloudinary Strapi Plugin](https://www.npmjs.com/package/@strapi/provider-upload-cloudinary).

Strapi gives you many possible deployment options for your project [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

We currently deploy on Heroku. Start by installing the heroku CLI, login and then use the following commands:

```bash
heroku create moonalps --region eu # create the instance
heroku addons:create heroku-postgresql:hobby-dev --app moonalps # Create a postgresql to store de Strapi data
heroku git:remote -a moonalps # add heroku remote
git subtree push --prefix cms heroku master # deploy the cms subfolder to heroku main
```

There are a few environment variables that need to be set in Heroku config var:

- **HOST** - Host (0.0.0.0)
- **PORT** - Port to listen
- **APP_KEYS** - Keys for the Strapi session
- **API_TOKEN_SALT** - Salt for user passwords
- **ADMIN_JWT_SECRET** - Secret to login to Strapi admin interface
- **JWT_SECRET** - Secret to login to Strapi
- **CLOUDINARY_NAME** - Name for Cloudinary file storage
- **CLOUDINARY_KEY** - Name for Cloudinary file storage
- **CLOUDINARY_SECRET** - Secret for Cloudinary file storage

Once Strapi is deployed you need to fill in the data, give read access to the public role to every endpoint.

Finally you need to setup the webhook callback for [Incremental static regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) to the Next.js app.

## Additional docs

To learn more, take a look at the following resources:

- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi deployment](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html) - Strapi deployment
- [Strapi + Vercel tutorial](https://www.youtube.com/watch?v=9l3r0EFp9ow&list=LL&index=1) - a tutorial to deploy next + strapi on Vercel + Heroku free tiers.
