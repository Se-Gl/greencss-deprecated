---
isBlog: false
title: 'Background Repeat'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background repeat.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background repeat, background no repeat'
classNames: ''
plainText: ' greencss css class example bg-repeat bg-repeat background-repeat: repeat; bg-no-repeat bg-no-repeat background-repeat: no-repeat; bg-repeat-x bg-repeat-x background-repeat: repeat-x; bg-repeat-y bg-repeat-y background-repeat: repeat-y; bg-repeat-round bg-repeat-round background-repeat: round; bg-repeat-space bg-repeat-space background-repeat: space; custom sizing variables control the background repeat on every html element by using the greencss classes shown above use the following structure to generate your background repeat `bg keyword ` ranging from no-repeat to repeat with a step of +no-repeat or use the `bg keyword ` to use the default css classes like `bg-no-repeat` control the background repeat on every html element by using the greencss classes shown above use the following structure to generate your background repeat class `bg keyword ` and apply the default css classes like `bg-no-repeat`  active focus and hover states greencss css class example active:bg keyword active :bg-repeat:active background-repeat: repeat; focus:bg keyword focus :bg-repeat:focus background-repeat: repeat; hover:bg keyword hover :bg-repeat:focus background-repeat: repeat; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:bg-repeat` to only apply the bg-repeat utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-repeat md: 480px 768px md:bg-repeat lg: 768px 1080px lg:bg-repeat greencss media queries can also be combined with active focus and hover states for example use `sm:bg-repeat` to apply the `bg-repeat` utility at only small screen sizes at or below 480px or `active:md:bg-repeat` to apply the `bg-repeat` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :bg keyword ` p e `active:md:bg-repeat` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-repeat focus:bg-repeat hover:bg-repeat active background repeat focus background repeat hover background repeat active:sm:bg-repeat focus:sm:bg-repeat hover:sm:bg-repeat active small screens background repeat focus small screens background repeat hover small screens background repeat active:md:bg-repeat focus:md:bg-repeat hover:md:bg-repeat active medium screens background repeat focus medium screens background repeat hover medium screens background repeat active:lg:bg-repeat focus:lg:bg-repeat hover:lg:bg-repeat active large screens background repeat focus large screens background repeat hover large screens background repeat sources background-repeat https: developer mozilla org en-us docs web css background-repeat '
---

| _greenCSS_      | CSS class example                               |
| --------------- | ----------------------------------------------- |
| bg-repeat       | .bg-repeat { background-repeat: repeat; }       |
| bg-no-repeat    | .bg-no-repeat { background-repeat: no-repeat; } |
| bg-repeat-x     | .bg-repeat-x { background-repeat: repeat-x; }   |
| bg-repeat-y     | .bg-repeat-y { background-repeat: repeat-y; }   |
| bg-repeat-round | .bg-repeat-round { background-repeat: round; }  |
| bg-repeat-space | .bg-repeat-space { background-repeat: space; }  |

## Custom Sizing variables

Control the background repeat on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background repeat `bg-{keyword}` - ranging from no-repeat to repeat with a step of +no-repeat or use the `bg-{keyword}` to use the default CSS classes like `bg-no-repeat`.

Control the background repeat on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background repeat class `bg-{keyword}` and apply the default CSS classes like `bg-no-repeat`.

```html
<div
  class="bg-no-repeat bg-center bg-contain"
  style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
  {children}
</div>
```

## Active, focus, and hover states

| _greenCSS_          | CSS class example                                        |
| ------------------- | -------------------------------------------------------- |
| active:bg-{keyword} | .active\:bg-repeat:active { background-repeat: repeat; } |
| focus:bg-{keyword}  | .focus\:bg-repeat:focus { background-repeat: repeat; }   |
| hover:bg-{keyword}  | .hover\:bg-repeat:focus { background-repeat: repeat; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:bg-repeat` to only apply the bg-repeat utility class on hover.

```html
<div
  class="bg-no-repeat hover:bg-repeat bg-center bg-contain"
  style="background-image:'url(https://greencss.dev/images/blog/blogcontent/Hero-Image.webp)'">
  {children}
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:bg-repeat    |
| md:         | 480px - 768px  | .md:bg-repeat    |
| lg:         | 768px - 1080px | .lg:bg-repeat    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:bg-repeat` to apply the `bg-repeat` utility at only small screen sizes at or below 480px. Or `active:md:bg-repeat` to apply the `bg-repeat` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:bg-{keyword}` p.e. `active:md:bg-repeat`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                          | spoken example                                                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:bg-repeat , focus:bg-repeat , hover:bg-repeat          | active background repeat, focus background repeat, hover background repeat                                               |
| active:sm:bg-repeat , focus:sm:bg-repeat , hover:sm:bg-repeat | active small screens background repeat, focus small screens background repeat, hover small screens background repeat,    |
| active:md:bg-repeat , focus:md:bg-repeat , hover:md:bg-repeat | active medium screens background repeat, focus medium screens background repeat, hover medium screens background repeat, |
| active:lg:bg-repeat , focus:lg:bg-repeat , hover:lg:bg-repeat | active large screens background repeat, focus large screens background repeat, hover large screens background repeat,    |

## Sources

- [background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
