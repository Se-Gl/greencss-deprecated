---
isBlog: false
title: 'Float'
date: 'Apr 08. 2022'
excerpt: 'Utility classes to control the float position of an element.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Float, layout, float-right, float-left, float-none'
classNames: ''
plainText: ' omencss css class example float-right float-right float: right; float-left float-left float: left; float-none float-none float: none; how to work with box box sizing use the `float keyword ` in order to control the wrapped position of an html element float right use the `float-right` utility class to position or float child on the right side of its parent element  float left use the `float-left` utility class to position or float child on the left side of its parent element  float none use the `float-none` utility class to disable the positioning or floating of a child element  active focus and hover states omencss css class example active:float keyword active :float-right:active float: clone; focus:float keyword focus :float-right:focus float: clone; hover:float keyword hover :float-right:hover float: clone; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:float-right` to only apply the float-right utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:float-right md: 480px 768px md:float-right lg: 768px 1080px lg:float-right omencss media queries can also be combined with active focus and hover states for example use `sm:float-right` to apply the float-right utility at only small screen sizes at or below 480px or `active:md:float-right` to apply the float-right utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :float keyword ` p e `active:md:float-right` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:float keyword focus:float keyword hover:float keyword active float right focus float right hover float right active:sm:float keyword focus:sm:float keyword hover:sm:float keyword active small screens float right focus small screens float right hover small screens float right active:md:float keyword focus:md:float keyword hover:md:float keyword active medium screens float right focus medium screens float right hover medium screens float right active:lg:float keyword focus:lg:float keyword hover:lg:float keyword active large screens float right focus large screens float right hover large screens float right sources float https: developer mozilla org en-us docs web css float '
---

| _omenCSS_   | CSS class example              |
| ----------- | ------------------------------ |
| float-right | .float-right { float: right; } |
| float-left  | .float-left { float: left; }   |
| float-none  | .float-none { float: none; }   |

## How to work with float

Use the `float-{keyword}` in order to control the wrapped position of an HTML element.

### Float Right

Use the `float-right` utility class to position or float child on the right side of its parent element.

```html
<div class="max-w-50rem">
  <h1 class="float-right font-900">omenCSS</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae consequuntur dolorum delectus quod fugit
    sapiente nihil cum, accusantium, sint deleniti ducimus similique dolor reprehenderit. Voluptatibus quisquam
    molestias repudiandae sunt.
  </p>
</div>
```

### Float Left

Use the `float-left` utility class to position or float child on the left side of its parent element.

```html
<div class="max-w-50rem">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae consequuntur dolorum delectus quod fugit
    sapiente nihil cum, accusantium, sint deleniti ducimus similique dolor reprehenderit. Voluptatibus quisquam
    molestias repudiandae sunt.
  </p>
  <h1 class="float-left font-900">omenCSS</h1>
</div>
```

### Float None

Use the `float-none` utility class to disable the positioning or floating of a child element.

```html
<div class="max-w-50rem">
  <h1 class="float-none font-900">omenCSS</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae consequuntur dolorum delectus quod fugit
    sapiente nihil cum, accusantium, sint deleniti ducimus similique dolor reprehenderit. Voluptatibus quisquam
    molestias repudiandae sunt.
  </p>
</div>
```

## Active, focus, and hover states

| _omenCSS_              | CSS class example                             |
| ---------------------- | --------------------------------------------- |
| active:float-{keyword} | .active\:float-right:active { float: clone; } |
| focus:float-{keyword}  | .focus\:float-right:focus { float: clone; }   |
| hover:float-{keyword}  | .hover\:float-right:hover { float: clone; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:float-right` to only apply the float-right utility class on hover.

```html
<div class="float-left hover:float-right">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:float-right |
| md:         | 480px - 768px  | .md:float-right |
| lg:         | 768px - 1080px | .lg:float-right |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:float-right` to apply the float-right utility at only small screen sizes at or below 480px. Or `active:md:float-right` to apply the float-right utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:float-{keyword}` p.e. `active:md:float-right`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                             | spoken example                                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:float-{keyword} , focus:float-{keyword} , hover:float-{keyword}          | active float right, focus float right, hover float right                                               |
| active:sm:float-{keyword} , focus:sm:float-{keyword} , hover:sm:float-{keyword} | active small screens float right, focus small screens float right, hover small screens float right,    |
| active:md:float-{keyword} , focus:md:float-{keyword} , hover:md:float-{keyword} | active medium screens float right, focus medium screens float right, hover medium screens float right, |
| active:lg:float-{keyword} , focus:lg:float-{keyword} , hover:lg:float-{keyword} | active large screens float right, focus large screens float right, hover large screens float right,    |

## Sources

- [float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
