---
isBlog: false
title: 'User Select'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the user select.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'user select, '
classNames: ''
plainText: ' greencss css class example select-none select-none user-select: none; select-text select-text user-select: text; select-all select-all user-select: all; select-auto select-auto user-select: auto; select-contain select-contain user-select: contain; custom sizing variables control the user select on every html element by using the greencss classes shown above use the following structure to generate your user select class `select keyword ` and apply the default css classes like `select-none` select-none will prevent the user from selecting any text  active focus and hover states greencss css class example active:select keyword active :select-none:active user-select: none; focus:select keyword focus :select-none:focus user-select: none; hover:select keyword hover :select-none:focus user-select: none; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:select-none` to only apply the select-none utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:select-none md: 480px 768px md:select-none lg: 768px 1080px lg:select-none greencss media queries can also be combined with active focus and hover states for example use `sm:select-none` to apply the `select-none` utility at only small screen sizes at or below 480px or `active:md:select-none` to apply the `select-none` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :select keyword ` p e `active:md:select-none` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:select-none focus:select-none hover:select-none active user select focus user select hover user select active:sm:select-none focus:sm:select-none hover:sm:select-none active small screens user select focus small screens user select hover small screens user select active:md:select-none focus:md:select-none hover:md:select-none active medium screens user select focus medium screens user select hover medium screens user select active:lg:select-none focus:lg:select-none hover:lg:select-none active large screens user select focus large screens user select hover large screens user select sources user-select https: developer mozilla org en-us docs web css user-select '
---

| _greenCSS_     | CSS class example                         |
| -------------- | ----------------------------------------- |
| select-none    | .select-none { user-select: none; }       |
| select-text    | .select-text { user-select: text; }       |
| select-all     | .select-all { user-select: all; }         |
| select-auto    | .select-auto { user-select: auto; }       |
| select-contain | .select-contain { user-select: contain; } |

## Custom Sizing Variables

Control the user select on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your user select class `select-{keyword}` and apply the default CSS classes like `select-none`. select-none will prevent the user from selecting any text.

```html
<p class="select-text text-15px">{children}</p>
<p class="select-none text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                                  |
| ----------------------- | -------------------------------------------------- |
| active:select-{keyword} | .active\:select-none:active { user-select: none; } |
| focus:select-{keyword}  | .focus\:select-none:focus { user-select: none; }   |
| hover:select-{keyword}  | .hover\:select-none:focus { user-select: none; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:select-none` to only apply the select-none utility class on hover.

```html
<div class="select-text hover:select-none">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:select-none  |
| md:         | 480px - 768px  | .md:select-none  |
| lg:         | 768px - 1080px | .lg:select-none  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:select-none` to apply the `select-none` utility at only small screen sizes at or below 480px. Or `active:md:select-none` to apply the `select-none` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:select-{keyword}` p.e. `active:md:select-none`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:select-none , focus:select-none , hover:select-none          | active user select, focus user select, hover user select                                               |
| active:sm:select-none , focus:sm:select-none , hover:sm:select-none | active small screens user select, focus small screens user select, hover small screens user select,    |
| active:md:select-none , focus:md:select-none , hover:md:select-none | active medium screens user select, focus medium screens user select, hover medium screens user select, |
| active:lg:select-none , focus:lg:select-none , hover:lg:select-none | active large screens user select, focus large screens user select, hover large screens user select,    |

## Sources

- [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
