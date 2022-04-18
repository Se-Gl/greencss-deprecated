---
isBlog: false
title: 'Background Attachment'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background attachment.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background attachment, background-attachment, fixed, local, scroll'
classNames: ''
plainText: ' greencss css class example bg-fixed bg-fixed background-attachment: fixed; bg-local bg-local background-attachment: local; bg-scroll bg-scroll background-attachment: scroll; custom sizing variables control the background attachment on every html element by using the greencss classes shown above use the following structure to generate your background attachment class `bg keyword ` and apply the default css classes like `bg-local`  active focus and hover states greencss css class example active:bg keyword active :bg-fixed:active background-attachment: fixed; focus:bg keyword focus :bg-fixed:focus background-attachment: fixed; hover:bg keyword hover :bg-fixed:focus background-attachment: fixed; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:bg-fixed` to only apply the bg-fixed utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-fixed md: 480px 768px md:bg-fixed lg: 768px 1080px lg:bg-fixed greencss media queries can also be combined with active focus and hover states for example use `sm:bg-fixed` to apply the `bg-fixed` utility at only small screen sizes at or below 480px or `active:md:bg-fixed` to apply the `bg-fixed` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :bg keyword ` p e `active:md:bg-fixed` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-fixed focus:bg-fixed hover:bg-fixed active background attachment focus background attachment hover background attachment active:sm:bg-fixed focus:sm:bg-fixed hover:sm:bg-fixed active small screens background attachment focus small screens background attachment hover small screens background attachment active:md:bg-fixed focus:md:bg-fixed hover:md:bg-fixed active medium screens background attachment focus medium screens background attachment hover medium screens background attachment active:lg:bg-fixed focus:lg:bg-fixed hover:lg:bg-fixed active large screens background attachment focus large screens background attachment hover large screens background attachment sources background-attachment https: developer mozilla org en-us docs web css background-attachment '
---

| _greenCSS_ | CSS class example                             |
| ---------- | --------------------------------------------- |
| bg-fixed   | .bg-fixed { background-attachment: fixed; }   |
| bg-local   | .bg-local { background-attachment: local; }   |
| bg-scroll  | .bg-scroll { background-attachment: scroll; } |

## Custom Sizing variables

Control the background attachment on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background attachment class `bg-{keyword}` and apply the default CSS classes like `bg-local`.

```html
<div class="bg-fixed" style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
  {children}
</div>
```

## Active, focus, and hover states

| _greenCSS_          | CSS class example                                          |
| ------------------- | ---------------------------------------------------------- |
| active:bg-{keyword} | .active\:bg-fixed:active { background-attachment: fixed; } |
| focus:bg-{keyword}  | .focus\:bg-fixed:focus { background-attachment: fixed; }   |
| hover:bg-{keyword}  | .hover\:bg-fixed:focus { background-attachment: fixed; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:bg-fixed` to only apply the bg-fixed utility class on hover.

```html
<div
  class="bg-local hover:bg-fixed"
  style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
  {children}
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:bg-fixed     |
| md:         | 480px - 768px  | .md:bg-fixed     |
| lg:         | 768px - 1080px | .lg:bg-fixed     |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:bg-fixed` to apply the `bg-fixed` utility at only small screen sizes at or below 480px. Or `active:md:bg-fixed` to apply the `bg-fixed` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:bg-{keyword}` p.e. `active:md:bg-fixed`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                       | spoken example                                                                                                                       |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| active:bg-fixed , focus:bg-fixed , hover:bg-fixed          | active background attachment, focus background attachment, hover background attachment                                               |
| active:sm:bg-fixed , focus:sm:bg-fixed , hover:sm:bg-fixed | active small screens background attachment, focus small screens background attachment, hover small screens background attachment,    |
| active:md:bg-fixed , focus:md:bg-fixed , hover:md:bg-fixed | active medium screens background attachment, focus medium screens background attachment, hover medium screens background attachment, |
| active:lg:bg-fixed , focus:lg:bg-fixed , hover:lg:bg-fixed | active large screens background attachment, focus large screens background attachment, hover large screens background attachment,    |

## Sources

- [background-attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
