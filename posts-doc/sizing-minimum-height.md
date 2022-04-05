---
isBlog: false
title: 'Minimum Height'
date: 'Mar 27. 2022'
excerpt: 'Utility classes for controlling an element`s minimum height.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Sizing'
author: 'Severin Glaser'
keywords: 'sizing, minimum height, min-h-'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step - - min-h- size min-h-1px height: 1px; min-h-0px min-h-100px 1px min-h- size min-h-11rem height: 1rem; min-h-11rem min-h-100rem 1rem min-h- size min-h-1% height: 1%; min-h-0per min-h-100per 1% min-h- size min-h-1vw height: 1vw; min-h-0vw min-h-100vw 1vw fixed minimum heights control the height on every html element by using the min-h- size utility with a postfix variable - like -px -rem -vw 1 the pixel height class range is from 0 to positive 100 and uses the px postfix the steps are + - 1px e g min-h-0px min-h-1px min-h-100px 2 the rem height class range is from positive 11rem to positive 100rem and uses the rem postfix the steps are + - 1rem e g min-h-11rem min-h-12rem min-h-100rem ⚠️ remember 1rem = 10px or 10rem = 100px 3 the viewport height class range is from 0vw to positive 100vw and uses the vw postfix the steps are + - 1vw e g min-h-0vw min-h-1vw min-h-100vw use min-h-100vw to make an element span the entire height of the viewport html div class=min-h-50px min-h-50px div ! 50rem is equal to: 500px div class=min-h-50rem min-h-50rem div ! 50per is equal to: 50% div class=min-h-50per min-h-50per div ! 50vw is equal to: viewport height of 50 div class=min-h-50vw min-h-50vw div minimum percentage heights control the percentage height on every html element by using the min-h- size utility with the postfix variable -per 1 the percentage height class range is from 0 to positive 100 and uses the per postfix the steps are + - 1% e g min-h-0per min-h-1per min-h-100per html div class=min-h-50per min-h-50per div reset the minimum height the min-h-auto utility can be useful if you need to remove an element’s assigned height under a specific condition like at a particular breakpoint blog responsive-omencss-breakpoints : html div class=min-h-full sm:min-h-auto ! div 💡 click how to use the default height docs sizing-height or maximum height docs sizing-maximum-height active focus and hover states omencss css class example range - active:min-h- size active :min-h-1px:active height: 1px; active:min-h-0px to active:min-h-100px focus:min-h- size focus :min-h-1px:focus height: 1px; focus:min-h-0px to focus:min-h-100px hover:min-h- size hover :min-h-1px:focus height: 1px; hover:min-h-0px to hover:min-h-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:min-h-10px to only apply the min-h-10px utility on hover html div class=min-h-50px hover:min-h-20px min-h-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:min-h-10px md: 480px - 768px md:min-h-10px lg: 768px - 1080px lg:min-h-10px omencss media queries can also be combined with active focus and hover states for example use sm:min-h-10px to apply the min-h-10px utility at only small screen sizes at or below 480px or active:md:min-h-10px to apply the min-h-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: conditional state : media query : classname size p e active:md:m-10px executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - active:min-h- size focus:min-h- size hover:min-h- size active minimum height focus minimum height hover minimum height active:sm:min-h- size focus:sm:min-h- size hover:sm:min-h- size active small screens minimum height focus small screens minimum height hover small screens minimum height active:md:min-h- size focus:md:min-h- size hover:md:min-h- size active medium screens minimum height focus medium screens minimum height hover medium screens minimum height active:lg:min-h- size focus:lg:min-h- size hover:lg:min-h- size active large screens minimum height focus large screens minimum height hover large screens minimum height '
---

| _omenCSS_    | CSS class example              | minimum Value | maximum Value | Step |
| ------------ | ------------------------------ | ------------- | ------------- | ---- |
| min-h-{size} | .min-h-1px { height: 1px; }    | min-h-0px     | min-h-100px   | 1px  |
| min-h-{size} | .min-h-11rem { height: 1rem; } | min-h-11rem   | min-h-100rem  | 1rem |
| min-h-{size} | .min-h-1% { height: 1%; }      | min-h-0per    | min-h-100per  | 1%   |
| min-h-{size} | .min-h-1vw { height: 1vw; }    | min-h-0vw     | min-h-100vw   | 1vw  |

