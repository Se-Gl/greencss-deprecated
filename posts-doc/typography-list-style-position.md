---
isBlog: false
title: 'List Style Position'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the list style position.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'list style position, list-style-position'
classNames: ''
plainText: ' greencss css class example list-style-inside list-style-inside list-style-position: inside; list-style-outside list-style-outside list-style-position: outside; custom sizing variables control the list style position on every html element by using the greencss classes shown above use the following structure to generate your list style position `list-style keyword ` use the default css classes like `list-style-outside`  active focus and hover states greencss css class example active:list-style keyword active :list-style-inside:active list-style-position: inside; focus:list-style keyword focus :list-style-inside:focus list-style-position: inside; hover:list-style keyword hover :list-style-inside:focus list-style-position: inside; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:list-style-inside` to only apply the list-style-inside utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:list-style-inside md: 480px 768px md:list-style-inside lg: 768px 1080px lg:list-style-inside greencss media queries can also be combined with active focus and hover states for example use `sm:list-style-inside` to apply the `list-style-inside` utility at only small screen sizes at or below 480px or `active:md:list-style-inside` to apply the `list-style-inside` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :list-style keyword ` p e `active:md:list-style-inside` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:list-style-inside focus:list-style-inside hover:list-style-inside active list style position focus list style position hover list style position active:sm:list-style-inside focus:sm:list-style-inside hover:sm:list-style-inside active small screens list style position focus small screens list style position hover small screens list style position active:md:list-style-inside focus:md:list-style-inside hover:md:list-style-inside active medium screens list style position focus medium screens list style position hover medium screens list style position active:lg:list-style-inside focus:lg:list-style-inside hover:lg:list-style-inside active large screens list style position focus large screens list style position hover large screens list style position sources list-style-position https: developer mozilla org en-us docs web css list-style-position '
---

| _greenCSS_         | CSS class example                                     |
| ------------------ | ----------------------------------------------------- |
| list-style-inside  | .list-style-inside { list-style-position: inside; }   |
| list-style-outside | .list-style-outside { list-style-position: outside; } |

## Custom Sizing variables

Control the list style position on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your list style position `list-style-{keyword}`. Use the default CSS classes like `list-style-outside`.

```html
<ul class="list-style-inside">
  <li>{listelement}</li>
  ...
</ul>
```

## Active, focus, and hover states

| _greenCSS_                  | CSS class example                                                  |
| --------------------------- | ------------------------------------------------------------------ |
| active:list-style-{keyword} | .active\:list-style-inside:active { list-style-position: inside; } |
| focus:list-style-{keyword}  | .focus\:list-style-inside:focus { list-style-position: inside; }   |
| hover:list-style-{keyword}  | .hover\:list-style-inside:focus { list-style-position: inside; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:list-style-inside` to only apply the list-style-inside utility class on hover.

```html
<ul class="list-style-outside hover:list-style-inside">
  <li>{children}</li>
  ...
</ul>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example      |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:list-style-inside |
| md:         | 480px - 768px  | .md:list-style-inside |
| lg:         | 768px - 1080px | .lg:list-style-inside |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:list-style-inside` to apply the `list-style-inside` utility at only small screen sizes at or below 480px. Or `active:md:list-style-inside` to apply the `list-style-inside` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:list-style-{keyword}` p.e. `active:md:list-style-inside`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                  | spoken example                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| active:list-style-inside , focus:list-style-inside , hover:list-style-inside          | active list style position, focus list style position, hover list style position                                               |
| active:sm:list-style-inside , focus:sm:list-style-inside , hover:sm:list-style-inside | active small screens list style position, focus small screens list style position, hover small screens list style position,    |
| active:md:list-style-inside , focus:md:list-style-inside , hover:md:list-style-inside | active medium screens list style position, focus medium screens list style position, hover medium screens list style position, |
| active:lg:list-style-inside , focus:lg:list-style-inside , hover:lg:list-style-inside | active large screens list style position, focus large screens list style position, hover large screens list style position,    |

## Sources

- [list-style-position](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position)
