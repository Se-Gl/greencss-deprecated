---
isBlog: false
title: 'Backdrop Sepia'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop sepia.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Sepia, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step backdrop-sepia number backdrop-sepia-1per backdrop-filter: sepia 1% 0 100 +1% how to work the backdrop sepia filter use the `backdrop-sepia number ` utilities to set the amount of backdrop sepia for the element `backdrop-sepia-1per` equals to the css class `backdrop-filter: sepia 1% ` `backdrop-sepia-2per` equals to the css class `backdrop-filter: sepia 2% ` the maximum would be `backdrop-sepia-100per` it equals to the css class `backdrop-filter: sepia 100% ` in general: the omencss class steps are +1% ranging from 0-100  active focus and hover states omencss css class example active:backdrop-sepia number active :backdrop-sepia-5per:active backdrop-filter: sepia 5% ; focus:backdrop-sepia number focus :backdrop-sepia-5per:focus backdrop-filter: sepia 5% ; hover:backdrop-sepia number hover :backdrop-sepia-5per:hover backdrop-filter: sepia 5% ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-sepia-5per` to only apply the backdrop-sepia-5per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:backdrop-sepia-5per md: 480px 768px md:backdrop-sepia-5per lg: 768px 1080px lg:backdrop-sepia-5per omencss media queries can also be combined with active focus and hover states for example use `sm:backdrop-sepia-5per` to apply the backdrop-sepia-5per utility at only small screen sizes at or below 480px or `active:md:backdrop-sepia-5per` to apply the backdrop-sepia-5per utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-sepia number ` p e `active:md:backdrop-sepia-5per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:backdrop-sepia-5per focus:backdrop-sepia-5per hover:backdrop-sepia-5per active backdrop sepia focus backdrop sepia hover backdrop sepia active:sm:backdrop-sepia-5per focus:sm:backdrop-sepia-5per hover:sm:backdrop-sepia-5per active small screens backdrop sepia focus small screens backdrop sepia hover small screens backdrop sepia active:md:backdrop-sepia-5per focus:md:backdrop-sepia-5per hover:md:backdrop-sepia-5per active medium screens backdrop sepia focus medium screens backdrop sepia hover medium screens backdrop sepia active:lg:backdrop-sepia-5per focus:lg:backdrop-sepia-5per hover:lg:backdrop-sepia-5per active large screens backdrop sepia focus large screens backdrop sepia hover large screens backdrop sepia sources backdrop-filter https: develo mozilla org en-us docs web css backdrop-filter '
---

| _omenCSS_               | CSS class example                                  | minimum Value | maximum Value | Step |
| ----------------------- | -------------------------------------------------- | ------------- | ------------- | ---- |
| backdrop-sepia-{number} | .backdrop-sepia-1per { backdrop-filter: sepia(1%)} | 0             | 100           | +1%  |

## How to work the backdrop sepia filter

Use the `backdrop-sepia-{number}` utilities to set the amount of backdrop sepia for the element. `backdrop-sepia-1per` equals to the css class `backdrop-filter: sepia(1%)`, `backdrop-sepia-2per` equals to the css class `backdrop-filter: sepia(2%)` the maximum would be `backdrop-sepia-100per`, it equals to the css class `backdrop-filter: sepia(100%)`. In general: the omenCSS class steps are +1% ranging from 0-100.

```html
<!-- no backdrop sepia -->
<div class="backdrop-sepia-0per">{children}</div>
<!-- very low backdrop sepia filter -->
<div class="backdrop-sepia-1per">{children}</div>
<!-- top peak backdrop sepia filter -->
<div class="backdrop-sepia-100per">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                      | CSS class example                                                   |
| ------------------------------ | ------------------------------------------------------------------- |
| active:backdrop-sepia-{number} | .active\:backdrop-sepia-5per:active { backdrop-filter: sepia(5%); } |
| focus:backdrop-sepia-{number}  | .focus\:backdrop-sepia-5per:focus { backdrop-filter: sepia(5%); }   |
| hover:backdrop-sepia-{number}  | .hover\:backdrop-sepia-5per:hover { backdrop-filter: sepia(5%); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-sepia-5per` to only apply the backdrop-sepia-5per utility class on hover.

```html
<div class="hover:backdrop-sepia-5per ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example         |
| ----------- | -------------- | ----------------------- |
| sm:         | 0px - 480px    | .sm:backdrop-sepia-5per |
| md:         | 480px - 768px  | .md:backdrop-sepia-5per |
| lg:         | 768px - 1080px | .lg:backdrop-sepia-5per |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-sepia-5per` to apply the backdrop-sepia-5per utility at only small screen sizes at or below 480px. Or `active:md:backdrop-sepia-5per` to apply the backdrop-sepia-5per utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-sepia-{number}` p.e. `active:md:backdrop-sepia-5per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                         | spoken example                                                                                                  |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:backdrop-sepia-5per , focus:backdrop-sepia-5per , hover:backdrop-sepia-5per          | active backdrop sepia, focus backdrop sepia, hover backdrop sepia                                               |
| active:sm:backdrop-sepia-5per , focus:sm:backdrop-sepia-5per , hover:sm:backdrop-sepia-5per | active small screens backdrop sepia, focus small screens backdrop sepia, hover small screens backdrop sepia,    |
| active:md:backdrop-sepia-5per , focus:md:backdrop-sepia-5per , hover:md:backdrop-sepia-5per | active medium screens backdrop sepia, focus medium screens backdrop sepia, hover medium screens backdrop sepia, |
| active:lg:backdrop-sepia-5per , focus:lg:backdrop-sepia-5per , hover:lg:backdrop-sepia-5per | active large screens backdrop sepia, focus large screens backdrop sepia, hover large screens backdrop sepia,    |

## Sources

- [backdrop-filter](https://develo.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
