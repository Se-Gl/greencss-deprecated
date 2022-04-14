---
isBlog: false
title: 'Font Style'
date: 'Apr 13. 2022'
excerpt: 'Utility classes for controlling the font style.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'Font Style, typography, font-style, italic, oblique'
classNames: ''
plainText: ' greenCSS css class example font-style-normal font-style-normal font-style: normal; font-style-italic font-style-italic font-style: italic; font-style-oblique font-style-oblique font-style: oblique; font-style-initial font-style-initial font-style: initial; font-style-inherit font-style-inherit font-style: inherit; font-style-revert font-style-revert font-style: revert; font-style-unset font-style-unset font-style: unset; custom sizing variables control the font style on every html element by using the greenCSS classes shown above use the following structure to generate your font style `font-style keyword `  active focus and hover states greenCSS css class example active: variable active :font-style-normal:active font-style:: normal; focus: variable focus :font-style-normal:focus font-style:: normal; hover: variable hover :font-style-normal:focus font-style:: normal; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:font-style-normal` to only apply the font-style-normal utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:font-style-normal md: 480px 768px md:font-style-normal lg: 768px 1080px lg:font-style-normal greenCSS media queries can also be combined with active focus and hover states for example use `sm:font-style-normal` to apply the `font-style-normal` utility at only small screen sizes at or below 480px or `active:md:font-style-normal` to apply the `font-style-normal` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :font-style keyword ` p e `active:md:font-style-normal` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:font-style-normal focus:font-style-normal hover:font-style-normal active font style focus font style hover font style active:sm:font-style-normal focus:sm:font-style-normal hover:sm:font-style-normal active small screens font style focus small screens font style hover small screens font style active:md:font-style-normal focus:md:font-style-normal hover:md:font-style-normal active medium screens font style focus medium screens font style hover medium screens font style active:lg:font-style-normal focus:lg:font-style-normal hover:lg:font-style-normal active large screens font style focus large screens font style hover large screens font style sources font-style https: developer mozilla org en-us docs web css font-style '
---

| _greenCSS_         | CSS class example                            |
| ------------------ | -------------------------------------------- |
| font-style-normal  | .font-style-normal { font-style: normal; }   |
| font-style-italic  | .font-style-italic { font-style: italic; }   |
| font-style-oblique | .font-style-oblique { font-style: oblique; } |
| font-style-initial | .font-style-initial { font-style: initial; } |
| font-style-inherit | .font-style-inherit { font-style: inherit; } |
| font-style-revert  | .font-style-revert { font-style: revert; }   |
| font-style-unset   | .font-style-unset { font-style: unset; }     |

## Custom Sizing variables

Control the font style on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your font style `font-style-{keyword}`.

```html
<h1 class="font-style-normal font-900 text-30px">{title}</h1>
<h2 class="font-style-italic font-800 text-25px">{title}</h2>
...
```

## Active, focus, and hover states

| _greenCSS_        | CSS class example                                          |
| ----------------- | ---------------------------------------------------------- |
| active:{variable} | .active\:font-style-normal:active { font-style:: normal; } |
| focus:{variable}  | .focus\:font-style-normal:focus { font-style:: normal; }   |
| hover:{variable}  | .hover\:font-style-normal:focus { font-style:: normal; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:font-style-normal` to only apply the font-style-normal utility class on hover.

```html
<div class="font-style-unset hover:font-style-oblique">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example      |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:font-style-normal |
| md:         | 480px - 768px  | .md:font-style-normal |
| lg:         | 768px - 1080px | .lg:font-style-normal |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:font-style-normal` to apply the `font-style-normal` utility at only small screen sizes at or below 480px. Or `active:md:font-style-normal` to apply the `font-style-normal` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:font-style-{keyword}` p.e. `active:md:font-style-normal`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                  | spoken example                                                                                      |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:font-style-normal , focus:font-style-normal , hover:font-style-normal          | active font style, focus font style, hover font style                                               |
| active:sm:font-style-normal , focus:sm:font-style-normal , hover:sm:font-style-normal | active small screens font style, focus small screens font style, hover small screens font style,    |
| active:md:font-style-normal , focus:md:font-style-normal , hover:md:font-style-normal | active medium screens font style, focus medium screens font style, hover medium screens font style, |
| active:lg:font-style-normal , focus:lg:font-style-normal , hover:lg:font-style-normal | active large screens font style, focus large screens font style, hover large screens font style,    |

## Sources

- [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
