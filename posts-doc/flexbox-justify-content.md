---
isBlog: false
title: 'Justify Content'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the alignment of grid and flex elements along the horizontal axis.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Justify Content, flexbox, center elements, center items'
classNames: ''
plainText: ' omencss css class example justify-start justify-start justify-content: flex-start; justify-end justify-end justify-content: flex-end; justify-center justify-center justify-content: flex-center; justify-between justify-between justify-content: space-between; justify-around justify-around justify-content: space-around; justify-evenly justify-evenly justify-content: space-evenly; how to work with justify use the `justify keyword ` utilities to set where elements are positioned justify start in the example below we use `justify-start` to position the elements at the beginning of the main horizontal axis ! omencss justify-start images docs flex justify-content-start webp?style=centerme  justify center in the example below we use `justify-center` to position the elements in the middle of the horizontal axis ! omencss justify-center images docs flex justify-content-center webp?style=centerme  justify end in the example below we use `justify-end` to position the elements at the end of the horizontal axis ! omencss justify-end images docs flex justify-content-end webp?style=centerme  justify between in the example below we use `justify-between` to position the elements along the horizontal axis with an even space between each element ! omencss justify-between images docs flex justify-between webp?style=centerme  justify around in the example below we use `justify-around` to position the elements along the horizontal axis with an even space between each element and side ! omencss justify-around images docs flex justify-around webp?style=centerme  justify evenly in the example below we use `justify-evenly` to position the elements along the horizontal axis with an equal space between each element and the corners ! omencss justify-evenly images docs flex justify-evenly webp?style=centerme  active focus and hover states omencss css class example active:justify keyword active :justify-start:active justify-content: flex-start; focus:justify keyword focus :justify-start:focus justify-content: flex-start; hover:justify keyword hover :justify-start:hover justify-content: flex-start; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:justify-start` to only apply the justify-start utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:justify-center md: 480px 768px md:justify-center lg: 768px 1080px lg:justify-center omencss media queries can also be combined with active focus and hover states for example use `sm:justify-center` to apply the justify-center utility at only small screen sizes at or below 480px or `active:md:justify-center` to apply the justify-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :justify keyword ` p e `active:md:justify-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:justify keyword focus:justify keyword hover:justify keyword active justify center focus justify center hover justify center active:sm:justify keyword focus:sm:justify keyword hover:sm:justify keyword active small screens justify center focus small screens justify center hover small screens justify center active:md:justify keyword focus:md:justify keyword hover:md:justify keyword active medium screens justify center focus medium screens justify center hover medium screens justify center active:lg:justify keyword focus:lg:justify keyword hover:lg:justify keyword active large screens justify center focus large screens justify center hover large screens justify center sources justify-content https: developer mozilla org en-us docs web css justify-content '
---

| _omenCSS_       | CSS class example                                    |
| --------------- | ---------------------------------------------------- |
| justify-start   | .justify-start { justify-content: flex-start; }      |
| justify-end     | .justify-end { justify-content: flex-end; }          |
| justify-center  | .justify-center { justify-content: flex-center; }    |
| justify-between | .justify-between { justify-content: space-between; } |
| justify-around  | .justify-around { justify-content: space-around; }   |
| justify-evenly  | .justify-evenly { justify-content: space-evenly; }   |

## How to work with justify

Use the `justify-{keyword}` utilities to set where elements are positioned.

### Justify start

In the example below, we use `justify-start` to position the elements at the beginning of the main horizontal axis.

![omencss justify-start](/images/docs/flex/justify-content-start.webp?style=centerme)

```html
<div class="flex justify-start gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify center

In the example below, we use `justify-center` to position the elements in the middle of the horizontal axis.

![omencss justify-center](/images/docs/flex/justify-content-center.webp?style=centerme)

```html
<div class="flex justify-center gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify end

In the example below, we use `justify-end` to position the elements at the end of the horizontal axis.

![omencss justify-end](/images/docs/flex/justify-content-end.webp?style=centerme)

```html
<div class="flex justify-end gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify between

In the example below, we use `justify-between` to position the elements along the horizontal axis with an even space between each element.

![omencss justify-between](/images/docs/flex/justify-between.webp?style=centerme)

```html
<div class="flex justify-between gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify around

In the example below, we use `justify-around` to position the elements along the horizontal axis with an even space between each element and side.

![omencss justify-around](/images/docs/flex/justify-around.webp?style=centerme)

```html
<div class="flex justify-around gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Justify evenly

In the example below, we use `justify-evenly` to position the elements along the horizontal axis with an equal space between each element and the corners.

![omencss justify-evenly](/images/docs/flex/justify-evenly.webp?style=centerme)

```html
<div class="flex justify-evenly gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_                | CSS class example                                             |
| ------------------------ | ------------------------------------------------------------- |
| active:justify-{keyword} | .active\:justify-start:active {justify-content: flex-start; } |
| focus:justify-{keyword}  | .focus\:justify-start:focus { justify-content: flex-start; }  |
| hover:justify-{keyword}  | .hover\:justify-start:hover { justify-content: flex-start; }  |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:justify-start` to only apply the justify-start utility class on hover.

```html
<div class="flex justify-between hover:justify-center">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example    |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:justify-center |
| md:         | 480px - 768px  | .md:justify-center |
| lg:         | 768px - 1080px | .lg:justify-center |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:justify-center` to apply the justify-center utility at only small screen sizes at or below 480px. Or `active:md:justify-center` to apply the justify-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:justify-{keyword}` p.e. `active:md:justify-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                   | spoken example                                                                                                  |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:justify-{keyword} , focus:justify-{keyword} , hover:justify-{keyword}          | active justify center, focus justify center, hover justify center                                               |
| active:sm:justify-{keyword} , focus:sm:justify-{keyword} , hover:sm:justify-{keyword} | active small screens justify center, focus small screens justify center, hover small screens justify center,    |
| active:md:justify-{keyword} , focus:md:justify-{keyword} , hover:md:justify-{keyword} | active medium screens justify center, focus medium screens justify center, hover medium screens justify center, |
| active:lg:justify-{keyword} , focus:lg:justify-{keyword} , hover:lg:justify-{keyword} | active large screens justify center, focus large screens justify center, hover large screens justify center,    |

## Sources

- [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
