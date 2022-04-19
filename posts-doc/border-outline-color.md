---
isBlog: false
title: 'Outline Color'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the outline color.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Border'
author: 'Severin Glaser'
keywords: 'outline width, outline style, outline offset'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step outline-green-10 outline-green-10 outline-color: green-10; default color color -10 +1 outline-green outline-green outline-color: green; default color color -10 +1 custom sizing variables control the outline color on every html element by using the greencss classes shown above use the following structure to generate your outline border color `outline color number ` ranging from the primary primary-colors secondary secondary-colors to primary primary-colors secondary secondary-colors -10 with a step of +1 or use the `outline color number ` the css classes will look like `outline-green-10` 1 check all greencss colors brand colours 2 a small number means that the color has more saturation 3 a high number has more white tones  setting an outline button if you want to adjust your outline you need to add the following three greencss classes: 1 the outline width docs outline-width p e `outline-1px` 2 the outline style docs outline-style p e `outline-solid` 3 the outline color p e `outline-green-5` 4 optional: the outline offset docs outline-offset distance p e `outline-offset-5px` active focus and hover states greencss css class example active:outline color number active :outline-green-10:active outline-color: green-10; focus:outline color number focus :outline-green-10:focus outline-color: green-10; hover:outline color number hover :outline-green-10:focus outline-color: green-10; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:outline-green-10` to only apply the outline-green-10 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:outline-green-10 md: 480px 768px md:outline-green-10 lg: 768px 1080px lg:outline-green-10 greencss media queries can also be combined with active focus and hover states for example use `sm:outline-green-10` to apply the `outline-green-10` utility at only small screen sizes at or below 480px or `active:md:outline-green-10` to apply the `outline-green-10` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :outline color number ` p e `active:md:outline-green-10` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:outline-green-10 focus:outline-green-10 hover:outline-green-10 active outline color focus outline color hover outline color active:sm:outline-green-10 focus:sm:outline-green-10 hover:sm:outline-green-10 active small screens outline color focus small screens outline color hover small screens outline color active:md:outline-green-10 focus:md:outline-green-10 hover:md:outline-green-10 active medium screens outline color focus medium screens outline color hover medium screens outline color active:lg:outline-green-10 focus:lg:outline-green-10 hover:lg:outline-green-10 active large screens outline color focus large screens outline color hover large screens outline color sources outline-color https: developer mozilla org en-us docs web css outline-color '
---

| _greenCSS_       | CSS class example                              | minimum Value | maximum Value | Step |
| ---------------- | ---------------------------------------------- | ------------- | ------------- | ---- |
| outline-green-10 | .outline-green-10 { outline-color: green-10; } | default color | {color}-10    | +1   |
| outline-green    | .outline-green { outline-color: green; }       | default color | {color}-10    | +1   |

## Custom Sizing Variables

Control the outline color on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your outline border color `outline-{color}-{number}` - ranging from the [primary](#primary-colors)/[secondary](#secondary-colors) to [primary](#primary-colors)/[secondary](#secondary-colors)-10 with a step of +1 or use the `outline-{color}-{number}`. The CSS classes will look like `outline-green-10`.

1. Check all [greenCSS colors](/brand/colours)
2. A small number means that the color has more saturation.
3. A high number has more white tones.

```html
<button class="outline-green-5 outline-1px outline-solid outline-offset-5px text-30px">{title}</button>
```

### Setting an outline button

If you want to adjust your outline you need to add the following three greenCSS classes:

1. The [outline width](/docs/outline-width) p.e. `outline-1px`
2. The [outline style](/docs/outline-style) p.e. `outline-solid`
3. The outline color p.e. `outline-green-5`
4. Optional: the [outline offset](/docs/outline-offset) distance p.e. `outline-offset-5px`

## Active, focus, and hover states

| _greenCSS_                      | CSS class example                                             |
| ------------------------------- | ------------------------------------------------------------- |
| active:outline-{color}-{number} | .active\:outline-green-10:active { outline-color: green-10; } |
| focus:outline-{color}-{number}  | .focus\:outline-green-10:focus { outline-color: green-10; }   |
| hover:outline-{color}-{number}  | .hover\:outline-green-10:focus { outline-color: green-10; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:outline-green-10` to only apply the outline-green-10 utility class on hover.

```html
<button class="outline-green hover:outline-green-10 outline-1px outline-solid outline-offset-5px text-30px">
  {title}
</button>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example     |
| ----------- | -------------- | -------------------- |
| sm:         | 0px - 480px    | .sm:outline-green-10 |
| md:         | 480px - 768px  | .md:outline-green-10 |
| lg:         | 768px - 1080px | .lg:outline-green-10 |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:outline-green-10` to apply the `outline-green-10` utility at only small screen sizes at or below 480px. Or `active:md:outline-green-10` to apply the `outline-green-10` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:outline-{color}-{number}` p.e. `active:md:outline-green-10`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                               | spoken example                                                                                               |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:outline-green-10 , focus:outline-green-10 , hover:outline-green-10          | active outline color, focus outline color, hover outline color                                               |
| active:sm:outline-green-10 , focus:sm:outline-green-10 , hover:sm:outline-green-10 | active small screens outline color, focus small screens outline color, hover small screens outline color,    |
| active:md:outline-green-10 , focus:md:outline-green-10 , hover:md:outline-green-10 | active medium screens outline color, focus medium screens outline color, hover medium screens outline color, |
| active:lg:outline-green-10 , focus:lg:outline-green-10 , hover:lg:outline-green-10 | active large screens outline color, focus large screens outline color, hover large screens outline color,    |

## Sources

- [outline-color](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color)
