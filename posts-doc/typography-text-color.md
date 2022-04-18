---
isBlog: false
title: 'Text Color'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text color.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text color, brand color, greenCSS color'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step text-green text-green color: 80f906; default color 10 + -1 text-green-10 text-green-10 color: f9fff3; default color 10 + -1 custom sizing variables control the text color on every html element by using the greencss classes shown above use the following structure to generate your text color `text color number ` ranging from the primary primary-colors secondary secondary-colors to primary primary-colors secondary secondary-colors -10 with a step of +1 or use the ` prefix color number ` to use the default css classes like `text-green-10` 1 check all greencss colors brand colours 2 a small number means that the color has more saturation 3 a high number has more white tones  primary colors colors determine charisma emotion feelings and memories in total greencss offers a color palette of over 11 colors whereby these are further broken down into 100 different lighter tones the primary colors are `text-` white black greencss green all color variants have ascending numbers up to 10 where 10 is the color with the most white tones secondary colors the secondary colours contain a high spectrum of diversity the primary colors are `text-` red orange yellow blue turquoise purple magenta all color variants have ascending numbers up to 10 where 10 is the color with the most white tones active focus and hover states greencss css class example active:text color number active :text-green:active color: green; focus:text color number focus :text-green:focus color: green; hover:text color number hover :text-green:focus color: green; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-green` to only apply the text-green utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:text-green md: 480px 768px md:text-green lg: 768px 1080px lg:text-green greencss media queries can also be combined with active focus and hover states for example use `sm:text-green` to apply the `text-green` utility at only small screen sizes at or below 480px or `active:md:text-green` to apply the `text-green` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :text color number ` p e `active:md:text-green` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:text-green focus:text-green hover:text-green active text color focus text color hover text color active:sm:text-green focus:sm:text-green hover:sm:text-green active small screens text color focus small screens text color hover small screens text color active:md:text-green focus:md:text-green hover:md:text-green active medium screens text color focus medium screens text color hover medium screens text color active:lg:text-green focus:lg:text-green hover:lg:text-green active large screens text color focus large screens text color hover large screens text color sources color https: developer mozilla org en-us docs web css color '
---

| _greenCSS_    | CSS class example                  | minimum Value | maximum Value | Step |
| ------------- | ---------------------------------- | ------------- | ------------- | ---- |
| text-green    | .text-green { color: #80f906; }    | default color | 10            | +/-1 |
| text-green-10 | .text-green-10 { color: #f9fff3; } | default color | 10            | +/-1 |

## Custom Sizing variables

Control the text color on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text color `text-{color}-{number}` - ranging from the [primary](#primary-colors)/[secondary](#secondary-colors) to [primary](#primary-colors)/[secondary](#secondary-colors)-10 with a step of +1 or use the `[prefix-]{color}-{number}` to use the default CSS classes like `text-green-10`.

1. Check all [greenCSS colors](/brand/colours)
2. A small number means that the color has more saturation.
3. A high number has more white tones.

```html
<h1 class="text-green text-30px">{title}</h1>
<h2 class="text-green-1 text-30px">{title}</h2>
<h2 class="text-green-2 text-30px">{title}</h2>
...
<p class="text-green-10 text-15px">{children}</p>
```

### Primary colors

Colors determine charisma, emotion, feelings, and memories. In total, greenCSS offers a color palette of over 11 colors, whereby these are further broken down into 100 different lighter tones. The primary colors are `text-` white, black, greencss, green. All color variants have ascending numbers up to 10, where 10 is the color with the most white tones.

### Secondary colors

The secondary colours contain a high spectrum of diversity. The primary colors are `text-` red, orange, yellow, blue, turquoise, purple, magenta. All color variants have ascending numbers up to 10, where 10 is the color with the most white tones.

## Active, focus, and hover states

| _greenCSS_                   | CSS class example                            |
| ---------------------------- | -------------------------------------------- |
| active:text-{color}{-number} | .active\:text-green:active { color: green; } |
| focus:text-{color}{-number}  | .focus\:text-green:focus { color: green; }   |
| hover:text-{color}{-number}  | .hover\:text-green:focus { color: green; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-green` to only apply the text-green utility class on hover.

```html
<div class="text-green-10 hover:text-green">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:text-green   |
| md:         | 480px - 768px  | .md:text-green   |
| lg:         | 768px - 1080px | .lg:text-green   |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-green` to apply the `text-green` utility at only small screen sizes at or below 480px. Or `active:md:text-green` to apply the `text-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:text-{color}-{number}` p.e. `active:md:text-green`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                             | spoken example                                                                                      |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:text-green , focus:text-green , hover:text-green          | active text color, focus text color, hover text color                                               |
| active:sm:text-green , focus:sm:text-green , hover:sm:text-green | active small screens text color, focus small screens text color, hover small screens text color,    |
| active:md:text-green , focus:md:text-green , hover:md:text-green | active medium screens text color, focus medium screens text color, hover medium screens text color, |
| active:lg:text-green , focus:lg:text-green , hover:lg:text-green | active large screens text color, focus large screens text color, hover large screens text color,    |

## Sources

- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
