---
isBlog: false
title: 'Text Overflow'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text overflow.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text overflow, ellipsis, clip'
classNames: ''
plainText: ' greencss css class example text-ellipsis text-ellipsis text-overflow: ellipsis; text-clip text-clip text-overflow: clip; text-unset text-unset text-overflow: unset; text-brackets text-brackets text-overflow: ; custom sizing variables control the text overflow on every html element by using the greencss classes shown above use the following structure to generate your text overflow `text keyword ` to apply the default css classes like `text-clip`  active focus and hover states greencss css class example active:text keyword active :text-ellipsis:active text-overflow: ellipsis; focus:text keyword focus :text-ellipsis:focus text-overflow: ellipsis; hover:text keyword hover :text-ellipsis:focus text-overflow: ellipsis; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-ellipsis` to only apply the text-ellipsis utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:text-ellipsis md: 480px 768px md:text-ellipsis lg: 768px 1080px lg:text-ellipsis greencss media queries can also be combined with active focus and hover states for example use `sm:text-ellipsis` to apply the `text-ellipsis` utility at only small screen sizes at or below 480px or `active:md:text-ellipsis` to apply the `text-ellipsis` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :text keyword ` p e `active:md:text-ellipsis` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:text-ellipsis focus:text-ellipsis hover:text-ellipsis active text overflow focus text overflow hover text overflow active:sm:text-ellipsis focus:sm:text-ellipsis hover:sm:text-ellipsis active small screens text overflow focus small screens text overflow hover small screens text overflow active:md:text-ellipsis focus:md:text-ellipsis hover:md:text-ellipsis active medium screens text overflow focus medium screens text overflow hover medium screens text overflow active:lg:text-ellipsis focus:lg:text-ellipsis hover:lg:text-ellipsis active large screens text overflow focus large screens text overflow hover large screens text overflow sources text-overflow https: developer mozilla org en-us docs web css text-overflow '
---

| _greenCSS_    | CSS class example                           |
| ------------- | ------------------------------------------- |
| text-ellipsis | .text-ellipsis { text-overflow: ellipsis; } |
| text-clip     | .text-clip { text-overflow: clip; }         |
| text-unset    | .text-unset { text-overflow: unset; }       |
| text-brackets | .text-brackets { text-overflow: " [..]"; }  |

## Custom Sizing variables

Control the text overflow on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text overflow `text-{keyword}` to apply the default CSS classes like `text-clip`.

```html
<h1 class="text-ellipsis text-30px">{title}</h1>
...
<p class="text-brackets text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_            | CSS class example                                          |
| --------------------- | ---------------------------------------------------------- |
| active:text-{keyword} | .active\:text-ellipsis:active { text-overflow: ellipsis; } |
| focus:text-{keyword}  | .focus\:text-ellipsis:focus { text-overflow: ellipsis; }   |
| hover:text-{keyword}  | .hover\:text-ellipsis:focus { text-overflow: ellipsis; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-ellipsis` to only apply the text-ellipsis utility class on hover.

```html
<div class="text-clip hover:text-ellipsis">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example  |
| ----------- | -------------- | ----------------- |
| sm:         | 0px - 480px    | .sm:text-ellipsis |
| md:         | 480px - 768px  | .md:text-ellipsis |
| lg:         | 768px - 1080px | .lg:text-ellipsis |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-ellipsis` to apply the `text-ellipsis` utility at only small screen sizes at or below 480px. Or `active:md:text-ellipsis` to apply the `text-ellipsis` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:text-{keyword}` p.e. `active:md:text-ellipsis`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                      | spoken example                                                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:text-ellipsis , focus:text-ellipsis , hover:text-ellipsis          | active text overflow, focus text overflow, hover text overflow                                               |
| active:sm:text-ellipsis , focus:sm:text-ellipsis , hover:sm:text-ellipsis | active small screens text overflow, focus small screens text overflow, hover small screens text overflow,    |
| active:md:text-ellipsis , focus:md:text-ellipsis , hover:md:text-ellipsis | active medium screens text overflow, focus medium screens text overflow, hover medium screens text overflow, |
| active:lg:text-ellipsis , focus:lg:text-ellipsis , hover:lg:text-ellipsis | active large screens text overflow, focus large screens text overflow, hover large screens text overflow,    |

## Sources

- [text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
