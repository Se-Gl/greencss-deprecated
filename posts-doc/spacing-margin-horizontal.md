---
isBlog: false
title: 'Margin Horizontal'
date: 'Mar 20. 2022'
excerpt: 'Utility classes for controlling an element`s margin to its horizontal sides.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'margin, negative margin, spacing, margin-inline'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step - - - mx- size mx-1px margin-inline: 1px; mx-0px mx-100px 1px mx-neg- size mx-neg-1px margin-inline: -1px; mx-neg-100px mx-neg-1px 1px add horizontal margin control the horizontal margin on the right and left margin-inline use the mx- size utility the horizontal margin class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g mx-0px mx-1px mx-100px additionally you can also use rem values reminder: 1rem = 10px the rem margin class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g mx-0rem mx-1rem mx-30rem 💡 margin-inline can mainly be display in modern browsers with the latest updates instead you can also use margin left and right docs spacing-margin-side html div class=mx-50px mx-50px div ! is equal to: div class=mr-50px ml-50px mr-50px ml-50px div active focus and hover states omencss css class example range active:mx- size active :mx-1px:active margin-inline: 1px; active:mx-neg-100px to active:mx-100px focus:mx- size focus :mx-1px:focus margin-inline: 1px; focus:mx-neg-100px to focus:mx-100px hover:mx- size hover :mx-1px:focus margin-inline: 1px; hover:mx-neg-100px to hover:mx-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:mx-10px to only apply the mx-10px utility on hover html div class=mx-50px hover:mx-10px px-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:mx-10px md: 480px - 768px md:mx-10px lg: 768px - 1080px lg:mx-10px omencss media queries can also be combined with active focus and hover states for example use sm:mx-10px to apply the mx-10px utility at only small screen sizes at or below 480px or active:md:mx-10px to apply the mx-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :mx- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omenCSS class names spoken example - active:mx- focus:mx- hover:mx- active margin inline focus margin inline hover margin inline active:sm:mx- focus:sm:mx- hover:sm:mx- active small screens margin inline focus small screens margin inline hover small screens margin inline active:md:mx- focus:md:mx- hover:md:mx- active medium screens margin inline focus medium screens margin inline hover medium screens margin inline active:lg:mx- focus:lg:mx- hover:lg:mx- active large screens margin inline focus large screens margin inline hover large screens margin inline '
---

| _omenCSS_     | CSS class example                    | minimum Value | maximum Value | Step |
| ------------- | ------------------------------------ | ------------- | ------------- | ---- |
| mx-{size}     | .mx-1px { margin-inline: 1px; }      | mx-0px        | mx-100px      | 1px  |
| mx-neg-{size} | .mx-neg-1px { margin-inline: -1px; } | mx-neg-100px  | mx-neg-1px    | 1px  |

## Add horizontal margin

Control the horizontal margin on the right, and left [margin-inline]. Use the mx-{size} utility. The horizontal margin class range is from negative -100 to positive 100, uses pixel and the [px] postfix. The steps are +/- 1px. e.g. `mx-0px, mx-1px,... mx-100px`

Additionally you can also use rem values. Reminder: 1rem = 10px. The rem margin class range is from negative -30 to positive 30 and uses the [rem] postfix. The steps are +/- 1rem. e.g. `mx-0rem, mx-1rem,... mx-30rem`

💡 margin-inline can mainly be display in modern browsers with the latest updates. Instead you can also use [margin left and right](/docs/spacing-margin-side).

```html
<div class="mx-50px">mx-50px</div>
<!-- is equal to: -->
<div class="mr-50px ml-50px">mr-50px ml-50px</div>
```

## Active, focus, and hover states

| _omenCSS_        | CSS class example                              | Range                                  |
| ---------------- | ---------------------------------------------- | -------------------------------------- |
| active:mx-{size} | .active\:mx-1px:active { margin-inline: 1px; } | active:mx-neg-100px to active:mx-100px |
| focus:mx-{size}  | .focus\:mx-1px:focus { margin-inline: 1px; }   | focus:mx-neg-100px to focus:mx-100px   |
| hover:mx-{size}  | .hover\:mx-1px:focus { margin-inline: 1px; }   | hover:mx-neg-100px to hover:mx-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:mx-10px` to only apply the mx-10px utility on hover.

```html
<div class="mx-50px hover:mx-10px">px-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:mx-10px     |
| md:         | 480px - 768px  | .md:mx-10px     |
| lg:         | 768px - 1080px | .lg:mx-10px     |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:mx-10px` to apply the mx-10px utility at only small screen sizes at or below 480px. Or `active:md:mx-10px` to apply the mx-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{active | focus | hover}:{media query}:mx-{size}`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                       | spoken example                                                                                               |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:mx-, focus:mx-, hover:mx-          | active margin inline, focus margin inline, hover margin inline,                                              |
| active:sm:mx-, focus:sm:mx-, hover:sm:mx- | active small screens margin inline, focus small screens margin inline, hover small screens margin inline,    |
| active:md:mx-, focus:md:mx-, hover:md:mx- | active medium screens margin inline, focus medium screens margin inline, hover medium screens margin inline, |
| active:lg:mx-, focus:lg:mx-, hover:lg:mx- | active large screens margin inline, focus large screens margin inline, hover large screens margin inline,    |
