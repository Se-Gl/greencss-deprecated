---
isBlog: false
title: 'Installation'
date: 'Apr 10. 2022'
excerpt: 'Get started with greenCSS. Installation process - explained.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Activate'
author: 'Severin Glaser'
keywords: 'Installation, get started, install greenCSS'
classNames: ''
plainText: ' installation greenCSS features considerably more than 2 million vanilla css classes in this way we can ensure that all programming languages and any framework can use greenCSS we do not give unnecessary guidelines or limit you in your development process you can decide for yourself whether you want to use all css classes or only a certain part of the library furthermore it is up to you how you adjust your code base for production however how can greenCSS be used according to best practice? in this article we show you the relevant steps and give you appropriate recommendations npm javascript the simplest and fastest way to get up and running with greenCSS is to use npm this is the normal approach for all javascript frameworks like angular react or vue here you can decide for yourself how to set up your code base for the production  npm javascript production install greenCSS and its peer dependencies via npm this is the recommended approach for all javascript frameworks like angular react or vue the code will be checked and purged before it is published unused css classes are eliminated in the process as a result the code base is reduced by up to 99% which in turn results in faster loading times  1 create a `purgecss config js` in the root folder of your project  the following workflow ensures that your code base is purged before every commit 1 set up husky https: www npmjs com package husky 1 when you have successfully installed it create a new script in your `package json`:  1 add the `purgecss` script command to husky the path file is normally: husky pre-commit  1 create a ` env local` file ```env node env=development ``` 1 import the file dynamically in your `index js` react ` app js` nextjs file this code snippet allows the entire greenCSS code base to be used in the development environment while only the purged file is used in the production  cdn vanilla html php python the most straightforward approach for non-javascript frameworks is to use cdn simply add the ` link rel=stylesheet href=link-to-greenCSS-cdn ` snippet in the ` head ` tag of your index html website  '
---

## Installation

greenCSS features considerably more than 2 million vanilla CSS classes. In this way, we can ensure that all programming languages and any framework can use greenCSS. We do not give unnecessary guidelines or limit you in your development process. You can decide for yourself whether you want to use all CSS classes or only a certain part of the library. Furthermore, it is up to you how you adjust your code base for production. However, how can greenCSS be used according to best practice? In this article we show you the relevant steps and give you appropriate recommendations.

### NPM - JavaScript

The simplest and fastest way to get up and running with greenCSS is to use NPM. This is the normal approach for all JavaScript frameworks like Angular, React or Vue. Here you can decide for yourself how to set up your code base for the production.

```shell
npm i greenCSS
```

### NPM - JavaScript Production

Install greenCSS and its peer dependencies via npm. This is the recommended approach for all JavaScript frameworks like Angular, React or Vue. The code will be checked and purged before it is published. Unused CSS classes are eliminated in the process. As a result, the code base is reduced by up to 99%, which - in turn - results in faster loading times.

```shell
npm install -D greenCSS purgecss husky
```

1. Create a `purgecss.config.js` in the root folder of your project.

```js
// purgecss.config.js
module.exports = {
  // files and folders, you want to cover
  content: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
  //   path to the node modules greenCSS file:
  css: ['node_modules/greenCSS/dist/greenCSS.css'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: ['html', 'body'],
  //   output path, where you want to save the purged css file
  output: './css/green.css'
}
```

The following workflow ensures that your code base is purged before every commit.

1. Set up [husky](https://www.npmjs.com/package/husky)
1. When you have successfully installed it, create a new script in your `package.json`:

```json
    "purgecss": "purgecss --config ./purgecss.config.js echo \n\n\n🏋️  Purge successful. 🏋️",
```

1. Add the `purgecss` script command to husky. (the path file is normally: .husky/pre-commit)

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run purgecss
```

1. Create a `.env.local` file.

```env
NODE_ENV=development
```

1. Import the file dynamically in your `index.js` (React), `_app.js` (NextJS) file. This code snippet allows the entire greenCSS code base to be used in the development environment, while only the purged file is used in the production.

```js
if (process.env.NODE_ENV == 'production') {
  // path where you save the purged file
  require('./css/green.css')
} else {
  //   path to the node modules greenCSS file
  require('node_modules/greenCSS/dist/greenCSS.css')
}
```

### CDN - vanilla HTML, PHP, Python

The most straightforward approach for non-JavaScript frameworks is to use CDN. Simply add the `<link rel="stylesheet" href="link-to-greenCSS-cdn" />` snippet in the `<head>` tag of your index.html website.

```html
<head>
  <title>Your awesome Website - designed with greenCSS</title>
  <link rel="stylesheet" href="link-to-greenCSS-cdn" />
</head>
```
