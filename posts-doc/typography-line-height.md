---
isBlog: false
title: 'Line Height'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the line height.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'line height, line-height, typography'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step line-height number per line-height-300per line-height: 300%; 0 300 +0 custom sizing variables control the line height on every html element by using the greencss classes shown above use the following structure to generate your line height `line-height number per` ranging from 0 to 300 with a step of +1% or use the `line-height number per` to use the default css classes like `line-height-0perper`  active focus and hover states greencss css class example active:line-height number per active :line-height-300per:active line-height: 300%; focus:line-height number per focus :line-height-300per:focus line-height: 300%; hover:line-height number per hover :line-height-300per:focus line-height: 300%; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:line-height-300per` to only apply the line-height-300per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:line-height-300per md: 480px 768px md:line-height-300per lg: 768px 1080px lg:line-height-300per greencss media queries can also be combined with active focus and hover states for example use `sm:line-height-300per` to apply the `line-height-300per` utility at only small screen sizes at or below 480px or `active:md:line-height-300per` to apply the `line-height-300per` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :line-height number per` p e `active:md:line-height-300per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:line-height-300per focus:line-height-300per hover:line-height-300per active line height focus line height hover line height active:sm:line-height-300per focus:sm:line-height-300per hover:sm:line-height-300per active small screens line height focus small screens line height hover small screens line height active:md:line-height-300per focus:md:line-height-300per hover:md:line-height-300per active medium screens line height focus medium screens line height hover medium screens line height active:lg:line-height-300per focus:lg:line-height-300per hover:lg:line-height-300per active large screens line height focus large screens line height hover large screens line height sources line-height https: developer mozilla org en-us docs web css line-height '
---

| _greenCSS_              | CSS class example                          | minimum Value | maximum Value | Step |
| ----------------------- | ------------------------------------------ | ------------- | ------------- | ---- |
| line-height-{number}per | .line-height-300per { line-height: 300%; } | 0             | 300           | +0   |

## Custom Sizing variables

Control the line height on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your line height `line-height-{number}per` - ranging from 0 to 300 with a step of +1% or use the `line-height-{number}per` to use the default CSS classes like `line-height-0perper`.

```html
<h1 class="line-height-300per text-30px">{title}</h1>
...
<p class="line-height-0per text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                     | CSS class example                                         |
| ------------------------------ | --------------------------------------------------------- |
| active:line-height-{number}per | .active\:line-height-300per:active { line-height: 300%; } |
| focus:line-height-{number}per  | .focus\:line-height-300per:focus { line-height: 300%; }   |
| hover:line-height-{number}per  | .hover\:line-height-300per:focus { line-height: 300%; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:line-height-300per` to only apply the line-height-300per utility class on hover.

```html
<div class="line-height-0per hover:line-height-300per">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example       |
| ----------- | -------------- | ---------------------- |
| sm:         | 0px - 480px    | .sm:line-height-300per |
| md:         | 480px - 768px  | .md:line-height-300per |
| lg:         | 768px - 1080px | .lg:line-height-300per |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:line-height-300per` to apply the `line-height-300per` utility at only small screen sizes at or below 480px. Or `active:md:line-height-300per` to apply the `line-height-300per` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:line-height-{number}per` p.e. `active:md:line-height-300per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                     | spoken example                                                                                         |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:line-height-300per , focus:line-height-300per , hover:line-height-300per          | active line height, focus line height, hover line height                                               |
| active:sm:line-height-300per , focus:sm:line-height-300per , hover:sm:line-height-300per | active small screens line height, focus small screens line height, hover small screens line height,    |
| active:md:line-height-300per , focus:md:line-height-300per , hover:md:line-height-300per | active medium screens line height, focus medium screens line height, hover medium screens line height, |
| active:lg:line-height-300per , focus:lg:line-height-300per , hover:lg:line-height-300per | active large screens line height, focus large screens line height, hover large screens line height,    |

## Sources

- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
