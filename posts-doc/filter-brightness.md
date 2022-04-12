---
isBlog: false
title: 'Brightness'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the brightness.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Brightness, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step brightness number brightness-1 filter: brightness 0 1 0 50 +1 how to work the brightness filter use the `brightness number ` utilities to set the amount of brightness for the element `brightness-1` equals to the css class `filter: brightness 0 1 ` `brightness-2` equals to the css class `filter: brightness 0 2 ` the maximum would be `brightness-50` it equals to the css class `filter: brightness 5 ` in general: the omencss class steps are +1 ranging from 0-50  active focus and hover states omencss css class example active:brightness number active :brightness-5:active filter: brightness 5 ; focus:brightness number focus :brightness-5:focus filter: brightness 5 ; hover:brightness number hover :brightness-5:hover filter: brightness 5 ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:brightness-5` to only apply the brightness-5 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0 480 sm:brightness-5 md: 480 768 md:brightness-5 lg: 768 1080 lg:brightness-5 omencss media queries can also be combined with active focus and hover states for example use `sm:brightness-5` to apply the brightness-5 utility at only small screen sizes at or below 480 or `active:md:brightness-5` to apply the brightness-5 utility at only between small screen sizes 480 and medium screen sizes 768 1 the structure for auto classes is as follows: ` conditional state : media query :brightness number ` p e `active:md:brightness-5` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:brightness-5 focus:brightness-5 hover:brightness-5 active brightness focus brightness hover brightness active:sm:brightness-5 focus:sm:brightness-5 hover:sm:brightness-5 active small screens brightness focus small screens brightness hover small screens brightness active:md:brightness-5 focus:md:brightness-5 hover:md:brightness-5 active medium screens brightness focus medium screens brightness hover medium screens brightness active:lg:brightness-5 focus:lg:brightness-5 hover:lg:brightness-5 active large screens brightness focus large screens brightness hover large screens brightness sources brightness https: developer mozilla org en-us docs web css filter-function brightness '
---

| _omenCSS_           | CSS class example                        | minimum Value | maximum Value | Step |
| ------------------- | ---------------------------------------- | ------------- | ------------- | ---- |
| brightness-{number} | .brightness-1 { filter: brightness(0.1)} | 0             | 50            | +1   |

## How to work the brightness filter

Use the `brightness-{number}` utilities to set the amount of brightness for the element. `brightness-1` equals to the css class `filter: brightness(0.1)`, `brightness-2` equals to the css class `filter: brightness(0.2)` the maximum would be `brightness-50`, it equals to the css class `filter: brightness(5)`. In general: the omenCSS class steps are +1 ranging from 0-50.

```html
<!-- no brightness -->
<div class="brightness-0">{children}</div>
<!-- very low brightness filter -->
<div class="brightness-1">{children}</div>
<!-- top peak brightness filter -->
<div class="brightness-50">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                  | CSS class example                                       |
| -------------------------- | ------------------------------------------------------- |
| active:brightness-{number} | .active\:brightness-5:active { filter: brightness(5); } |
| focus:brightness-{number}  | .focus\:brightness-5:focus { filter: brightness(5); }   |
| hover:brightness-{number}  | .hover\:brightness-5:hover { filter: brightness(5); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:brightness-5` to only apply the brightness-5 utility class on hover.

```html
<div class="hover:brightness-5 ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range      | omenCSS example  |
| ----------- | ---------- | ---------------- |
| sm:         | 0 - 480    | .sm:brightness-5 |
| md:         | 480 - 768  | .md:brightness-5 |
| lg:         | 768 - 1080 | .lg:brightness-5 |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:brightness-5` to apply the brightness-5 utility at only small screen sizes at or below 480. Or `active:md:brightness-5` to apply the brightness-5 utility at only between small screen sizes (480) and medium screen sizes (768).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:brightness-{number}` p.e. `active:md:brightness-5`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                    | spoken example                                                                                      |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:brightness-5 , focus:brightness-5 , hover:brightness-5          | active brightness, focus brightness, hover brightness                                               |
| active:sm:brightness-5 , focus:sm:brightness-5 , hover:sm:brightness-5 | active small screens brightness, focus small screens brightness, hover small screens brightness,    |
| active:md:brightness-5 , focus:md:brightness-5 , hover:md:brightness-5 | active medium screens brightness, focus medium screens brightness, hover medium screens brightness, |
| active:lg:brightness-5 , focus:lg:brightness-5 , hover:lg:brightness-5 | active large screens brightness, focus large screens brightness, hover large screens brightness,    |

## Sources

- [brightness](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness)
