---
isBlog: false
title: 'Backdrop Saturate'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop saturate.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Saturate, filter, filters'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step backdrop-saturate number backdrop-saturate-1 backdrop-filter: saturate 0 1 0 30 +1 how to work the backdrop saturate filter use the `backdrop-saturate number ` utilities to set the amount of backdrop saturate for the element `backdrop-saturate-1` equals to the css class `backdrop-filter: saturate 0 1 ` `backdrop-saturate-2` equals to the css class `backdrop-filter: saturate 0 2 ` the maximum would be `backdrop-saturate-30` it equals to the css class `backdrop-filter: saturate 3 ` in general: the greenCSS class steps are +1 ranging from 0-30  active focus and hover states greenCSS css class example active:backdrop-saturate number active :backdrop-saturate-5:active backdrop-filter: saturate 0 5 ; focus:backdrop-saturate number focus :backdrop-saturate-5:focus backdrop-filter: saturate 0 5 ; hover:backdrop-saturate number hover :backdrop-saturate-5:hover backdrop-filter: saturate 0 5 ; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-saturate-5` to only apply the backdrop-saturate-5 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:backdrop-saturate-5 md: 480px 768px md:backdrop-saturate-5 lg: 768px 1080px lg:backdrop-saturate-5 greenCSS media queries can also be combined with active focus and hover states for example use `sm:backdrop-saturate-5` to apply the backdrop-saturate-5 utility at only small screen sizes at or below 480px or `active:md:backdrop-saturate-5` to apply the backdrop-saturate-5 utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-saturate number ` p e `active:md:backdrop-saturate-5` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:backdrop-saturate-5 focus:backdrop-saturate-5 hover:backdrop-saturate-5 active backdrop saturate focus backdrop saturate hover backdrop saturate active:sm:backdrop-saturate-5 focus:sm:backdrop-saturate-5 hover:sm:backdrop-saturate-5 active small screens backdrop saturate focus small screens backdrop saturate hover small screens backdrop saturate active:md:backdrop-saturate-5 focus:md:backdrop-saturate-5 hover:md:backdrop-saturate-5 active medium screens backdrop saturate focus medium screens backdrop saturate hover medium screens backdrop saturate active:lg:backdrop-saturate-5 focus:lg:backdrop-saturate-5 hover:lg:backdrop-saturate-5 active large screens backdrop saturate focus large screens backdrop saturate hover large screens backdrop saturate sources backdrop-filter https: develo mozilla org en-us docs web css backdrop-filter '
---

| _greenCSS_                  | CSS class example                                      | minimum Value | maximum Value | Step |
| -------------------------- | ------------------------------------------------------ | ------------- | ------------- | ---- |
| backdrop-saturate-{number} | .backdrop-saturate-1 { backdrop-filter: saturate(0.1)} | 0             | 30            | +1   |

## How to work the backdrop saturate filter

Use the `backdrop-saturate-{number}` utilities to set the amount of backdrop saturate for the element. `backdrop-saturate-1` equals to the css class `backdrop-filter: saturate(0.1)`, `backdrop-saturate-2` equals to the css class `backdrop-filter: saturate(0.2)` the maximum would be `backdrop-saturate-30`, it equals to the css class `backdrop-filter: saturate(3)`. In general: the greenCSS class steps are +1 ranging from 0-30.

```html
<!-- no backdrop saturate -->
<div class="backdrop-saturate-0">{children}</div>
<!-- very low backdrop saturate filter -->
<div class="backdrop-saturate-1">{children}</div>
<!-- top peak backdrop saturate filter -->
<div class="backdrop-saturate-30">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                         | CSS class example                                                       |
| --------------------------------- | ----------------------------------------------------------------------- |
| active:backdrop-saturate-{number} | .active\:backdrop-saturate-5:active { backdrop-filter: saturate(0.5); } |
| focus:backdrop-saturate-{number}  | .focus\:backdrop-saturate-5:focus { backdrop-filter: saturate(0.5); }   |
| hover:backdrop-saturate-{number}  | .hover\:backdrop-saturate-5:hover { backdrop-filter: saturate(0.5); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-saturate-5` to only apply the backdrop-saturate-5 utility class on hover.

```html
<div class="hover:backdrop-saturate-5 ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example         |
| ----------- | -------------- | ----------------------- |
| sm:         | 0px - 480px    | .sm:backdrop-saturate-5 |
| md:         | 480px - 768px  | .md:backdrop-saturate-5 |
| lg:         | 768px - 1080px | .lg:backdrop-saturate-5 |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-saturate-5` to apply the backdrop-saturate-5 utility at only small screen sizes at or below 480px. Or `active:md:backdrop-saturate-5` to apply the backdrop-saturate-5 utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-saturate-{number}` p.e. `active:md:backdrop-saturate-5`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                         | spoken example                                                                                                           |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:backdrop-saturate-5 , focus:backdrop-saturate-5 , hover:backdrop-saturate-5          | active backdrop saturate, focus backdrop saturate, hover backdrop saturate                                               |
| active:sm:backdrop-saturate-5 , focus:sm:backdrop-saturate-5 , hover:sm:backdrop-saturate-5 | active small screens backdrop saturate, focus small screens backdrop saturate, hover small screens backdrop saturate,    |
| active:md:backdrop-saturate-5 , focus:md:backdrop-saturate-5 , hover:md:backdrop-saturate-5 | active medium screens backdrop saturate, focus medium screens backdrop saturate, hover medium screens backdrop saturate, |
| active:lg:backdrop-saturate-5 , focus:lg:backdrop-saturate-5 , hover:lg:backdrop-saturate-5 | active large screens backdrop saturate, focus large screens backdrop saturate, hover large screens backdrop saturate,    |

## Sources

- [backdrop-filter](https://develo.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
