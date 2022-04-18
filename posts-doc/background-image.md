---
isBlog: false
title: 'Background Image'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background image.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background image, '
classNames: ''
plainText: ' greencss css class example gradient-to-right gradient-to-right background-image: linear-gradient to right var gradient-color-merge ; gradient-to-left gradient-to-left background-image: linear-gradient to left var gradient-color-merge ;; gradient-to-top gradient-to-top background-image: linear-gradient to top var gradient-color-merge ; gradient-to-top-right gradient-to-top-right background-image: linear-gradient to top right var gradient-color-merge ; gradient-to-bottom-right gradient-to-bottom-right background-image: linear-gradient to bottom right var gradient-color-merge ; gradient-to-bottom gradient-to-bottom background-image: linear-gradient to bottom var gradient-color-merge ; gradient-to-bottom-left gradient-to-bottom-left background-image: linear-gradient to bottom left var gradient-color-merge ; gradient-to-top-left gradient-to-top-left background-image: linear-gradient to top left var gradient-color-merge ; custom sizing variables control the background image on every html element by using the greencss classes shown above use the following structure to generate your background image class `gradient-to keyword ` and apply the default css classes like `gradient-to-left`  linear gradient add a linear gradient by controlling the gradients direction to successfully create a linear background gradient the following classes must be present: 1 the direction of the gradient p e `gradient-to-right` 2 the color where the gradient starts p e `from-red-5` all available colors brand colours can be checked here 3 the color where the gradient ends p e `to-orange-2` all available colors brand colours can be checked here  active focus and hover states greencss css class example active:gradient-to keyword active :gradient-to-right:active background-image: right; focus:gradient-to keyword focus :gradient-to-right:focus background-image: right; hover:gradient-to keyword hover :gradient-to-right:focus background-image: right; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:gradient-to-right` to only apply the gradient-to-right utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:gradient-to-right md: 480px 768px md:gradient-to-right lg: 768px 1080px lg:gradient-to-right greencss media queries can also be combined with active focus and hover states for example use `sm:gradient-to-right` to apply the `gradient-to-right` utility at only small screen sizes at or below 480px or `active:md:gradient-to-right` to apply the `gradient-to-right` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :gradient-to keyword ` p e `active:md:gradient-to-right` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:gradient-to-right focus:gradient-to-right hover:gradient-to-right active background image focus background image hover background image active:sm:gradient-to-right focus:sm:gradient-to-right hover:sm:gradient-to-right active small screens background image focus small screens background image hover small screens background image active:md:gradient-to-right focus:md:gradient-to-right hover:md:gradient-to-right active medium screens background image focus medium screens background image hover medium screens background image active:lg:gradient-to-right focus:lg:gradient-to-right hover:lg:gradient-to-right active large screens background image focus large screens background image hover large screens background image sources background-image https: developer mozilla org en-us docs web css background-image '
---

| _greenCSS_               | CSS class example                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| gradient-to-right        | .gradient-to-right { background-image: linear-gradient(to right, var(--gradient-color-merge)); }               |
| gradient-to-left         | .gradient-to-left { background-image: linear-gradient(to left, var(--gradient-color-merge));; }                |
| gradient-to-top          | .gradient-to-top { background-image: linear-gradient(to top, var(--gradient-color-merge)); }                   |
| gradient-to-top-right    | .gradient-to-top-right { background-image: linear-gradient(to top right, var(--gradient-color-merge)); }       |
| gradient-to-bottom-right | .gradient-to-bottom-right { background-image: linear-gradient(to bottom right, var(--gradient-color-merge)); } |
| gradient-to-bottom       | .gradient-to-bottom { background-image: linear-gradient(to bottom, var(--gradient-color-merge)); }             |
| gradient-to-bottom-left  | .gradient-to-bottom-left { background-image: linear-gradient(to bottom left, var(--gradient-color-merge)); }   |
| gradient-to-top-left     | .gradient-to-top-left { background-image: linear-gradient(to top left, var(--gradient-color-merge)); }         |

## Custom Sizing Variables

Control the background image on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background image class `gradient-to-{keyword}` and apply the default CSS classes like `gradient-to-left`.

```html
<div class="gradient-to-right ...">{children}</div>
```

### Linear gradient

Add a linear gradient by controlling the gradients direction. To successfully create a linear background gradient, the following classes must be present:

1. The direction of the gradient p.e. `gradient-to-right`
2. The Color where the gradient starts p.e. `from-red-5`. [All available colors](/brand/colours) can be checked here.
3. The Color where the gradient ends p.e. `to-orange-2`. [All available colors](/brand/colours) can be checked here.

```html
<section class="flex min-h-100vh gradient-to-right from-red-5 to-orange-2">
  <div class="m-auto">
    <h1 class="max-w-60rem font-800 text-80px text-black sm:text-purple sm:text-40px md:text-red md:text-60px">
      A classy way to write CSS design
    </h1>
  </div>
</section>
```

## Active, focus, and hover states

| _greenCSS_                   | CSS class example                                              |
| ---------------------------- | -------------------------------------------------------------- |
| active:gradient-to-{keyword} | .active\:gradient-to-right:active { background-image: right; } |
| focus:gradient-to-{keyword}  | .focus\:gradient-to-right:focus { background-image: right; }   |
| hover:gradient-to-{keyword}  | .hover\:gradient-to-right:focus { background-image: right; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:gradient-to-right` to only apply the gradient-to-right utility class on hover.

```html
<div class="gradient-to-left hover:gradient-to-right ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example      |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:gradient-to-right |
| md:         | 480px - 768px  | .md:gradient-to-right |
| lg:         | 768px - 1080px | .lg:gradient-to-right |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:gradient-to-right` to apply the `gradient-to-right` utility at only small screen sizes at or below 480px. Or `active:md:gradient-to-right` to apply the `gradient-to-right` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:gradient-to-{keyword}` p.e. `active:md:gradient-to-right`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                  | spoken example                                                                                                        |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:gradient-to-right , focus:gradient-to-right , hover:gradient-to-right          | active background image, focus background image, hover background image                                               |
| active:sm:gradient-to-right , focus:sm:gradient-to-right , hover:sm:gradient-to-right | active small screens background image, focus small screens background image, hover small screens background image,    |
| active:md:gradient-to-right , focus:md:gradient-to-right , hover:md:gradient-to-right | active medium screens background image, focus medium screens background image, hover medium screens background image, |
| active:lg:gradient-to-right , focus:lg:gradient-to-right , hover:lg:gradient-to-right | active large screens background image, focus large screens background image, hover large screens background image,    |

## Sources

- [background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
