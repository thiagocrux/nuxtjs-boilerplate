# NuxtJS template

This is a project template for a NuxtJS application with TypeScript, Tailwind, Storybook, Vitest, ESLint, Prettier and commit linters already configured.

## Setup

By default this project uses [pnpm](https://pnpm.io/) and you can run the command below to install all the dependencies.

```bash
pnpm install
```

## Scripts

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

The prepare command creates a .nuxt directory in your application and generates types:

```bash
pnpm postinstall
```

Search for errors and optionally fix them:

```bash
# Search for errors
pnpm lint

# Search and fix the errors
pnpm lint:fix
```

Run tests:

```bash
# Run tests
pnpm test

# Run tests and check the coverage
pnpm test:coverage
```

Start storybook server on `http://localhost:6006`:

```bash
pnpm storybook
```

Build storybook for production:

```bash
pnpm build-storybook
```

Auto generate a new component template files (component, test and story files):

```bash
pnpm generate:component
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
