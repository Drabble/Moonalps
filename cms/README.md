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

## Storage

Storage is configured to use Cloudinary, a Cloud provider for file storage. It needs to be configured with the following environement variables: 

```
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

Values for these variables are found on the Cloudinary dashboard page.

## Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

We currently deploy on Heroku. Install the heroku CLI, login and then:

```bash
heroku git:remote -a my-new-app-name # add heroku remote
git subtree push --prefix cms heroku master # deploy the cms subfolder to heroku main
```

## Additional docs

To learn more, take a look at the following resources:

- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi deployment](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html) - Strapi deployment
- [Strapi + Vercel tutorial](https://www.youtube.com/watch?v=9l3r0EFp9ow&list=LL&index=1) - a tutorial to deploy next + strapi on Vercel + Heroku free tiers.
