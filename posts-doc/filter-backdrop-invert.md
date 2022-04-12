---
isBlog: false
title: 'Backdrop Invert'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop invert filters.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Invert, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step backdrop-invert number per backdrop-invert-1per backdrop-filter: backdrop-invert 1% 0 100 +1% how to work the backdrop invert filter use the `backdrop-invert number per` utilities to set the amount of backdrop invert for the element `backdrop-invert-1per` equals to the css class `backdrop-filter: backdrop-invert 1% ` `backdrop-invert-2per` equals to the css class `backdrop-filter: backdrop-invert 2% ` the maximum would be `backdrop-invert-100per` it equals to the css class `backdrop-filter: backdrop-invert 100% ` in general: the omencss class steps are +1% ranging from 0-100  active focus and hover states omencss css class example active:backdrop-invert number per active :backdrop-invert-50per:active backdrop-filter: backdrop-invert 50% ; focus:backdrop-invert number per focus :backdrop-invert-50per:focus backdrop-filter: backdrop-invert 50% ; hover:backdrop-invert number per hover :backdrop-invert-50per:hover backdrop-filter: backdrop-invert 50% ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-invert-50per` to only apply the backdrop-invert-50per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0 480 sm:backdrop-invert-5per md: 480 768 md:backdrop-invert-5per lg: 768 1080 lg:backdrop-invert-5per omencss media queries can also be combined with active focus and hover states for example use `sm:backdrop-invert-5per` to apply the backdrop-invert-5per utility at only small screen sizes at or below 480 or `active:md:backdrop-invert-5per` to apply the backdrop-invert-5per utility at only between small screen sizes 480 and medium screen sizes 768 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-invert number per` p e `active:md:backdrop-invert-5per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:backdrop-invert-5per focus:backdrop-invert-5per hover:backdrop-invert-5per active backdrop invert focus backdrop invert hover backdrop invert active:sm:backdrop-invert-5per focus:sm:backdrop-invert-5per hover:sm:backdrop-invert-5per active small screens backdrop invert focus small screens backdrop invert hover small screens backdrop invert active:md:backdrop-invert-5per focus:md:backdrop-invert-5per hover:md:backdrop-invert-5per active medium screens backdrop invert focus medium screens backdrop invert hover medium screens backdrop invert active:lg:backdrop-invert-5per focus:lg:backdrop-invert-5per hover:lg:backdrop-invert-5per active large screens backdrop invert focus large screens backdrop invert hover large screens backdrop invert sources backdrop-filter https: developer mozilla org en-us docs web css backdrop-filter '
---

| _omenCSS_                   | CSS class example                                             | minimum Value | maximum Value | Step |
| --------------------------- | ------------------------------------------------------------- | ------------- | ------------- | ---- |
| backdrop-invert-{number}per | .backdrop-invert-1per { backdrop-filter: backdrop-invert(1%)} | 0             | 100           | +1%  |

## How to work the backdrop invert filter

Use the `backdrop-invert-{number}per` utilities to set the amount of backdrop invert for the element. `backdrop-invert-1per` equals to the css class `backdrop-filter: backdrop-invert(1%)`, `backdrop-invert-2per` equals to the css class `backdrop-filter: backdrop-invert(2%)` the maximum would be `backdrop-invert-100per`, it equals to the css class `backdrop-filter: backdrop-invert(100%)`. In general: the omenCSS class steps are +1% ranging from 0-100.

```html
<!-- no backdrop invert -->
<div class="backdrop-invert-0per">{children}</div>
<!-- very low backdrop invert filter -->
<div class="backdrop-invert-1per">{children}</div>
<!-- top peak backdrop invert filter -->
<div class="backdrop-invert-100per">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                          | CSS class example                                                                |
| ---------------------------------- | -------------------------------------------------------------------------------- |
| active:backdrop-invert-{number}per | .active\:backdrop-invert-50per:active { backdrop-filter: backdrop-invert(50%); } |
| focus:backdrop-invert-{number}per  | .focus\:backdrop-invert-50per:focus { backdrop-filter: backdrop-invert(50%); }   |
| hover:backdrop-invert-{number}per  | .hover\:backdrop-invert-50per:hover { backdrop-filter: backdrop-invert(50%); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-invert-50per` to only apply the backdrop-invert-50per utility class on hover.

```html
<div class="hover:backdrop-invert-50per ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range      | omenCSS example          |
| ----------- | ---------- | ------------------------ |
| sm:         | 0 - 480    | .sm:backdrop-invert-5per |
| md:         | 480 - 768  | .md:backdrop-invert-5per |
| lg:         | 768 - 1080 | .lg:backdrop-invert-5per |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-invert-5per` to apply the backdrop-invert-5per utility at only small screen sizes at or below 480. Or `active:md:backdrop-invert-5per` to apply the backdrop-invert-5per utility at only between small screen sizes (480) and medium screen sizes (768).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-invert-{number}per` p.e. `active:md:backdrop-invert-5per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                            | spoken example                                                                                                     |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| active:backdrop-invert-5per , focus:backdrop-invert-5per , hover:backdrop-invert-5per          | active backdrop invert, focus backdrop invert, hover backdrop invert                                               |
| active:sm:backdrop-invert-5per , focus:sm:backdrop-invert-5per , hover:sm:backdrop-invert-5per | active small screens backdrop invert, focus small screens backdrop invert, hover small screens backdrop invert,    |
| active:md:backdrop-invert-5per , focus:md:backdrop-invert-5per , hover:md:backdrop-invert-5per | active medium screens backdrop invert, focus medium screens backdrop invert, hover medium screens backdrop invert, |
| active:lg:backdrop-invert-5per , focus:lg:backdrop-invert-5per , hover:lg:backdrop-invert-5per | active large screens backdrop invert, focus large screens backdrop invert, hover large screens backdrop invert,    |

## Sources

- [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
