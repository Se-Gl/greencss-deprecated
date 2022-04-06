---
isBlog: false
title: 'Display'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s display properties.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Flex, flexbox, display'
classNames: ''
plainText: ' omencss css class example display-none display-none display: none; block block display: block; inline-block inline-block display: inline-block; inline inline display: inline; flex flex display: flex; inline-flex inline-flex display: inline-flex; table table display: table; inline-table inline-table display: inline-table; table-caption table-caption display: table-caption table-cell table-cell display: table-cell table-column table-column display: table-column table-column-group table-column-group display: table-column-group table-footer-group table-footer-group display: table-footer-group table-header-group table-header-group display: table-header-group table-row-group table-row-group display: table-row-group table-row table-row display: table-row flow-root flow-root display: flow-root grid grid display: grid inline-grid inline-grid display: inline-grid contents contents display: contents list-item list-item display: list-item how to work with the keywords use the utility classes above to access your desired class display none use `display-none` to hide an element in the dom  block use `block` make an element in the dom visible  flex use `flex` to define a flex container  grid use `grid` to define a grid container  active focus and hover states omencss css class example active:display-none active :display-none:active display-none: row; focus:display-none focus :display-none:focus display-none: row; hover:display-none hover :display-none:hover display-none: row; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:display-none` to only apply the display-none utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:display-none md: 480px 768px md:display-none lg: 768px 1080px lg:display-none omencss media queries can also be combined with active focus and hover states for example use `sm:display-none` to apply the display-none utility at only small screen sizes at or below 480px or `active:md:display-none` to apply the display-none utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query : display-none-class ` p e `active:md:display-none` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:display-none focus:display-none hover:display-none active display none focus display none hover display none active:sm:display-none focus:sm:display-none hover:sm:display-none active small screens display none focus small screens display none hover small screens display none active:md:display-none focus:md:display-none hover:md:display-none active medium screens display none focus medium screens display none hover medium screens display none active:lg:display-none focus:lg:display-none hover:lg:display-none active large screens display none focus large screens display none hover large screens display none sources display https: developer mozilla org en-us docs web css display '
---

| _omenCSS_          | CSS class example                                   |
| ------------------ | --------------------------------------------------- |
| display-none       | .display-none { display: none; }                    |
| block              | .block { display: block; }                          |
| inline-block       | .inline-block { display: inline-block; }            |
| inline             | .inline { display: inline; }                        |
| flex               | .flex { display: flex; }                            |
| inline-flex        | .inline-flex { display: inline-flex; }              |
| table              | .table { display: table; }                          |
| inline-table       | .inline-table { display: inline-table; }            |
| table-caption      | .table-caption { display: table-caption }           |
| table-cell         | .table-cell { display: table-cell }                 |
| table-column       | .table-column { display: table-column }             |
| table-column-group | .table-column-group { display: table-column-group } |
| table-footer-group | .table-footer-group { display: table-footer-group } |
| table-header-group | .table-header-group { display: table-header-group } |
| table-row-group    | .table-row-group { display: table-row-group }       |
| table-row          | .table-row { display: table-row }                   |
| flow-root          | .flow-root { display: flow-root }                   |
| grid               | .grid { display: grid }                             |
| inline-grid        | .inline-grid { display: inline-grid }               |
| contents           | .contents { display: contents }                     |
| list-item          | .list-item { display: list-item }                   |

## How to work with the keywords

Use the utility classes above to access your desired class.

### Display none

Use `display-none` to hide an element in the DOM.

```html
<div class="display-none">{children}</div>
```

### Block

Use `block` make an element in the DOM visible.

```html
<div class="block">{children}</div>
```

### Flex

Use `flex` to define a flex container.

```html
<div class="flex">{children}</div>
```

### Grid

Use `grid` to define a grid container.

```html
<div class="grid">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_           | CSS class example                                   |
| ------------------- | --------------------------------------------------- |
| active:display-none | .active\:display-none:active { display-none: row; } |
| focus:display-none  | .focus\:display-none:focus { display-none: row; }   |
| hover:display-none  | .hover\:display-none:hover { display-none: row; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:display-none` to only apply the display-none utility on hover.

```html
<div class="block hover:display-none">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example  |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:display-none |
| md:         | 480px - 768px  | .md:display-none |
| lg:         | 768px - 1080px | .lg:display-none |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:display-none` to apply the display-none utility at only small screen sizes at or below 480px. Or `active:md:display-none` to apply the display-none utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{display-none-class}` p.e. `active:md:display-none`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                    | spoken example                                                                                           |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| active:display-none , focus:display-none , hover:display-none          | active display none, focus display none, hover display none                                              |
| active:sm:display-none , focus:sm:display-none , hover:sm:display-none | active small screens display none, focus small screens display none, hover small screens display none    |
| active:md:display-none , focus:md:display-none , hover:md:display-none | active medium screens display none, focus medium screens display none, hover medium screens display none |
| active:lg:display-none , focus:lg:display-none , hover:lg:display-none | active large screens display none, focus large screens display none, hover large screens display none    |

## Sources

- [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
