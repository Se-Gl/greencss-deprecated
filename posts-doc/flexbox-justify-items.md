---
isBlog: false
title: 'Justify Items'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the alignment of grid elements along the horizontal axis.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Justify Items, flexbox, center items, center elements'
classNames: ''
plainText: ' greenCSS css class example justify-items-center justify-items-center justify-items: start; justify-items-end justify-items-end justify-items: end; justify-items-center justify-items-center justify-items: center; justify-items-stretch justify-items-stretch justify-items: stretch; how to work with justify items use the `justify-items keyword ` utilities to set where elements are positioned in contrast to justify self docs flexbox-justify-self all elements are targeted in this case justify items start in the example below we use `justify-items-center` to position the elements at the beginning of the main horizontal axis and within their parents container ! greenCSS justify-items-center images docs flex justify-items-center webp?style=centerme  justify items end in the example below we use `justify-items-end` to position the elements at the end of the main horizontal axis and within their parents container ! greenCSS justify-items-end images docs flex justify-items-end webp?style=centerme  justify items center in the example below we use `justify-items-center` to position the elements at the center of the main horizontal axis and within their parents container ! greenCSS justify-items-center images docs flex justify-items-center webp?style=centerme  justify items stretch in the example below we use `justify-items-stretch` to stretch the elements within their parents container ! greenCSS justify-items-stretch images docs flex justify-items-stretch webp?style=centerme  active focus and hover states greenCSS css class example active:justify-items keyword active :justify-items-center:active justify-items: center; focus:justify-items keyword focus :justify-items-center:focus justify-items: center; hover:justify-items keyword hover :justify-items-center:hover justify-items: center; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:justify-items-center` to only apply the justify-items-center utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:justify-items-center md: 480px 768px md:justify-items-center lg: 768px 1080px lg:justify-items-center greenCSS media queries can also be combined with active focus and hover states for example use `sm:justify-items-center` to apply the justify-items-center utility at only small screen sizes at or below 480px or `active:md:justify-items-center` to apply the justify-items-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :justify-items keyword ` p e `active:md:justify-items-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:justify-items keyword focus:justify-items keyword hover:justify-items keyword active justify items center focus justify items center hover justify items center active:sm:justify-items keyword focus:sm:justify-items keyword hover:sm:justify-items keyword active small screens justify items center focus small screens justify items center hover small screens justify items center active:md:justify-items keyword focus:md:justify-items keyword hover:md:justify-items keyword active medium screens justify items center focus medium screens justify items center hover medium screens justify items center active:lg:justify-items keyword focus:lg:justify-items keyword hover:lg:justify-items keyword active large screens justify items center focus large screens justify items center hover large screens justify items center sources justify-items https: developer mozilla org en-us docs web css justify-items '
---

| _greenCSS_            | CSS class example                                  |
| --------------------- | -------------------------------------------------- |
| justify-items-center  | .justify-items-center { justify-items: start; }    |
| justify-items-end     | .justify-items-end { justify-items: end; }         |
| justify-items-center  | .justify-items-center { justify-items: center; }   |
| justify-items-stretch | .justify-items-stretch { justify-items: stretch; } |

## How to work with justify items

Use the `justify-items-{keyword}` utilities to set where elements are positioned. In contrast to [justify self](/docs/flexbox-justify-self), all elements are targeted in this case.

### Justify items start

In the example below, we use `justify-items-center` to position the elements at the beginning of the main horizontal axis and within their parents container.

![greenCSS justify-items-center](/images/docs/flex/justify-items-center.webp?style=centerme)

```html
<div class="grid justify-items-center gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify items end

In the example below, we use `justify-items-end` to position the elements at the end of the main horizontal axis and within their parents container.

![greenCSS justify-items-end](/images/docs/flex/justify-items-end.webp?style=centerme)

```html
<div class="grid justify-items-end gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify items center

In the example below, we use `justify-items-center` to position the elements at the center of the main horizontal axis and within their parents container.

![greenCSS justify-items-center](/images/docs/flex/justify-items-center.webp?style=centerme)

```html
<div class="grid justify-items-center gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify items stretch

In the example below, we use `justify-items-stretch` to stretch the elements within their parents container.

![greenCSS justify-items-stretch](/images/docs/flex/justify-items-stretch.webp?style=centerme)

```html
<div class="grid justify-items-stretch gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_                     | CSS class example                                              |
| ------------------------------ | -------------------------------------------------------------- |
| active:justify-items-{keyword} | .active\:justify-items-center:active {justify-items: center; } |
| focus:justify-items-{keyword}  | .focus\:justify-items-center:focus { justify-items: center; }  |
| hover:justify-items-{keyword}  | .hover\:justify-items-center:hover { justify-items: center; }  |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:justify-items-center` to only apply the justify-items-center utility class on hover.

```html
<div class="flex justify-items-stretch hover:justify-items-center">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example         |
| ----------- | -------------- | ------------------------ |
| sm:         | 0px - 480px    | .sm:justify-items-center |
| md:         | 480px - 768px  | .md:justify-items-center |
| lg:         | 768px - 1080px | .lg:justify-items-center |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:justify-items-center` to apply the justify-items-center utility at only small screen sizes at or below 480px. Or `active:md:justify-items-center` to apply the justify-items-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:justify-items-{keyword}` p.e. `active:md:justify-items-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                                    | spoken example                                                                                                                    |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| active:justify-items-{keyword} , focus:justify-items-{keyword} , hover:justify-items-{keyword}          | active justify items center, focus justify items center, hover justify items center                                               |
| active:sm:justify-items-{keyword} , focus:sm:justify-items-{keyword} , hover:sm:justify-items-{keyword} | active small screens justify items center, focus small screens justify items center, hover small screens justify items center,    |
| active:md:justify-items-{keyword} , focus:md:justify-items-{keyword} , hover:md:justify-items-{keyword} | active medium screens justify items center, focus medium screens justify items center, hover medium screens justify items center, |
| active:lg:justify-items-{keyword} , focus:lg:justify-items-{keyword} , hover:lg:justify-items-{keyword} | active large screens justify items center, focus large screens justify items center, hover large screens justify items center,    |

## Sources

- [justify-items](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
