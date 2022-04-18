---
isBlog: false
title: 'Background Position'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background position.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background position, background image center, background image top, background image right, background image bottom, background image left'
classNames: ''
plainText: ' greencss css class example bg-center bg-center background-position: center; bg-top bg-top background-position: top; bg-top-right bg-top-right background-position: top right; bg-right bg-right background-position: right; bg-right-bottom bg-right-bottom background-position: right bottom; bg-bottom bg-bottom background-position: bottom; bg-left-bottom bg-left-bottom background-position: left bottom; bg-left bg-left background-position: left; bg-left-top bg-left-top background-position: left top; custom sizing variables control the background position on every html element by using the greencss classes shown above use the following structure to generate your background position class `bg keyword ` and apply the default css classes like `bg-top` it will focus and position the upper part of a background image  active focus and hover states greencss css class example active:bg keyword active :bg-center:active background-position: center; focus:bg keyword focus :bg-center:focus background-position: center; hover:bg keyword hover :bg-center:focus background-position: center; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:bg-center` to only apply the bg-center utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-center md: 480px 768px md:bg-center lg: 768px 1080px lg:bg-center greencss media queries can also be combined with active focus and hover states for example use `sm:bg-center` to apply the `bg-center` utility at only small screen sizes at or below 480px or `active:md:bg-center` to apply the `bg-center` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :bg keyword ` p e `active:md:bg-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-center focus:bg-center hover:bg-center active background position focus background position hover background position active:sm:bg-center focus:sm:bg-center hover:sm:bg-center active small screens background position focus small screens background position hover small screens background position active:md:bg-center focus:md:bg-center hover:md:bg-center active medium screens background position focus medium screens background position hover medium screens background position active:lg:bg-center focus:lg:bg-center hover:lg:bg-center active large screens background position focus large screens background position hover large screens background position sources background-position https: developer mozilla org en-us docs web css background-position '
---

| _greenCSS_      | CSS class example                                       |
| --------------- | ------------------------------------------------------- |
| bg-center       | .bg-center { background-position: center; }             |
| bg-top          | .bg-top { background-position: top; }                   |
| bg-top-right    | .bg-top-right { background-position: top right; }       |
| bg-right        | .bg-right { background-position: right; }               |
| bg-right-bottom | .bg-right-bottom { background-position: right bottom; } |
| bg-bottom       | .bg-bottom { background-position: bottom; }             |
| bg-left-bottom  | .bg-left-bottom { background-position: left bottom; }   |
| bg-left         | .bg-left { background-position: left; }                 |
| bg-left-top     | .bg-left-top { background-position: left top; }         |

## Custom Sizing variables

Control the background position on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background position class `bg-{keyword}` and apply the default CSS classes like `bg-top` - it will focus and position the upper part of a background image.

```html
<div
  class="bg-top bg-no-repeat bg-cover"
  style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
  {children}
</div>
```

## Active, focus, and hover states

| _greenCSS_          | CSS class example                                          |
| ------------------- | ---------------------------------------------------------- |
| active:bg-{keyword} | .active\:bg-center:active { background-position: center; } |
| focus:bg-{keyword}  | .focus\:bg-center:focus { background-position: center; }   |
| hover:bg-{keyword}  | .hover\:bg-center:focus { background-position: center; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:bg-center` to only apply the bg-center utility class on hover.

```html
<div
  class="bg-top hover:bg-center"
  style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
  {children}
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:bg-center    |
| md:         | 480px - 768px  | .md:bg-center    |
| lg:         | 768px - 1080px | .lg:bg-center    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:bg-center` to apply the `bg-center` utility at only small screen sizes at or below 480px. Or `active:md:bg-center` to apply the `bg-center` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:bg-{keyword}` p.e. `active:md:bg-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                          | spoken example                                                                                                                 |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| active:bg-center , focus:bg-center , hover:bg-center          | active background position, focus background position, hover background position                                               |
| active:sm:bg-center , focus:sm:bg-center , hover:sm:bg-center | active small screens background position, focus small screens background position, hover small screens background position,    |
| active:md:bg-center , focus:md:bg-center , hover:md:bg-center | active medium screens background position, focus medium screens background position, hover medium screens background position, |
| active:lg:bg-center , focus:lg:bg-center , hover:lg:bg-center | active large screens background position, focus large screens background position, hover large screens background position,    |

## Sources

- [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
