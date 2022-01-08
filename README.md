# OmenCSS - the next lightweight CSS library

[![Prettier and ESLint Code Base](https://github.com/Se-Gl/omenCSS-frontend/actions/workflows/lint.yml/badge.svg)](https://github.com/Se-Gl/omenCSS-frontend/actions/workflows/lint.yml)
[![Cypress Base](https://github.com/Se-Gl/omenCSS-frontend/actions/workflows/cypress.yml/badge.svg)](https://github.com/Se-Gl/omenCSS-frontend/actions/workflows/cypress.yml)
![check-code-coverage](https://img.shields.io/badge/code--coverage-43.47%25-red)

[![omenCSS logo](./public/omencss.svg)](https://www.omen.design)

## Getting Started

Install the dependencies

```bash
# install all dependencies
npm i
```

Run the development server:

```bash
# start the localhost server and cypress
npm run e2e

# backup
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### cypress commands

```bash
# open cypress GUI
npm run cypress:open
# run all cypress tests in the console
npm run cypress:run
# manually get code coverage
npx nyc report --reporter=text-summary
npx update-badge
```

### esLint commands

```bash
# default nextjs eslint command
npm run lint
# fix eslint errors by running prettier
npm run prettier
```

### Github actions

- In order to follow best practices, simple github actions have been implemented.
- OmenCSS checks for EsLint errors (according to our .eslintrs.json rules) before pushing to the repo.
- OmenCSS checks the code for prettier violations (according to our .prettierrc file) before pushing to the repo.
- OmenCSS checks if the build process is completed successfully before pushing to the repo.
- OmenCSS tests the code with cypress before pushing to the repo.

### Markdown Editor

Create new markdown posts and save it. All features, configuration and documentation are fetched from markdown files. A suitable editor can be found at:
`http://localhost:3000/editor`

### SCSS Structure - 7:1

Keeping the architecture consistent and meaningful is even more of a challenge.

A common and effective modular method for structuring Sass projects is the 7-1 pattern. This approach will be used in the development process of this project.

A possible structure could look as follows _(as of December 2021)_

```txt
sass/
|
|– abstracts/
|   |– _variables.scss    # Basic Project Variables
|   |– _animations.scss   # Basic Project Animations
|   |– _font.scss         # Font Related Files
|   |– _color.scss        # Colour Mixins
|   |– _mixins.scss       # Sass Mixins
|   |– _index.scss        # Sass Index File
|
|– vendors/
|   |– _index.scss        # 3rd Party Solutions
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography Rules
|   |– _index.scss        # Sass Index File
|
|– layout/
|   |– _utilities.scss    # Margin, Padding, Opacity
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid System
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _index.scss        # Sass Index File
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cards.scss        # Cards
|   |– _index.scss        # Sass Index File
|
|– pages/
|   |– _index.scss        # Custom Page Styles
|
|– themes/
|   |– _theme.scss        # Default Theme
|   |– _dark.scss         # Dark Mode
|   |– _index.scss        # Sass Index File
|
 – globals.scss              # Main Sass Input File
```

### Basic Frontend Libraries

|                                            | Stars                                                                                      | Bundle size                                                                                                               | Maintained | Dev- Mode |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [next](https://www.npmjs.com/package/next) | ![GitHub stars](https://img.shields.io/github/stars/vercel/next.js.svg?label=%F0%9F%8C%9F) | N/A                                                                                                                       | ✅         | ➖        |
| [sass](https://www.npmjs.com/package/sass) | ![GitHub stars](https://img.shields.io/github/stars/sass/dart-sass.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/sass/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=sass) | ✅         | ➖        |

### Testing Libraries

|                                                                                | Stars                                                                                                    | Bundle size                                                                                                                                                 | Maintained | Dev- Mode |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [cypress](https://www.npmjs.com/package/cypress)                               | ![GitHub stars](https://img.shields.io/github/stars/cypress-io/cypress.svg?label=%F0%9F%8C%9F)           | [![Bundle size](https://badgen.net/bundlephobia/minzip/cypress?label=%F0%9F%92%BE)](https://bundlephobia.com/package/cypress)                               | ✅         | ✅        |
| [@cypress/code-coverage](https://www.npmjs.com/package/@cypress/code-coverage) | ![GitHub stars](https://img.shields.io/github/stars/cypress-io/code-coverage.svg?label=%F0%9F%8C%9F)     | [![Bundle size](https://badgen.net/bundlephobia/minzip/@cypress/code-coverage?label=%F0%9F%92%BE)](https://bundlephobia.com/package/@cypress/code-coverage) | ⚠️         | ✅        |
| [check-code-coverage](https://www.npmjs.com/package/check-code-coverage)       | ![GitHub stars](https://img.shields.io/github/stars/bahmutov/check-code-coverage.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/check-code-coverage?label=%F0%9F%92%BE)](https://bundlephobia.com/package/check-code-coverage)       | ➖         | ✅        |

### Automated Workflow Libraries

|                                                                                | Stars                                                                                                       | Bundle size                                                                                                                                                  | Maintained | Dev- Mode |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------- |
| [prettier](https://www.npmjs.com/package/prettier)                             | ![GitHub stars](https://img.shields.io/github/stars/prettier/prettier.svg?label=%F0%9F%8C%9F)               | [![Bundle size](https://badgen.net/bundlephobia/minzip/prettier/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=prettier)                            | ✅         | ✅        |
| [eslint](https://www.npmjs.com/package/eslint)                                 | ![GitHub stars](https://img.shields.io/github/stars/eslint/eslint.svg?label=%F0%9F%8C%9F)                   | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint)                                | ✅         | ✅        |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) | ![GitHub stars](https://img.shields.io/github/stars/prettier/eslint-config-prettier.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint-config-prettier?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint-config-prettier) | ✅         | ✅        |
| [husky](https://www.npmjs.com/package/husky)                                   | ![GitHub stars](https://img.shields.io/github/stars/typicode/husky.svg?label=%F0%9F%8C%9F)                  | [![Bundle size](https://badgen.net/bundlephobia/minzip/husky?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=husky)                                   | ✅         | ✅        |
| [lint-staged](https://www.npmjs.com/package/lint-staged)                       | ![GitHub stars](https://img.shields.io/github/stars/okonet/lint-staged.svg?label=%F0%9F%8C%9F)              | [![Bundle size](https://badgen.net/bundlephobia/minzip/lint-staged?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=lint-staged)                       | ✅         | ✅        |
