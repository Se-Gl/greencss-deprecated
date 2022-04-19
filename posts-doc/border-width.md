---
isBlog: false
title: 'Border Width'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the border width.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Border'
author: 'Severin Glaser'
keywords: 'border width, '
classNames: ''
plainText: ' greencss css class example minimum value maximum value step border-10px border-10px border-width: 10px; 0px 10px +1px border-x-10px border-x-10px border-left-width: 10px; border-right-width: 10px; 0px 10px +1px border-y-10px border-y-10px border-top-width: 10px; border-bottom-width: 10px; 0px 10px +1px border-top-width-10px border-top-width-10px border-top-width: 10px; 0px 10px +1px border-right-width-10px border-right-width-10px border-right-width: 10px; 0px 10px +1px border-bottom-width-10px border-bottom-width-10px border-bottom-width: 10px; 0px 10px +1px border-left-width-10px border-left-width-10px border-left-width: 10px; 0px 10px +1px custom sizing variables control the border width on every html element by using the greencss classes shown above use the following structure to generate your border on all sides width `border number px` ranging from 0px to 10px with a step of +1px or use the `border number px` to use the default css classes like `border-0px` setting a border if you want to adjust your border you need to add the following three greencss classes: 1 the border width p e `border-10px` 2 the border style p e `border-solid` 3 the border color p e `border-green`  horizontal and vertical border 1 use the `border-x number px` class to only set a border on the left and right side 2 use the `border-y number px` class to only set a border on top and bottom individual border of each side 1 use the `border-top-width number px` class to only set a border on the top 2 use the `border-right-width number px` class to only set a border on the right side 3 use the `border-bottom-width number px` class to only set a border on the bottom side 4 use the `border-left-width number px` class to only set a border on the left side active focus and hover states greencss css class example active:border number px active :border-10px:active border-width: 10px; focus:border number px focus :border-10px:focus border-width: 10px; hover:border number px hover :border-10px:focus border-width: 10px; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:border-10px` to only apply the border-10px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:border-10px md: 480px 768px md:border-10px lg: 768px 1080px lg:border-10px greencss media queries can also be combined with active focus and hover states for example use `sm:border-10px` to apply the `border-10px` utility at only small screen sizes at or below 480px or `active:md:border-10px` to apply the `border-10px` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :border number px` p e `active:md:border-10px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:border-10px focus:border-10px hover:border-10px active border width focus border width hover border width active:sm:border-10px focus:sm:border-10px hover:sm:border-10px active small screens border width focus small screens border width hover small screens border width active:md:border-10px focus:md:border-10px hover:md:border-10px active medium screens border width focus medium screens border width hover medium screens border width active:lg:border-10px focus:lg:border-10px hover:lg:border-10px active large screens border width focus large screens border width hover large screens border width sources border-width https: developer mozilla org en-us docs web css border-width '
---

| _greenCSS_               | CSS class example                                                     | minimum Value | maximum Value | Step |
| ------------------------ | --------------------------------------------------------------------- | ------------- | ------------- | ---- |
| border-10px              | .border-10px { border-width: 10px; }                                  | 0px           | 10px          | +1px |
| border-x-10px            | .border-x-10px { border-left-width: 10px; border-right-width: 10px; } | 0px           | 10px          | +1px |
| border-y-10px            | .border-y-10px { border-top-width: 10px; border-bottom-width: 10px; } | 0px           | 10px          | +1px |
| border-top-width-10px    | .border-top-width-10px { border-top-width: 10px; }                    | 0px           | 10px          | +1px |
| border-right-width-10px  | .border-right-width-10px { border-right-width: 10px; }                | 0px           | 10px          | +1px |
| border-bottom-width-10px | .border-bottom-width-10px { border-bottom-width: 10px; }              | 0px           | 10px          | +1px |
| border-left-width-10px   | .border-left-width-10px { border-left-width: 10px; }                  | 0px           | 10px          | +1px |

## Custom Sizing Variables

Control the border width on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your border on all sides width `border-{number}px` - ranging from 0px to 10px with a step of +1px or use the `border-{number}px` to use the default CSS classes like `border-0px`.

### Setting a border

If you want to adjust your border you need to add the following three greenCSS classes:

1. The border width p.e. `border-10px`
2. The [border style](/docs/border-style) p.e. `border-solid`
3. The [border color](/docs/border-color) p.e. `border-green`

```html
<div class="border-10px border-solid border-green h-50rem w-50rem bg-green-10">{title}</div>
```

### Horizontal and vertical border

1. Use the `border-x-{number}px` class to only set a border on the left and right side.
2. Use the `border-y-{number}px` class to only set a border on top and bottom.

### Individual border of each side

1. Use the `border-top-width-{number}px` class to only set a border on the top.
2. Use the `border-right-width-{number}px` class to only set a border on the right side.
3. Use the `border-bottom-width-{number}px` class to only set a border on the bottom side.
4. Use the `border-left-width-{number}px` class to only set a border on the left side.

## Active, focus, and hover states

| _greenCSS_               | CSS class example                                   |
| ------------------------ | --------------------------------------------------- |
| active:border-{number}px | .active\:border-10px:active { border-width: 10px; } |
| focus:border-{number}px  | .focus\:border-10px:focus { border-width: 10px; }   |
| hover:border-{number}px  | .hover\:border-10px:focus { border-width: 10px; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:border-10px` to only apply the border-10px utility class on hover.

```html
<div class="border-0px hover:border-10px border-solid border-green h-50rem w-50rem bg-green-10">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:border-10px  |
| md:         | 480px - 768px  | .md:border-10px  |
| lg:         | 768px - 1080px | .lg:border-10px  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:border-10px` to apply the `border-10px` utility at only small screen sizes at or below 480px. Or `active:md:border-10px` to apply the `border-10px` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:border-{number}px` p.e. `active:md:border-10px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                                            |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:border-10px , focus:border-10px , hover:border-10px          | active border width, focus border width, hover border width                                               |
| active:sm:border-10px , focus:sm:border-10px , hover:sm:border-10px | active small screens border width, focus small screens border width, hover small screens border width,    |
| active:md:border-10px , focus:md:border-10px , hover:md:border-10px | active medium screens border width, focus medium screens border width, hover medium screens border width, |
| active:lg:border-10px , focus:lg:border-10px , hover:lg:border-10px | active large screens border width, focus large screens border width, hover large screens border width,    |

## Sources

- [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
