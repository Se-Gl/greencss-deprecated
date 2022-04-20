---
isBlog: false
title: 'Cursor'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the cursor.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'cursor, pointer, custom html cursor'
classNames: ''
plainText: ' greencss css class example cursor-auto cursor-auto cursor: auto; cursor-pointer cursor-pointer cursor: pointer; cursor-default cursor-default cursor: default; cursor-wait cursor-wait cursor: wait; cursor-text cursor-text cursor: text; cursor-move cursor-move cursor: move; cursor-help cursor-help cursor: help; cursor-not-allowed cursor-not-allowed cursor: not-allowed; cursor-none cursor-none cursor: none; cursor-context-menu cursor-context-menu cursor: context-menu; cursor-progress cursor-progress cursor: progress; cursor-cell cursor-cell cursor: cell; cursor-crosshair cursor-crosshair cursor: crosshair; cursor-vertical-text cursor-vertical-text cursor: vertical-text; cursor-alias cursor-alias cursor: alias; cursor-copy cursor-copy cursor: copy; cursor-no-drop cursor-no-drop cursor: no-drop; cursor-grab cursor-grab cursor: grab; cursor-grabbing cursor-grabbing cursor: grabbing; cursor-all-scroll cursor-all-scroll cursor: all-scroll; cursor-col-resize cursor-col-resize cursor: col-resize; cursor-row-resize cursor-row-resize cursor: row-resize; cursor-n-resize cursor-n-resize cursor: n-resize; cursor-e-resize cursor-e-resize cursor: e-resize; cursor-s-resize cursor-s-resize cursor: s-resize; cursor-w-resize cursor-w-resize cursor: w-resize; cursor-ne-resize cursor-ne-resize cursor: ne-resize; cursor-nw-resize cursor-nw-resize cursor: nw-resize; cursor-se-resize cursor-se-resize cursor: se-resize; cursor-sw-resize cursor-sw-resize cursor: sw-resize; cursor-ew-resize cursor-ew-resize cursor: ew-resize; cursor-ns-resize cursor-ns-resize cursor: ns-resize; cursor-nesw-resize cursor-nesw-resize cursor: nesw-resize; cursor-nwse-resize cursor-nwse-resize cursor: nwse-resize; cursor-zoom-in cursor-zoom-in cursor: zoom-in; cursor-zoom-out cursor-zoom-out cursor: zoom-out; custom sizing variables control the cursor on every html element by using the greencss classes shown above use the following structure to generate your cursor class `cursor keyword ` and apply the default css classes like `cursor-pointer`  active focus and hover states greencss css class example active:cursor keyword active :cursor-auto:active cursor: auto; focus:cursor keyword focus :cursor-auto:focus cursor: auto; hover:cursor keyword hover :cursor-auto:focus cursor: auto; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:cursor-auto` to only apply the cursor-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:cursor-auto md: 480px 768px md:cursor-auto lg: 768px 1080px lg:cursor-auto greencss media queries can also be combined with active focus and hover states for example use `sm:cursor-auto` to apply the `cursor-auto` utility at only small screen sizes at or below 480px or `active:md:cursor-auto` to apply the `cursor-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :cursor keyword ` p e `active:md:cursor-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:cursor-auto focus:cursor-auto hover:cursor-auto active cursor focus cursor hover cursor active:sm:cursor-auto focus:sm:cursor-auto hover:sm:cursor-auto active small screens cursor focus small screens cursor hover small screens cursor active:md:cursor-auto focus:md:cursor-auto hover:md:cursor-auto active medium screens cursor focus medium screens cursor hover medium screens cursor active:lg:cursor-auto focus:lg:cursor-auto hover:lg:cursor-auto active large screens cursor focus large screens cursor hover large screens cursor sources cursor https: developer mozilla org en-us docs web css cursor '
---

