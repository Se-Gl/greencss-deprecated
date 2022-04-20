---
isBlog: false
title: 'XYZ'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the XYZ.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'XYZ, '
classNames: ''
plainText: ''
---

| _greenCSS_       | CSS class example              | minimum Value | maximum Value | Step  |
| ---------------- | ------------------------------ | ------------- | ------------- | ----- |
| cursor-{keyword} | .cursor-xyza { cursor: xyza; } | xyzb          | xyza          | +xyzc |
| cursor-xyzb      | .cursor-xyzb { cursor: xyzb; } | -             | -             | -     |

## Custom Sizing Variables

Control the XYZ on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your XYZ `cursor-{keyword}` - ranging from xyzb to xyza with a step of +xyzc p.e. `cursor-xyzb`.

Control the XYZ on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your XYZ class `cursor-{keyword}` and apply the default CSS classes like `cursor-xyzb`.

```html
<h1 class="cursor-xyza text-30px">{title}</h1>
...
<p class="cursor-xyzb text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                             |
| ----------------------- | --------------------------------------------- |
| active:cursor-{keyword} | .active\:cursor-xyza:active { cursor: xyza; } |
| focus:cursor-{keyword}  | .focus\:cursor-xyza:focus { cursor: xyza; }   |
| hover:cursor-{keyword}  | .hover\:cursor-xyza:focus { cursor: xyza; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:cursor-xyza` to only apply the cursor-xyza utility class on hover.

```html
<div class="cursor-xyzb hover:cursor-xyza">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:cursor-xyza  |
| md:         | 480px - 768px  | .md:cursor-xyza  |
| lg:         | 768px - 1080px | .lg:cursor-xyza  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:cursor-xyza` to apply the `cursor-xyza` utility at only small screen sizes at or below 480px. Or `active:md:cursor-xyza` to apply the `cursor-xyza` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:cursor-{keyword}` p.e. `active:md:cursor-xyza`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                 |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| active:cursor-xyza , focus:cursor-xyza , hover:cursor-xyza          | active XYZ, focus XYZ, hover XYZ                                               |
| active:sm:cursor-xyza , focus:sm:cursor-xyza , hover:sm:cursor-xyza | active small screens XYZ, focus small screens XYZ, hover small screens XYZ,    |
| active:md:cursor-xyza , focus:md:cursor-xyza , hover:md:cursor-xyza | active medium screens XYZ, focus medium screens XYZ, hover medium screens XYZ, |
| active:lg:cursor-xyza , focus:lg:cursor-xyza , hover:lg:cursor-xyza | active large screens XYZ, focus large screens XYZ, hover large screens XYZ,    |

## Sources

- [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
