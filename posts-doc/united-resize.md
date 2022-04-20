---
isBlog: false
title: 'Resize'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the resize.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'resize, resize vertical, resize horizontal'
classNames: ''
plainText: ' greencss css class example resize-none resize-none resize: none; resize-vertical resize-vertical resize: vertical; resize-horizontal resize-horizontal resize: horizontal; resize-both resize-both resize: both; custom sizing variables control the resize on every html element by using the greencss classes shown above use the following structure to generate your resize class `resize keyword ` and apply the default css classes like `resize-vertical` vertical resize use the `resize-vertical` class to make an input or textelement vertically resizable horizontal resize use the `resize-horizontal` class to make an input or textelement horizontally resizable resize use the `resize-both` class to make an input or textelement vertically and horizontally resizable  active focus and hover states greencss css class example active:resize keyword active :resize-none:active resize: none; focus:resize keyword focus :resize-none:focus resize: none; hover:resize keyword hover :resize-none:focus resize: none; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:resize-none` to only apply the resize-none utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:resize-none md: 480px 768px md:resize-none lg: 768px 1080px lg:resize-none greencss media queries can also be combined with active focus and hover states for example use `sm:resize-none` to apply the `resize-none` utility at only small screen sizes at or below 480px or `active:md:resize-none` to apply the `resize-none` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :resize keyword ` p e `active:md:resize-none` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:resize-none focus:resize-none hover:resize-none active resize focus resize hover resize active:sm:resize-none focus:sm:resize-none hover:sm:resize-none active small screens resize focus small screens resize hover small screens resize active:md:resize-none focus:md:resize-none hover:md:resize-none active medium screens resize focus medium screens resize hover medium screens resize active:lg:resize-none focus:lg:resize-none hover:lg:resize-none active large screens resize focus large screens resize hover large screens resize sources resize https: developer mozilla org en-us docs web css resize '
---

| _greenCSS_        | CSS class example                          |
| ----------------- | ------------------------------------------ |
| resize-none       | .resize-none { resize: none; }             |
| resize-vertical   | .resize-vertical { resize: vertical; }     |
| resize-horizontal | .resize-horizontal { resize: horizontal; } |
| resize-both       | .resize-both { resize: both; }             |

## Custom Sizing Variables

Control the resize on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your resize class `resize-{keyword}` and apply the default CSS classes like `resize-vertical`.

### Vertical Resize

Use the `resize-vertical` class to make an input or textelement vertically resizable.

### Horizontal Resize

Use the `resize-horizontal` class to make an input or textelement horizontally resizable.

### Resize

Use the `resize-both` class to make an input or textelement vertically and horizontally resizable.

```html
<textarea class="resize-vertical min-h-50rem rounded-10px"></textarea>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                             |
| ----------------------- | --------------------------------------------- |
| active:resize-{keyword} | .active\:resize-none:active { resize: none; } |
| focus:resize-{keyword}  | .focus\:resize-none:focus { resize: none; }   |
| hover:resize-{keyword}  | .hover\:resize-none:focus { resize: none; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:resize-none` to only apply the resize-none utility class on hover.

```html
<textarea class="resize-vertical hover:resize-none min-h-50rem rounded-10px"></textarea>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:resize-none  |
| md:         | 480px - 768px  | .md:resize-none  |
| lg:         | 768px - 1080px | .lg:resize-none  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:resize-none` to apply the `resize-none` utility at only small screen sizes at or below 480px. Or `active:md:resize-none` to apply the `resize-none` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:resize-{keyword}` p.e. `active:md:resize-none`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                          |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| active:resize-none , focus:resize-none , hover:resize-none          | active resize, focus resize, hover resize                                               |
| active:sm:resize-none , focus:sm:resize-none , hover:sm:resize-none | active small screens resize, focus small screens resize, hover small screens resize,    |
| active:md:resize-none , focus:md:resize-none , hover:md:resize-none | active medium screens resize, focus medium screens resize, hover medium screens resize, |
| active:lg:resize-none , focus:lg:resize-none , hover:lg:resize-none | active large screens resize, focus large screens resize, hover large screens resize,    |

## Sources

- [resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize)
