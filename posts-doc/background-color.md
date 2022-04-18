---
isBlog: false
title: 'Background Color'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background color.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background color, '
classNames: ''
plainText: ' greencss css class example minimum value maximum value step bg-green bg-green background-color: 80f906; default color 10 + -1 bg-green-10 bg-green-10 background-color: f9fff3; default color 10 + -1 custom sizing variables control the background color on every html element by using the greencss classes shown above use the following structure to generate your background color `bg color ` ranging from the primary primary-colors secondary secondary-colors to primary primary-colors secondary secondary-colors -10 with a step of +1 or use the ` prefix color number ` to use the default css classes like `bg-green-10` 1 check all greencss colors brand colours 2 a small number means that the color has more saturation 3 a high number has more white tones  primary colors colors determine charisma emotion feelings and memories in total greencss offers a color palette of over 11 colors whereby these are further broken down into 100 different lighter tones the primary colors are `bg-` white black greencss green all color variants have ascending numbers up to 10 where 10 is the color with the most white tones secondary colors the secondary colours contain a high spectrum of diversity the primary colors are `bg-` red orange yellow blue turquoise purple magenta all color variants have ascending numbers up to 10 where 10 is the color with the most white tones active focus and hover states greencss css class example active:bg color active :bg-green:active background-color: green; focus:bg color focus :bg-green:focus background-color: green; hover:bg color hover :bg-green:focus background-color: green; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:bg-green` to only apply the bg-green utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-green md: 480px 768px md:bg-green lg: 768px 1080px lg:bg-green greencss media queries can also be combined with active focus and hover states for example use `sm:bg-green` to apply the `bg-green` utility at only small screen sizes at or below 480px or `active:md:bg-green` to apply the `bg-green` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :bg color ` p e `active:md:bg-green` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-green focus:bg-green hover:bg-green active background color focus background color hover background color active:sm:bg-green focus:sm:bg-green hover:sm:bg-green active small screens background color focus small screens background color hover small screens background color active:md:bg-green focus:md:bg-green hover:md:bg-green active medium screens background color focus medium screens background color hover medium screens background color active:lg:bg-green focus:lg:bg-green hover:lg:bg-green active large screens background color focus large screens background color hover large screens background color sources background-color https: developer mozilla org en-us docs web css background-color '
---

| _greenCSS_  | CSS class example                           | minimum Value | maximum Value | Step |
| ----------- | ------------------------------------------- | ------------- | ------------- | ---- |
| bg-green    | .bg-green { background-color: #80f906; }    | default color | 10            | +/-1 |
| bg-green-10 | .bg-green-10 { background-color: #f9fff3; } | default color | 10            | +/-1 |

## Custom Sizing variables

Control the background color on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background color `bg-{color}` - ranging from the [primary](#primary-colors)/[secondary](#secondary-colors) to [primary](#primary-colors)/[secondary](#secondary-colors)-10 with a step of +1 or use the `[prefix-]{color}-{number}` to use the default CSS classes like `bg-green-10`.

1. Check all [greenCSS colors](/brand/colours)
2. A small number means that the color has more saturation.
3. A high number has more white tones.

```html
<h1 class="bg-green text-30px">{title}</h1>
<h2 class="bg-green-1 text-30px">{title}</h2>
<h2 class="bg-green-2 text-30px">{title}</h2>
...
<p class="bg-green-10 text-15px">{children}</p>
```

### Primary colors

Colors determine charisma, emotion, feelings, and memories. In total, greenCSS offers a color palette of over 11 colors, whereby these are further broken down into 100 different lighter tones. The primary colors are `bg-` white, black, greencss, green. All color variants have ascending numbers up to 10, where 10 is the color with the most white tones.

### Secondary colors

The secondary colours contain a high spectrum of diversity. The primary colors are `bg-` red, orange, yellow, blue, turquoise, purple, magenta. All color variants have ascending numbers up to 10, where 10 is the color with the most white tones.

## Active, focus, and hover states

| _greenCSS_                 | CSS class example                                     |
| -------------------------- | ----------------------------------------------------- |
| active:bg-{color}{-number} | .active\:bg-green:active { background-color: green; } |
| focus:bg-{color}{-number}  | .focus\:bg-green:focus { background-color: green; }   |
| hover:bg-{color}{-number}  | .hover\:bg-green:focus { background-color: green; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:bg-green` to only apply the bg-green utility class on hover.

```html
<div class="bg-green-10 hover:bg-green">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:bg-green     |
| md:         | 480px - 768px  | .md:bg-green     |
| lg:         | 768px - 1080px | .lg:bg-green     |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:bg-green` to apply the `bg-green` utility at only small screen sizes at or below 480px. Or `active:md:bg-green` to apply the `bg-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:bg-{color}` p.e. `active:md:bg-green`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                       | spoken example                                                                                                        |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:bg-green , focus:bg-green , hover:bg-green          | active background color, focus background color, hover background color                                               |
| active:sm:bg-green , focus:sm:bg-green , hover:sm:bg-green | active small screens background color, focus small screens background color, hover small screens background color,    |
| active:md:bg-green , focus:md:bg-green , hover:md:bg-green | active medium screens background color, focus medium screens background color, hover medium screens background color, |
| active:lg:bg-green , focus:lg:bg-green , hover:lg:bg-green | active large screens background color, focus large screens background color, hover large screens background color,    |

## Sources

- [background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
