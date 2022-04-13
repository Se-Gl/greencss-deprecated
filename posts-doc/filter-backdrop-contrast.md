---
isBlog: false
title: 'Backdrop Contrast'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop contrast.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Contrast, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step backdrop-contrast number backdrop-contrast-1 backdrop-filter: contrast 0 1 0 30 +1 how to work the backdrop contrast filter use the `backdrop-contrast number ` utilities to set the amount of backdrop contrast for the element `backdrop-contrast-1` equals to the css class `backdrop-filter: contrast 0 1 ` `backdrop-contrast-2` equals to the css class `backdrop-filter: contrast 0 2 ` the maximum would be `backdrop-contrast-30` it equals to the css class `backdrop-filter: contrast 3 ` in general: the omencss class steps are +1 ranging from 0-30  active focus and hover states omencss css class example active:backdrop-contrast number active :backdrop-contrast-3:active backdrop-filter: contrast 3 ; focus:backdrop-contrast number focus :backdrop-contrast-3:focus backdrop-filter: contrast 3 ; hover:backdrop-contrast number hover :backdrop-contrast-3:hover backdrop-filter: contrast 3 ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-contrast-3` to only apply the backdrop-contrast-3 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:backdrop-contrast-3 md: 480px 768px md:backdrop-contrast-3 lg: 768px 1080px lg:backdrop-contrast-3 omencss media queries can also be combined with active focus and hover states for example use `sm:backdrop-contrast-3` to apply the backdrop-contrast-3 utility at only small screen sizes at or below 480px or `active:md:backdrop-contrast-3` to apply the backdrop-contrast-3 utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-contrast number ` p e `active:md:backdrop-contrast-3` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:backdrop-contrast-3 focus:backdrop-contrast-3 hover:backdrop-contrast-3 active backdrop contrast focus backdrop contrast hover backdrop contrast active:sm:backdrop-contrast-3 focus:sm:backdrop-contrast-3 hover:sm:backdrop-contrast-3 active small screens backdrop contrast focus small screens backdrop contrast hover small screens backdrop contrast active:md:backdrop-contrast-3 focus:md:backdrop-contrast-3 hover:md:backdrop-contrast-3 active medium screens backdrop contrast focus medium screens backdrop contrast hover medium screens backdrop contrast active:lg:backdrop-contrast-3 focus:lg:backdrop-contrast-3 hover:lg:backdrop-contrast-3 active large screens backdrop contrast focus large screens backdrop contrast hover large screens backdrop contrast sources backdrop-filter https: developer mozilla org en-us docs web css backdrop-filter '
---

| _omenCSS_                  | CSS class example                                      | minimum Value | maximum Value | Step |
| -------------------------- | ------------------------------------------------------ | ------------- | ------------- | ---- |
| backdrop-contrast-{number} | .backdrop-contrast-1 { backdrop-filter: contrast(0.1)} | 0             | 30            | +1   |

## How to work the backdrop contrast filter

Use the `backdrop-contrast-{number}` utilities to set the amount of backdrop contrast for the element. `backdrop-contrast-1` equals to the css class `backdrop-filter: contrast(0.1)`, `backdrop-contrast-2` equals to the css class `backdrop-filter: contrast(0.2)` the maximum would be `backdrop-contrast-30`, it equals to the css class `backdrop-filter: contrast(3)`. In general: the omenCSS class steps are +1 ranging from 0-30.

```html
<!-- no backdrop contrast -->
<div class="backdrop-contrast-0">{children}</div>
<!-- very low backdrop contrast filter -->
<div class="backdrop-contrast-1">{children}</div>
<!-- top peak backdrop contrast filter -->
<div class="backdrop-contrast-30">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                         | CSS class example                                                     |
| --------------------------------- | --------------------------------------------------------------------- |
| active:backdrop-contrast-{number} | .active\:backdrop-contrast-3:active { backdrop-filter: contrast(3); } |
| focus:backdrop-contrast-{number}  | .focus\:backdrop-contrast-3:focus { backdrop-filter: contrast(3); }   |
| hover:backdrop-contrast-{number}  | .hover\:backdrop-contrast-3:hover { backdrop-filter: contrast(3); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-contrast-3` to only apply the backdrop-contrast-3 utility class on hover.

```html
<div class="hover:backdrop-contrast-3 ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example         |
| ----------- | -------------- | ----------------------- |
| sm:         | 0px - 480px    | .sm:backdrop-contrast-3 |
| md:         | 480px - 768px  | .md:backdrop-contrast-3 |
| lg:         | 768px - 1080px | .lg:backdrop-contrast-3 |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-contrast-3` to apply the backdrop-contrast-3 utility at only small screen sizes at or below 480px. Or `active:md:backdrop-contrast-3` to apply the backdrop-contrast-3 utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-contrast-{number}` p.e. `active:md:backdrop-contrast-3`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                         | spoken example                                                                                                           |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:backdrop-contrast-3 , focus:backdrop-contrast-3 , hover:backdrop-contrast-3          | active backdrop contrast, focus backdrop contrast, hover backdrop contrast                                               |
| active:sm:backdrop-contrast-3 , focus:sm:backdrop-contrast-3 , hover:sm:backdrop-contrast-3 | active small screens backdrop contrast, focus small screens backdrop contrast, hover small screens backdrop contrast,    |
| active:md:backdrop-contrast-3 , focus:md:backdrop-contrast-3 , hover:md:backdrop-contrast-3 | active medium screens backdrop contrast, focus medium screens backdrop contrast, hover medium screens backdrop contrast, |
| active:lg:backdrop-contrast-3 , focus:lg:backdrop-contrast-3 , hover:lg:backdrop-contrast-3 | active large screens backdrop contrast, focus large screens backdrop contrast, hover large screens backdrop contrast,    |

## Sources

- [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
