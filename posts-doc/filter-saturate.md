---
isBlog: false
title: 'Saturate'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the saturate.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Saturate, filter, filters'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step saturate number saturate-1 filter: saturate 0 1 0 50 +1 how to work the saturate filter use the `saturate number ` utilities to set the amount of saturate for the element `saturate-1` equals to the css class `filter: saturate 0 1 ` `saturate-2` equals to the css class `filter: saturate 0 2 ` the maximum would be `saturate-50` it equals to the css class `filter: saturate 5 ` in general: the greenCSS class steps are +1 ranging from 0-50  active focus and hover states greenCSS css class example active:saturate number active :saturate-5:active filter: saturate 5 ; focus:saturate number focus :saturate-5:focus filter: saturate 5 ; hover:saturate number hover :saturate-5:hover filter: saturate 5 ; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:saturate-5` to only apply the saturate-5 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:saturate-5 md: 480px 768px md:saturate-5 lg: 768px 1080px lg:saturate-5 greenCSS media queries can also be combined with active focus and hover states for example use `sm:saturate-5` to apply the saturate-5 utility at only small screen sizes at or below 480px or `active:md:saturate-5` to apply the saturate-5 utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :saturate number ` p e `active:md:saturate-5` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:saturate-5 focus:saturate-5 hover:saturate-5 active saturate focus saturate hover saturate active:sm:saturate-5 focus:sm:saturate-5 hover:sm:saturate-5 active small screens saturate focus small screens saturate hover small screens saturate active:md:saturate-5 focus:md:saturate-5 hover:md:saturate-5 active medium screens saturate focus medium screens saturate hover medium screens saturate active:lg:saturate-5 focus:lg:saturate-5 hover:lg:saturate-5 active large screens saturate focus large screens saturate hover large screens saturate sources saturate https: developer mozilla org en-us docs web css filter-function saturate '
---

| _greenCSS_         | CSS class example                    | minimum Value | maximum Value | Step |
| ----------------- | ------------------------------------ | ------------- | ------------- | ---- |
| saturate-{number} | .saturate-1 { filter: saturate(0.1)} | 0             | 50            | +1   |

## How to work the saturate filter

Use the `saturate-{number}` utilities to set the amount of saturate for the element. `saturate-1` equals to the css class `filter: saturate(0.1)`, `saturate-2` equals to the css class `filter: saturate(0.2)` the maximum would be `saturate-50`, it equals to the css class `filter: saturate(5)`. In general: the greenCSS class steps are +1 ranging from 0-50.

```html
<!-- no saturate -->
<div class="saturate-0">{children}</div>
<!-- very low saturate filter -->
<div class="saturate-1">{children}</div>
<!-- top peak saturate filter -->
<div class="saturate-50">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                | CSS class example                                   |
| ------------------------ | --------------------------------------------------- |
| active:saturate-{number} | .active\:saturate-5:active { filter: saturate(5); } |
| focus:saturate-{number}  | .focus\:saturate-5:focus { filter: saturate(5); }   |
| hover:saturate-{number}  | .hover\:saturate-5:hover { filter: saturate(5); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:saturate-5` to only apply the saturate-5 utility class on hover.

```html
<div class="hover:saturate-5 ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:saturate-5  |
| md:         | 480px - 768px  | .md:saturate-5  |
| lg:         | 768px - 1080px | .lg:saturate-5  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:saturate-5` to apply the saturate-5 utility at only small screen sizes at or below 480px. Or `active:md:saturate-5` to apply the saturate-5 utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:saturate-{number}` p.e. `active:md:saturate-5`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                              | spoken example                                                                                |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| active:saturate-5 , focus:saturate-5 , hover:saturate-5          | active saturate, focus saturate, hover saturate                                               |
| active:sm:saturate-5 , focus:sm:saturate-5 , hover:sm:saturate-5 | active small screens saturate, focus small screens saturate, hover small screens saturate,    |
| active:md:saturate-5 , focus:md:saturate-5 , hover:md:saturate-5 | active medium screens saturate, focus medium screens saturate, hover medium screens saturate, |
| active:lg:saturate-5 , focus:lg:saturate-5 , hover:lg:saturate-5 | active large screens saturate, focus large screens saturate, hover large screens saturate,    |

## Sources

- [saturate](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate)
