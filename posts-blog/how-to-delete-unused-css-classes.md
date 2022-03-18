---
isBlog: true
title: 'How to delete unused CSS classes'
date: 'Mar 06. 2022'
excerpt: 'Tutorial to remove unused omenCSS classes in vanilla HTML 5'
cover_image: '/images/blog/cover/remove.webp'
category: 'Postbuild'
author: 'Severin Glaser'
keywords: 'purge css, remove css, development environement, post build'
classNames: ''
plainText: " honestly? omencss is massive this is quite ok in the development environment as soon as your code is released to the public you need to make the files as lightweight as possible for this reason you will be shown here how to properly reduce the file size lose weight with purgecss ! reduce file size images blog blogcontent lightweight-file-size webp?style=centerme the entire file was reduced by 99 4% in this example all unused css classes are excluded as a result seo scores are improved user experience is enhanced and your website looks more professional as load times are kept to a minimum it is really easy and only takes a few minutes! in this example a simple html file is resized with purge css html !doctype html html lang=en class=sans head meta charset=utf-8 meta http-equiv=x-ua-compatible content=ie=edge meta name=viewport content=width=device-width initial-scale=1 0 title beautiful purgecss vs omencss file title link rel=stylesheet href= css omen css link rel=shortcut icon type=image x-icon href= favicon ico head body section class=flex min-h-100vh gradient-to-right from-red-5 to-orange-2 div class=m-auto reveal-down animate animation-forwards animation-delay-500ms h1 class=max-w-60rem font-800 text-80px text-black sm text-purple sm text-40px md text-red md text-60px a classy way to write css design h1 div section body html in summary there is a h1 header which has a black default colour and a font size of 80px on medium screens the font-size reduce to 60px and on small screens the font-size reduce to 40px omencss uses special characters for the responsive classes sm md lg sm hover active focus this is a headache for most post-css libraries as they are designed for normal css classes for this reason purgecss is used in this example a node must be installeda and a package json file must be included in the root folder of your project you can easily create a package json by running npm init -y in the root folder npm npm i -d purgecss 1 save purgecss as a development dependency in your project 2 in a further step a purgecss config js must be created in the root directory of your project js purgecss config js module exports = content 'src index html' css 'src omencss css' defaultextractor content = content match w- + ? ! g output 'css omen css' 1 as content enter all your html source files 2 in css import the default omencss css file 3 defaultextractor must be adopted like and copied this as the special regex are applied here 4 in output select your public folder where the lightweight css file should be saved 5 in the html file make sure that the correct css stylesheet is selected the path must be the same as entered in the output html link rel=stylesheet href= css omen css now it is time to reduce the css file via the command line for this you have to create a script in the package json file purgecss purgecss --config purgecss config js json name awesome-purging version 1 0 0 description main index js scripts purgecss purgecss --config purgecss config js keywords author license isc devdependencies purgecss ^4 1 3 you can now purge your css infinitely enter the script npm run purgecss in the command line which takes a short moment until you get the output ⚠️ every time you change your css classes in the html file you have to purge again todo add --watch for auto detecting changes "
---

Honestly? omenCSS is massive. This is quite ok in the development environment, as soon as your code is released to the public, you need to make the files as lightweight as possible. For this reason you will be shown here how to properly reduce the file size.

## Lose Weight With Purgecss

![reduce file size](/images/blog/blogcontent/lightweight-file-size.webp?style=centerme)
The entire file was reduced by 99.4%, in this example. All unused CSS classes are excluded. As a result, SEO scores are improved, user experience is enhanced and your website looks more professional as load times are kept to a minimum.

It is really easy and only takes a few minutes! In this example, a simple \*.html file is resized with purge css.

```html
<!DOCTYPE html>
<html lang="en" class="sans">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Beautiful purgecss vs. omenCSS file</title>
    <link rel="stylesheet" href="../css/omen.css" />
    <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
  </head>
  <body>
    <section class="flex min-h-100vh gradient-to-right from-red-5 to-orange-2">
      <div class="m-auto reveal-down animate animation-forwards animation-delay-500ms">
        <h1 class="max-w-60rem font-800 text-80px text-black sm:text-purple sm:text-40px md:text-red md:text-60px">
          A classy way to write CSS design
        </h1>
      </div>
    </section>
  </body>
</html>
```

In summary, there is a h1 header which has a black default colour and a font size of 80px, on medium screens the font-size reduce to 60px and on small screens the font-size reduce to 40px. omenCSS uses special characters for the responsive classes. `sm:` `md:` `lg:` `sm:` `hover:` `active:` `focus:` This is a headache for most post-css libraries, as they are designed for "normal" CSS classes. For this reason, purgecss is used in this example.

A Node must be installeda and a package.json file must be included in the root folder of your project. You can easily create a package.json by running `npm init -y` in the root folder.

```npm
npm i -D purgecss
```

1. Save purgecss as a development dependency in your project.
2. In a further step a `purgecss.config.js` must be created in the root directory of your project.

```js
// purgecss.config.js
module.exports = {
  content: ['src/index.html'],
  css: ['src/omencss.css'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  output: 'css/omen.css'
}
```

1. As content, enter all your HTML source files.
2. In css, import the default omencss.css file
3. defaultExtractor must be adopted like and copied this, as the special regex are applied here.
4. In output, select your public folder where the lightweight CSS file should be saved.
5. In the \*.html file, make sure, that the correct css stylesheet is selected. The path must be the same as entered in the "output".

```html
<link rel="stylesheet" href="../css/omen.css" />
```

Now it is time to reduce the CSS file via the command line. For this you have to create a script in the package.json file.
`"purgecss": "purgecss --config ./purgecss.config.js"`

```json
{
  "name": "awesome-purging",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "purgecss": "purgecss --config ./purgecss.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "purgecss": "^4.1.3"
  }
}
```

You can now purge your css infinitely. Enter the script `"npm run purgecss"` in the command line, which takes a short moment until you get the output.

⚠️ Every time you change your css classes in the HTML file, you have to purge again.

TODO: add --watch for auto detecting changes.
