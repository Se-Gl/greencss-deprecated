---
isBlog: false
title: 'Accent Color'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the accent color.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'accent color'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step accent color number accent-green accent-color: green; default color 10 + -1 custom sizing variables control the accent color on every html input or radio element by using the greencss classes shown above use the following structure to generate your accent color `accent color number ` ranging from the primary primary-colors secondary secondary-colors to primary primary-colors secondary secondary-colors -10 with a step of +1 or use the `accent color number ` the css classes will look like `accent-green-10` 1 check all greencss colors brand colours 2 a small number means that the color has more saturation 3 a high number has more white tones  active focus and hover states greencss css class example active:accent color number active :accent-green:active accent-color: green; focus:accent color number focus :accent-green:focus accent-color: green; hover:accent color number hover :accent-green:focus accent-color: green; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:accent-green` to only apply the accent-green utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:accent-green md: 480px 768px md:accent-green lg: 768px 1080px lg:accent-green greencss media queries can also be combined with active focus and hover states for example use `sm:accent-green` to apply the `accent-green` utility at only small screen sizes at or below 480px or `active:md:accent-green` to apply the `accent-green` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :accent color number ` p e `active:md:accent-green` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:accent-green focus:accent-green hover:accent-green active accent color focus accent color hover accent color active:sm:accent-green focus:sm:accent-green hover:sm:accent-green active small screens accent color focus small screens accent color hover small screens accent color active:md:accent-green focus:md:accent-green hover:md:accent-green active medium screens accent color focus medium screens accent color hover medium screens accent color active:lg:accent-green focus:lg:accent-green hover:lg:accent-green active large screens accent color focus large screens accent color hover large screens accent color sources accent-color https: developer mozilla org en-us docs web css accent-color '
---

| _greenCSS_              | CSS class example                      | minimum Value | maximum Value | Step |
| ----------------------- | -------------------------------------- | ------------- | ------------- | ---- |
| accent-{color}-{number} | .accent-green { accent-color: green; } | default color | 10            | +/-1 |

## Custom Sizing Variables

Control the accent color on every HTML input or radio element by using the greenCSS classes shown above. Use the following structure to generate your accent color `accent-{color}-{number}` - ranging from the [primary](#primary-colors)/[secondary](#secondary-colors) to [primary](#primary-colors)/[secondary](#secondary-colors)-10 with a step of +1 or use the `accent-{color}-{number}`. The CSS classes will look like `accent-green-10`.

1. Check all [greenCSS colors](/brand/colours)
2. A small number means that the color has more saturation.
3. A high number has more white tones.

```html
<label>
    <input type="checkbox" class="accent-green" checked>{input}</input>
</label>
```

## Active, focus, and hover states

| _greenCSS_                     | CSS class example                                     |
| ------------------------------ | ----------------------------------------------------- |
| active:accent-{color}-{number} | .active\:accent-green:active { accent-color: green; } |
| focus:accent-{color}-{number}  | .focus\:accent-green:focus { accent-color: green; }   |
| hover:accent-{color}-{number}  | .hover\:accent-green:focus { accent-color: green; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:accent-green` to only apply the accent-green utility class on hover.

```html
<label>
    <input type="checkbox" class="accent-green-10 hover:accent-green" checked>{input}</input>
</label>

```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:accent-green |
| md:         | 480px - 768px  | .md:accent-green |
| lg:         | 768px - 1080px | .lg:accent-green |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:accent-green` to apply the `accent-green` utility at only small screen sizes at or below 480px. Or `active:md:accent-green` to apply the `accent-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:accent-{color}-{number}` p.e. `active:md:accent-green`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                   | spoken example                                                                                            |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:accent-green , focus:accent-green , hover:accent-green          | active accent color, focus accent color, hover accent color                                               |
| active:sm:accent-green , focus:sm:accent-green , hover:sm:accent-green | active small screens accent color, focus small screens accent color, hover small screens accent color,    |
| active:md:accent-green , focus:md:accent-green , hover:md:accent-green | active medium screens accent color, focus medium screens accent color, hover medium screens accent color, |
| active:lg:accent-green , focus:lg:accent-green , hover:lg:accent-green | active large screens accent color, focus large screens accent color, hover large screens accent color,    |

## Sources

- [accent-color](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color)
