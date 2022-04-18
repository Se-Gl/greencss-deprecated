---
isBlog: false
title: 'Background Origin'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background origin.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background origin, border-box, padding-box, content-bo'
classNames: ''
plainText: ' greencss css class example bg-origin-border bg-origin-border background-origin: border-box; bg-origin-padding bg-origin-padding background-origin: padding-box; bg-origin-content bg-origin-content background-origin: content-box; custom sizing variables control the background origin on every html element by using the greencss classes shown above use the following structure to generate your background origin class `bg-origin keyword ` and apply the default css classes like `bg-origin-padding`  active focus and hover states greencss css class example active:bg-origin keyword active :bg-origin-border:active background-origin: border-box; focus:bg-origin keyword focus :bg-origin-border:focus background-origin: border-box; hover:bg-origin keyword hover :bg-origin-border:focus background-origin: border-box; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:bg-origin-border` to only apply the bg-origin-border utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-origin-border md: 480px 768px md:bg-origin-border lg: 768px 1080px lg:bg-origin-border greencss media queries can also be combined with active focus and hover states for example use `sm:bg-origin-border` to apply the `bg-origin-border` utility at only small screen sizes at or below 480px or `active:md:bg-origin-border` to apply the `bg-origin-border` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :bg-origin keyword ` p e `active:md:bg-origin-border` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-origin-border focus:bg-origin-border hover:bg-origin-border active background origin focus background origin hover background origin active:sm:bg-origin-border focus:sm:bg-origin-border hover:sm:bg-origin-border active small screens background origin focus small screens background origin hover small screens background origin active:md:bg-origin-border focus:md:bg-origin-border hover:md:bg-origin-border active medium screens background origin focus medium screens background origin hover medium screens background origin active:lg:bg-origin-border focus:lg:bg-origin-border hover:lg:bg-origin-border active large screens background origin focus large screens background origin hover large screens background origin sources background-origin https: developer mozilla org en-us docs web css background-origin '
---

| _greenCSS_        | CSS class example                                      |
| ----------------- | ------------------------------------------------------ |
| bg-origin-border  | .bg-origin-border { background-origin: border-box; }   |
| bg-origin-padding | .bg-origin-padding { background-origin: padding-box; } |
| bg-origin-content | .bg-origin-content { background-origin: content-box; } |

## Custom Sizing variables

Control the background origin on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background origin class `bg-origin-{keyword}` and apply the default CSS classes like `bg-origin-padding`.

```html
<div class="bg-origin-border h-50px ...">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                 | CSS class example                                                   |
| -------------------------- | ------------------------------------------------------------------- |
| active:bg-origin-{keyword} | .active\:bg-origin-border:active { background-origin: border-box; } |
| focus:bg-origin-{keyword}  | .focus\:bg-origin-border:focus { background-origin: border-box; }   |
| hover:bg-origin-{keyword}  | .hover\:bg-origin-border:focus { background-origin: border-box; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:bg-origin-border` to only apply the bg-origin-border utility class on hover.

```html
<div class="bg-origin-padding hover:bg-origin-border">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example     |
| ----------- | -------------- | -------------------- |
| sm:         | 0px - 480px    | .sm:bg-origin-border |
| md:         | 480px - 768px  | .md:bg-origin-border |
| lg:         | 768px - 1080px | .lg:bg-origin-border |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:bg-origin-border` to apply the `bg-origin-border` utility at only small screen sizes at or below 480px. Or `active:md:bg-origin-border` to apply the `bg-origin-border` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:bg-origin-{keyword}` p.e. `active:md:bg-origin-border`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                               | spoken example                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:bg-origin-border , focus:bg-origin-border , hover:bg-origin-border          | active background origin, focus background origin, hover background origin                                               |
| active:sm:bg-origin-border , focus:sm:bg-origin-border , hover:sm:bg-origin-border | active small screens background origin, focus small screens background origin, hover small screens background origin,    |
| active:md:bg-origin-border , focus:md:bg-origin-border , hover:md:bg-origin-border | active medium screens background origin, focus medium screens background origin, hover medium screens background origin, |
| active:lg:bg-origin-border , focus:lg:bg-origin-border , hover:lg:bg-origin-border | active large screens background origin, focus large screens background origin, hover large screens background origin,    |

## Sources

- [background-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)
