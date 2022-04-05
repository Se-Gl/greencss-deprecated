---
isBlog: false
title: 'Place Content'
date: 'Apr 05. 2022'
excerpt: 'Utility classes to control the item alignment by justifying and aligning it.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Place Content, flexbox, grid, place-content, center items'
classNames: ''
plainText: ' omencss css class example - place-content-center place-content-center place-content: center; place-content-start place-content-start place-content: start; place-content-end place-content-end place-content: end; place-content-between place-content-between place-content: space-between; place-content-around place-content-around place-content: space-around; place-content-evenly place-content-evenly place-content: space-evenly; place-content-stretch place-content-stretch place-content: stretch; how to work with place content use the place-content- keyword utilities to set where rows are positioned place-content-start in the example below we use place-content-start to position the elements at the beginning of the horizontal axis ! omencss place-content-start images docs flex place-content-start webp?style=centerme html div class=grid grid-col-2 place-content-start min-h-50vh gap-20px div class=bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div place-content-center in the example below we use place-content-center to position the elements in the middle of the vertical and horizontal axis ! omencss place-content-center images docs flex place-content-center webp?style=centerme html div class=flex place-content-center gap-20px div class=bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div place-content-end in the example below we use place-content-end to position the elements at the end of the horizontal axis ! omencss place-content-end images docs flex place-content-end webp?style=centerme html div class=flex place-content-end gap-20px div class=bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div place-content-between in the example below we use place-content-between to position the elements at the corners ! omencss place-content-between images docs flex place-content-between webp?style=centerme html div class=flex place-content-between gap-20px div class=bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div place-content-around in the example below we use place-content-around to position the elements with the same distance to each other ! omencss place-content-around images docs flex place-content-around webp?style=centerme html div class=flex place-content-around gap-20px div class=bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div place-content-evenly in the example below we use place-content-evenly to position the elements with an even amount of space on the horizontal axis ! omencss place-content-evenly images docs flex place-content-evenly webp?style=centerme html div class=flex place-content-evenly gap-20px div class=bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div place-content-stretch in the example below we use place-content-stretch to stretch the items within their grid system and along the horizontal axis ! omencss place-content-stretch images docs flex place-content-stretch webp?style=centerme html div class=flex place-content-stretch gap-20px div class=bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div active focus and hover states omencss css class example - active:place-content- keyword active :place-content-center:active place-content: start; focus:place-content- keyword focus :place-content-center:focus place-content: start; hover:place-content- keyword hover :place-content-center:hover place-content: start; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:place-content-center to only apply the place-content-center utility class on hover html div class=flex place-content-end hover:place-content-center div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - sm: 0px - 480px sm:place-content-center md: 480px - 768px md:place-content-center lg: 768px - 1080px lg:place-content-center omencss media queries can also be combined with active focus and hover states for example use sm:place-content-center to apply the place-content-center utility at only small screen sizes at or below 480px or active:md:place-content-center to apply the place-content-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: conditional state : media query :place-content- keyword p e active:md:place-content-center executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - - active:place-content- keyword focus:place-content- keyword hover:place-content- keyword active place content center focus place content center hover place content center active:sm:place-content- keyword focus:sm:place-content- keyword hover:sm:place-content- keyword active small screens place content center focus small screens place content center hover small screens place content center active:md:place-content- keyword focus:md:place-content- keyword hover:md:place-content- keyword active medium screens place content center focus medium screens place content center hover medium screens place content center active:lg:place-content- keyword focus:lg:place-content- keyword hover:lg:place-content- keyword active large screens place content center focus large screens place content center hover large screens place content center sources - place-content https: developer mozilla org en-us docs web css place-content '
---

