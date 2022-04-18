---
isBlog: false
title: 'CSS animation examples'
date: 'Apr 11. 2022'
excerpt: 'Create stunning css animations. greenCSS features more than 110 handcrafted animations.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Animation'
author: 'Severin Glaser'
keywords: 'Animation, animation-duration, animation-delay, stagger animation, css animation'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step animation-duration number ms animation-duration-500ms animation-duration: 500ms; 100 10000 +100ms animation-delay number ms animation-delay-500ms animation-delay: 500ms; 100 10000 +100ms animation-forwards animation-forwards animation-fill-mode: forwards; animation-backwards animation-backwards animation-fill-mode: backwards; animation-both animation-both animation-fill-mode: both; animation-infinite animation-infinite animation-iteration-count: infinite; animation-normal animation-normal animation-direction: normal; animation-reverse animation-reverse animation-direction: reverse; animation-alternate animation-alternate animation-direction: alternate; animation-alternate-reverse animation-alternate-reverse animation-direction: alternate-reverse; How to work with greenCSS animations all animation classes start with the `animation-` keyword except for the type of animation p e `fade-out` 1 check the css animation examples animation site you can choose from over 110 different handmade css animations 2 first choose your desired type of animation for example a fade in animation `fade-in` 3 afterwards select the desired duration for your animation for example 500ms `animation-duration-500ms` by the way 750ms is the default class and called `animate` 4 choose the animation condition if for example the animation should be played in a loop select infinite `animation-infinite` 5 on the right side you can now copy the entire animation snippet directly and insert it into your document 6 in addition and if required you could also include an animation delay  active focus and hover states greenCSS css class example active:fade-in active :fade-in:active focus:fade-in focus :fade-in:focus hover:fade-in hover :fade-in:hover greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:fade-out` to only apply the fade-out utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:fade-in md: 480px 768px md:fade-in lg: 768px 1080px lg:fade-in greenCSS media queries can also be combined with active focus and hover states for example use `sm:fade-in` to apply the fade-inindex auto utility at only small screen sizes at or below 480px or `active:md:fade-in` to apply the fade-inindex auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :fade-in` p e `active:md:fade-in` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:fade-in number focus:fade-in number hover:fade-in number active css animation focus css animation hover css animation active:sm:fade-in number focus:sm:fade-in number hover:sm:fade-in number active small screens css animation focus small screens css animation hover small screens css animation active:md:fade-in number focus:md:fade-in number hover:md:fade-in number active medium screens css animation focus medium screens css animation hover medium screens css animation active:lg:fade-in number focus:lg:fade-in number hover:lg:fade-in number active large screens css animation focus large screens css animation hover large screens css animation sources animation-duration https: developer mozilla org en-us docs web css animation-duration animation-delay https: developer mozilla org en-us docs web css animation-delay animation-fill-mode https: developer mozilla org en-us docs web css animation-fill-mode animation-iteration-count https: developer mozilla org en-us docs web css animation-iteration-count animation-direction https: developer mozilla org en-us docs web css animation-direction '
---

| _greenCSS_                    | CSS class example                                                        | minimum Value | maximum Value | Step   |
| ----------------------------- | ------------------------------------------------------------------------ | ------------- | ------------- | ------ |
| animation-duration-{number}ms | .animation-duration-500ms { animation-duration: 500ms; }                 | 100           | 10000         | +100ms |
| animation-delay-{number}ms    | .animation-delay-500ms { animation-delay: 500ms; }                       | 100           | 10000         | +100ms |
| animation-forwards            | .animation-forwards { animation-fill-mode: forwards; }                   | -             | -             | -      |
| animation-backwards           | .animation-backwards { animation-fill-mode: backwards; }                 | -             | -             | -      |
| animation-both                | .animation-both { animation-fill-mode: both; }                           | -             | -             | -      |
| animation-infinite            | .animation-infinite { animation-iteration-count: infinite; }             | -             | -             | -      |
| animation-normal              | .animation-normal { animation-direction: normal; }                       | -             | -             | -      |
| animation-reverse             | .animation-reverse { animation-direction: reverse; }                     | -             | -             | -      |
| animation-alternate           | .animation-alternate { animation-direction: alternate; }                 | -             | -             | -      |
| animation-alternate-reverse   | .animation-alternate-reverse { animation-direction: alternate-reverse; } | -             | -             | -      |

## How to work with greenCSS animations

All animation classes start with the `animation-` keyword - except for the type of animation p.e. `fade-out`.

1. Check the [CSS animation](/examples/animation) site. You can choose from over 110 different handmade CSS animations.
2. First choose your desired type of animation. For example a fade in animation. `fade-in`
3. Afterwards, select the desired animation duration for your animation. For example 500ms `animation-duration-500ms` By the way, 750ms is the default class, and called `animate`.
4. Choose the animation condition. If, for example, the animation should be played in a loop, select infinite `animation-infinite`.
5. On the right side you can now copy the entire animation snippet directly and insert it into your document.
6. In addition - and if required - you could also include an animation delay.

```html
<div class="fade-in animation-duration-500ms animation-infinite w-50px h-50px bg-purple rounded-10px">first</div>
```

## Active, focus, and hover states

| _greenCSS_     | CSS class example               |
| -------------- | ------------------------------- |
| active:fade-in | .active\:fade-in:active { ... } |
| focus:fade-in  | .focus\:fade-in:focus { ... }   |
| hover:fade-in  | .hover\:fade-in:hover { ... }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:fade-out` to only apply the fade-out utility class on hover.

```html
<div
  class="hover:fade-out hover:animation-duration-500ms hover:animation-forwards w-50px h-50px bg-purple rounded-10px">
  {children}
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:fade-in      |
| md:         | 480px - 768px  | .md:fade-in      |
| lg:         | 768px - 1080px | .lg:fade-in      |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:fade-in` to apply the fade-inindex auto utility at only small screen sizes at or below 480px. Or `active:md:fade-in` to apply the fade-inindex auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:fade-in` p.e. `active:md:fade-in`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                            | spoken example                                                                                               |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:fade-in{number} , focus:fade-in{number} , hover:fade-in{number}          | active css animation, focus css animation, hover css animation                                               |
| active:sm:fade-in{number} , focus:sm:fade-in{number} , hover:sm:fade-in{number} | active small screens css animation, focus small screens css animation, hover small screens css animation,    |
| active:md:fade-in{number} , focus:md:fade-in{number} , hover:md:fade-in{number} | active medium screens css animation, focus medium screens css animation, hover medium screens css animation, |
| active:lg:fade-in{number} , focus:lg:fade-in{number} , hover:lg:fade-in{number} | active large screens css animation, focus large screens css animation, hover large screens css animation,    |

## Sources

- [animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)
- [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)
- [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)
- [animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)
- [animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