| _greenCSS_           | CSS class example                                |
| -------------------- | ------------------------------------------------ |
| cursor-auto          | .cursor-auto { cursor: auto; }                   |
| cursor-pointer       | .cursor-pointer { cursor: pointer; }             |
| cursor-default       | .cursor-default { cursor: default; }             |
| cursor-wait          | .cursor-wait { cursor: wait; }                   |
| cursor-text          | .cursor-text { cursor: text; }                   |
| cursor-move          | .cursor-move { cursor: move; }                   |
| cursor-help          | .cursor-help { cursor: help; }                   |
| cursor-not-allowed   | .cursor-not-allowed { cursor: not-allowed; }     |
| cursor-none          | .cursor-none { cursor: none; }                   |
| cursor-context-menu  | .cursor-context-menu { cursor: context-menu; }   |
| cursor-progress      | .cursor-progress { cursor: progress; }           |
| cursor-cell          | .cursor-cell { cursor: cell; }                   |
| cursor-crosshair     | .cursor-crosshair { cursor: crosshair; }         |
| cursor-vertical-text | .cursor-vertical-text { cursor: vertical-text; } |
| cursor-alias         | .cursor-alias { cursor: alias; }                 |
| cursor-copy          | .cursor-copy { cursor: copy; }                   |
| cursor-no-drop       | .cursor-no-drop { cursor: no-drop; }             |
| cursor-grab          | .cursor-grab { cursor: grab; }                   |
| cursor-grabbing      | .cursor-grabbing { cursor: grabbing; }           |
| cursor-all-scroll    | .cursor-all-scroll { cursor: all-scroll; }       |
| cursor-col-resize    | .cursor-col-resize { cursor: col-resize; }       |
| cursor-row-resize    | .cursor-row-resize { cursor: row-resize; }       |
| cursor-n-resize      | .cursor-n-resize { cursor: n-resize; }           |
| cursor-e-resize      | .cursor-e-resize { cursor: e-resize; }           |
| cursor-s-resize      | .cursor-s-resize { cursor: s-resize; }           |
| cursor-w-resize      | .cursor-w-resize { cursor: w-resize; }           |
| cursor-ne-resize     | .cursor-ne-resize { cursor: ne-resize; }         |
| cursor-nw-resize     | .cursor-nw-resize { cursor: nw-resize; }         |
| cursor-se-resize     | .cursor-se-resize { cursor: se-resize; }         |
| cursor-sw-resize     | .cursor-sw-resize { cursor: sw-resize; }         |
| cursor-ew-resize     | .cursor-ew-resize { cursor: ew-resize; }         |
| cursor-ns-resize     | .cursor-ns-resize { cursor: ns-resize; }         |
| cursor-nesw-resize   | .cursor-nesw-resize { cursor: nesw-resize; }     |
| cursor-nwse-resize   | .cursor-nwse-resize { cursor: nwse-resize; }     |
| cursor-zoom-in       | .cursor-zoom-in { cursor: zoom-in; }             |
| cursor-zoom-out      | .cursor-zoom-out { cursor: zoom-out; }           |

## Custom Sizing Variables

Control the cursor on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your cursor class `cursor-{keyword}` and apply the default CSS classes like `cursor-pointer`.

```html
<h1 class="cursor-auto text-30px">{title}</h1>
...
<a class="cursor-pointer text-15px" ...>{link}</a>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                             |
| ----------------------- | --------------------------------------------- |
| active:cursor-{keyword} | .active\:cursor-auto:active { cursor: auto; } |
| focus:cursor-{keyword}  | .focus\:cursor-auto:focus { cursor: auto; }   |
| hover:cursor-{keyword}  | .hover\:cursor-auto:focus { cursor: auto; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:cursor-auto` to only apply the cursor-auto utility class on hover.

```html
<div class="cursor-pointer hover:cursor-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:cursor-auto  |
| md:         | 480px - 768px  | .md:cursor-auto  |
| lg:         | 768px - 1080px | .lg:cursor-auto  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:cursor-auto` to apply the `cursor-auto` utility at only small screen sizes at or below 480px. Or `active:md:cursor-auto` to apply the `cursor-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:cursor-{keyword}` p.e. `active:md:cursor-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                          |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| active:cursor-auto , focus:cursor-auto , hover:cursor-auto          | active cursor, focus cursor, hover cursor                                               |
| active:sm:cursor-auto , focus:sm:cursor-auto , hover:sm:cursor-auto | active small screens cursor, focus small screens cursor, hover small screens cursor,    |
| active:md:cursor-auto , focus:md:cursor-auto , hover:md:cursor-auto | active medium screens cursor, focus medium screens cursor, hover medium screens cursor, |
| active:lg:cursor-auto , focus:lg:cursor-auto , hover:lg:cursor-auto | active large screens cursor, focus large screens cursor, hover large screens cursor,    |

## Sources

- [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
