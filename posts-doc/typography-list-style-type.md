---
isBlog: false
title: 'List Style Type'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the list style.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'list style type List Style Type, list style'
classNames: ''
plainText: ' greencss css class example list-style-disc list-style-disc list-style-type: disc; list-style-circle list-style-circle list-style-type: circle; list-style-square list-style-square list-style-type: square; list-style-decimal list-style-decimal list-style-type: decimal; list-style-georgian list-style-georgian list-style-type: georgian; list-style-chinese list-style-chinese list-style-type: chinese; list-style-kannada list-style-kannada list-style-type: kannada; custom sizing variables control the list style on every html element by using the greencss classes shown above use the following structure to generate your list-style `list-style keyword ` use the default css classes like `list-style-circle`  active focus and hover states greencss css class example active:list-style keyword active :list-style-disc:active list-style-type: disc; focus:list-style keyword focus :list-style-disc:focus list-style-type: disc; hover:list-style keyword hover :list-style-disc:focus list-style-type: disc; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:list-style-disc` to only apply the list-style-disc utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:list-style-disc md: 480px 768px md:list-style-disc lg: 768px 1080px lg:list-style-disc greencss media queries can also be combined with active focus and hover states for example use `sm:list-style-disc` to apply the `list-style-disc` utility at only small screen sizes at or below 480px or `active:md:list-style-disc` to apply the `list-style-disc` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :list-style keyword ` p e `active:md:list-style-disc` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:list-style-disc focus:list-style-disc hover:list-style-disc active list style type focus list style type hover list-style active:sm:list-style-disc focus:sm:list-style-disc hover:sm:list-style-disc active small screens list style type focus small screens list style type hover small screens list style type active:md:list-style-disc focus:md:list-style-disc hover:md:list-style-disc active medium screens list style type focus medium screens list style type hover medium screens list style type active:lg:list-style-disc focus:lg:list-style-disc hover:lg:list-style-disc active large screens list style type focus large screens list style type hover large screens list style type sources list-style-type https: developer mozilla org en-us docs web css list-style-type '
---

| _greenCSS_          | CSS class example                                   |
| ------------------- | --------------------------------------------------- |
| list-style-disc     | .list-style-disc { list-style-type: disc; }         |
| list-style-circle   | .list-style-circle { list-style-type: circle; }     |
| list-style-square   | .list-style-square { list-style-type: square; }     |
| list-style-decimal  | .list-style-decimal { list-style-type: decimal; }   |
| list-style-georgian | .list-style-georgian { list-style-type: georgian; } |
| list-style-chinese  | .list-style-chinese { list-style-type: chinese; }   |
| list-style-kannada  | .list-style-kannada { list-style-type: kannada; }   |

## Custom Sizing variables

Control the list style on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your list-style `list-style-{keyword}`. Use the default CSS classes like `list-style-circle`.

```html
<ul class="list-style-circle">
  <li>{listelement}</li>
  ...
</ul>
```

## Active, focus, and hover states

| _greenCSS_                  | CSS class example                                          |
| --------------------------- | ---------------------------------------------------------- |
| active:list-style-{keyword} | .active\:list-style-disc:active { list-style-type: disc; } |
| focus:list-style-{keyword}  | .focus\:list-style-disc:focus { list-style-type: disc; }   |
| hover:list-style-{keyword}  | .hover\:list-style-disc:focus { list-style-type: disc; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:list-style-disc` to only apply the list-style-disc utility class on hover.

```html
<div class="list-style-circle hover:list-style-disc">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example    |
| ----------- | -------------- | ------------------- |
| sm:         | 0px - 480px    | .sm:list-style-disc |
| md:         | 480px - 768px  | .md:list-style-disc |
| lg:         | 768px - 1080px | .lg:list-style-disc |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:list-style-disc` to apply the `list-style-disc` utility at only small screen sizes at or below 480px. Or `active:md:list-style-disc` to apply the `list-style-disc` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:list-style-{keyword}` p.e. `active:md:list-style-disc`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                            | spoken example                                                                                                  |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:list-style-disc , focus:list-style-disc , hover:list-style-disc          | active list style type focus list style type hover list-style                                                   |
| active:sm:list-style-disc , focus:sm:list-style-disc , hover:sm:list-style-disc | active small screens list style type focus small screens list style type hover small screens list style type    |
| active:md:list-style-disc , focus:md:list-style-disc , hover:md:list-style-disc | active medium screens list style type focus medium screens list style type hover medium screens list style type |
| active:lg:list-style-disc , focus:lg:list-style-disc , hover:lg:list-style-disc | active large screens list style type focus large screens list style type hover large screens list style type    |

## Sources

- [list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
