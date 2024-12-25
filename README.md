# Nuxt.js Project Template

A template to kickstart a Nuxt.js project.

## Technologies

This template comes pre-configured with the following technologies:

- `eslint`: A linting tool for JavaScript/TypeScript code.
- `lint-staged`: Runs linters on Git staged files.
- `plop`: A micro-generator framework that makes it easy to create code.
- `prettier`: A code formatter.
- `storybook`: A tool for developing UI components in isolation for React, Vue, and Angular.
- `tailwindcss`: A utility-first CSS framework for rapidly building custom user interfaces.
- `vitest`: A blazing fast unit testing framework powered by Vite, designed to provide a smooth and powerful testing experience.

_For more information about other dependencies, see the `package.json` file._

## Installation

1. Create a new repository from the template:

```bash
gh repo create your-new-repo-name --template thiagocrux/nuxtjs-template
```

2. Browse to the project folder:

```bash
cd your-project-folder
```

3. Install dependencies:

```
pnpm install
```

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode using `nuxt dev`, enabling faster builds and live-reloading.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Compiles the `nuxt` application for production.

  ```bash
  pnpm build
  ```

- #### `generate`

  Generates a static application from the `nuxt` project.

  ```bash
  pnpm generate
  ```

- #### `preview`

  Runs the generated static application for preview.

  ```bash
  pnpm preview
  ```

- #### `postinstall`

  Prepares the project after dependency installation.

  ```bash
  pnpm postinstall
  ```

### Testing

- #### `test`

  Runs all tests using the `vitest` framework with parallel processing for better performance.

  ```bash
  pnpm test
  ```

- #### `test:coverage`

  Executes tests and generates a code coverage report.

  ```bash
  pnpm test:coverage
  ```

- #### `test:ui`

  Opens an interactive UI for managing and running tests.

  ```bash
  pnpm test:ui
  ```

### Code quality

- #### `lint`

  Analyzes your codebase for potential errors and style violations using `eslint`.

  ```bash
  pnpm lint
  ```

- #### `lint:fix`

  Automatically fixes style issues and errors when possible.

  ```bash
  pnpm lint:fix
  ```

### Storybook

- #### `storybook`

  Starts the `storybook` server for developing UI components in isolation.

  ```bash
  pnpm storybook
  ```

- #### `storybook:build`

  Builds the `storybook` application for production deployment.

  ```bash
  pnpm storybook:build
  ```

### Code generation

- #### `generate:component`

  Generates new components using `plop` with the specified `plopfile`.

  ```bash
  pnpm generate:component
  ```

### Git hooks

- #### `prepare`

  Automatically configures Git hooks (via `husky`) before each commit.

  ```bash
  pnpm prepare
  ```

## Useful links

- [ESLint](https://eslint.org/)
- [Nuxt](https://nuxt.com/)
- [Plop](https://plopjs.com/)
- [Storybook](https://storybook.js.org/)
- [Tailwind](https://tailwindcss.com/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Vitest](https://vitest.dev/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
