---
isBlog: false
title: 'Break Before'
date: 'Apr 07. 2022'
excerpt: 'Utility classes to control how columns break before an element.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Columns, Break Before, layout'
classNames: ''
plainText: ' greenCSS css class example break-before-auto break-before-auto break-before: auto; break-before-always break-before-always break-before: always; break-before-avoid break-before-avoid break-before: avoid; break-before-all break-before-all break-before: all; break-before-avoid-page break-before-avoid-page break-before: avoid-page; break-before-page break-before-page break-before: page; break-before-left break-before-left break-before: left; break-before-right break-before-right break-before: right; break-before-column break-before-column break-before: column; how to work with break before use the `break-before keyword ` how an element a column or the page behaves after an element use the `break-before-always` utility class for example to force to always break before an element  active focus and hover states greenCSS css class example active:break-before keyword active :break-before-auto:active columns: auto; focus:break-before keyword focus :break-before-auto:focus columns: auto; hover:break-before keyword hover :break-before-auto:hover columns: auto; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:break-before-auto` to only apply the break-before-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:break-before-auto md: 480px 768px md:break-before-auto lg: 768px 1080px lg:break-before-auto greenCSS media queries can also be combined with active focus and hover states for example use `sm:break-before-auto` to apply the break-before-auto utility at only small screen sizes at or below 480px or `active:md:break-before-auto` to apply the break-before-auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :break-before keyword ` p e `active:md:break-before-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:break-before keyword focus:break-before keyword hover:break-before keyword active break before auto focus break before auto hover break before auto active:sm:break-before keyword focus:sm:break-before keyword hover:sm:break-before keyword active small screens break before auto focus small screens break before auto hover small screens break before auto active:md:break-before keyword focus:md:break-before keyword hover:md:break-before keyword active medium screens break before auto focus medium screens break before auto hover medium screens break before auto active:lg:break-before keyword focus:lg:break-before keyword hover:lg:break-before keyword active large screens break before auto focus large screens break before auto hover large screens break before auto sources break-before https: developer mozilla org en-us docs web css break-before '
---

| _greenCSS_               | CSS class example                                      |
| ----------------------- | ------------------------------------------------------ |
| break-before-auto       | .break-before-auto { break-before: auto; }             |
| break-before-always     | .break-before-always { break-before: always; }         |
| break-before-avoid      | .break-before-avoid { break-before: avoid; }           |
| break-before-all        | .break-before-all { break-before: all; }               |
| break-before-avoid-page | .break-before-avoid-page { break-before: avoid-page; } |
| break-before-page       | .break-before-page { break-before: page; }             |
| break-before-left       | .break-before-left { break-before: left; }             |
| break-before-right      | .break-before-right { break-before: right; }           |
| break-before-column     | .break-before-column { break-before: column; }         |

## How to work with break before

Use the `break-before-{keyword}` how an element, a column or the page behaves after an element. Use the `break-before-always` utility class, for example, to force to always break before an element.

```html
<article class="col-4 gap-20px">
  <h1 class="text-40px font-900">First Main heading</h1>
  <h2 class="text-30px font-800 break-before-avoid">First Subheading</h2>
  <p class="break-before-always">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus
    aspernatur magnam nulla eaque explicabo quae magni?
  </p>
  <h2 class="text-30px font-800">Second Subheading</h2>
  <p class="break-before-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni?
  </p>
  <h2 class="text-30px font-800">Third Subheading</h2>
  <p class="break-before-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni?
  </p>
  <h2 class="text-30px font-800">Fourth Subheading</h2>
  <p class="break-before-column">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod porro ducimus aspernatur magnam nulla eaque
    explicabo quae magni?
  </p>
</article>
```

## Active, focus, and hover states

| _greenCSS_                     | CSS class example                                   |
| ----------------------------- | --------------------------------------------------- |
| active:break-before-{keyword} | .active\:break-before-auto:active {columns: auto; } |
| focus:break-before-{keyword}  | .focus\:break-before-auto:focus { columns: auto; }  |
| hover:break-before-{keyword}  | .hover\:break-before-auto:hover { columns: auto; }  |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:break-before-auto` to only apply the break-before-auto utility class on hover.

```html
<div class="break-before-column hover:break-before-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example       |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:break-before-auto |
| md:         | 480px - 768px  | .md:break-before-auto |
| lg:         | 768px - 1080px | .lg:break-before-auto |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:break-before-auto` to apply the break-before-auto utility at only small screen sizes at or below 480px. Or `active:md:break-before-auto` to apply the break-before-auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:break-before-{keyword}` p.e. `active:md:break-before-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                                  | spoken example                                                                                                           |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:break-before-{keyword} , focus:break-before-{keyword} , hover:break-before-{keyword}          | active break before auto, focus break before auto, hover break before auto                                               |
| active:sm:break-before-{keyword} , focus:sm:break-before-{keyword} , hover:sm:break-before-{keyword} | active small screens break before auto, focus small screens break before auto, hover small screens break before auto,    |
| active:md:break-before-{keyword} , focus:md:break-before-{keyword} , hover:md:break-before-{keyword} | active medium screens break before auto, focus medium screens break before auto, hover medium screens break before auto, |
| active:lg:break-before-{keyword} , focus:lg:break-before-{keyword} , hover:lg:break-before-{keyword} | active large screens break before auto, focus large screens break before auto, hover large screens break before auto,    |

## Sources

- [break-before](https://developer.mozilla.org/en-US/docs/Web/CSS/break-before)
