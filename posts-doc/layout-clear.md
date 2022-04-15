---
isBlog: false
title: 'Clear'
date: 'Apr 08. 2022'
excerpt: 'Utility classes to control the clearance of an element.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Clear, layout, clear-right, clear-left, clear-none, clear-both'
classNames: ''
plainText: ' greenCSS css class example clear-right clear-right clear: right; clear-left clear-left clear: left; clear-none clear-none clear: none; clear-both clear-both clear: both; how to work with box box sizing use the `clear keyword ` in order to clear the content below the element on the desired side this approach is useful for blog posts or news articles if an element such as an image or the first letter should stand out clear right use the `clear-right` utility class to clear a child on the right side of its parent element  clear left use the `clear-left` utility class to clear a child on the left side of its parent element  clear both use the `clear-both` utility class to clear all children  clear none use the `clear-none` utility class to disable the clearance of all elements  active focus and hover states greenCSS css class example active:clear keyword active :clear-right:active clear: clone; focus:clear keyword focus :clear-right:focus clear: clone; hover:clear keyword hover :clear-right:hover clear: clone; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:clear-right` to only apply the clear-right utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:clear-right md: 480px 768px md:clear-right lg: 768px 1080px lg:clear-right greenCSS media queries can also be combined with active focus and hover states for example use `sm:clear-right` to apply the clear-right utility at only small screen sizes at or below 480px or `active:md:clear-right` to apply the clear-right utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :clear keyword ` p e `active:md:clear-right` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:clear keyword focus:clear keyword hover:clear keyword active clear right focus clear right hover clear right active:sm:clear keyword focus:sm:clear keyword hover:sm:clear keyword active small screens clear right focus small screens clear right hover small screens clear right active:md:clear keyword focus:md:clear keyword hover:md:clear keyword active medium screens clear right focus medium screens clear right hover medium screens clear right active:lg:clear keyword focus:lg:clear keyword hover:lg:clear keyword active large screens clear right focus large screens clear right hover large screens clear right sources clear https: developer mozilla org en-us docs web css clear '
---

| _greenCSS_  | CSS class example              |
| ----------- | ------------------------------ |
| clear-right | .clear-right { clear: right; } |
| clear-left  | .clear-left { clear: left; }   |
| clear-none  | .clear-none { clear: none; }   |
| clear-both  | .clear-both { clear: both; }   |

## How to work with clear

Use the `clear-{keyword}` in order to clear the content below the element on the desired side. This approach is useful for blog posts or news articles, if an element - such as an image or the first letter - should stand out.

### Clear Right

Use the `clear-right` utility class to clear a child on the right side of its parent element.

```html
<div class="max-w-50rem h-auto">
  <img class="float-right w-100px h-100px" src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
  <p class="clear-right ...">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere veritatis nemo adipisci doloribus soluta id?
    Doloremque delectus, quas ipsa tempore laboriosam nostrum nisi molestiae voluptatibus numquam, tempora ipsum
    temporibus.
  </p>
</div>
```

### Clear Left

Use the `clear-left` utility class to clear a child on the left side of its parent element.

```html
<div class="max-w-50rem">
  <span class="float-left font-900">L</span>
  <p class="clear-left">
    orem ipsum dolor sit amet consectetur adipisicing elit. Quas facere veritatis nemo adipisci doloribus soluta id?
    Doloremque delectus, quas ipsa tempore laboriosam nostrum nisi molestiae voluptatibus numquam, tempora ipsum
    temporibus.
  </p>
</div>
```

### Clear Both

Use the `clear-both` utility class to clear all children.

```html
<div class="max-w-50rem">
  <img class="float-left w-100px h-100px" src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
  <img class="float-right w-100px h-100px" src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
  <p class="clear-both">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere veritatis nemo adipisci doloribus soluta id?
    Doloremque delectus, quas ipsa tempore laboriosam nostrum nisi molestiae voluptatibus numquam, tempora ipsum
    temporibus.
  </p>
</div>
```

### Clear None

Use the `clear-none` utility class to disable the clearance of all elements.

```html
<div class="max-w-50rem">
  <img class="float-left w-100px h-100px" src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
  <img class="float-right w-100px h-100px" src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
  <p class="clear-none">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere veritatis nemo adipisci doloribus soluta id?
    Doloremque delectus, quas ipsa tempore laboriosam nostrum nisi molestiae voluptatibus numquam, tempora ipsum
    temporibus.
  </p>
</div>
```

## Active, focus, and hover states

| _greenCSS_             | CSS class example                             |
| ---------------------- | --------------------------------------------- |
| active:clear-{keyword} | .active\:clear-right:active { clear: clone; } |
| focus:clear-{keyword}  | .focus\:clear-right:focus { clear: clone; }   |
| hover:clear-{keyword}  | .hover\:clear-right:hover { clear: clone; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:clear-right` to only apply the clear-right utility class on hover.

```html
<div class="clear-left hover:clear-right">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:clear-right  |
| md:         | 480px - 768px  | .md:clear-right  |
| lg:         | 768px - 1080px | .lg:clear-right  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:clear-right` to apply the clear-right utility at only small screen sizes at or below 480px. Or `active:md:clear-right` to apply the clear-right utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:clear-{keyword}` p.e. `active:md:clear-right`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                            | spoken example                                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:clear-{keyword} , focus:clear-{keyword} , hover:clear-{keyword}          | active clear right, focus clear right, hover clear right                                               |
| active:sm:clear-{keyword} , focus:sm:clear-{keyword} , hover:sm:clear-{keyword} | active small screens clear right, focus small screens clear right, hover small screens clear right,    |
| active:md:clear-{keyword} , focus:md:clear-{keyword} , hover:md:clear-{keyword} | active medium screens clear right, focus medium screens clear right, hover medium screens clear right, |
| active:lg:clear-{keyword} , focus:lg:clear-{keyword} , hover:lg:clear-{keyword} | active large screens clear right, focus large screens clear right, hover large screens clear right,    |

## Sources

- [clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
