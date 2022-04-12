---
isBlog: false
title: 'Grayscale'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the grayscale.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Grayscale, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step grayscale number per grayscale-1per filter:grayscale 1% 0 100 +1% how to work the grayscale filter use the `grayscale number per` utilities to set the amount of grayscale black and white filter for the element `grayscale-1per` equals to the css class `filter:grayscale 1% ` `grayscale-2per` equals to the css class `filter: grayscale 2% ` the maximum would be `grayscale-100per` it equals to the css class `filter: grayscale 100% ` in general: the omencss class steps are +1% ranging from 0-100  active focus and hover states omencss css class example active:grayscale number per active :grayscale-5per:active filter: grayscale 50% 500ms; focus:grayscale number per focus :grayscale-5per:focus filter: grayscale 50% 500ms; hover:grayscale number per hover :grayscale-5per:hover filter: grayscale 50% 500ms; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:grayscale-5per` to only apply the grayscale-5per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0 480 sm:grayscale-5per md: 480 768 md:grayscale-5per lg: 768 1080 lg:grayscale-5per omencss media queries can also be combined with active focus and hover states for example use `sm:grayscale-5per` to apply the grayscale-5per utility at only small screen sizes at or below 480 or `active:md:grayscale-5per` to apply the grayscale-5per utility at only between small screen sizes 480 and medium screen sizes 768 1 the structure for auto classes is as follows: ` conditional state : media query :grayscale number per` p e `active:md:grayscale-5per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:grayscale-5per focus:grayscale-5per hover:grayscale-5per active grayscale focus grayscale hover grayscale active:sm:grayscale-5per focus:sm:grayscale-5per hover:sm:grayscale-5per active small screens grayscale focus small screens grayscale hover small screens grayscale active:md:grayscale-5per focus:md:grayscale-5per hover:md:grayscale-5per active medium screens grayscale focus medium screens grayscale hover medium screens grayscale active:lg:grayscale-5per focus:lg:grayscale-5per hover:lg:grayscale-5per active large screens grayscale focus large screens grayscale hover large screens grayscale sources grayscale https: developer mozilla org en-us docs web css filter-function grayscale '
---

| _omenCSS_             | CSS class example                       | minimum Value | maximum Value | Step |
| --------------------- | --------------------------------------- | ------------- | ------------- | ---- |
| grayscale-{number}per | .grayscale-1per { filter:grayscale(1%)} | 0             | 100           | +1%  |

## How to work the grayscale filter

Use the `grayscale-{number}per` utilities to set the amount of grayscale (black and white filter) for the element. `grayscale-1per` equals to the css class `filter:grayscale(1%)`, `grayscale-2per` equals to the css class `filter: grayscale(2%)` the maximum would be `grayscale-100per`, it equals to the css class `filter: grayscale(100%)`. In general: the omenCSS class steps are +1% ranging from 0-100.

```html
<!-- no grayscale -->
<div class="grayscale-0per">{children}</div>
<!-- very low grayscale filter -->
<div class="grayscale-1per">{children}</div>
<!-- top peak grayscale filter -->
<div class="grayscale-100per">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                    | CSS class example                                                |
| ---------------------------- | ---------------------------------------------------------------- |
| active:grayscale-{number}per | .active\:grayscale-5per:active { filter: grayscale(50%) 500ms; } |
| focus:grayscale-{number}per  | .focus\:grayscale-5per:focus { filter: grayscale(50%) 500ms; }   |
| hover:grayscale-{number}per  | .hover\:grayscale-5per:hover { filter: grayscale(50%) 500ms; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:grayscale-5per` to only apply the grayscale-5per utility class on hover.

```html
<div class="hover:grayscale-5per ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range      | omenCSS example    |
| ----------- | ---------- | ------------------ |
| sm:         | 0 - 480    | .sm:grayscale-5per |
| md:         | 480 - 768  | .md:grayscale-5per |
| lg:         | 768 - 1080 | .lg:grayscale-5per |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:grayscale-5per` to apply the grayscale-5per utility at only small screen sizes at or below 480. Or `active:md:grayscale-5per` to apply the grayscale-5per utility at only between small screen sizes (480) and medium screen sizes (768).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:grayscale-{number}per` p.e. `active:md:grayscale-5per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                          | spoken example                                                                                   |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| active:grayscale-5per , focus:grayscale-5per , hover:grayscale-5per          | active grayscale, focus grayscale, hover grayscale                                               |
| active:sm:grayscale-5per , focus:sm:grayscale-5per , hover:sm:grayscale-5per | active small screens grayscale, focus small screens grayscale, hover small screens grayscale,    |
| active:md:grayscale-5per , focus:md:grayscale-5per , hover:md:grayscale-5per | active medium screens grayscale, focus medium screens grayscale, hover medium screens grayscale, |
| active:lg:grayscale-5per , focus:lg:grayscale-5per , hover:lg:grayscale-5per | active large screens grayscale, focus large screens grayscale, hover large screens grayscale,    |

## Sources

- [grayscale](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale)
