---
isBlog: false
title: 'White Space'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the white space.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'white space, '
classNames: ''
plainText: ' greencss css class example whitespace-default whitespace-default white-space: default; whitespace-normal whitespace-normal white-space: normal; whitespace-nowrap whitespace-nowrap white-space: nowrap; whitespace-pre whitespace-pre white-space: pre; whitespace-pre-wrap whitespace-pre-wrap white-space: pre-wrap; whitespace-pre-line whitespace-pre-line white-space: pre-line; whitespace-break-spaces whitespace-break-spaces white-space: break-spaces; custom sizing variables control the white space on every html element by using the greencss classes shown above use the following structure to generate your white space class `whitespace keyword ` and apply the default css classes like `whitespace-normal`  active focus and hover states greencss css class example active:whitespace keyword active :whitespace-default:active white-space: default; focus:whitespace keyword focus :whitespace-default:focus white-space: default; hover:whitespace keyword hover :whitespace-default:focus white-space: default; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:whitespace-default` to only apply the whitespace-default utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:whitespace-default md: 480px 768px md:whitespace-default lg: 768px 1080px lg:whitespace-default greencss media queries can also be combined with active focus and hover states for example use `sm:whitespace-default` to apply the `whitespace-default` utility at only small screen sizes at or below 480px or `active:md:whitespace-default` to apply the `whitespace-default` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :whitespace keyword ` p e `active:md:whitespace-default` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:whitespace-default focus:whitespace-default hover:whitespace-default active white space focus white space hover white space active:sm:whitespace-default focus:sm:whitespace-default hover:sm:whitespace-default active small screens white space focus small screens white space hover small screens white space active:md:whitespace-default focus:md:whitespace-default hover:md:whitespace-default active medium screens white space focus medium screens white space hover medium screens white space active:lg:whitespace-default focus:lg:whitespace-default hover:lg:whitespace-default active large screens white space focus large screens white space hover large screens white space sources white-space https: developer mozilla org en-us docs web css white-space '
---

| _greenCSS_              | CSS class example                                       |
| ----------------------- | ------------------------------------------------------- |
| whitespace-default      | .whitespace-default { white-space: default; }           |
| whitespace-normal       | .whitespace-normal { white-space: normal; }             |
| whitespace-nowrap       | .whitespace-nowrap { white-space: nowrap; }             |
| whitespace-pre          | .whitespace-pre { white-space: pre; }                   |
| whitespace-pre-wrap     | .whitespace-pre-wrap { white-space: pre-wrap; }         |
| whitespace-pre-line     | .whitespace-pre-line { white-space: pre-line; }         |
| whitespace-break-spaces | .whitespace-break-spaces { white-space: break-spaces; } |

## Custom Sizing variables

Control the white space on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your white space class `whitespace-{keyword}` and apply the default CSS classes like `whitespace-normal`.

```html
<h1 class="whitespace-default text-30px">{title}</h1>
...
<p class="whitespace-normal text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                  | CSS class example                                            |
| --------------------------- | ------------------------------------------------------------ |
| active:whitespace-{keyword} | .active\:whitespace-default:active { white-space: default; } |
| focus:whitespace-{keyword}  | .focus\:whitespace-default:focus { white-space: default; }   |
| hover:whitespace-{keyword}  | .hover\:whitespace-default:focus { white-space: default; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:whitespace-default` to only apply the whitespace-default utility class on hover.

```html
<div class="whitespace-normal hover:whitespace-default">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example       |
| ----------- | -------------- | ---------------------- |
| sm:         | 0px - 480px    | .sm:whitespace-default |
| md:         | 480px - 768px  | .md:whitespace-default |
| lg:         | 768px - 1080px | .lg:whitespace-default |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:whitespace-default` to apply the `whitespace-default` utility at only small screen sizes at or below 480px. Or `active:md:whitespace-default` to apply the `whitespace-default` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:whitespace-{keyword}` p.e. `active:md:whitespace-default`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                     | spoken example                                                                                         |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:whitespace-default , focus:whitespace-default , hover:whitespace-default          | active white space, focus white space, hover white space                                               |
| active:sm:whitespace-default , focus:sm:whitespace-default , hover:sm:whitespace-default | active small screens white space, focus small screens white space, hover small screens white space,    |
| active:md:whitespace-default , focus:md:whitespace-default , hover:md:whitespace-default | active medium screens white space, focus medium screens white space, hover medium screens white space, |
| active:lg:whitespace-default , focus:lg:whitespace-default , hover:lg:whitespace-default | active large screens white space, focus large screens white space, hover large screens white space,    |

## Sources

- [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
