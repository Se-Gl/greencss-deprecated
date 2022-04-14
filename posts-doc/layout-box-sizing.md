---
isBlog: false
title: 'Box Sizing'
date: 'Apr 08. 2022'
excerpt: 'Utility classes to control the box sizes.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Box Sizing, layout, box-sizing, box-content'
classNames: ''
plainText: ' greenCSS css class example box-sizing-border box-sizing-border box-sizing: border-box; box-sizing-content box-sizing-content box-sizing: content-box; how to work with box box sizing use the `box-sizing keyword ` in order to control the sizing of html elements box border use the `box-sizing-border` utility class to include everything such as borders and padding within an element when applying a specific hight a div with a width and height of 100px and a border of 5px and a padding of 10px will always have an effective area of 100px × 100px only the internal div content is affected and minimized  box content use the `box-sizing-content` utility class to exclude everything such as borders and padding within an element when applying a specific hight a div with a width and height of 100px and a border of 5px and a padding of 10px will always have an internal area of 100px × 100px only the external div content is affected and maximized  active focus and hover states greenCSS css class example active:box-sizing keyword active :box-sizing-border:active box-break: clone; focus:box-sizing keyword focus :box-sizing-border:focus box-break: clone; hover:box-sizing keyword hover :box-sizing-border:hover box-break: clone; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:box-sizing-border` to only apply the box-sizing-border utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:box-sizing-border md: 480px 768px md:box-sizing-border lg: 768px 1080px lg:box-sizing-border greenCSS media queries can also be combined with active focus and hover states for example use `sm:box-sizing-border` to apply the box-sizing-border utility at only small screen sizes at or below 480px or `active:md:box-sizing-border` to apply the box-sizing-border utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :box-sizing keyword ` p e `active:md:box-sizing-border` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:box-sizing keyword focus:box-sizing keyword hover:box-sizing keyword active box sizing border focus box sizing border hover box sizing border active:sm:box-sizing keyword focus:sm:box-sizing keyword hover:sm:box-sizing keyword active small screens box sizing border focus small screens box sizing border hover small screens box sizing border active:md:box-sizing keyword focus:md:box-sizing keyword hover:md:box-sizing keyword active medium screens box sizing border focus medium screens box sizing border hover medium screens box sizing border active:lg:box-sizing keyword focus:lg:box-sizing keyword hover:lg:box-sizing keyword active large screens box sizing border focus large screens box sizing border hover large screens box sizing border sources box-sizing https: developer mozilla org en-us docs web css box-sizing '
---

| _greenCSS_          | CSS class example                                |
| ------------------ | ------------------------------------------------ |
| box-sizing-border  | .box-sizing-border { box-sizing: border-box; }   |
| box-sizing-content | .box-sizing-content { box-sizing: content-box; } |

## How to work with box box sizing

Use the `box-sizing-{keyword}` in order to control the sizing of HTML elements.

### Box Border

Use the `box-sizing-border` utility class to include everything - such as borders and padding - within an element when applying a specific hight. A div with a width and height of 100px and a border of 5px and a padding of 10px will always have an effective area of 100px × 100px. Only the internal div content is affected and minimized.

```html
<div class="box-sizing-border h-100px w-100px p-10px border-5px border-solid border-black">{children}</div>
```

### Box Content

Use the `box-sizing-content` utility class to exclude everything - such as borders and padding - within an element when applying a specific hight. A div with a width and height of 100px and a border of 5px and a padding of 10px will always have an internal area of 100px × 100px. Only the external div content is affected and maximized.

```html
<div class="box-sizing-content h-100px w-100px p-10px border-5px border-solid border-black">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                   | CSS class example                                       |
| --------------------------- | ------------------------------------------------------- |
| active:box-sizing-{keyword} | .active\:box-sizing-border:active { box-break: clone; } |
| focus:box-sizing-{keyword}  | .focus\:box-sizing-border:focus { box-break: clone; }   |
| hover:box-sizing-{keyword}  | .hover\:box-sizing-border:hover { box-break: clone; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:box-sizing-border` to only apply the box-sizing-border utility class on hover.

```html
<div class="box-sizing-content hover:box-sizing-border">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example       |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:box-sizing-border |
| md:         | 480px - 768px  | .md:box-sizing-border |
| lg:         | 768px - 1080px | .lg:box-sizing-border |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:box-sizing-border` to apply the box-sizing-border utility at only small screen sizes at or below 480px. Or `active:md:box-sizing-border` to apply the box-sizing-border utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:box-sizing-{keyword}` p.e. `active:md:box-sizing-border`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                            | spoken example                                                                                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:box-sizing-{keyword} , focus:box-sizing-{keyword} , hover:box-sizing-{keyword}          | active box sizing border, focus box sizing border, hover box sizing border                                               |
| active:sm:box-sizing-{keyword} , focus:sm:box-sizing-{keyword} , hover:sm:box-sizing-{keyword} | active small screens box sizing border, focus small screens box sizing border, hover small screens box sizing border,    |
| active:md:box-sizing-{keyword} , focus:md:box-sizing-{keyword} , hover:md:box-sizing-{keyword} | active medium screens box sizing border, focus medium screens box sizing border, hover medium screens box sizing border, |
| active:lg:box-sizing-{keyword} , focus:lg:box-sizing-{keyword} , hover:lg:box-sizing-{keyword} | active large screens box sizing border, focus large screens box sizing border, hover large screens box sizing border,    |

## Sources

- [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
