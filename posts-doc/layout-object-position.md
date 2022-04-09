---
isBlog: false
title: 'Object Position'
date: 'Apr 09. 2022'
excerpt: 'Utility classes to determine the layout object position.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Object Position, layout, object-position top, right, bottom, left'
classNames: ''
plainText: ' omencss css class example object-position-top object-position-top object-position: top; object-position-right-top object-position-right-top object-position: right top; object-position-right object-position-right object-position: right; object-position-right-bottom object-position-right-bottom object-position: right bottom; object-position-bottom object-position-bottom object-position: bottom; object-position-center object-position-center object-position: center; object-position-left-bottom object-position-left-bottom object-position: left bottom; object-position-left object-position-left object-position: left; object-position-left-top object-position-left-top object-position: left top; how to work with object fit use the `object-position keyword ` in order to determine the visual position of a section in an image object position center the default class is normally `object-position-center` as the viewport is set to the center of the image  object position-keyword use the `object-position keyword ` utility class to set the angle of view for example you can use `object-position-right-top` in order to focus the top right corner of the image  active focus and hover states omencss css class example active:object-position keyword active :object-position-center:active object-position: contain; focus:object-position keyword focus :object-position-center:focus object-position: contain; hover:object-position keyword hover :object-position-center:hover object-position: contain; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:object-position-center` to only apply the object-position-center utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:object-position-center md: 480px 768px md:object-position-center lg: 768px 1080px lg:object-position-center omencss media queries can also be combined with active focus and hover states for example use `sm:object-position-center` to apply the object-position-center utility at only small screen sizes at or below 480px or `active:md:object-position-center` to apply the object-position-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :object-position keyword ` p e `active:md:object-position-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:object-position keyword focus:object-position keyword hover:object-position keyword active object position center focus object position center hover object position center active:sm:object-position keyword focus:sm:object-position keyword hover:sm:object-position keyword active small screens object position center focus small screens object position center hover small screens object position center active:md:object-position keyword focus:md:object-position keyword hover:md:object-position keyword active medium screens object position center focus medium screens object position center hover medium screens object position center active:lg:object-position keyword focus:lg:object-position keyword hover:lg:object-position keyword active large screens object position center focus large screens object position center hover large screens object position center sources object-position https: developer mozilla org en-us docs web css object-position '
---

| _omenCSS_                    | CSS class example                                                |
| ---------------------------- | ---------------------------------------------------------------- |
| object-position-top          | .object-position-top { object-position: top; }                   |
| object-position-right-top    | .object-position-right-top { object-position: right top; }       |
| object-position-right        | .object-position-right { object-position: right; }               |
| object-position-right-bottom | .object-position-right-bottom { object-position: right bottom; } |
| object-position-bottom       | .object-position-bottom { object-position: bottom; }             |
| object-position-center       | .object-position-center { object-position: center; }             |
| object-position-left-bottom  | .object-position-left-bottom { object-position: left bottom; }   |
| object-position-left         | .object-position-left { object-position: left; }                 |
| object-position-left-top     | .object-position-left-top { object-position: left top; }         |

## How to work with object fit

Use the `object-position-{keyword}` in order to determine the visual position of a section in an image.

### Object Position Center

The default class is normally `object-position-center` as the viewport is set to the center of the image.

```html
<img
  class="object-none object-position-center h-20rem w-100per rounded-10px"
  src="https://omencss.com/images/blog/blogcontent/Hero-Image.webp" />
```

### Object Position-Keyword

Use the `object-position-{keyword}` utility class to set the angle of view. For example you can use `object-position-right-top` in order to focus the top right corner of the image.

```html
<img
  class="object-none object-position-top-right h-20rem w-100per rounded-10px"
  src="https://omencss.com/images/blog/blogcontent/Hero-Image.webp" />
```

## Active, focus, and hover states

| _omenCSS_                        | CSS class example                                                    |
| -------------------------------- | -------------------------------------------------------------------- |
| active:object-position-{keyword} | .active\:object-position-center:active { object-position: contain; } |
| focus:object-position-{keyword}  | .focus\:object-position-center:focus { object-position: contain; }   |
| hover:object-position-{keyword}  | .hover\:object-position-center:hover { object-position: contain; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:object-position-center` to only apply the object-position-center utility class on hover.

```html
<div class="object-position-center hover:object-position-top">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example            |
| ----------- | -------------- | -------------------------- |
| sm:         | 0px - 480px    | .sm:object-position-center |
| md:         | 480px - 768px  | .md:object-position-center |
| lg:         | 768px - 1080px | .lg:object-position-center |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:object-position-center` to apply the object-position-center utility at only small screen sizes at or below 480px. Or `active:md:object-position-center` to apply the object-position-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:object-position-{keyword}` p.e. `active:md:object-position-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                                           | spoken example                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| active:object-position-{keyword} , focus:object-position-{keyword} , hover:object-position-{keyword}          | active object position center, focus object position center, hover object position center                                               |
| active:sm:object-position-{keyword} , focus:sm:object-position-{keyword} , hover:sm:object-position-{keyword} | active small screens object position center, focus small screens object position center, hover small screens object position center,    |
| active:md:object-position-{keyword} , focus:md:object-position-{keyword} , hover:md:object-position-{keyword} | active medium screens object position center, focus medium screens object position center, hover medium screens object position center, |
| active:lg:object-position-{keyword} , focus:lg:object-position-{keyword} , hover:lg:object-position-{keyword} | active large screens object position center, focus large screens object position center, hover large screens object position center,    |

## Sources

- [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
