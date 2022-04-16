---
isBlog: false
title: 'Break Inside'
date: 'Apr 07. 2022'
excerpt: 'Utility classes to control how columns break inside an element.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Columns, Break Inside, layout'
classNames: ''
plainText: ' greenCSS css class example break-inside-auto break-inside-auto break-inside: auto; break-inside-avoid break-inside-avoid break-inside: avoid; break-inside-avoid-page break-inside-avoid-page break-inside: avoid-page; break-inside-avoid-column break-inside-avoid-column break-inside: avoid-column; how to work with break inside use the `break-inside keyword ` how an element a column or the page behaves after an element use the `break-inside-avoid` utility class for example to force to always avoid a break inside an element  the result would look like: ! greenCSS break inside images docs layout break-inside webp?style=centerme active focus and hover states greenCSS css class example active:break-inside keyword active :break-inside-auto:active columns: auto; focus:break-inside keyword focus :break-inside-auto:focus columns: auto; hover:break-inside keyword hover :break-inside-auto:hover columns: auto; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:break-inside-auto` to only apply the break-inside-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:break-inside-auto md: 480px 768px md:break-inside-auto lg: 768px 1080px lg:break-inside-auto greenCSS media queries can also be combined with active focus and hover states for example use `sm:break-inside-auto` to apply the break-inside-auto utility at only small screen sizes at or below 480px or `active:md:break-inside-auto` to apply the break-inside-auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :break-inside keyword ` p e `active:md:break-inside-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:break-inside keyword focus:break-inside keyword hover:break-inside keyword active break inside auto focus break inside auto hover break inside auto active:sm:break-inside keyword focus:sm:break-inside keyword hover:sm:break-inside keyword active small screens break inside auto focus small screens break inside auto hover small screens break inside auto active:md:break-inside keyword focus:md:break-inside keyword hover:md:break-inside keyword active medium screens break inside auto focus medium screens break inside auto hover medium screens break inside auto active:lg:break-inside keyword focus:lg:break-inside keyword hover:lg:break-inside keyword active large screens break inside auto focus large screens break inside auto hover large screens break inside auto sources break-inside https: developer mozilla org en-us docs web css break-inside '
---

| _greenCSS_                | CSS class example                                          |
| ------------------------- | ---------------------------------------------------------- |
| break-inside-auto         | .break-inside-auto { break-inside: auto; }                 |
| break-inside-avoid        | .break-inside-avoid { break-inside: avoid; }               |
| break-inside-avoid-page   | .break-inside-avoid-page { break-inside: avoid-page; }     |
| break-inside-avoid-column | .break-inside-avoid-column { break-inside: avoid-column; } |

## How to work with break inside

Use the `break-inside-{keyword}` to control how an element, a column or the page behaves inside of an element. Use the `break-inside-avoid` utility class, for example, to force to always avoid a break inside an element.

```html
<article class="col-2 gap-20px">
  <h1 class="text-40px font-900">First Main heading</h1>
  <h2 class="text-30px font-800 break-inside-avoid">First Subheading</h2>
  <p class="break-after-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus
    aspernatur magnam nulla eaque explicabo quae magni?
  </p>
  <h2 class="text-30px font-800">Second Subheading</h2>
  <p class="break-after-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni?
  </p>

  <figure class="break-inside-avoid">
    <img src="https://www.greencss.dev/images/brand/greencss_logo_dark.svg" />
    <figcaption>The greenCSS logo</figcaption>
  </figure>

  <h2 class="text-30px font-800">Third Subheading</h2>
  <p class="break-after-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni?
  </p>
</article>
```

The result would look like:
![greenCSS break inside](/images/docs/layout/break-inside.webp?style=centerme)

## Active, focus, and hover states

| _greenCSS_                    | CSS class example                                   |
| ----------------------------- | --------------------------------------------------- |
| active:break-inside-{keyword} | .active\:break-inside-auto:active {columns: auto; } |
| focus:break-inside-{keyword}  | .focus\:break-inside-auto:focus { columns: auto; }  |
| hover:break-inside-{keyword}  | .hover\:break-inside-auto:hover { columns: auto; }  |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:break-inside-auto` to only apply the break-inside-auto utility class on hover.

```html
<div class="break-inside-avoid hover:break-inside-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example      |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:break-inside-auto |
| md:         | 480px - 768px  | .md:break-inside-auto |
| lg:         | 768px - 1080px | .lg:break-inside-auto |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:break-inside-auto` to apply the break-inside-auto utility at only small screen sizes at or below 480px. Or `active:md:break-inside-auto` to apply the break-inside-auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:break-inside-{keyword}` p.e. `active:md:break-inside-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                                 | spoken example                                                                                                           |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:break-inside-{keyword} , focus:break-inside-{keyword} , hover:break-inside-{keyword}          | active break inside auto, focus break inside auto, hover break inside auto                                               |
| active:sm:break-inside-{keyword} , focus:sm:break-inside-{keyword} , hover:sm:break-inside-{keyword} | active small screens break inside auto, focus small screens break inside auto, hover small screens break inside auto,    |
| active:md:break-inside-{keyword} , focus:md:break-inside-{keyword} , hover:md:break-inside-{keyword} | active medium screens break inside auto, focus medium screens break inside auto, hover medium screens break inside auto, |
| active:lg:break-inside-{keyword} , focus:lg:break-inside-{keyword} , hover:lg:break-inside-{keyword} | active large screens break inside auto, focus large screens break inside auto, hover large screens break inside auto,    |

## Sources

- [break-inside](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside)
