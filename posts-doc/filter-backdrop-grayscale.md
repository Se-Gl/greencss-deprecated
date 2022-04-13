---
isBlog: false
title: 'Backdrop Grayscale'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop grayscale.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Grayscale, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step backdrop-grayscale number per backdrop-grayscale-1per backdrop-filter: grayscale 1% 0 100 +1% how to work the backdrop grayscale filter use the `backdrop-grayscale number per` utilities to set the amount of backdrop grayscale black and white filter for the element `backdrop-grayscale-1per` equals to the css class `backdrop-filter: grayscale 1% ` `backdrop-grayscale-2per` equals to the css class `backdrop-filter: grayscale 2% ` the maximum would be `backdrop-grayscale-100per` it equals to the css class `backdrop-filter: grayscale 100% ` in general: the omencss class steps are +1% ranging from 0-100  active focus and hover states omencss css class example active:backdrop-grayscale number per active :backdrop-grayscale-5per:active backdrop-filter: grayscale 50% ; focus:backdrop-grayscale number per focus :backdrop-grayscale-5per:focus backdrop-filter: grayscale 50% ; hover:backdrop-grayscale number per hover :backdrop-grayscale-5per:hover backdrop-filter: grayscale 50% ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-grayscale-5per` to only apply the backdrop-grayscale-5per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:backdrop-grayscale-5per md: 480px 768px md:backdrop-grayscale-5per lg: 768px 1080px lg:backdrop-grayscale-5per omencss media queries can also be combined with active focus and hover states for example use `sm:backdrop-grayscale-5per` to apply the backdrop-grayscale-5per utility at only small screen sizes at or below 480px or `active:md:backdrop-grayscale-5per` to apply the backdrop-grayscale-5per utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-grayscale number per` p e `active:md:backdrop-grayscale-5per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:backdrop-grayscale-5per focus:backdrop-grayscale-5per hover:backdrop-grayscale-5per active backdrop grayscale focus backdrop grayscale hover backdrop grayscale active:sm:backdrop-grayscale-5per focus:sm:backdrop-grayscale-5per hover:sm:backdrop-grayscale-5per active small screens backdrop grayscale focus small screens backdrop grayscale hover small screens backdrop grayscale active:md:backdrop-grayscale-5per focus:md:backdrop-grayscale-5per hover:md:backdrop-grayscale-5per active medium screens backdrop grayscale focus medium screens backdrop grayscale hover medium screens backdrop grayscale active:lg:backdrop-grayscale-5per focus:lg:backdrop-grayscale-5per hover:lg:backdrop-grayscale-5per active large screens backdrop grayscale focus large screens backdrop grayscale hover large screens backdrop grayscale sources backdrop-filter https: developer mozilla org en-us docs web css backdrop-filter '
---

| _omenCSS_                      | CSS class example                                          | minimum Value | maximum Value | Step |
| ------------------------------ | ---------------------------------------------------------- | ------------- | ------------- | ---- |
| backdrop-grayscale-{number}per | .backdrop-grayscale-1per { backdrop-filter: grayscale(1%)} | 0             | 100           | +1%  |

## How to work the backdrop grayscale filter

Use the `backdrop-grayscale-{number}per` utilities to set the amount of backdrop grayscale (black and white filter) for the element. `backdrop-grayscale-1per` equals to the css class `backdrop-filter: grayscale(1%)`, `backdrop-grayscale-2per` equals to the css class `backdrop-filter: grayscale(2%)` the maximum would be `backdrop-grayscale-100per`, it equals to the css class `backdrop-filter: grayscale(100%)`. In general: the omenCSS class steps are +1% ranging from 0-100.

```html
<!-- no backdrop grayscale -->
<div class="backdrop-grayscale-0per">{children}</div>
<!-- very low backdrop grayscale filter -->
<div class="backdrop-grayscale-1per">{children}</div>
<!-- top peak backdrop grayscale filter -->
<div class="backdrop-grayscale-100per">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                             | CSS class example                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------- |
| active:backdrop-grayscale-{number}per | .active\:backdrop-grayscale-5per:active { backdrop-filter: grayscale(50%); } |
| focus:backdrop-grayscale-{number}per  | .focus\:backdrop-grayscale-5per:focus { backdrop-filter: grayscale(50%); }   |
| hover:backdrop-grayscale-{number}per  | .hover\:backdrop-grayscale-5per:hover { backdrop-filter: grayscale(50%); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-grayscale-5per` to only apply the backdrop-grayscale-5per utility class on hover.

```html
<div class="hover:backdrop-grayscale-5per ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example             |
| ----------- | -------------- | --------------------------- |
| sm:         | 0px - 480px    | .sm:backdrop-grayscale-5per |
| md:         | 480px - 768px  | .md:backdrop-grayscale-5per |
| lg:         | 768px - 1080px | .lg:backdrop-grayscale-5per |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-grayscale-5per` to apply the backdrop-grayscale-5per utility at only small screen sizes at or below 480px. Or `active:md:backdrop-grayscale-5per` to apply the backdrop-grayscale-5per utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-grayscale-{number}per` p.e. `active:md:backdrop-grayscale-5per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                                     | spoken example                                                                                                              |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| active:backdrop-grayscale-5per , focus:backdrop-grayscale-5per , hover:backdrop-grayscale-5per          | active backdrop grayscale, focus backdrop grayscale, hover backdrop grayscale                                               |
| active:sm:backdrop-grayscale-5per , focus:sm:backdrop-grayscale-5per , hover:sm:backdrop-grayscale-5per | active small screens backdrop grayscale, focus small screens backdrop grayscale, hover small screens backdrop grayscale,    |
| active:md:backdrop-grayscale-5per , focus:md:backdrop-grayscale-5per , hover:md:backdrop-grayscale-5per | active medium screens backdrop grayscale, focus medium screens backdrop grayscale, hover medium screens backdrop grayscale, |
| active:lg:backdrop-grayscale-5per , focus:lg:backdrop-grayscale-5per , hover:lg:backdrop-grayscale-5per | active large screens backdrop grayscale, focus large screens backdrop grayscale, hover large screens backdrop grayscale,    |

## Sources

- [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
