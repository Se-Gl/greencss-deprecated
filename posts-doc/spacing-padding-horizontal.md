---
isBlog: false
title: 'Padding Horizontal'
date: 'Mar 20. 2022'
excerpt: 'Utility classes for controlling an element`s padding to its horizontal sides.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'padding, negative padding, spacing, padding-inline'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step - - - - px- size px-1px padding-inline: 1px; px-0px px-100px 1px px-neg- size px-neg-1px padding-inline: -1px; px-neg-100px px-neg-1px 1px add horizontal padding control the horizontal padding on the right and left padding-inline use the px- size utility the horizontal padding class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g px-0px px-1px px-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g px-0rem px-1rem px-30rem 💡 padding-inline can mainly be display in modern browsers with the latest updates instead you can also use padding left and right docs spacing-padding-side html div class=px-50px px-50px div ! is equal to: div class=pr-50px pl-50px pr-50px pl-50px div active focus and hover states omencss css class example range - active:px- size active :px-1px:active padding-inline: 1px; active:px-neg-100px to active:px-100px focus:px- size focus :px-1px:focus padding-inline: 1px; focus:px-neg-100px to focus:px-100px hover:px- size hover :px-1px:focus padding-inline: 1px; hover:px-neg-100px to hover:px-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:px-10px to only apply the px-10px utility on hover html div class=px-50px hover:px-10px p-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:px-10px md: 480px - 768px md:px-10px lg: 768px - 1080px lg:px-10px omencss media queries can also be combined with active focus and hover states for example use sm:px-10px to apply the px-10px utility at only small screen sizes at or below 480px or active:md:px-10px to apply the px-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :px- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omenCSS class names spoken example - - active:px- focus:px- hover:px- active padding inline focus padding inline hover padding inline active:sm:px- focus:sm:px- hover:sm:px- active small screens padding inline focus small screens padding inline hover small screens padding inline active:md:px- focus:md:px- hover:md:px- active medium screens padding inline focus medium screens padding inline hover medium screens padding inline active:lg:px- focus:lg:px- hover:lg:px- active large screens padding inline focus large screens padding inline hover large screens padding inline '
---

| _omenCSS_     | CSS class example                     | minimum Value | maximum Value | Step |
| ------------- | ------------------------------------- | ------------- | ------------- | ---- |
| px-{size}     | .px-1px { padding-inline: 1px; }      | px-0px        | px-100px      | 1px  |
| px-neg-{size} | .px-neg-1px { padding-inline: -1px; } | px-neg-100px  | px-neg-1px    | 1px  |

## Add horizontal padding

Control the horizontal padding on the right, and left [padding-inline]. Use the px-{size} utility. The horizontal padding class range is from negative -100 to positive 100, uses pixel and the [px] postfix. The steps are +/- 1px. e.g. `px-0px, px-1px,... px-100px`

Additionally you can also use rem values. Reminder: 1rem = 10px. The rem padding class range is from negative -30 to positive 30 and uses the [rem] postfix. The steps are +/- 1rem. e.g. `px-0rem, px-1rem,... px-30rem`

💡 padding-inline can mainly be display in modern browsers with the latest updates. Instead you can also use [padding left and right](/docs/spacing-padding-side).

```html
<div class="px-50px">px-50px</div>
<!-- is equal to: -->
<div class="pr-50px pl-50px">pr-50px pl-50px</div>
```

## Active, focus, and hover states

| _omenCSS_        | CSS class example                               | Range                                  |
| ---------------- | ----------------------------------------------- | -------------------------------------- |
| active:px-{size} | .active\:px-1px:active { padding-inline: 1px; } | active:px-neg-100px to active:px-100px |
| focus:px-{size}  | .focus\:px-1px:focus { padding-inline: 1px; }   | focus:px-neg-100px to focus:px-100px   |
| hover:px-{size}  | .hover\:px-1px:focus { padding-inline: 1px; }   | hover:px-neg-100px to hover:px-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:px-10px` to only apply the px-10px utility on hover.

```html
<div class="px-50px hover:px-10px">p-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:px-10px     |
| md:         | 480px - 768px  | .md:px-10px     |
| lg:         | 768px - 1080px | .lg:px-10px     |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:px-10px` to apply the px-10px utility at only small screen sizes at or below 480px. Or `active:md:px-10px` to apply the px-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{active | focus | hover}:{media query}:px-{size}`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                       | spoken example                                                                                                  |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:px-, focus:px-, hover:px-          | active padding inline, focus padding inline, hover padding inline,                                              |
| active:sm:px-, focus:sm:px-, hover:sm:px- | active small screens padding inline, focus small screens padding inline, hover small screens padding inline,    |
| active:md:px-, focus:md:px-, hover:md:px- | active medium screens padding inline, focus medium screens padding inline, hover medium screens padding inline, |
| active:lg:px-, focus:lg:px-, hover:lg:px- | active large screens padding inline, focus large screens padding inline, hover large screens padding inline,    |