## Fixed minimum heights

Control the height on every HTML element by using the min-h-{size} utility with a postfix variable - like `{-px | -rem | -vw}`.

1. The pixel height class range is from 0 to positive 100 and uses the [px] postfix. The steps are +/- 1px. e.g. `min-h-0px, min-h-1px,... min-h-100px`

2. The rem height class range is from positive 11rem to positive 100rem and uses the [rem] postfix. The steps are +/- 1rem. e.g. `min-h-11rem, min-h-12rem,... min-h-100rem`. ⚠️ Remember 1rem = 10px or 10rem = 100px

3. The viewport height class range is from 0vw to positive 100vw and uses the [vw] postfix. The steps are +/- 1vw. e.g. `min-h-0vw, min-h-1vw,... min-h-100vw`. Use min-h-100vw to make an element span the entire height of the viewport.

```html
<div class="min-h-50px">min-h-50px</div>
<!-- 50rem is equal to: 500px -->
<div class="min-h-50rem">min-h-50rem</div>
<!-- 50per is equal to: 50% -->
<div class="min-h-50per">min-h-50per</div>
<!-- 50vw is equal to: viewport height of 50 -->
<div class="min-h-50vw">min-h-50vw</div>
```

## Minimum Percentage heights

Control the percentage height on every HTML element by using the min-h-{size} utility with the postfix variable `{-per}`.

1. The percentage height class range is from 0 to positive 100 and uses the [per] postfix. The steps are +/- 1%. e.g. `min-h-0per, min-h-1per,... min-h-100per`

```html
<div class="min-h-50per">min-h-50per</div>
```

## Reset the minimum height

The `{min-h-auto}` utility can be useful if you need to remove an element’s assigned height under a specific condition, like at a particular [breakpoint](/blog/responsive-omencss-breakpoints):

```html
<div class="min-h-full sm:min-h-auto">
  <!-- ... -->
</div>
```

💡 [Click] how to use the default [height](/docs/sizing-height) or [maximum height](/docs/sizing-maximum-height).

## Active, focus, and hover states

| _omenCSS_           | CSS class example                          | Range                                  |
| ------------------- | ------------------------------------------ | -------------------------------------- |
| active:min-h-{size} | .active\:min-h-1px:active { height: 1px; } | active:min-h-0px to active:min-h-100px |
| focus:min-h-{size}  | .focus\:min-h-1px:focus { height: 1px; }   | focus:min-h-0px to focus:min-h-100px   |
| hover:min-h-{size}  | .hover\:min-h-1px:focus { height: 1px; }   | hover:min-h-0px to hover:min-h-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:min-h-10px` to only apply the min-h-10px utility on hover.

```html
<div class="min-h-50px hover:min-h-20px">min-h-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:min-h-10px  |
| md:         | 480px - 768px  | .md:min-h-10px  |
| lg:         | 768px - 1080px | .lg:min-h-10px  |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:min-h-10px` to apply the min-h-10px utility at only small screen sizes at or below 480px. Or `active:md:min-h-10px` to apply the min-h-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{classname}{size}` p.e. `active:md:m-10px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                    | spoken example                                                                                                  |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:min-h-{size} , focus:min-h-{size} , hover:min-h-{size}          | active minimum height, focus minimum height, hover minimum height                                               |
| active:sm:min-h-{size} , focus:sm:min-h-{size} , hover:sm:min-h-{size} | active small screens minimum height, focus small screens minimum height, hover small screens minimum height,    |
| active:md:min-h-{size} , focus:md:min-h-{size} , hover:md:min-h-{size} | active medium screens minimum height, focus medium screens minimum height, hover medium screens minimum height, |
| active:lg:min-h-{size} , focus:lg:min-h-{size} , hover:lg:min-h-{size} | active large screens minimum height, focus large screens minimum height, hover large screens minimum height,    |

## Sources

- [min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
