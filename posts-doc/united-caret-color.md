---
isBlog: false
title: 'Caret Color'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the caret color.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'caret color, '
classNames: ''
plainText: ' greencss css class example minimum value maximum value step caret color number caret-green caret-color: green; default color 10 + -1 custom sizing variables control the caret color to change the input cursor color use the following structure to generate your caret color `caret color number ` ranging from the primary primary-colors secondary secondary-colors to primary primary-colors secondary secondary-colors -10 with a step of +1 or use the `caret color number ` the css classes will look like `caret-green-10` 1 check all greencss colors brand colours 2 a small number means that the color has more saturation 3 a high number has more white tones  active focus and hover states greencss css class example active:caret color number active :caret-green:active caret-color: green; focus:caret color number focus :caret-green:focus caret-color: green; hover:caret color number hover :caret-green:focus caret-color: green; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:caret-green` to only apply the caret-green utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:caret-green md: 480px 768px md:caret-green lg: 768px 1080px lg:caret-green greencss media queries can also be combined with active focus and hover states for example use `sm:caret-green` to apply the `caret-green` utility at only small screen sizes at or below 480px or `active:md:caret-green` to apply the `caret-green` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :caret color number ` p e `active:md:caret-green` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:caret-green focus:caret-green hover:caret-green active caret color focus caret color hover caret color active:sm:caret-green focus:sm:caret-green hover:sm:caret-green active small screens caret color focus small screens caret color hover small screens caret color active:md:caret-green focus:md:caret-green hover:md:caret-green active medium screens caret color focus medium screens caret color hover medium screens caret color active:lg:caret-green focus:lg:caret-green hover:lg:caret-green active large screens caret color focus large screens caret color hover large screens caret color sources caret-color https: developer mozilla org en-us docs web css caret-color '
---

| _greenCSS_             | CSS class example                    | minimum Value | maximum Value | Step |
| ---------------------- | ------------------------------------ | ------------- | ------------- | ---- |
| caret-{color}-{number} | .caret-green { caret-color: green; } | default color | 10            | +/-1 |

## Custom Sizing Variables

Control the caret color to change the input cursor color. Use the following structure to generate your caret color `caret-{color}-{number}` - ranging from the [primary](#primary-colors)/[secondary](#secondary-colors) to [primary](#primary-colors)/[secondary](#secondary-colors)-10 with a step of +1 or use the `caret-{color}-{number}`. The CSS classes will look like `caret-green-10`.

1. Check all [greenCSS colors](/brand/colours)
2. A small number means that the color has more saturation.
3. A high number has more white tones.

```html
<textarea class="caret-green"></textarea>
```

## Active, focus, and hover states

| _greenCSS_                    | CSS class example                                   |
| ----------------------------- | --------------------------------------------------- |
| active:caret-{color}-{number} | .active\:caret-green:active { caret-color: green; } |
| focus:caret-{color}-{number}  | .focus\:caret-green:focus { caret-color: green; }   |
| hover:caret-{color}-{number}  | .hover\:caret-green:focus { caret-color: green; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:caret-green` to only apply the caret-green utility class on hover.

```html
<textarea class="caret-blue active:caret-green">{children}</textarea>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:caret-green  |
| md:         | 480px - 768px  | .md:caret-green  |
| lg:         | 768px - 1080px | .lg:caret-green  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:caret-green` to apply the `caret-green` utility at only small screen sizes at or below 480px. Or `active:md:caret-green` to apply the `caret-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:caret-{color}-{number}` p.e. `active:md:caret-green`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:caret-green , focus:caret-green , hover:caret-green          | active caret color, focus caret color, hover caret color                                               |
| active:sm:caret-green , focus:sm:caret-green , hover:sm:caret-green | active small screens caret color, focus small screens caret color, hover small screens caret color,    |
| active:md:caret-green , focus:md:caret-green , hover:md:caret-green | active medium screens caret color, focus medium screens caret color, hover medium screens caret color, |
| active:lg:caret-green , focus:lg:caret-green , hover:lg:caret-green | active large screens caret color, focus large screens caret color, hover large screens caret color,    |

## Sources

- [caret-color](https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color)