| _omenCSS_             | CSS class example                                        |
| --------------------- | -------------------------------------------------------- |
| place-content-center  | .place-content-center { place-content: center; }         |
| place-content-start   | .place-content-start { place-content: start; }           |
| place-content-end     | .place-content-end { place-content: end; }               |
| place-content-between | .place-content-between { place-content: space-between; } |
| place-content-around  | .place-content-around { place-content: space-around; }   |
| place-content-evenly  | .place-content-evenly { place-content: space-evenly; }   |
| place-content-stretch | .place-content-stretch { place-content: stretch; }       |

## How to work with place content

Use the `place-content-{keyword}` utilities to set where rows are positioned.

### Place content start

In the example below, we use `place-content-start` to position the elements at the beginning of the horizontal axis.

![omencss place-content-start](/images/docs/flex/place-content-start.webp?style=centerme)

```html
<div class="grid grid-col-2 place-content-start min-h-50vh gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place content center

In the example below, we use `place-content-center` to position the elements in the middle of the vertical and horizontal axis.

![omencss place-content-center](/images/docs/flex/place-content-center.webp?style=centerme)

```html
<div class="flex place-content-center gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place content end

In the example below, we use `place-content-end` to position the elements at the end of the horizontal axis.

![omencss place-content-end](/images/docs/flex/place-content-end.webp?style=centerme)

```html
<div class="flex place-content-end gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place content between

In the example below, we use `place-content-between` to position the elements at the corners.

![omencss place-content-between](/images/docs/flex/place-content-between.webp?style=centerme)

```html
<div class="flex place-content-between gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place content around

In the example below, we use `place-content-around` to position the elements with the same distance to each other.

![omencss place-content-around](/images/docs/flex/place-content-around.webp?style=centerme)

```html
<div class="flex place-content-around gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place content evenly

In the example below, we use `place-content-evenly` to position the elements with an even amount of space on the horizontal axis.

![omencss place-content-evenly](/images/docs/flex/place-content-evenly.webp?style=centerme)

```html
<div class="flex place-content-evenly gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place content stretch

In the example below, we use `place-content-stretch` to stretch the items within their grid system and along the horizontal axis.

![omencss place-content-stretch](/images/docs/flex/place-content-stretch.webp?style=centerme)

```html
<div class="flex place-content-stretch gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_                      | CSS class example                                             |
| ------------------------------ | ------------------------------------------------------------- |
| active:place-content-{keyword} | .active\:place-content-center:active {place-content: start; } |
| focus:place-content-{keyword}  | .focus\:place-content-center:focus { place-content: start; }  |
| hover:place-content-{keyword}  | .hover\:place-content-center:hover { place-content: start; }  |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:place-content-center` to only apply the place-content-center utility class on hover.

```html
<div class="flex place-content-end hover:place-content-center">...</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example          |
| ----------- | -------------- | ------------------------ |
| sm:         | 0px - 480px    | .sm:place-content-center |
| md:         | 480px - 768px  | .md:place-content-center |
| lg:         | 768px - 1080px | .lg:place-content-center |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:place-content-center` to apply the place-content-center utility at only small screen sizes at or below 480px. Or `active:md:place-content-center` to apply the place-content-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:place-content-{keyword}` p.e. `active:md:place-content-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                                     | spoken example                                                                                                                    |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| active:place-content-{keyword} , focus:place-content-{keyword} , hover:place-content-{keyword}          | active place content center, focus place content center, hover place content center                                               |
| active:sm:place-content-{keyword} , focus:sm:place-content-{keyword} , hover:sm:place-content-{keyword} | active small screens place content center, focus small screens place content center, hover small screens place content center,    |
| active:md:place-content-{keyword} , focus:md:place-content-{keyword} , hover:md:place-content-{keyword} | active medium screens place content center, focus medium screens place content center, hover medium screens place content center, |
| active:lg:place-content-{keyword} , focus:lg:place-content-{keyword} , hover:lg:place-content-{keyword} | active large screens place content center, focus large screens place content center, hover large screens place content center,    |

## Sources

- [place-content](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content)
