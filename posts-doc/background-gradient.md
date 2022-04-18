---
isBlog: false
title: 'Background Gradient Color'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background gradient color.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background gradient color, '
classNames: ''
plainText: ' greencss css class example from color from-green gradient-from-color: 80f906; gradient-color-merge: var gradient-from-color var gradient-to-color ; to color from-red gradient-from-color: f90606; gradient-color-merge: var gradient-from-color var gradient-to-color ; custom sizing variables control the background gradient color on every html element by using the greencss classes shown above use the following structure to generate your background gradient color class `from color ` and apply the default css classes like `from-green`  linear gradient make sure to also check the background image docs background-image documentation in order to understand the direction of the gradient add a linear gradient by controlling the gradients direction to successfully create a linear background gradient the following classes must be present: 1 the direction of the gradient p e `gradient-to-right` 2 the color where the gradient starts p e `from-red` all available colors brand colours can be checked here 3 the color where the gradient ends p e `to-orange` all available colors brand colours can be checked here  active focus and hover states greencss css class example active:from color active :from-green:active ; focus:from color focus :from-green:focus ; hover:from color hover :from-green:focus ; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:from-green` to only apply the from-green gradient color utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:from-green md: 480px 768px md:from-green lg: 768px 1080px lg:from-green greencss media queries can also be combined with active focus and hover states for example use `sm:from-green` to apply the `from-green` utility at only small screen sizes at or below 480px or `active:md:from-green` to apply the `from-green` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :from color ` p e `active:md:from-green` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:from-background gradient color focus:from-background gradient color hover:from-background gradient color active background gradient color focus background gradient color hover background gradient color active:sm:from-background gradient color focus:sm:from-background gradient color hover:sm:from-background gradient color active small screens background gradient color focus small screens background gradient color hover small screens background gradient color active:md:from-background gradient color focus:md:from-background gradient color hover:md:from-background gradient color active medium screens background gradient color focus medium screens background gradient color hover medium screens background gradient color active:lg:from-background gradient color focus:lg:from-background gradient color hover:lg:from-background gradient color active large screens background gradient color focus large screens background gradient color hover large screens background gradient color sources linear-gradient https: developer mozilla org en-us docs web css gradient linear-gradient '
---

| _greenCSS_   | CSS class example                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| from-{color} | .from-green { --gradient-from-color: #80f906; --gradient-color-merge: var(--gradient-from-color), var(--gradient-to-color); } |
| to-{color}   | .from-red { --gradient-from-color: #f90606; --gradient-color-merge: var(--gradient-from-color), var(--gradient-to-color); }   |

## Custom Sizing Variables

Control the background gradient color on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background gradient color class `from-{color}` and apply the default CSS classes like `from-green`.

```html
<div class="from-green ...">{children}</div>
```

### Linear gradient

Make sure to also check the [background image](/docs/background-image) documentation, in order to understand the direction of the gradient.

Add a linear gradient by controlling the gradients direction. To successfully create a linear background gradient, the following classes must be present:

1. The direction of the gradient p.e. `gradient-to-right`
2. The Color where the gradient starts p.e. `from-red`. [All available colors](/brand/colours) can be checked here.
3. The Color where the gradient ends p.e. `to-orange`. [All available colors](/brand/colours) can be checked here.

```html
<section class="from-red to-orange gradient-to-top flex min-h-100vh">
  <div class="m-auto">
    <h1 class="max-w-60rem font-800 text-80px text-black sm:text-purple sm:text-40px md:text-red md:text-60px">
      A classy way to write CSS design
    </h1>
  </div>
</section>
```

## Active, focus, and hover states

| _greenCSS_          | CSS class example                   |
| ------------------- | ----------------------------------- |
| active:from-{color} | .active\:from-green:active { ...; } |
| focus:from-{color}  | .focus\:from-green:focus { ...; }   |
| hover:from-{color}  | .hover\:from-green:focus { ...; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:from-green` to only apply the from-green gradient color utility class on hover.

```html
<div class="from-green hover:from-blue">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:from-green   |
| md:         | 480px - 768px  | .md:from-green   |
| lg:         | 768px - 1080px | .lg:from-green   |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:from-green` to apply the `from-green` utility at only small screen sizes at or below 480px. Or `active:md:from-green` to apply the `from-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:from-{color}` p.e. `active:md:from-green`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                                                         | spoken example                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| active:from-background gradient color , focus:from-background gradient color , hover:from-background gradient color          | active background gradient color, focus background gradient color, hover background gradient color                                               |
| active:sm:from-background gradient color , focus:sm:from-background gradient color , hover:sm:from-background gradient color | active small screens background gradient color, focus small screens background gradient color, hover small screens background gradient color,    |
| active:md:from-background gradient color , focus:md:from-background gradient color , hover:md:from-background gradient color | active medium screens background gradient color, focus medium screens background gradient color, hover medium screens background gradient color, |
| active:lg:from-background gradient color , focus:lg:from-background gradient color , hover:lg:from-background gradient color | active large screens background gradient color, focus large screens background gradient color, hover large screens background gradient color,    |

## Sources

- [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
