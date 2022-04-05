---
isBlog: false
title: 'Place Self'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the alignment of items in relation to its horizontal and vertical axis.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Place Self, flexbox, align-items, center items, position items'
classNames: ''
plainText: ' omencss css class example place-self-auto place-self-auto place-self: auto; place-self-center place-self-center place-self: center; place-self-start place-self-start place-self: start; place-self-end place-self-end place-self: end; place-self-stretch place-self-stretch place-self: stretch; how to work with place self use the `place-self keyword ` utilities to set the individual position of an element place self auto in the example below we use `place-self-auto` to set the width and height automatically according to the parents requirements ! omencss place-self-auto images docs flex place-self-auto-stretch webp?style=centerme  place self start in the example below we use `place-self-start` to position the elements at the beginning of the horizontal and vertical axis ! omencss place-self-start images docs flex place-self-start webp?style=centerme  items-center in the example below we use `place-self-center` to position the elements in the middle of the horizontal and vertical axis ! omencss place-self-center images docs flex place-self-center webp?style=centerme  items-end in the example below we use `place-self-end` to position the elements at the end of the horizontal and vertical axis ! omencss place-self-end images docs flex place-self-end webp?style=centerme  items-stretch in the example below we use `place-self-stretch` to stretch the elements in order to cover the horizontal and vertical axis ! omencss place-self-stretch images docs flex place-self-auto-stretch webp?style=centerme  active focus and hover states omencss css class example active:place-self keyword active :place-self-start:active place-self: start; focus:place-self keyword focus :place-self-start:focus place-self: start; hover:place-self keyword hover :place-self-start:hover place-self: start; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:place-self-start` to only apply the place-self-start utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:place-self-center md: 480px 768px md:place-self-center lg: 768px 1080px lg:place-self-center omencss media queries can also be combined with active focus and hover states for example use `sm:place-self-center` to apply the place-self-center utility at only small screen sizes at or below 480px or `active:md:place-self-center` to apply the place-self-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :place-self keyword ` p e `active:md:place-self-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:place-self keyword focus:place-self keyword hover:place-self keyword active place self center focus place self center hover place self center active:sm:place-self keyword focus:sm:place-self keyword hover:sm:place-self keyword active small screens place self center focus small screens place self center hover small screens place self center active:md:place-self keyword focus:md:place-self keyword hover:md:place-self keyword active medium screens place self center focus medium screens place self center hover medium screens place self center active:lg:place-self keyword focus:lg:place-self keyword hover:lg:place-self keyword active large screens place self center focus large screens place self center hover large screens place self center sources place-self https: developer mozilla org en-us docs web css place-self '
---

| _omenCSS_          | CSS class example                            |
| ------------------ | -------------------------------------------- |
| place-self-auto    | .place-self-auto { place-self: auto; }       |
| place-self-center  | .place-self-center { place-self: center; }   |
| place-self-start   | .place-self-start { place-self: start; }     |
| place-self-end     | .place-self-end { place-self: end; }         |
| place-self-stretch | .place-self-stretch { place-self: stretch; } |

## How to work with place self

Use the `place-self-{keyword}` utilities to set the individual position of an element.

### Place self auto

In the example below, we use `place-self-auto` to set the width and height automatically according to the parents requirements.

![omencss place-self-auto](/images/docs/flex/place-self-auto-stretch.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px">
  <div class="place-self-auto bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place self start

In the example below, we use `place-self-start` to position the elements at the beginning of the horizontal and vertical axis.

![omencss place-self-start](/images/docs/flex/place-self-start.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px">
  <div class="place-self-start bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Items-center

In the example below, we use `place-self-center` to position the elements in the middle of the horizontal and vertical axis.

![omencss place-self-center](/images/docs/flex/place-self-center.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px">
  <div class="place-self-center bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Items-end

In the example below, we use `place-self-end` to position the elements at the end of the horizontal and vertical axis.

![omencss place-self-end](/images/docs/flex/place-self-end.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px">
  <div class="place-self-end bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Items-stretch

In the example below, we use `place-self-stretch` to stretch the elements in order to cover the horizontal and vertical axis.

![omencss place-self-stretch](/images/docs/flex/place-self-auto-stretch.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px">
  <div class="place-self-stretch bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_                   | CSS class example                                      |
| --------------------------- | ------------------------------------------------------ |
| active:place-self-{keyword} | .active\:place-self-start:active {place-self: start; } |
| focus:place-self-{keyword}  | .focus\:place-self-start:focus { place-self: start; }  |
| hover:place-self-{keyword}  | .hover\:place-self-start:hover { place-self: start; }  |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:place-self-start` to only apply the place-self-start utility class on hover.

```html
<div class="place-self-stretch hover:place-self-start">...</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example       |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:place-self-center |
| md:         | 480px - 768px  | .md:place-self-center |
| lg:         | 768px - 1080px | .lg:place-self-center |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:place-self-center` to apply the place-self-center utility at only small screen sizes at or below 480px. Or `active:md:place-self-center` to apply the place-self-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:place-self-{keyword}` p.e. `active:md:place-self-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                            | spoken example                                                                                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:place-self-{keyword} , focus:place-self-{keyword} , hover:place-self-{keyword}          | active place self center, focus place self center, hover place self center                                               |
| active:sm:place-self-{keyword} , focus:sm:place-self-{keyword} , hover:sm:place-self-{keyword} | active small screens place self center, focus small screens place self center, hover small screens place self center,    |
| active:md:place-self-{keyword} , focus:md:place-self-{keyword} , hover:md:place-self-{keyword} | active medium screens place self center, focus medium screens place self center, hover medium screens place self center, |
| active:lg:place-self-{keyword} , focus:lg:place-self-{keyword} , hover:lg:place-self-{keyword} | active large screens place self center, focus large screens place self center, hover large screens place self center,    |

## Sources

- [place-self](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self)
