---
isBlog: false
title: 'Overflow'
date: 'Apr 09. 2022'
excerpt: 'Utility classes to determine the overflow classes.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Overflow, layout, overflow-x, overflow-y'
classNames: ''
plainText: ' greenCSS css class example overflow-auto overflow-auto overflow: auto; overflow-hidden overflow-hidden overflow: hidden; overflow-clip overflow-clip overflow: clip; overflow-visible overflow-visible overflow: visible; overflow-scroll overflow-scroll overflow: scroll; overflow-x-auto overflow-x-auto overflow-x: auto; overflow-x-hidden overflow-x-hidden overflow-x: hidden; overflow-x-clip overflow-x-clip overflow-x: clip; overflow-x-visible overflow-x-visible overflow-x: visible; overflow-x-scroll overflow-x-scroll overflow-x: scroll; overflow-y-auto overflow-y-auto overflow-y: auto; overflow-y-hidden overflow-y-hidden overflow-y: hidden; overflow-y-clip overflow-y-clip overflow-y: clip; overflow-y-visible overflow-y-visible overflow-y: visible; overflow-y-scroll overflow-y-scroll overflow-y: scroll; how to work with overflow 1 use the `overflow keyword ` to display an elements content in various ways if it is too large and overflows this way the overflow behavior will be used in the horizontal and vertical axis 2 you can also use `overflow-x keyword ` to handle the overflow behavior in the horizontal axis 3 you can also use `overflow-y keyword ` to handle the overflow behavior in the vertical axis overflow auto the default class is normally `overflow-auto` as it handles the overflow automatically  overflow hidden use `overflow-hidden` to hide overlapping content  overflow visible use `overflow-visible` to show overlapping content intentionally  overflow scroll use `overflow-scroll` to provide a scrollbar in a limited area  active focus and hover states greenCSS css class example active:overflow keyword active :overflow-auto:active overflow: auto; focus:overflow keyword focus :overflow-auto:focus overflow: auto; hover:overflow keyword hover :overflow-auto:hover overflow: auto; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:overflow-hidden` to only apply the overflow-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:overflow-auto md: 480px 768px md:overflow-auto lg: 768px 1080px lg:overflow-auto greenCSS media queries can also be combined with active focus and hover states for example use `sm:overflow-auto` to apply the overflow-auto utility at only small screen sizes at or below 480px or `active:md:overflow-auto` to apply the overflow-auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :overflow keyword ` p e `active:md:overflow-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:overflow keyword focus:overflow keyword hover:overflow keyword active overflow auto focus overflow auto hover overflow auto active:sm:overflow keyword focus:sm:overflow keyword hover:sm:overflow keyword active small screens overflow auto focus small screens overflow auto hover small screens overflow auto active:md:overflow keyword focus:md:overflow keyword hover:md:overflow keyword active medium screens overflow auto focus medium screens overflow auto hover medium screens overflow auto active:lg:overflow keyword focus:lg:overflow keyword hover:lg:overflow keyword active large screens overflow auto focus large screens overflow auto hover large screens overflow auto sources overflow https: developer mozilla org en-us docs web css overflow '
---

| _greenCSS_          | CSS class example                            |
| ------------------ | -------------------------------------------- |
| overflow-auto      | .overflow-auto { overflow: auto; }           |
| overflow-hidden    | .overflow-hidden { overflow: hidden; }       |
| overflow-clip      | .overflow-clip { overflow: clip; }           |
| overflow-visible   | .overflow-visible { overflow: visible; }     |
| overflow-scroll    | .overflow-scroll { overflow: scroll; }       |
| overflow-x-auto    | .overflow-x-auto { overflow-x: auto; }       |
| overflow-x-hidden  | .overflow-x-hidden { overflow-x: hidden; }   |
| overflow-x-clip    | .overflow-x-clip { overflow-x: clip; }       |
| overflow-x-visible | .overflow-x-visible { overflow-x: visible; } |
| overflow-x-scroll  | .overflow-x-scroll { overflow-x: scroll; }   |
| overflow-y-auto    | .overflow-y-auto { overflow-y: auto; }       |
| overflow-y-hidden  | .overflow-y-hidden { overflow-y: hidden; }   |
| overflow-y-clip    | .overflow-y-clip { overflow-y: clip; }       |
| overflow-y-visible | .overflow-y-visible { overflow-y: visible; } |
| overflow-y-scroll  | .overflow-y-scroll { overflow-y: scroll; }   |

## How to work with overflow

1. Use the `overflow-{keyword}` to display an elements content in various ways, if it is too large and overflows. This way, the overflow behavior will be used in the horizontal and vertical axis.
2. You can also use `overflow-x-{keyword}` to handle the overflow behavior in the horizontal axis.
3. You can also use `overflow-y-{keyword}` to handle the overflow behavior in the vertical axis.

### Overflow Auto

The default class is normally `overflow-auto` as it handles the overflow automatically.

```html
<div class="overflow-auto">{children}</div>
```

### Overflow Hidden

Use `overflow-hidden` to hide overlapping content.

```html
<div class="overflow-hidden">{children}</div>
```

### Overflow Visible

Use `overflow-visible` to show overlapping content intentionally.

```html
<div class="overflow-visible">{children}</div>
```

### Overflow Scroll

Use `overflow-scroll` to provide a scrollbar in a limited area.

```html
<div class="max-h-50rem">
  <div class="overflow-scroll">{children}</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_                 | CSS class example                                 |
| ------------------------- | ------------------------------------------------- |
| active:overflow-{keyword} | .active\:overflow-auto:active { overflow: auto; } |
| focus:overflow-{keyword}  | .focus\:overflow-auto:focus { overflow: auto; }   |
| hover:overflow-{keyword}  | .hover\:overflow-auto:hover { overflow: auto; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:overflow-hidden` to only apply the overflow-auto utility class on hover.

```html
<div class="overflow-visible hover:overflow-hidden">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ----------------- |
| sm:         | 0px - 480px    | .sm:overflow-auto |
| md:         | 480px - 768px  | .md:overflow-auto |
| lg:         | 768px - 1080px | .lg:overflow-auto |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:overflow-auto` to apply the overflow-auto utility at only small screen sizes at or below 480px. Or `active:md:overflow-auto` to apply the overflow-auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:overflow-{keyword}` p.e. `active:md:overflow-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                      | spoken example                                                                                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:overflow-{keyword} , focus:overflow-{keyword} , hover:overflow-{keyword}          | active overflow auto, focus overflow auto, hover overflow auto                                               |
| active:sm:overflow-{keyword} , focus:sm:overflow-{keyword} , hover:sm:overflow-{keyword} | active small screens overflow auto, focus small screens overflow auto, hover small screens overflow auto,    |
| active:md:overflow-{keyword} , focus:md:overflow-{keyword} , hover:md:overflow-{keyword} | active medium screens overflow auto, focus medium screens overflow auto, hover medium screens overflow auto, |
| active:lg:overflow-{keyword} , focus:lg:overflow-{keyword} , hover:lg:overflow-{keyword} | active large screens overflow auto, focus large screens overflow auto, hover large screens overflow auto,    |

## Sources

- [overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
