---
isBlog: false
title: 'Columns'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the number of columns within html elements.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Columns, column auto, layout'
classNames: ''
plainText: ''
---

| _omenCSS_       | CSS class example                | maximum Value | maximum Value | Step  |
| --------------- | -------------------------------- | ------------- | ------------- | ----- |
| columns-auto    | .columns-auto { columns: auto; } | -             | -             | -     |
| col-{number}    | .col-1 { columns: 1; }           | 1             | 12            | +1    |
| col-{number}rem | .col-1rem { columns: 1rem; }     | 1             | 100           | +1rem |

## How to work with columns

Use the `columns-{keyword}` or col-{number}{unit} utilities to set the individual amount of columns for an element.

### Aspect auto

In the example below, we use `columns-auto` to set the height automatically according to the preselected width.

```html
<iframe class="w-75vw columns-video " src="https://www.youtube.com/..."></iframe>
```

### Aspect square

In the example below, we use `columns-square` to set an equal width and height for your iframe.

```html
<iframe class="w-75vw columns-square " src="https://www.youtube.com/..."></iframe>
```

### Aspect video

In the example below, we use `columns-video` to set an 16:9 ratio for your iframe.

```html
<iframe class="w-75vw columns-video " src="https://www.youtube.com/..."></iframe>
```

## Active, focus, and hover states

| _omenCSS_                | CSS class example                               |
| ------------------------ | ----------------------------------------------- |
| active:columns-{keyword} | .active\:columns-auto:active {columns: start; } |
| focus:columns-{keyword}  | .focus\:columns-auto:focus { columns: start; }  |
| hover:columns-{keyword}  | .hover\:columns-auto:hover { columns: start; }  |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:columns-auto` to only apply the columns-auto utility class on hover.

```html
<div class="columns-square hover:columns-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example  |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:columns-auto |
| md:         | 480px - 768px  | .md:columns-auto |
| lg:         | 768px - 1080px | .lg:columns-auto |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:columns-auto` to apply the columns-auto utility at only small screen sizes at or below 480px. Or `active:md:columns-auto` to apply the columns-auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:columns-{keyword}` p.e. `active:md:columns-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                   | spoken example                                                                                            |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:columns-{keyword} , focus:columns-{keyword} , hover:columns-{keyword}          | active columns auto, focus columns auto, hover columns auto                                               |
| active:sm:columns-{keyword} , focus:sm:columns-{keyword} , hover:sm:columns-{keyword} | active small screens columns auto, focus small screens columns auto, hover small screens columns auto,    |
| active:md:columns-{keyword} , focus:md:columns-{keyword} , hover:md:columns-{keyword} | active medium screens columns auto, focus medium screens columns auto, hover medium screens columns auto, |
| active:lg:columns-{keyword} , focus:lg:columns-{keyword} , hover:lg:columns-{keyword} | active large screens columns auto, focus large screens columns auto, hover large screens columns auto,    |

## Sources

- [columns-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/columns-ratio)
