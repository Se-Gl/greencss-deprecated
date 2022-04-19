---
isBlog: false
title: 'Border Color'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the border color.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Border'
author: 'Severin Glaser'
keywords: 'border color'
classNames: ''
plainText: ''
---

| _greenCSS_     | CSS class example                      | minimum Value | maximum Value | Step |
| -------------- | -------------------------------------- | ------------- | ------------- | ---- |
| border-{color} | .border-green { border-color: green; } | default color | {color}-10    | +1   |

## Custom Sizing Variables

Control the border color on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your border color `border-{color}-{number}` - ranging from the [primary](#primary-colors)/[secondary](#secondary-colors) to [primary](#primary-colors)/[secondary](#secondary-colors)-10 with a step of +1 or use the `border-{color}-{number}`. The CSS classes will look like `border-green-10`.

1. Check all [greenCSS colors](/brand/colours)
2. A small number means that the color has more saturation.
3. A high number has more white tones.

```html
<div class="border-green border-10px border-solid h-50rem w-50rem bg-green-10">{title}</div>
```

### Setting a border

If you want to adjust your border you need to add the following three greenCSS classes:

1. The [border width](/docs/border-width) p.e. `border-10px`
2. The [border style](/docs/border-style) p.e. `border-solid`
3. The border color p.e. `border-green`

## Active, focus, and hover states

| _greenCSS_            | CSS class example                                       |
| --------------------- | ------------------------------------------------------- |
| active:border-{color} | .active\:border-green:active { border-color: #80f906; } |
| focus:border-{color}  | .focus\:border-green:focus { border-color: #80f906; }   |
| hover:border-{color}  | .hover\:border-green:focus { border-color: #80f906; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:border-green` to only apply the border-green utility class on hover.

```html
<div class="border-green-10 hover:border-green">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:border-green |
| md:         | 480px - 768px  | .md:border-green |
| lg:         | 768px - 1080px | .lg:border-green |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:border-green` to apply the `border-green` utility at only small screen sizes at or below 480px. Or `active:md:border-green` to apply the `border-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:border-{color}` p.e. `active:md:border-green`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                   | spoken example                                                                                            |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:border-green , focus:border-green , hover:border-green          | active border color, focus border color, hover border color                                               |
| active:sm:border-green , focus:sm:border-green , hover:sm:border-green | active small screens border color, focus small screens border color, hover small screens border color,    |
| active:md:border-green , focus:md:border-green , hover:md:border-green | active medium screens border color, focus medium screens border color, hover medium screens border color, |
| active:lg:border-green , focus:lg:border-green , hover:lg:border-green | active large screens border color, focus large screens border color, hover large screens border color,    |

## Sources

- [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
