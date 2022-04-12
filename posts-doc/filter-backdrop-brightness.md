---
isBlog: false
title: 'Backdrop Brightness'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop brightness.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Brightness, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step backdrop-brightness number backdrop-brightness-1 filter: brightness 0 1 0 50 +1 how to work the backdrop brightness filter use the `backdrop-brightness number ` utilities to set the amount of backdrop brightness for the element `backdrop-brightness-1` equals to the css class `filter: brightness 0 1 ` `backdrop-brightness-2` equals to the css class `filter: brightness 0 2 ` the maximum would be `backdrop-brightness-50` it equals to the css class `filter: brightness 5 ` in general: the omencss class steps are +1 ranging from 0-50  active focus and hover states omencss css class example active:backdrop-brightness number active :backdrop-brightness-5:active filter: brightness 5 ; focus:backdrop-brightness number focus :backdrop-brightness-5:focus filter: brightness 5 ; hover:backdrop-brightness number hover :backdrop-brightness-5:hover filter: brightness 5 ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-brightness-5` to only apply the backdrop-brightness-5 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0 480 sm:backdrop-brightness-5 md: 480 768 md:backdrop-brightness-5 lg: 768 1080 lg:backdrop-brightness-5 omencss media queries can also be combined with active focus and hover states for example use `sm:backdrop-brightness-5` to apply the backdrop-brightness-5 utility at only small screen sizes at or below 480 or `active:md:backdrop-brightness-5` to apply the backdrop-brightness-5 utility at only between small screen sizes 480 and medium screen sizes 768 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-brightness number ` p e `active:md:backdrop-brightness-5` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:backdrop-brightness-5 focus:backdrop-brightness-5 hover:backdrop-brightness-5 active backdrop brightness focus backdrop brightness hover backdrop brightness active:sm:backdrop-brightness-5 focus:sm:backdrop-brightness-5 hover:sm:backdrop-brightness-5 active small screens backdrop brightness focus small screens backdrop brightness hover small screens backdrop brightness active:md:backdrop-brightness-5 focus:md:backdrop-brightness-5 hover:md:backdrop-brightness-5 active medium screens backdrop brightness focus medium screens backdrop brightness hover medium screens backdrop brightness active:lg:backdrop-brightness-5 focus:lg:backdrop-brightness-5 hover:lg:backdrop-brightness-5 active large screens backdrop brightness focus large screens backdrop brightness hover large screens backdrop brightness sources backdrop-filter https: developer mozilla org en-us docs web css backdrop-filter '
---

| _omenCSS_                    | CSS class example                                 | minimum Value | maximum Value | Step |
| ---------------------------- | ------------------------------------------------- | ------------- | ------------- | ---- |
| backdrop-brightness-{number} | .backdrop-brightness-1 { filter: brightness(0.1)} | 0             | 50            | +1   |

## How to work the backdrop brightness filter

Use the `backdrop-brightness-{number}` utilities to set the amount of backdrop brightness for the element. `backdrop-brightness-1` equals to the css class `filter: brightness(0.1)`, `backdrop-brightness-2` equals to the css class `filter: brightness(0.2)` the maximum would be `backdrop-brightness-50`, it equals to the css class `filter: brightness(5)`. In general: the omenCSS class steps are +1 ranging from 0-50.

```html
<!-- no backdrop brightness -->
<div class="backdrop-brightness-0">{children}</div>
<!-- very low backdrop brightness filter -->
<div class="backdrop-brightness-1">{children}</div>
<!-- top peak backdrop brightness filter -->
<div class="backdrop-brightness-50">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                           | CSS class example                                                |
| ----------------------------------- | ---------------------------------------------------------------- |
| active:backdrop-brightness-{number} | .active\:backdrop-brightness-5:active { filter: brightness(5); } |
| focus:backdrop-brightness-{number}  | .focus\:backdrop-brightness-5:focus { filter: brightness(5); }   |
| hover:backdrop-brightness-{number}  | .hover\:backdrop-brightness-5:hover { filter: brightness(5); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-brightness-5` to only apply the backdrop-brightness-5 utility class on hover.

```html
<div class="hover:backdrop-brightness-5 ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range      | omenCSS example           |
| ----------- | ---------- | ------------------------- |
| sm:         | 0 - 480    | .sm:backdrop-brightness-5 |
| md:         | 480 - 768  | .md:backdrop-brightness-5 |
| lg:         | 768 - 1080 | .lg:backdrop-brightness-5 |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-brightness-5` to apply the backdrop-brightness-5 utility at only small screen sizes at or below 480. Or `active:md:backdrop-brightness-5` to apply the backdrop-brightness-5 utility at only between small screen sizes (480) and medium screen sizes (768).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-brightness-{number}` p.e. `active:md:backdrop-brightness-5`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                               | spoken example                                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| active:backdrop-brightness-5 , focus:backdrop-brightness-5 , hover:backdrop-brightness-5          | active backdrop brightness, focus backdrop brightness, hover backdrop brightness                                               |
| active:sm:backdrop-brightness-5 , focus:sm:backdrop-brightness-5 , hover:sm:backdrop-brightness-5 | active small screens backdrop brightness, focus small screens backdrop brightness, hover small screens backdrop brightness,    |
| active:md:backdrop-brightness-5 , focus:md:backdrop-brightness-5 , hover:md:backdrop-brightness-5 | active medium screens backdrop brightness, focus medium screens backdrop brightness, hover medium screens backdrop brightness, |
| active:lg:backdrop-brightness-5 , focus:lg:backdrop-brightness-5 , hover:lg:backdrop-brightness-5 | active large screens backdrop brightness, focus large screens backdrop brightness, hover large screens backdrop brightness,    |

## Sources

- [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
