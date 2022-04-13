---
isBlog: false
title: 'Font Weight'
date: 'Apr 13. 2022'
excerpt: 'Utility classes for controlling the font weight.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'Font Weight, typography, font-weight'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step font number font-400 font-weight: 400; 100 900 +100 font-bold font-bold font-weight: bold; font-bolder font-bolder font-weight: bolder; font-inherit font-inherit font-weight: inherit; font-initial font-initial font-weight: initial; font-normal font-normal font-weight: normal; font-lighter font-lighter font-weight: lighter; font-revert font-revert font-weight: revert; font-unset font-unset font-weight: unset; custom sizing variables control the font weight on every html element by using the omencss classes shown above use the following structure to generate your font weight `font number ` ranging from 100 to 900 with a step of +100 or use the `font keyword ` to use the default css classes like `font-bold`  active focus and hover states omencss css class example active: variable active :font-400:active font-weight:: 400; focus: variable focus :font-400:focus font-weight:: 400; hover: variable hover :font-400:focus font-weight:: 400; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:font-400` to only apply the font-400 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:font-400 md: 480px 768px md:font-400 lg: 768px 1080px lg:font-400 omencss media queries can also be combined with active focus and hover states for example use `sm:font-400` to apply the `font-400` utility at only small screen sizes at or below 480px or `active:md:font-400` to apply the `font-400` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :font number ` p e `active:md:font-400` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:font-400 focus:font-400 hover:font-400 active font weight focus font weight hover font weight active:sm:font-400 focus:sm:font-400 hover:sm:font-400 active small screens font weight focus small screens font weight hover small screens font weight active:md:font-400 focus:md:font-400 hover:md:font-400 active medium screens font weight focus medium screens font weight hover medium screens font weight active:lg:font-400 focus:lg:font-400 hover:lg:font-400 active large screens font weight focus large screens font weight hover large screens font weight sources font-weight https: developer mozilla org en-us docs web css font-weight '
---

| _omenCSS_     | CSS class example                       | minimum Value | maximum Value | Step |
| ------------- | --------------------------------------- | ------------- | ------------- | ---- |
| font-{number} | .font-400 { font-weight: 400; }         | 100           | 900           | +100 |
| font-bold     | .font-bold { font-weight: bold; }       | -             | -             | -    |
| font-bolder   | .font-bolder { font-weight: bolder; }   | -             | -             | -    |
| font-inherit  | .font-inherit { font-weight: inherit; } | -             | -             | -    |
| font-initial  | .font-initial { font-weight: initial; } | -             | -             | -    |
| font-normal   | .font-normal { font-weight: normal; }   | -             | -             | -    |
| font-lighter  | .font-lighter { font-weight: lighter; } | -             | -             | -    |
| font-revert   | .font-revert { font-weight: revert; }   | -             | -             | -    |
| font-unset    | .font-unset { font-weight: unset; }     | -             | -             | -    |

## Custom Sizing variables

Control the font weight on every HTML element by using the omenCSS classes shown above. Use the following structure to generate your font weight `font-{number}` - ranging from 100 to 900 with a step of +100 or use the `font-{keyword}` to use the default CSS classes like `font-bold`.

```html
<h1 class="font-900 text-30px">{title}</h1>
<h2 class="font-800 text-25px">{title}</h2>
...
<p class="font-100 text-15px">{children}</p>
```

## Active, focus, and hover states

| _omenCSS_         | CSS class example                               |
| ----------------- | ----------------------------------------------- |
| active:{variable} | .active\:font-400:active { font-weight:: 400; } |
| focus:{variable}  | .focus\:font-400:focus { font-weight:: 400; }   |
| hover:{variable}  | .hover\:font-400:focus { font-weight:: 400; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:font-400` to only apply the font-400 utility class on hover.

```html
<div class="font-100 hover:font-900">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:font-400    |
| md:         | 480px - 768px  | .md:font-400    |
| lg:         | 768px - 1080px | .lg:font-400    |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:font-400` to apply the `font-400` utility at only small screen sizes at or below 480px. Or `active:md:font-400` to apply the `font-400` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:font-{number}` p.e. `active:md:font-400`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                        | spoken example                                                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:font-400 , focus:font-400 , hover:font-400          | active font weight, focus font weight, hover font weight                                               |
| active:sm:font-400 , focus:sm:font-400 , hover:sm:font-400 | active small screens font weight, focus small screens font weight, hover small screens font weight,    |
| active:md:font-400 , focus:md:font-400 , hover:md:font-400 | active medium screens font weight, focus medium screens font weight, hover medium screens font weight, |
| active:lg:font-400 , focus:lg:font-400 , hover:lg:font-400 | active large screens font weight, focus large screens font weight, hover large screens font weight,    |

## Sources

- [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
