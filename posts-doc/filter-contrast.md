---
isBlog: false
title: 'Contrast'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the contrast.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Contrast, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step contrast number contrast-1 filter: contrast 0 1 0 50 +1 how to work the contrast filter use the `contrast number ` utilities to set the amount of contrast for the element `contrast-1` equals to the css class `filter: contrast 0 1 ` `contrast-2` equals to the css class `filter: contrast 0 2 ` the maximum would be `contrast-50` it equals to the css class `filter: contrast 5 ` in general: the omencss class steps are +1 ranging from 0-50  active focus and hover states omencss css class example active:contrast number active :contrast-5:active filter: contrast 5 500ms; focus:contrast number focus :contrast-5:focus filter: contrast 5 500ms; hover:contrast number hover :contrast-5:hover filter: contrast 5 500ms; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:contrast-5` to only apply the contrast-5 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0 480 sm:contrast-5 md: 480 768 md:contrast-5 lg: 768 1080 lg:contrast-5 omencss media queries can also be combined with active focus and hover states for example use `sm:contrast-5` to apply the contrast-5 utility at only small screen sizes at or below 480 or `active:md:contrast-5` to apply the contrast-5 utility at only between small screen sizes 480 and medium screen sizes 768 1 the structure for auto classes is as follows: ` conditional state : media query :contrast number ` p e `active:md:contrast-5` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:contrast-5 focus:contrast-5 hover:contrast-5 active contrast focus contrast hover contrast active:sm:contrast-5 focus:sm:contrast-5 hover:sm:contrast-5 active small screens contrast focus small screens contrast hover small screens contrast active:md:contrast-5 focus:md:contrast-5 hover:md:contrast-5 active medium screens contrast focus medium screens contrast hover medium screens contrast active:lg:contrast-5 focus:lg:contrast-5 hover:lg:contrast-5 active large screens contrast focus large screens contrast hover large screens contrast sources contrast https: developer mozilla org en-us docs web css filter-function contrast '
---

| _omenCSS_         | CSS class example                    | minimum Value | maximum Value | Step |
| ----------------- | ------------------------------------ | ------------- | ------------- | ---- |
| contrast-{number} | .contrast-1 { filter: contrast(0.1)} | 0             | 50            | +1   |

## How to work the contrast filter

Use the `contrast-{number}` utilities to set the amount of contrast for the element. `contrast-1` equals to the css class `filter: contrast(0.1)`, `contrast-2` equals to the css class `filter: contrast(0.2)` the maximum would be `contrast-50`, it equals to the css class `filter: contrast(5)`. In general: the omenCSS class steps are +1 ranging from 0-50.

```html
<!-- no contrast -->
<div class="contrast-0">{children}</div>
<!-- very low contrast filter -->
<div class="contrast-1">{children}</div>
<!-- top peak contrast filter -->
<div class="contrast-50">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                | CSS class example                                         |
| ------------------------ | --------------------------------------------------------- |
| active:contrast-{number} | .active\:contrast-5:active { filter: contrast(5) 500ms; } |
| focus:contrast-{number}  | .focus\:contrast-5:focus { filter: contrast(5) 500ms; }   |
| hover:contrast-{number}  | .hover\:contrast-5:hover { filter: contrast(5) 500ms; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:contrast-5` to only apply the contrast-5 utility class on hover.

```html
<div class="hover:contrast-5 ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range      | omenCSS example |
| ----------- | ---------- | --------------- |
| sm:         | 0 - 480    | .sm:contrast-5  |
| md:         | 480 - 768  | .md:contrast-5  |
| lg:         | 768 - 1080 | .lg:contrast-5  |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:contrast-5` to apply the contrast-5 utility at only small screen sizes at or below 480. Or `active:md:contrast-5` to apply the contrast-5 utility at only between small screen sizes (480) and medium screen sizes (768).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:contrast-{number}` p.e. `active:md:contrast-5`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                              | spoken example                                                                                |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| active:contrast-5 , focus:contrast-5 , hover:contrast-5          | active contrast, focus contrast, hover contrast                                               |
| active:sm:contrast-5 , focus:sm:contrast-5 , hover:sm:contrast-5 | active small screens contrast, focus small screens contrast, hover small screens contrast,    |
| active:md:contrast-5 , focus:md:contrast-5 , hover:md:contrast-5 | active medium screens contrast, focus medium screens contrast, hover medium screens contrast, |
| active:lg:contrast-5 , focus:lg:contrast-5 , hover:lg:contrast-5 | active large screens contrast, focus large screens contrast, hover large screens contrast,    |

## Sources

- [contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast)
