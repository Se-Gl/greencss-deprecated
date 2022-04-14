---
isBlog: false
title: 'Z-Index'
date: 'Apr 10. 2022'
excerpt: 'Utility classes to control the order of the elements by using Z-Index.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Position, layout, order, z-index'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step z-auto z-auto z-index: auto; z number z-50 z-index: 50; -100 100 +1 how to work with z-index 1 use the `z-auto` to control determine and set the order automatically 2 use the `z number ` to control determine and set the order by a specific number the higher the number the higher the priority  negative z-values to use `z-neg number ` p e `z-neg-1` to set a lower priority for the element the lower the number the lower the priority  active focus and hover states greenCSS css class example active:z number active :z-1:active z-index: 1; focus:z number focus :z-1:focus z-index: 1; hover:z number hover :z-1:hover z-index: 1; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:z-1` to only apply the z-index utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:z-1 md: 480px 768px md:z-1 lg: 768px 1080px lg:z-1 greenCSS media queries can also be combined with active focus and hover states for example use `sm:z-1` to apply the z-index auto utility at only small screen sizes at or below 480px or `active:md:z-1` to apply the z-index auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :z-auto` p e `active:md:z-auto` 1 the structure for positive z-index classes is as follows: ` conditional state : media query :z number ` p e `active:md:z-50` 1 the structure for negative z-index classes is as follows: ` conditional state : media query :z-neg number ` p e `active:md:z-neg-100` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:z number focus:z number hover:z number active z index focus z index hover z index active:sm:z number focus:sm:z number hover:sm:z number active small screens z index focus small screens z index hover small screens z index active:md:z number focus:md:z number hover:md:z number active medium screens z index focus medium screens z index hover medium screens z index active:lg:z number focus:lg:z number hover:lg:z number active large screens z index focus large screens z index hover large screens z index sources z-index https: developer mozilla org en-us docs web css z-index '
---

| _greenCSS_ | CSS class example          | minimum Value | maximum Value | Step |
| ---------- | -------------------------- | ------------- | ------------- | ---- |
| z-auto     | .z-auto { z-index: auto; } | -             | -             | -    |
| z-{number} | .z-50 { z-index: 50; }     | -100          | 100           | +1   |

## How to work with Z-Index

1. Use the `z-auto` to control, determine and set the order automatically.
2. Use the `z-{number}` to control, determine and set the order by a specific number. The higher the number, the higher the priority.

```html
<div class="z-1">first</div>
<div class="z-2">second</div>
<div class="z-100">third</div>
```

## Negative Z-Values

To use `z-neg-{number}`, p.e. `z-neg-1` to set a lower priority for the element. The lower the number, the lower the priority.

```html
<div class="z-neg-1">first</div>
<div class="z-neg-2">second</div>
<div class="z-neg-100">third</div>
```

## Active, focus, and hover states

| _greenCSS_        | CSS class example                   |
| ----------------- | ----------------------------------- |
| active:z-{number} | .active\:z-1:active { z-index: 1; } |
| focus:z-{number}  | .focus\:z-1:focus { z-index: 1; }   |
| hover:z-{number}  | .hover\:z-1:hover { z-index: 1; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:z-1` to only apply the z-index utility class on hover.

```html
<div class="z-99 hover:z-98">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:z-1          |
| md:         | 480px - 768px  | .md:z-1          |
| lg:         | 768px - 1080px | .lg:z-1          |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:z-1` to apply the z-index auto utility at only small screen sizes at or below 480px. Or `active:md:z-1` to apply the z-index auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:z-auto` p.e. `active:md:z-auto`
1. The structure for positive z-index classes is as follows: `{conditional state}:{media query}:z-{number}` p.e. `active:md:z-50`
1. The structure for negative z-index classes is as follows: `{conditional state}:{media query}:z-neg-{number}` p.e. `active:md:z-neg-100`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                             | spoken example                                                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| active:z-{number} , focus:z-{number} , hover:z-{number}          | active z Index, focus z Index, hover z Index                                               |
| active:sm:z-{number} , focus:sm:z-{number} , hover:sm:z-{number} | active small screens z Index, focus small screens z Index, hover small screens z Index,    |
| active:md:z-{number} , focus:md:z-{number} , hover:md:z-{number} | active medium screens z Index, focus medium screens z Index, hover medium screens z Index, |
| active:lg:z-{number} , focus:lg:z-{number} , hover:lg:z-{number} | active large screens z Index, focus large screens z Index, hover large screens z Index,    |

## Sources

- [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
