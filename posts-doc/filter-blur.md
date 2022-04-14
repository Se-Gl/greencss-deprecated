---
isBlog: false
title: 'Blur'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the blur.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Blur, filter, filters'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step blur number px blur-5px filter: blur 5px 0 100 +1px how to work the blur filter use the `blur number px` utilities to set the amount of blur for the element  active focus and hover states greenCSS css class example active:blur number px active :blur-5px:active filter: blur 5px 500ms; focus:blur number px focus :blur-5px:focus filter: blur 5px 500ms; hover:blur number px hover :blur-5px:hover filter: blur 5px 500ms; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:blur-5px` to only apply the blur-5px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:blur-5px md: 480px 768px md:blur-5px lg: 768px 1080px lg:blur-5px greenCSS media queries can also be combined with active focus and hover states for example use `sm:blur-5px` to apply the blur-5px utility at only small screen sizes at or below 480px or `active:md:blur-5px` to apply the blur-5px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :blur-5px` p e `active:md:blur-5px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:blur-5px focus:blur-5px hover:blur-5px active blur focus blur hover blur active:sm:blur-5px focus:sm:blur-5px hover:sm:blur-5px active small screens blur focus small screens blur hover small screens blur active:md:blur-5px focus:md:blur-5px hover:md:blur-5px active medium screens blur focus medium screens blur hover medium screens blur active:lg:blur-5px focus:lg:blur-5px hover:lg:blur-5px active large screens blur focus large screens blur hover large screens blur sources blur https: developer mozilla org en-us docs web css filter-function blur '
---

| _greenCSS_      | CSS class example              | minimum Value | maximum Value | Step |
| --------------- | ------------------------------ | ------------- | ------------- | ---- |
| blur-{number}px | .blur-5px { filter: blur(5px)} | 0             | 100           | +1px |

## How to work the blur filter

Use the `blur-{number}px` utilities to set the amount of blur for the element.

```html
<!-- no blur -->
<div class="blur-0px">{children}</div>
<!-- 1px blur filter -->
<div class="blur-1px">{children}</div>
<!-- 100px blur filter -->
<div class="blur-100px">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_             | CSS class example                                     |
| ---------------------- | ----------------------------------------------------- |
| active:blur-{number}px | .active\:blur-5px:active { filter: blur(5px) 500ms; } |
| focus:blur-{number}px  | .focus\:blur-5px:focus { filter: blur(5px) 500ms; }   |
| hover:blur-{number}px  | .hover\:blur-5px:hover { filter: blur(5px) 500ms; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:blur-5px` to only apply the blur-5px utility class on hover.

```html
<div class="hover:blur-5px ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:blur-5px     |
| md:         | 480px - 768px  | .md:blur-5px     |
| lg:         | 768px - 1080px | .lg:blur-5px     |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:blur-5px` to apply the blur-5px utility at only small screen sizes at or below 480px. Or `active:md:blur-5px` to apply the blur-5px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:blur-{number}px` p.e. `active:md:blur-5px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                       | spoken example                                                                    |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| active:blur-5px , focus:blur-5px , hover:blur-5px          | active blur, focus blur, hover blur                                               |
| active:sm:blur-5px , focus:sm:blur-5px , hover:sm:blur-5px | active small screens blur, focus small screens blur, hover small screens blur,    |
| active:md:blur-5px , focus:md:blur-5px , hover:md:blur-5px | active medium screens blur, focus medium screens blur, hover medium screens blur, |
| active:lg:blur-5px , focus:lg:blur-5px , hover:lg:blur-5px | active large screens blur, focus large screens blur, hover large screens blur,    |

## Sources

- [blur](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur)
