---
isBlog: false
title: 'Break After'
date: 'Apr 07. 2022'
excerpt: 'Utility classes to control how columns break after an element.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Columns, Break After, layout'
classNames: ''
plainText: ' greencss css class example break-after-auto break-after-auto break-after: auto; break-after-always break-after-always break-after: always; break-after-avoid break-after-avoid break-after: avoid; break-after-all break-after-all break-after: all; break-after-avoid-page break-after-avoid-page break-after: avoid-page; break-after-page break-after-page break-after: page; break-after-left break-after-left break-after: left; break-after-right break-after-right break-after: right; break-after-column break-after-column break-after: column; how to work with break after use the `break-after keyword ` how an element a column or the page behaves after an element use the `break-after-always` utility class for example to force to always break after an element  the result would look like: ! greencss break after 632x425 caption: break after article layout images docs layout break-inside webp active focus and hover states greencss css class example active:break-after keyword active :break-after-auto:active columns: auto; focus:break-after keyword focus :break-after-auto:focus columns: auto; hover:break-after keyword hover :break-after-auto:hover columns: auto; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:break-after-auto` to only apply the break-after-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:break-after-auto md: 480px 768px md:break-after-auto lg: 768px 1080px lg:break-after-auto greencss media queries can also be combined with active focus and hover states for example use `sm:break-after-auto` to apply the break-after-auto utility at only small screen sizes at or below 480px or `active:md:break-after-auto` to apply the break-after-auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :break-after keyword ` p e `active:md:break-after-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:break-after keyword focus:break-after keyword hover:break-after keyword active break after auto focus break after auto hover break after auto active:sm:break-after keyword focus:sm:break-after keyword hover:sm:break-after keyword active small screens break after auto focus small screens break after auto hover small screens break after auto active:md:break-after keyword focus:md:break-after keyword hover:md:break-after keyword active medium screens break after auto focus medium screens break after auto hover medium screens break after auto active:lg:break-after keyword focus:lg:break-after keyword hover:lg:break-after keyword active large screens break after auto focus large screens break after auto hover large screens break after auto sources break-after https: developer mozilla org en-us docs web css break-after '
---

| _greenCSS_             | CSS class example                                    |
| ---------------------- | ---------------------------------------------------- |
| break-after-auto       | .break-after-auto { break-after: auto; }             |
| break-after-always     | .break-after-always { break-after: always; }         |
| break-after-avoid      | .break-after-avoid { break-after: avoid; }           |
| break-after-all        | .break-after-all { break-after: all; }               |
| break-after-avoid-page | .break-after-avoid-page { break-after: avoid-page; } |
| break-after-page       | .break-after-page { break-after: page; }             |
| break-after-left       | .break-after-left { break-after: left; }             |
| break-after-right      | .break-after-right { break-after: right; }           |
| break-after-column     | .break-after-column { break-after: column; }         |

## How to work with break after

Use the `break-after-{keyword}` how an element, a column or the page behaves after an element. Use the `break-after-always` utility class, for example, to force to always break after an element.

```html
<article class="col-4 gap-20px">
  <h1 class="text-40px font-900">First Main heading</h1>
  <h2 class="text-30px font-800 break-after-avoid">First Subheading</h2>
  <p class="break-after-always">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus
    aspernatur magnam nulla eaque explicabo quae magni?
  </p>
  <h2 class="text-30px font-800">Second Subheading</h2>
  <p class="break-after-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni?
  </p>
  <h2 class="text-30px font-800">Third Subheading</h2>
  <p class="break-after-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni?
  </p>
  <h2 class="text-30px font-800">Fourth Subheading</h2>
  <p class="break-after-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni?
  </p>
</article>
```

The result would look like:

![greenCSS break after {632x425} {caption: Break after article layout}](/images/docs/layout/break-inside.webp)

## Active, focus, and hover states

| _greenCSS_                   | CSS class example                                  |
| ---------------------------- | -------------------------------------------------- |
| active:break-after-{keyword} | .active\:break-after-auto:active {columns: auto; } |
| focus:break-after-{keyword}  | .focus\:break-after-auto:focus { columns: auto; }  |
| hover:break-after-{keyword}  | .hover\:break-after-auto:hover { columns: auto; }  |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:break-after-auto` to only apply the break-after-auto utility class on hover.

```html
<div class="break-after-column hover:break-after-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example     |
| ----------- | -------------- | -------------------- |
| sm:         | 0px - 480px    | .sm:break-after-auto |
| md:         | 480px - 768px  | .md:break-after-auto |
| lg:         | 768px - 1080px | .lg:break-after-auto |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:break-after-auto` to apply the break-after-auto utility at only small screen sizes at or below 480px. Or `active:md:break-after-auto` to apply the break-after-auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:break-after-{keyword}` p.e. `active:md:break-after-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                              | spoken example                                                                                                        |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:break-after-{keyword} , focus:break-after-{keyword} , hover:break-after-{keyword}          | active break after auto, focus break after auto, hover break after auto                                               |
| active:sm:break-after-{keyword} , focus:sm:break-after-{keyword} , hover:sm:break-after-{keyword} | active small screens break after auto, focus small screens break after auto, hover small screens break after auto,    |
| active:md:break-after-{keyword} , focus:md:break-after-{keyword} , hover:md:break-after-{keyword} | active medium screens break after auto, focus medium screens break after auto, hover medium screens break after auto, |
| active:lg:break-after-{keyword} , focus:lg:break-after-{keyword} , hover:lg:break-after-{keyword} | active large screens break after auto, focus large screens break after auto, hover large screens break after auto,    |

## Sources

- [break-after](https://developer.mozilla.org/en-US/docs/Web/CSS/break-after)
