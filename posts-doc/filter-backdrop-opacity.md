---
isBlog: false
title: 'Backdrop Opacity'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop opacity filters.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Opacity, filter, filters'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step backdrop-opacity number backdrop-opacity-1 backdrop-filter: opacity 0 1 0 10 +1 how to work the backdrop opacity filter use the `backdrop-opacity number ` utilities to set the amount of backdrop opacity for the element `backdrop-opacity-1` equals to the css class `backdrop-filter: opacity 0 1 ` `backdrop-opacity-2` equals to the css class `backdrop-filter: opacity 2 ` the maximum would be `backdrop-opacity-10` it equals to the css class `backdrop-filter: opacity 1 ` in general: the greenCSS class steps are +1 ranging from 0-10  active focus and hover states greenCSS css class example active:backdrop-opacity number active :backdrop-opacity-5:active backdrop-filter: opacity 0 5 ; focus:backdrop-opacity number focus :backdrop-opacity-5:focus backdrop-filter: opacity 0 5 ; hover:backdrop-opacity number hover :backdrop-opacity-5:hover backdrop-filter: opacity 0 5 ; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-opacity-5` to only apply the backdrop-opacity-5 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:backdrop-opacity-5 md: 480px 768px md:backdrop-opacity-5 lg: 768px 1080px lg:backdrop-opacity-5 greenCSS media queries can also be combined with active focus and hover states for example use `sm:backdrop-opacity-5` to apply the backdrop-opacity-5 utility at only small screen sizes at or below 480px or `active:md:backdrop-opacity-5` to apply the backdrop-opacity-5 utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-opacity number ` p e `active:md:backdrop-opacity-5` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:backdrop-opacity-5 focus:backdrop-opacity-5 hover:backdrop-opacity-5 active backdrop opacity focus backdrop opacity hover backdrop opacity active:sm:backdrop-opacity-5 focus:sm:backdrop-opacity-5 hover:sm:backdrop-opacity-5 active small screens backdrop opacity focus small screens backdrop opacity hover small screens backdrop opacity active:md:backdrop-opacity-5 focus:md:backdrop-opacity-5 hover:md:backdrop-opacity-5 active medium screens backdrop opacity focus medium screens backdrop opacity hover medium screens backdrop opacity active:lg:backdrop-opacity-5 focus:lg:backdrop-opacity-5 hover:lg:backdrop-opacity-5 active large screens backdrop opacity focus large screens backdrop opacity hover large screens backdrop opacity sources backdrop-filter https: develo mozilla org en-us docs web css backdrop-filter '
---

| _greenCSS_                | CSS class example                                    | minimum Value | maximum Value | Step |
| ------------------------- | ---------------------------------------------------- | ------------- | ------------- | ---- |
| backdrop-opacity-{number} | .backdrop-opacity-1 { backdrop-filter: opacity(0.1)} | 0             | 10            | +1   |

## How to work the backdrop opacity filter

Use the `backdrop-opacity-{number}` utilities to set the amount of backdrop opacity for the element. `backdrop-opacity-1` equals to the css class `backdrop-filter: opacity(0.1)`, `backdrop-opacity-2` equals to the css class `backdrop-filter: opacity(2)` the maximum would be `backdrop-opacity-10`, it equals to the css class `backdrop-filter: opacity(1)`. In general: the greenCSS class steps are +1 ranging from 0-10.

```html
<!-- no backdrop opacity -->
<div class="backdrop-opacity-0">{children}</div>
<!-- very low backdrop opacity filter -->
<div class="backdrop-opacity-1">{children}</div>
<!-- top peak backdrop opacity filter -->
<div class="backdrop-opacity-10">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                       | CSS class example                                                     |
| -------------------------------- | --------------------------------------------------------------------- |
| active:backdrop-opacity-{number} | .active\:backdrop-opacity-5:active { backdrop-filter: opacity(0.5); } |
| focus:backdrop-opacity-{number}  | .focus\:backdrop-opacity-5:focus { backdrop-filter: opacity(0.5); }   |
| hover:backdrop-opacity-{number}  | .hover\:backdrop-opacity-5:hover { backdrop-filter: opacity(0.5); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-opacity-5` to only apply the backdrop-opacity-5 utility class on hover.

```html
<div class="hover:backdrop-opacity-5 ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example       |
| ----------- | -------------- | ---------------------- |
| sm:         | 0px - 480px    | .sm:backdrop-opacity-5 |
| md:         | 480px - 768px  | .md:backdrop-opacity-5 |
| lg:         | 768px - 1080px | .lg:backdrop-opacity-5 |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-opacity-5` to apply the backdrop-opacity-5 utility at only small screen sizes at or below 480px. Or `active:md:backdrop-opacity-5` to apply the backdrop-opacity-5 utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-opacity-{number}` p.e. `active:md:backdrop-opacity-5`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                     | spoken example                                                                                                        |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:backdrop-opacity-5 , focus:backdrop-opacity-5 , hover:backdrop-opacity-5          | active backdrop opacity, focus backdrop opacity, hover backdrop opacity                                               |
| active:sm:backdrop-opacity-5 , focus:sm:backdrop-opacity-5 , hover:sm:backdrop-opacity-5 | active small screens backdrop opacity, focus small screens backdrop opacity, hover small screens backdrop opacity,    |
| active:md:backdrop-opacity-5 , focus:md:backdrop-opacity-5 , hover:md:backdrop-opacity-5 | active medium screens backdrop opacity, focus medium screens backdrop opacity, hover medium screens backdrop opacity, |
| active:lg:backdrop-opacity-5 , focus:lg:backdrop-opacity-5 , hover:lg:backdrop-opacity-5 | active large screens backdrop opacity, focus large screens backdrop opacity, hover large screens backdrop opacity,    |

## Sources

- [backdrop-filter](https://develo.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
