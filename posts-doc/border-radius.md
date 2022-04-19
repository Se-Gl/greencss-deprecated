---
isBlog: false
title: 'Border Radius'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the border radius.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Border'
author: 'Severin Glaser'
keywords: 'border radius, rounded corner'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step rounded-100px rounded-100px border-radius: 100px; 0px 100px +1px rounded-top-radius-100px rounded-top-radius-0px border-top-left-radius: 100px; border-top-right-radius: 100px; 0px 100px +1px rounded-right-radius-100px rounded-right-radius-100px border-top-right-radius: 100px; border-bottom-right-radius: 100px; 0px 100px +1px rounded-bottom-radius-100px rounded-bottom-radius-100px border-bottom-right-radius: 100px; border-bottom-left-radius: 100px; 0px 100px +1px rounded-left-radius-100px rounded-left-radius-100px border-top-left-radius: 100px; border-bottom-left-radius: 100px; 0px 100px +1px custom sizing variables control the border radius on every html element by using the greencss classes shown above use the following structure to generate rounded corners `rounded number px` ranging from 0px to 100px with a step of +1px or use the `rounded number px` to use the default css classes like `rounded-0px`  individual border of each side 1 use the `rounded-top-radius number px` class to only set a border radius on the top 2 use the `rounded-right-radius number px` class to only set a border radius on the right side 3 use the `rounded-bottom-radius number px` class to only set a border radius on the bottom side 4 use the `rounded-left-radius number px` class to only set a border radius on the left side active focus and hover states greencss css class example active:rounded number px active :rounded-100px:active border-radius: 100px; focus:rounded number px focus :rounded-100px:focus border-radius: 100px; hover:rounded number px hover :rounded-100px:focus border-radius: 100px; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:rounded-100px` to only apply the rounded-100px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:rounded-100px md: 480px 768px md:rounded-100px lg: 768px 1080px lg:rounded-100px greencss media queries can also be combined with active focus and hover states for example use `sm:rounded-100px` to apply the `rounded-100px` utility at only small screen sizes at or below 480px or `active:md:rounded-100px` to apply the `rounded-100px` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :rounded number px` p e `active:md:rounded-100px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:rounded-100px focus:rounded-100px hover:rounded-100px active border radius focus border radius hover border radius active:sm:rounded-100px focus:sm:rounded-100px hover:sm:rounded-100px active small screens border radius focus small screens border radius hover small screens border radius active:md:rounded-100px focus:md:rounded-100px hover:md:rounded-100px active medium screens border radius focus medium screens border radius hover medium screens border radius active:lg:rounded-100px focus:lg:rounded-100px hover:lg:rounded-100px active large screens border radius focus large screens border radius hover large screens border radius sources border-radius https: developer mozilla org en-us docs web css border-radius '
---

| _greenCSS_                  | CSS class example                                                                                     | minimum Value | maximum Value | Step |
| --------------------------- | ----------------------------------------------------------------------------------------------------- | ------------- | ------------- | ---- |
| rounded-100px               | .rounded-100px { border-radius: 100px; }                                                              | 0px           | 100px         | +1px |
| rounded-top-radius-100px    | .rounded-top-radius-0px { border-top-left-radius: 100px; border-top-right-radius: 100px; }            | 0px           | 100px         | +1px |
| rounded-right-radius-100px  | .rounded-right-radius-100px { border-top-right-radius: 100px; border-bottom-right-radius: 100px; }    | 0px           | 100px         | +1px |
| rounded-bottom-radius-100px | .rounded-bottom-radius-100px { border-bottom-right-radius: 100px; border-bottom-left-radius: 100px; } | 0px           | 100px         | +1px |
| rounded-left-radius-100px   | .rounded-left-radius-100px { border-top-left-radius: 100px; border-bottom-left-radius: 100px; }       | 0px           | 100px         | +1px |

## Custom Sizing Variables

Control the border radius on every HTML element by using the greenCSS classes shown above. Use the following structure to generate rounded corners `rounded-{number}px` - ranging from 0px to 100px with a step of +1px or use the `rounded-{number}px` to use the default CSS classes like `rounded-0px`.

```html
<div class="rounded-10px h-50rem w-50rem bg-green-10">{children}</div>
```

### Individual border of each side

1. Use the `rounded-top-radius-{number}px` class to only set a border radius on the top.
2. Use the `rounded-right-radius-{number}px` class to only set a border radius on the right side.
3. Use the `rounded-bottom-radius-{number}px` class to only set a border radius on the bottom side.
4. Use the `rounded-left-radius-{number}px` class to only set a border radius on the left side.

## Active, focus, and hover states

| _greenCSS_                | CSS class example                                       |
| ------------------------- | ------------------------------------------------------- |
| active:rounded-{number}px | .active\:rounded-100px:active { border-radius: 100px; } |
| focus:rounded-{number}px  | .focus\:rounded-100px:focus { border-radius: 100px; }   |
| hover:rounded-{number}px  | .hover\:rounded-100px:focus { border-radius: 100px; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:rounded-100px` to only apply the rounded-100px utility class on hover.

```html
<div class="rounded-0px hover:rounded-100px">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example  |
| ----------- | -------------- | ----------------- |
| sm:         | 0px - 480px    | .sm:rounded-100px |
| md:         | 480px - 768px  | .md:rounded-100px |
| lg:         | 768px - 1080px | .lg:rounded-100px |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:rounded-100px` to apply the `rounded-100px` utility at only small screen sizes at or below 480px. Or `active:md:rounded-100px` to apply the `rounded-100px` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:rounded-{number}px` p.e. `active:md:rounded-100px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                      | spoken example                                                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:rounded-100px , focus:rounded-100px , hover:rounded-100px          | active border radius, focus border radius, hover border radius                                               |
| active:sm:rounded-100px , focus:sm:rounded-100px , hover:sm:rounded-100px | active small screens border radius, focus small screens border radius, hover small screens border radius,    |
| active:md:rounded-100px , focus:md:rounded-100px , hover:md:rounded-100px | active medium screens border radius, focus medium screens border radius, hover medium screens border radius, |
| active:lg:rounded-100px , focus:lg:rounded-100px , hover:lg:rounded-100px | active large screens border radius, focus large screens border radius, hover large screens border radius,    |

## Sources

- [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
