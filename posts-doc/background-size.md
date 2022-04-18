---
isBlog: false
title: 'Background Size'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background size.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background size, '
classNames: ''
plainText: ' greencss css class example bg-auto bg-auto background-size: auto; bg-cover bg-cover background-size: cover; bg-contain bg-contain background-size: contain; custom sizing variables control the background size on every html element by using the greencss classes shown above use the following structure to generate your background size class `bg keyword ` and apply the default css classes like `bg-cover` auto background image `bg-auto` displays the background image at its default size  cover background image `bg-cover` scales the background image to its specified layer this class might stretch or crop your image  contain background image `bg-contain` scales the background image to its specified layer this class will not crop or stretch the image  active focus and hover states greencss css class example active:bg keyword active :bg-auto:active background-size: auto; focus:bg keyword focus :bg-auto:focus background-size: auto; hover:bg keyword hover :bg-auto:focus background-size: auto; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:bg-auto` to only apply the bg-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-auto md: 480px 768px md:bg-auto lg: 768px 1080px lg:bg-auto greencss media queries can also be combined with active focus and hover states for example use `sm:bg-auto` to apply the `bg-auto` utility at only small screen sizes at or below 480px or `active:md:bg-auto` to apply the `bg-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :bg keyword ` p e `active:md:bg-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-auto focus:bg-auto hover:bg-auto active background size focus background size hover background size active:sm:bg-auto focus:sm:bg-auto hover:sm:bg-auto active small screens background size focus small screens background size hover small screens background size active:md:bg-auto focus:md:bg-auto hover:md:bg-auto active medium screens background size focus medium screens background size hover medium screens background size active:lg:bg-auto focus:lg:bg-auto hover:lg:bg-auto active large screens background size focus large screens background size hover large screens background size sources background-size https: developer mozilla org en-us docs web css background-size '
---

| _greenCSS_ | CSS class example                         |
| ---------- | ----------------------------------------- |
| bg-auto    | .bg-auto { background-size: auto; }       |
| bg-cover   | .bg-cover { background-size: cover; }     |
| bg-contain | .bg-contain { background-size: contain; } |

## Custom Sizing Variables

Control the background size on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background size class `bg-{keyword}` and apply the default CSS classes like `bg-cover`.

### Auto Background Image

`bg-auto` displays the background image at its default size.

```html
<div
  class="bg-auto bg-no-repeat bg-center"
  style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
  {children}
</div>
```

### Cover Background Image

`bg-cover` scales the background image to its specified layer, this class might stretch or crop your image.

```html
<div class="max-h-50px">
  <div
    class="bg-cover bg-no-repeat bg-center"
    style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
    {children}
  </div>
</div>
```

### Contain Background Image

`bg-contain` scales the background image to its specified layer, this class will not crop or stretch the image.

```html
<div class="max-h-50px">
  <div
    class="bg-contain bg-no-repeat bg-center"
    style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
    {children}
  </div>
</div>
```

## Active, focus, and hover states

| _greenCSS_          | CSS class example                                  |
| ------------------- | -------------------------------------------------- |
| active:bg-{keyword} | .active\:bg-auto:active { background-size: auto; } |
| focus:bg-{keyword}  | .focus\:bg-auto:focus { background-size: auto; }   |
| hover:bg-{keyword}  | .hover\:bg-auto:focus { background-size: auto; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:bg-auto` to only apply the bg-auto utility class on hover.

```html
<div
  class="bg-cover hover:bg-auto bg-no-repeat bg-center"
  style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
  {children}
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:bg-auto      |
| md:         | 480px - 768px  | .md:bg-auto      |
| lg:         | 768px - 1080px | .lg:bg-auto      |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:bg-auto` to apply the `bg-auto` utility at only small screen sizes at or below 480px. Or `active:md:bg-auto` to apply the `bg-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:bg-{keyword}` p.e. `active:md:bg-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                    | spoken example                                                                                                     |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| active:bg-auto , focus:bg-auto , hover:bg-auto          | active background size, focus background size, hover background size                                               |
| active:sm:bg-auto , focus:sm:bg-auto , hover:sm:bg-auto | active small screens background size, focus small screens background size, hover small screens background size,    |
| active:md:bg-auto , focus:md:bg-auto , hover:md:bg-auto | active medium screens background size, focus medium screens background size, hover medium screens background size, |
| active:lg:bg-auto , focus:lg:bg-auto , hover:lg:bg-auto | active large screens background size, focus large screens background size, hover large screens background size,    |

## Sources

- [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
