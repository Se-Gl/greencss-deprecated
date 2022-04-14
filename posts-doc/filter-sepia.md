---
isBlog: false
title: 'Sepia'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the sepia filters.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Sepia, filter, filters'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step sepia number per sepia-1per filter:sepia 1% 0 100 +1% how to work the sepia filter use the `sepia number per` utilities to set the amount of sepia for the element `sepia-1per` equals to the css class `filter:sepia 1% ` `sepia-2per` equals to the css class `filter: sepia 2% ` the maximum would be `sepia-100per` it equals to the css class `filter: sepia 100% ` in general: the greenCSS class steps are +1% ranging from 0-100  active focus and hover states greenCSS css class example active:sepia number per active :sepia-5per:active filter: sepia 50% ; focus:sepia number per focus :sepia-5per:focus filter: sepia 50% ; hover:sepia number per hover :sepia-5per:hover filter: sepia 50% ; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:sepia-5per` to only apply the sepia-5per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:sepia-5per md: 480px 768px md:sepia-5per lg: 768px 1080px lg:sepia-5per greenCSS media queries can also be combined with active focus and hover states for example use `sm:sepia-5per` to apply the sepia-5per utility at only small screen sizes at or below 480px or `active:md:sepia-5per` to apply the sepia-5per utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :sepia number per` p e `active:md:sepia-5per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:sepia-5per focus:sepia-5per hover:sepia-5per active sepia focus sepia hover sepia active:sm:sepia-5per focus:sm:sepia-5per hover:sm:sepia-5per active small screens sepia focus small screens sepia hover small screens sepia active:md:sepia-5per focus:md:sepia-5per hover:md:sepia-5per active medium screens sepia focus medium screens sepia hover medium screens sepia active:lg:sepia-5per focus:lg:sepia-5per hover:lg:sepia-5per active large screens sepia focus large screens sepia hover large screens sepia sources sepia https: developer mozilla org en-us docs web css filter-function sepia '
---

| _greenCSS_        | CSS class example               | minimum Value | maximum Value | Step |
| ----------------- | ------------------------------- | ------------- | ------------- | ---- |
| sepia-{number}per | .sepia-1per { filter:sepia(1%)} | 0             | 100           | +1%  |

## How to work the sepia filter

Use the `sepia-{number}per` utilities to set the amount of sepia for the element. `sepia-1per` equals to the css class `filter:sepia(1%)`, `sepia-2per` equals to the css class `filter: sepia(2%)` the maximum would be `sepia-100per`, it equals to the css class `filter: sepia(100%)`. In general: the greenCSS class steps are +1% ranging from 0-100.

```html
<!-- no sepia -->
<div class="sepia-0per">{children}</div>
<!-- very low sepia filter -->
<div class="sepia-1per">{children}</div>
<!-- top peak sepia filter -->
<div class="sepia-100per">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_               | CSS class example                                  |
| ------------------------ | -------------------------------------------------- |
| active:sepia-{number}per | .active\:sepia-5per:active { filter: sepia(50%); } |
| focus:sepia-{number}per  | .focus\:sepia-5per:focus { filter: sepia(50%); }   |
| hover:sepia-{number}per  | .hover\:sepia-5per:hover { filter: sepia(50%); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:sepia-5per` to only apply the sepia-5per utility class on hover.

```html
<div class="hover:sepia-5per ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:sepia-5per   |
| md:         | 480px - 768px  | .md:sepia-5per   |
| lg:         | 768px - 1080px | .lg:sepia-5per   |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:sepia-5per` to apply the sepia-5per utility at only small screen sizes at or below 480px. Or `active:md:sepia-5per` to apply the sepia-5per utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:sepia-{number}per` p.e. `active:md:sepia-5per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                             | spoken example                                                                       |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| active:sepia-5per , focus:sepia-5per , hover:sepia-5per          | active sepia, focus sepia, hover sepia                                               |
| active:sm:sepia-5per , focus:sm:sepia-5per , hover:sm:sepia-5per | active small screens sepia, focus small screens sepia, hover small screens sepia,    |
| active:md:sepia-5per , focus:md:sepia-5per , hover:md:sepia-5per | active medium screens sepia, focus medium screens sepia, hover medium screens sepia, |
| active:lg:sepia-5per , focus:lg:sepia-5per , hover:lg:sepia-5per | active large screens sepia, focus large screens sepia, hover large screens sepia,    |

## Sources

- [sepia](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia)
