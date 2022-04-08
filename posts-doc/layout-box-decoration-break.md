---
isBlog: false
title: 'Box Decoration Break'
date: 'Apr 08. 2022'
excerpt: 'Utility classes to control how box decoration break should be displayed.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Columns, Box Decoration Break, layout, box-decoration-clone, box-decoration-slice'
classNames: ''
plainText: ' omencss css class example box-decoration-clone box-decoration-clone box-decoration-break: clone; box-decoration-slice box-decoration-slice box-decoration-break: slice; how to work with box decoration break use the `box-decoration keyword ` in order to control how box decoration break should be displayed across multiple pages sections columns divs or lines use the `box-decoration-clone` utility class for example to maintain a steady property box decoration clone use the `box-decoration-clone` utility class to control how properties like background border border-image box-shadow clip-page margin and padding are displayed consequently in the source code example below hello and omencss have the same background gradients  box decoration slice use the `box-decoration-slice` utility class to control how properties like background border border-image box-shadow clip-page margin and padding are displayed consequently in the source code example below hello and omencss have different background gradients whereas hello has a blue background part and omencss contains a purple background  active focus and hover states omencss css class example active:box-decoration keyword active :box-decoration-clone:active box-decoration-break: clone; focus:box-decoration keyword focus :box-decoration-clone:focus box-decoration-break: clone; hover:box-decoration keyword hover :box-decoration-clone:hover box-decoration-break: clone; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:box-decoration-clone` to only apply the box-decoration-clone utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:box-decoration-clone md: 480px 768px md:box-decoration-clone lg: 768px 1080px lg:box-decoration-clone omencss media queries can also be combined with active focus and hover states for example use `sm:box-decoration-clone` to apply the box-decoration-clone utility at only small screen sizes at or below 480px or `active:md:box-decoration-clone` to apply the box-decoration-clone utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :box-decoration keyword ` p e `active:md:box-decoration-clone` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:box-decoration keyword focus:box-decoration keyword hover:box-decoration keyword active box decoration break clone focus box decoration break clone hover box decoration break clone active:sm:box-decoration keyword focus:sm:box-decoration keyword hover:sm:box-decoration keyword active small screens box decoration break clone focus small screens box decoration break clone hover small screens box decoration break clone active:md:box-decoration keyword focus:md:box-decoration keyword hover:md:box-decoration keyword active medium screens box decoration break clone focus medium screens box decoration break clone hover medium screens box decoration break clone active:lg:box-decoration keyword focus:lg:box-decoration keyword hover:lg:box-decoration keyword active large screens box decoration break clone focus large screens box decoration break clone hover large screens box decoration break clone sources box-decoration-break https: developer mozilla org en-us docs web css box-decoration-break '
---

| _omenCSS_            | CSS class example                                      |
| -------------------- | ------------------------------------------------------ |
| box-decoration-clone | .box-decoration-clone { box-decoration-break: clone; } |
| box-decoration-slice | .box-decoration-slice { box-decoration-break: slice; } |

## How to work with box decoration break

Use the `box-decoration-{keyword}` in order to control how box decoration break should be displayed across multiple pages, sections, columns, divs or lines. Use the `box-decoration-clone` utility class, for example, to maintain a steady property.

### Box Decoration Clone

Use the `box-decoration-clone` utility class to control how properties like background, border, border-image, box-shadow, clip-page, margin, and padding are displayed. Consequently, in the source code example below, "hello" and "omenCSS" have the same background gradients.

```html
<span class="box-decoration-slice gradient-to-right from-blue to-purple text-white">
  Hello<br />
  omenCSS
</span>
```

### Box Decoration Slice

Use the `box-decoration-slice` utility class to control how properties like background, border, border-image, box-shadow, clip-page, margin, and padding are displayed. Consequently, in the source code example below, "hello" and "omenCSS" have different background gradients - whereas "hello" has a blue background part and "omenCSS" contains a purple background.

```html
<span class="box-decoration-slice gradient-to-right from-blue to-purple text-white">
  Hello<br />
  omenCSS
</span>
```

## Active, focus, and hover states

| _omenCSS_                       | CSS class example                                                     |
| ------------------------------- | --------------------------------------------------------------------- |
| active:box-decoration-{keyword} | .active\:box-decoration-clone:active { box-decoration-break: clone; } |
| focus:box-decoration-{keyword}  | .focus\:box-decoration-clone:focus { box-decoration-break: clone; }   |
| hover:box-decoration-{keyword}  | .hover\:box-decoration-clone:hover { box-decoration-break: clone; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:box-decoration-clone` to only apply the box-decoration-clone utility class on hover.

```html
<div class="box-decoration-slice hover:box-decoration-clone">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example          |
| ----------- | -------------- | ------------------------ |
| sm:         | 0px - 480px    | .sm:box-decoration-clone |
| md:         | 480px - 768px  | .md:box-decoration-clone |
| lg:         | 768px - 1080px | .lg:box-decoration-clone |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:box-decoration-clone` to apply the box-decoration-clone utility at only small screen sizes at or below 480px. Or `active:md:box-decoration-clone` to apply the box-decoration-clone utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:box-decoration-{keyword}` p.e. `active:md:box-decoration-clone`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                                        | spoken example                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| active:box-decoration-{keyword} , focus:box-decoration-{keyword} , hover:box-decoration-{keyword}          | active box decoration break clone, focus box decoration break clone, hover box decoration break clone                                               |
| active:sm:box-decoration-{keyword} , focus:sm:box-decoration-{keyword} , hover:sm:box-decoration-{keyword} | active small screens box decoration break clone, focus small screens box decoration break clone, hover small screens box decoration break clone,    |
| active:md:box-decoration-{keyword} , focus:md:box-decoration-{keyword} , hover:md:box-decoration-{keyword} | active medium screens box decoration break clone, focus medium screens box decoration break clone, hover medium screens box decoration break clone, |
| active:lg:box-decoration-{keyword} , focus:lg:box-decoration-{keyword} , hover:lg:box-decoration-{keyword} | active large screens box decoration break clone, focus large screens box decoration break clone, hover large screens box decoration break clone,    |

## Sources

- [box-decoration-break](https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break)
