---
isBlog: false
title: 'Object Fit'
date: 'Apr 08. 2022'
excerpt: 'Utility classes to determine the layout object fit classes.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Object Fit, layout, object-contain, object-cover, object-fill, object-none, object-scale-down'
classNames: ''
plainText: ' greenCSS css class example object-contain object-contain object-fit: contain; object-cover object-cover object-fit: cover; object-fill object-fill object-fit: fill; object-none object-none object-fit: none; object-scale-down object-scale-down object-fit: scale-down; how to work with object fit use the `object keyword ` in order to display and or resize the content of an element such as an image object fit contain use the `object-contain` utility class to maintain the scale of the image smaller displays will have whitespace around the image and the image might be very small  object fit cover use the `object-cover` utility class to cover and maintain the scale of the image  object fit fill use the `object-fill` utility class to stretch the image  object fit scale down use the `object-scale-down` utility class to maintain the original image scale and adjust it according to the the parental requirements  active focus and hover states greenCSS css class example active:object keyword active :object-contain:active object-fit: contain; focus:object keyword focus :object-contain:focus object-fit: contain; hover:object keyword hover :object-contain:hover object-fit: contain; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:object-contain` to only apply the object-contain utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:object-contain md: 480px 768px md:object-contain lg: 768px 1080px lg:object-contain greenCSS media queries can also be combined with active focus and hover states for example use `sm:object-contain` to apply the object-contain utility at only small screen sizes at or below 480px or `active:md:object-contain` to apply the object-contain utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :object keyword ` p e `active:md:object-contain` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:object keyword focus:object keyword hover:object keyword active object fit contain focus object fit contain hover object fit contain active:sm:object keyword focus:sm:object keyword hover:sm:object keyword active small screens object fit contain focus small screens object fit contain hover small screens object fit contain active:md:object keyword focus:md:object keyword hover:md:object keyword active medium screens object fit contain focus medium screens object fit contain hover medium screens object fit contain active:lg:object keyword focus:lg:object keyword hover:lg:object keyword active large screens object fit contain focus large screens object fit contain hover large screens object fit contain sources object-fit https: developer mozilla org en-us docs web css object-fit '
---

| _greenCSS_        | CSS class example                              |
| ----------------- | ---------------------------------------------- |
| object-contain    | .object-contain { object-fit: contain; }       |
| object-cover      | .object-cover { object-fit: cover; }           |
| object-fill       | .object-fill { object-fit: fill; }             |
| object-none       | .object-none { object-fit: none; }             |
| object-scale-down | .object-scale-down { object-fit: scale-down; } |

## How to work with object fit

Use the `object-{keyword}` in order to display and or resize the content of an element - such as an image.

### Object Fit Contain

Use the `object-contain` utility class to maintain the scale of the image. Smaller displays will have whitespace around the image and the image might be very small.

```html
<div class="overflow-hidden max-w-50rem mx-auto">
  <img
    class="object-contain h-25rem w-100per rounded-10px"
    src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
</div>
```

### Object Fit Cover

Use the `object-cover` utility class to cover and maintain the scale of the image.

```html
<div class="overflow-hidden max-w-50rem mx-auto">
  <img
    class="object-cover h-25rem w-100per rounded-10px"
    src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
</div>
```

### Object Fit Fill

Use the `object-fill` utility class to stretch the image.

```html
<div class="overflow-hidden max-w-50rem mx-auto">
  <img
    class="object-fill h-25rem w-100per rounded-10px"
    src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
</div>
```

### Object Fit Scale Down

Use the `object-scale-down` utility class to maintain the original image scale and adjust it according to the the parental requirements.

```html
<div class="overflow-hidden max-w-50rem mx-auto">
  <img
    class="object-scale-down h-25rem w-100per rounded-10px"
    src="https://greencss.co/images/blog/blogcontent/Hero-Image.webp" />
</div>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                                       |
| ----------------------- | ------------------------------------------------------- |
| active:object-{keyword} | .active\:object-contain:active { object-fit: contain; } |
| focus:object-{keyword}  | .focus\:object-contain:focus { object-fit: contain; }   |
| hover:object-{keyword}  | .hover\:object-contain:hover { object-fit: contain; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:object-contain` to only apply the object-contain utility class on hover.

```html
<div class="object-cover hover:object-contain">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:object-contain |
| md:         | 480px - 768px  | .md:object-contain |
| lg:         | 768px - 1080px | .lg:object-contain |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:object-contain` to apply the object-contain utility at only small screen sizes at or below 480px. Or `active:md:object-contain` to apply the object-contain utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:object-{keyword}` p.e. `active:md:object-contain`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                               | spoken example                                                                                                              |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| active:object-{keyword} , focus:object-{keyword} , hover:object-{keyword}          | active object fit contain, focus object fit contain, hover object fit contain                                               |
| active:sm:object-{keyword} , focus:sm:object-{keyword} , hover:sm:object-{keyword} | active small screens object fit contain, focus small screens object fit contain, hover small screens object fit contain,    |
| active:md:object-{keyword} , focus:md:object-{keyword} , hover:md:object-{keyword} | active medium screens object fit contain, focus medium screens object fit contain, hover medium screens object fit contain, |
| active:lg:object-{keyword} , focus:lg:object-{keyword} , hover:lg:object-{keyword} | active large screens object fit contain, focus large screens object fit contain, hover large screens object fit contain,    |

## Sources

- [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
