---
isBlog: false
title: 'Hue Rotate'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the hue rotate.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Hue Rotate, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step hue-rotate number deg hue-rotate-1deg filter: hue-rotate 1deg 0 180 +1° hue-rotate number per hue-rotate-1per filter: hue-rotate 1% 0 100 +1% how to work the hue rotate filter you can either work with degrees or percentages use the `hue-rotate number per` utilities to set the amount of hue rotate for the element `hue-rotate-1per` equals to the css class `filter:hue rotate 1% ` `hue-rotate-2per` equals to the css class `filter: hue rotate 2% ` the maximum would be `hue-rotate-100per` it equals to the css class `filter: hue rotate 100% ` in general: the omencss class steps are +1% or +1deg ranging from 0-100% or 0-180deg  active focus and hover states omencss css class example active:hue-rotate number per deg active :hue-rotate-5per:active filter: hue-rotate 5% ; focus:hue-rotate number per deg focus :hue-rotate-5per:focus filter: hue-rotate 5% ; hover:hue-rotate number per deg hover :hue-rotate-5per:hover filter: hue-rotate 5% ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:hue-rotate-5per` to only apply the hue-rotate-5per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:hue-rotate-5per md: 480px 768px md:hue-rotate-5per lg: 768px 1080px lg:hue-rotate-5per omencss media queries can also be combined with active focus and hover states for example use `sm:hue-rotate-5per` to apply the hue-rotate-5per utility at only small screen sizes at or below 480px or `active:md:hue-rotate-5per` to apply the hue-rotate-5per utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :hue-rotate number per` p e `active:md:hue-rotate-5per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:hue-rotate-5per focus:hue-rotate-5per hover:hue-rotate-5per active hue rotate focus hue rotate hover hue rotate active:sm:hue-rotate-5per focus:sm:hue-rotate-5per hover:sm:hue-rotate-5per active small screens hue rotate focus small screens hue rotate hover small screens hue rotate active:md:hue-rotate-5per focus:md:hue-rotate-5per hover:md:hue-rotate-5per active medium screens hue rotate focus medium screens hue rotate hover medium screens hue rotate active:lg:hue-rotate-5per focus:lg:hue-rotate-5per hover:lg:hue-rotate-5per active large screens hue rotate focus large screens hue rotate hover large screens hue rotate sources hue rotate https: developer mozilla org en-us docs web css filter-function hue rotate '
---

| _omenCSS_              | CSS class example                            | minimum Value | maximum Value | Step |
| ---------------------- | -------------------------------------------- | ------------- | ------------- | ---- |
| hue-rotate-{number}deg | .hue-rotate-1deg { filter: hue-rotate(1deg)} | 0             | 180           | +1°  |
| hue-rotate-{number}per | .hue-rotate-1per { filter: hue-rotate(1%)}   | 0             | 100           | +1%  |

## How to work the hue rotate filter

You can either work with degrees or percentages. Use the `hue-rotate-{number}per` utilities to set the amount of hue rotate for the element. `hue-rotate-1per` equals to the css class `filter:hue rotate(1%)`, `hue-rotate-2per` equals to the css class `filter: hue rotate(2%)` the maximum would be `hue-rotate-100per`, it equals to the css class `filter: hue rotate(100%)`. In general: the omenCSS class steps are +1% or +1deg ranging from 0-100% or 0-180deg.

```html
<!-- no hue rotate -->
<div class="hue-rotate-0per">{children}</div>
<!-- very low hue rotate filter -->
<div class="hue-rotate-1per">{children}</div>
<!-- top peak hue rotate filter -->
<div class="hue-rotate-180deg">{children}</div>
<div class="hue-rotate-100per">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                          | CSS class example                                           |
| ---------------------------------- | ----------------------------------------------------------- |
| active:hue-rotate-{number}per /deg | .active\:hue-rotate-5per:active { filter: hue-rotate(5%); } |
| focus:hue-rotate-{number}per /deg  | .focus\:hue-rotate-5per:focus { filter: hue-rotate(5%); }   |
| hover:hue-rotate-{number}per /deg  | .hover\:hue-rotate-5per:hover { filter: hue-rotate(5%); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:hue-rotate-5per` to only apply the hue-rotate-5per utility class on hover.

```html
<div class="hue-rotate-100per hover:hue-rotate-5per ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example     |
| ----------- | -------------- | ------------------- |
| sm:         | 0px - 480px    | .sm:hue-rotate-5per |
| md:         | 480px - 768px  | .md:hue-rotate-5per |
| lg:         | 768px - 1080px | .lg:hue-rotate-5per |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:hue-rotate-5per` to apply the hue-rotate-5per utility at only small screen sizes at or below 480px. Or `active:md:hue-rotate-5per` to apply the hue-rotate-5per utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:hue-rotate-{number}per` p.e. `active:md:hue-rotate-5per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                             | spoken example                                                                                      |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:hue-rotate-5per , focus:hue-rotate-5per , hover:hue-rotate-5per          | active hue rotate, focus hue rotate, hover hue rotate                                               |
| active:sm:hue-rotate-5per , focus:sm:hue-rotate-5per , hover:sm:hue-rotate-5per | active small screens hue rotate, focus small screens hue rotate, hover small screens hue rotate,    |
| active:md:hue-rotate-5per , focus:md:hue-rotate-5per , hover:md:hue-rotate-5per | active medium screens hue rotate, focus medium screens hue rotate, hover medium screens hue rotate, |
| active:lg:hue-rotate-5per , focus:lg:hue-rotate-5per , hover:lg:hue-rotate-5per | active large screens hue rotate, focus large screens hue rotate, hover large screens hue rotate,    |

## Sources

- [hue-rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate)
