---
isBlog: false
title: 'Backdrop Blur'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop blur.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Blur, filter, filters'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step backdrop-blur number px backdrop-blur-5px backdrop-filter: backdrop blur 5px 0 100 +1px how to use the backdrop blur filter use the `backdrop-blur number px` utilities to set the amount of backdrop blur for the element  active focus and hover states greenCSS css class example active:backdrop-blur number px active :backdrop-blur-5px:active backdrop-filter backdrop blur 5px 500ms; focus:backdrop-blur number px focus :backdrop-blur-5px:focus backdrop-filter backdrop blur 5px 500ms; hover:backdrop-blur number px hover :backdrop-blur-5px:hover backdrop-filter backdrop blur 5px 500ms; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-blur-5px` to only apply the backdrop-blur-5px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:backdrop-blur-5px md: 480px 768px md:backdrop-blur-5px lg: 768px 1080px lg:backdrop-blur-5px greenCSS media queries can also be combined with active focus and hover states for example use `sm:backdrop-blur-5px` to apply the backdrop-blur-5px utility at only small screen sizes at or below 480px or `active:md:backdrop-blur-5px` to apply the backdrop-blur-5px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-blur number px` p e `active:md:backdrop-blur-5px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:backdrop-blur-5px focus:backdrop-blur-5px hover:backdrop-blur-5px active backdrop blur focus backdrop blur hover backdrop blur active:sm:backdrop-blur-5px focus:sm:backdrop-blur-5px hover:sm:backdrop-blur-5px active small screens backdrop blur focus small screens backdrop blur hover small screens backdrop blur active:md:backdrop-blur-5px focus:md:backdrop-blur-5px hover:md:backdrop-blur-5px active medium screens backdrop blur focus medium screens backdrop blur hover medium screens backdrop blur active:lg:backdrop-blur-5px focus:lg:backdrop-blur-5px hover:lg:backdrop-blur-5px active large screens backdrop blur focus large screens backdrop blur hover large screens backdrop blur sources backdrop blur https: developer mozilla org en-us docs web css filter-function backdrop blur '
---

| _greenCSS_               | CSS class example                                | minimum Value | maximum Value | Step |
| ------------------------ | ------------------------------------------------ | ------------- | ------------- | ---- |
| backdrop-blur-{number}px | .backdrop-blur-5px { backdrop-filter: blur(5px)} | 0             | 100           | +1px |

## How to use the backdrop blur filter

Use the `backdrop-blur-{number}px` utilities to set the amount of backdrop blur for the element.

```html
<!-- no backdrop blur -->
<div class="backdrop-blur-0px">{children}</div>
<!-- 1px backdrop blur filter -->
<div class="backdrop-blur-1px">{children}</div>
<!-- 100px backdrop blur filter -->
<div class="backdrop-blur-100px">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                      | CSS class example                                                       |
| ------------------------------- | ----------------------------------------------------------------------- |
| active:backdrop-blur-{number}px | .active\:backdrop-blur-5px:active { backdrop-filter: blur(5px) 500ms; } |
| focus:backdrop-blur-{number}px  | .focus\:backdrop-blur-5px:focus { backdrop-filter: blur(5px) 500ms; }   |
| hover:backdrop-blur-{number}px  | .hover\:backdrop-blur-5px:hover { backdrop-filter: blur(5px) 500ms; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-blur-5px` to only apply the backdrop-blur-5px utility class on hover.

```html
<div class="hover:backdrop-blur-5px ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example      |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:backdrop-blur-5px |
| md:         | 480px - 768px  | .md:backdrop-blur-5px |
| lg:         | 768px - 1080px | .lg:backdrop-blur-5px |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-blur-5px` to apply the backdrop-blur-5px utility at only small screen sizes at or below 480px. Or `active:md:backdrop-blur-5px` to apply the backdrop-blur-5px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-blur-{number}px` p.e. `active:md:backdrop-blur-5px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                  | spoken example                                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:backdrop-blur-5px , focus:backdrop-blur-5px , hover:backdrop-blur-5px          | active backdrop blur, focus backdrop blur, hover backdrop blur                                               |
| active:sm:backdrop-blur-5px , focus:sm:backdrop-blur-5px , hover:sm:backdrop-blur-5px | active small screens backdrop blur, focus small screens backdrop blur, hover small screens backdrop blur,    |
| active:md:backdrop-blur-5px , focus:md:backdrop-blur-5px , hover:md:backdrop-blur-5px | active medium screens backdrop blur, focus medium screens backdrop blur, hover medium screens backdrop blur, |
| active:lg:backdrop-blur-5px , focus:lg:backdrop-blur-5px , hover:lg:backdrop-blur-5px | active large screens backdrop blur, focus large screens backdrop blur, hover large screens backdrop blur,    |

## Sources

- [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
