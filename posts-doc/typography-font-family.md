---
isBlog: false
title: 'Font Family'
date: 'Apr 13. 2022'
excerpt: 'Utility classes for controlling the font family.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'Font Family, typography, sans, serif, monospace'
classNames: ''
plainText: " greenCSS css class example sans sans font-family: -apple-system blinkmacsystemfont roboto arial 'helvetica neue' 'segoe ui' oxygen ubuntu cantarell 'open sans' sans-serif; serif serif font-family: 'times new roman' times serif; monospace monospace font-family: 'courier new' courier monospace; cursive cursive font-family: 'brush script mt' cursive; fantasy fantasy font-family: copperplate papyrus fantasy; custom sizing variables control the font face on every html element by using the greenCSS classes shown above for example to give your website a unique font you can download omen motion brand typography use your custom or google fonts  active focus and hover states greenCSS css class example active: variable active :sans:active font-family: ; focus: variable focus :sans:focus font-family: ; hover: variable hover :sans:focus font-family: ; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:sans` to only apply the sans utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:sans md: 480px 768px md:sans lg: 768px 1080px lg:sans greenCSS media queries can also be combined with active focus and hover states for example use `sm:sans` to apply the `sans` utility at only small screen sizes at or below 480px or `active:md:sans` to apply the `sans` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query : classname ` p e `active:md:sans` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:sans focus:sans hover:sans active font family focus font family hover font family active:sm:sans focus:sm:sans hover:sm:sans active small screens font family focus small screens font family hover small screens font family active:md:sans focus:md:sans hover:md:sans active medium screens font family focus medium screens font family hover medium screens font family active:lg:sans focus:lg:sans hover:lg:sans active large screens font family focus large screens font family hover large screens font family sources font-family https: developer mozilla org en-us docs web css font-family "
---

| _greenCSS_ | CSS class example                                                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sans      | .sans { font-family: -apple-system, BlinkMacSystemFont, Roboto, Arial, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif; } |
| serif     | . serif { font-family: 'Times New Roman', Times, serif; }                                                                                                  |
| monospace | .monospace { font-family: 'Courier New', Courier, monospace; }                                                                                             |
| cursive   | .cursive { font-family: 'Brush Script MT', cursive; }                                                                                                      |
| fantasy   | .fantasy { font-family: Copperplate, Papyrus, fantasy; }                                                                                                   |

## Custom Sizing variables

Control the font face on every HTML element by using the greenCSS classes shown above. For example, to give your website a unique font, you can download ["Omen Motion"](/brand/typography), use your custom- or google fonts.

```html
<div class="sans">{children}</div>
<div class="serif">{children}</div>
<div class="monospace">{children}</div>
<div class="cursive">{children}</div>
<div class="fantasy">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_         | CSS class example                          |
| ----------------- | ------------------------------------------ |
| active:{variable} | .active\:sans:active { font-family: ...; } |
| focus:{variable}  | .focus\:sans:focus { font-family: ...; }   |
| hover:{variable}  | .hover\:sans:focus { font-family: ...; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:sans` to only apply the sans utility class on hover.

```html
<div class="sans hover:monospace">monospace class on hover</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:sans        |
| md:         | 480px - 768px  | .md:sans        |
| lg:         | 768px - 1080px | .lg:sans        |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:sans` to apply the `sans` utility at only small screen sizes at or below 480px. Or `active:md:sans` to apply the `sans` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:{classname}` p.e. `active:md:sans`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                            | spoken example                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:sans , focus:sans , hover:sans          | active font family, focus font family, hover font family                                               |
| active:sm:sans , focus:sm:sans , hover:sm:sans | active small screens font family, focus small screens font family, hover small screens font family,    |
| active:md:sans , focus:md:sans , hover:md:sans | active medium screens font family, focus medium screens font family, hover medium screens font family, |
| active:lg:sans , focus:lg:sans , hover:lg:sans | active large screens font family, focus large screens font family, hover large screens font family,    |

## Sources

- [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
