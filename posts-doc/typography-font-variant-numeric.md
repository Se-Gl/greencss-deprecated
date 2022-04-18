---
isBlog: false
title: 'Font Variant Numeric'
date: 'Apr 13. 2022'
excerpt: 'Utility classes for controlling the Font Variant Numeric.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'Font Variant Numeric, '
classNames: ''
plainText: ' greencss css class example numeric-normal numeric-normal font-variant-numeric: normal; numeric-ordinal numeric-ordinal font-variant-numeric: ordinal; numeric-slashed-zero numeric-slashed-zero font-variant-numeric: slashed-zero; numeric-lining-nums numeric-lining-nums font-variant-numeric: lining-nums; numeric-oldstyle-nums numeric-oldstyle-nums font-variant-numeric: oldstyle-nums; numeric-proportional-nums numeric-proportional-nums font-variant-numeric: proportional-nums; numeric-tabular-nums numeric-tabular-nums font-variant-numeric: tabular-nums; numeric-diagonal-fractions numeric-diagonal-fractions font-variant-numeric: diagonal-fractions; numeric-stacked-fractions numeric-stacked-fractions font-variant-numeric: stacked-fractions; custom sizing variables control the font variant numeric on every html element by using the greencss classes shown above use the following structure to generate your font variant numeric `numeric keyword ` to use the default css classes like `numeric-ordinal`  active focus and hover states greencss css class example active:numeric keyword active :numeric-normal:active font-variant-numeric: normal; focus:numeric keyword focus :numeric-normal:focus font-variant-numeric: normal; hover:numeric keyword hover :numeric-normal:focus font-variant-numeric: normal; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:numeric-normal` to only apply the numeric-normal utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:numeric-normal md: 480px 768px md:numeric-normal lg: 768px 1080px lg:numeric-normal greencss media queries can also be combined with active focus and hover states for example use `sm:numeric-normal` to apply the `numeric-normal` utility at only small screen sizes at or below 480px or `active:md:numeric-normal` to apply the `numeric-normal` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :numeric keyword ` p e `active:md:numeric-normal` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:numeric-normal focus:numeric-normal hover:numeric-normal active font variant numeric focus font variant numeric hover font variant numeric active:sm:numeric-normal focus:sm:numeric-normal hover:sm:numeric-normal active small screens font variant numeric focus small screens font variant numeric hover small screens font variant numeric active:md:numeric-normal focus:md:numeric-normal hover:md:numeric-normal active medium screens font variant numeric focus medium screens font variant numeric hover medium screens font variant numeric active:lg:numeric-normal focus:lg:numeric-normal hover:lg:numeric-normal active large screens font variant numeric focus large screens font variant numeric hover large screens font variant numeric sources font-variant-numeric https: developer mozilla org en-us docs web css font-variant-numeric '
---

| _greenCSS_                 | CSS class example                                                         |
| -------------------------- | ------------------------------------------------------------------------- |
| numeric-normal             | .numeric-normal { font-variant-numeric: normal; }                         |
| numeric-ordinal            | .numeric-ordinal { font-variant-numeric: ordinal; }                       |
| numeric-slashed-zero       | .numeric-slashed-zero { font-variant-numeric: slashed-zero; }             |
| numeric-lining-nums        | .numeric-lining-nums { font-variant-numeric: lining-nums; }               |
| numeric-oldstyle-nums      | .numeric-oldstyle-nums { font-variant-numeric: oldstyle-nums; }           |
| numeric-proportional-nums  | .numeric-proportional-nums { font-variant-numeric: proportional-nums; }   |
| numeric-tabular-nums       | .numeric-tabular-nums { font-variant-numeric: tabular-nums; }             |
| numeric-diagonal-fractions | .numeric-diagonal-fractions { font-variant-numeric: diagonal-fractions; } |
| numeric-stacked-fractions  | .numeric-stacked-fractions { font-variant-numeric: stacked-fractions; }   |

## Custom Sizing variables

Control the Font Variant Numeric on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your Font Variant Numeric `numeric-{keyword}` to use the default CSS classes like `numeric-ordinal`.

```html
<h1 class="numeric-normal text-30px">{title}</h1>
<h2 class="numeric-ordinal text-25px">{title}</h2>
...
```

## Active, focus, and hover states

| _greenCSS_               | CSS class example                                                |
| ------------------------ | ---------------------------------------------------------------- |
| active:numeric-{keyword} | .active\:numeric-normal:active { font-variant-numeric: normal; } |
| focus:numeric-{keyword}  | .focus\:numeric-normal:focus { font-variant-numeric: normal; }   |
| hover:numeric-{keyword}  | .hover\:numeric-normal:focus { font-variant-numeric: normal; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:numeric-normal` to only apply the numeric-normal utility class on hover.

```html
<div class="numeric-ordinal hover:numeric-normal">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:numeric-normal |
| md:         | 480px - 768px  | .md:numeric-normal |
| lg:         | 768px - 1080px | .lg:numeric-normal |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:numeric-normal` to apply the `numeric-normal` utility at only small screen sizes at or below 480px. Or `active:md:numeric-normal` to apply the `numeric-normal` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:numeric-{keyword}` p.e. `active:md:numeric-normal`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                         | spoken example                                                                                                                    |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| active:numeric-normal , focus:numeric-normal , hover:numeric-normal          | active Font Variant Numeric, focus Font Variant Numeric, hover Font Variant Numeric                                               |
| active:sm:numeric-normal , focus:sm:numeric-normal , hover:sm:numeric-normal | active small screens Font Variant Numeric, focus small screens Font Variant Numeric, hover small screens Font Variant Numeric,    |
| active:md:numeric-normal , focus:md:numeric-normal , hover:md:numeric-normal | active medium screens Font Variant Numeric, focus medium screens Font Variant Numeric, hover medium screens Font Variant Numeric, |
| active:lg:numeric-normal , focus:lg:numeric-normal , hover:lg:numeric-normal | active large screens Font Variant Numeric, focus large screens Font Variant Numeric, hover large screens Font Variant Numeric,    |

## Sources

- [font-variant-numeric](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric)
