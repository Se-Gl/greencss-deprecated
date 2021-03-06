---
isBlog: false
title: 'Justify Self'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the individual alignment of a single grid elements along the horizontal axis.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Justify Self, grid, center self, center individual elements'
classNames: ''
plainText: ' greenCSS css class example justify-self-auto justify-self-auto justify-self: auto; justify-self-start justify-self-start justify-self: start; justify-self-end justify-self-end justify-self: end; justify-self-center justify-self-center justify-self: center; justify-self-stretch justify-self-stretch justify-self: stretch; how to work with justify self use the `justify-self keyword ` utilities to set where elements are positioned in contrast to justify items docs flexbox-justify-items a unique element is targeted in this case justify self auto in the example below we use `justify-self-auto` to position the elements based on the parents utility class in this case `justify-self-stretch` will be applied ! greenCSS justify-self-auto images docs flex justify-items-stretch webp?style=centerme  justify self start in the example below we use `justify-self-start` to position the elements at the beginning of its main horizontal axis ! greenCSS justify-self-start images docs flex justify-self-start webp?style=centerme  justify self center in the example below we use `justify-self-center` to position the elements at the center of its main horizontal axis ! greenCSS justify-self-center images docs flex justify-self-center webp?style=centerme  justify-self-end in the example below we use `justify-self-center` to position the elements at the end of its main horizontal axis ! greenCSS justify-self-end images docs flex justify-self-end webp?style=centerme  justify-self-stretch in the example below we use `justify-self-stretch` to only stretch a single element ! greenCSS justify-self-stretch images docs flex justify-self-stretch webp?style=centerme  active focus and hover states greenCSS css class example active:justify-self keyword active :justify-self-center:active justify-self: center; focus:justify-self keyword focus :justify-self-center:focus justify-self: center; hover:justify-self keyword hover :justify-self-center:hover justify-self: center; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:justify-self-center` to only apply the justify-self-center utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:justify-self-center md: 480px 768px md:justify-self-center lg: 768px 1080px lg:justify-self-center greenCSS media queries can also be combined with active focus and hover states for example use `sm:justify-self-center` to apply the justify-self-center utility at only small screen sizes at or below 480px or `active:md:justify-self-center` to apply the justify-self-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :justify-self keyword ` p e `active:md:justify-self-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:justify-self keyword focus:justify-self keyword hover:justify-self keyword active justify self center focus justify self center hover justify self center active:sm:justify-self keyword focus:sm:justify-self keyword hover:sm:justify-self keyword active small screens justify self center focus small screens justify self center hover small screens justify self center active:md:justify-self keyword focus:md:justify-self keyword hover:md:justify-self keyword active medium screens justify self center focus medium screens justify self center hover medium screens justify self center active:lg:justify-self keyword focus:lg:justify-self keyword hover:lg:justify-self keyword active large screens justify self center focus large screens justify self center hover large screens justify self center sources justify-self https: developer mozilla org en-us docs web css justify-self '
---

| _greenCSS_           | CSS class example                                |
| -------------------- | ------------------------------------------------ |
| justify-self-auto    | .justify-self-auto { justify-self: auto; }       |
| justify-self-start   | .justify-self-start { justify-self: start; }     |
| justify-self-end     | .justify-self-end { justify-self: end; }         |
| justify-self-center  | .justify-self-center { justify-self: center; }   |
| justify-self-stretch | .justify-self-stretch { justify-self: stretch; } |

## How to work with justify self

Use the `justify-self-{keyword}` utilities to set where elements are positioned. In contrast to [justify items](/docs/flexbox-justify-items), a unique element is targeted in this case.

### Justify self auto

In the example below, we use `justify-self-auto` to position the elements based on the parents utility class. In this case `justify-self-stretch` will be applied.

![greenCSS justify-self-auto {800x180} ](/images/docs/flex/justify-items-stretch.webp)

```html
<div class="grid justify-self-stretch gap-20px">
  <div class="justify-self-auto bg-purple">first</div>
  <div class="justify-self-auto bg-purple-3">second</div>
  <div class="justify-self-auto bg-purple-6">third</div>
</div>
```

### Justify self start

In the example below, we use `justify-self-start` to position the elements at the beginning of its main horizontal axis.

![greenCSS justify-self-start {800x180} ](/images/docs/flex/justify-self-start.webp)

```html
<div class="grid justify-items-stretch gap-20px">
  <div class="justify-self-start bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify self center

In the example below, we use `justify-self-center` to position the elements at the center of its main horizontal axis.

![greenCSS justify-self-center {800x180} ](/images/docs/flex/justify-self-center.webp)

```html
<div class="grid justify-items-stretch gap-20px">
  <div class="justify-self-center bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify-self-end

In the example below, we use `justify-self-center` to position the elements at the end of its main horizontal axis.

![greenCSS justify-self-end {800x180} ](/images/docs/flex/justify-self-end.webp)

```html
<div class="grid justify-items-stretch gap-20px">
  <div class="justify-self-end bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify-self-stretch

In the example below, we use `justify-self-stretch` to only stretch a single element.

![greenCSS justify-self-stretch {800x180} ](/images/docs/flex/justify-self-stretch.webp)

```html
<div class="grid justify-items-end gap-20px">
  <div class="justify-self-stretch bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_                    | CSS class example                                            |
| ----------------------------- | ------------------------------------------------------------ |
| active:justify-self-{keyword} | .active\:justify-self-center:active {justify-self: center; } |
| focus:justify-self-{keyword}  | .focus\:justify-self-center:focus { justify-self: center; }  |
| hover:justify-self-{keyword}  | .hover\:justify-self-center:hover { justify-self: center; }  |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:justify-self-center` to only apply the justify-self-center utility class on hover.

```html
<div class="justify-self-start hover:justify-self-center">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example        |
| ----------- | -------------- | ----------------------- |
| sm:         | 0px - 480px    | .sm:justify-self-center |
| md:         | 480px - 768px  | .md:justify-self-center |
| lg:         | 768px - 1080px | .lg:justify-self-center |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:justify-self-center` to apply the justify-self-center utility at only small screen sizes at or below 480px. Or `active:md:justify-self-center` to apply the justify-self-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:justify-self-{keyword}` p.e. `active:md:justify-self-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                                 | spoken example                                                                                                                 |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| active:justify-self-{keyword} , focus:justify-self-{keyword} , hover:justify-self-{keyword}          | active justify self center, focus justify self center, hover justify self center                                               |
| active:sm:justify-self-{keyword} , focus:sm:justify-self-{keyword} , hover:sm:justify-self-{keyword} | active small screens justify self center, focus small screens justify self center, hover small screens justify self center,    |
| active:md:justify-self-{keyword} , focus:md:justify-self-{keyword} , hover:md:justify-self-{keyword} | active medium screens justify self center, focus medium screens justify self center, hover medium screens justify self center, |
| active:lg:justify-self-{keyword} , focus:lg:justify-self-{keyword} , hover:lg:justify-self-{keyword} | active large screens justify self center, focus large screens justify self center, hover large screens justify self center,    |

## Sources

- [justify-self](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
