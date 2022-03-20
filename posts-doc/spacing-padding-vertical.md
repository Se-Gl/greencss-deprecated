---
isBlog: false
title: 'Padding Vertical'
date: 'Mar 20. 2022'
excerpt: 'Utility classes for controlling an element`s padding to its vertical sides.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'padding, negative padding, spacing, padding-block'
classNames: ''
plainText: ' omencss css class example range - py- size py-1px padding-block: 1px; py-0px to py-100px py-neg- size py-neg-1px padding-block: -1px; py-neg-100px to py-neg-1px add vertical padding control the vertical padding on the top and bottom padding-block use the py- size utility the vertical padding class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g py-0px py-1px py-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g py-0rem py-1rem py-30rem 💡 padding-block can mainly be display in modern browsers with the latest updates instead you can also use padding top and bottom docs spacing-padding-side html div class=py-50px px-50px div active focus and hover states omencss css class example range active:py- size active :py-1px:active padding-block: 1px; active:py-neg-100px to active:py-100px focus:py- size focus :py-1px:focus padding-block: 1px; focus:py-neg-100px to focus:py-100px hover:py- size hover :py-1px:focus padding-block: 1px; hover:py-neg-100px to hover:py-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:py-10px to only apply the py-10px utility on hover html div class=py-50px hover:py-10px py-50px div ! is equal to: div class=pt-50px pb-50px pt-50px pb-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:py-10px md: 480px - 768px md:py-10px lg: 768px - 1080px lg:py-10px omencss media queries can also be combined with active focus and hover states for example use sm:py-10px to apply the py-10px utility at only small screen sizes at or below 480px or active:md:py-10px to apply the py-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :py- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example - active:py- focus:py- hover:py- active padding block focus padding block hover padding block active:sm:py- focus:sm:py- hover:sm:py- active small screens padding block focus small screens padding block hover small screens padding block active:md:py- focus:md:py- hover:md:py- active medium screens padding block focus medium screens padding block hover medium screens padding block active:lg:py- focus:lg:py- hover:lg:py- active large screens padding block focus large screens padding block hover large screens padding block '
---

| _omenCSS_     | CSS class example                    | Range                      |
| ------------- | ------------------------------------ | -------------------------- |
| py-{size}     | .py-1px { padding-block: 1px; }      | py-0px to py-100px         |
| py-neg-{size} | .py-neg-1px { padding-block: -1px; } | py-neg-100px to py-neg-1px |

## Add vertical padding

Control the vertical padding on the top, and bottom [padding-block]. Use the py-{size} utility. The vertical padding class range is from negative -100 to positive 100, uses pixel and the [px] postfix. The steps are +/- 1px. e.g. `py-0px, py-1px,... py-100px`

Additionally you can also use rem values. Reminder: 1rem = 10px. The rem padding class range is from negative -30 to positive 30 and uses the [rem] postfix. The steps are +/- 1rem. e.g. `py-0rem, py-1rem,... py-30rem`

💡 padding-block can mainly be display in modern browsers with the latest updates. Instead you can also use [padding top and bottom](/docs/spacing-padding-side).

```html
<div class="py-50px">px-50px</div>
<!-- is equal to: -->
<div class="pt-50px pb-50px">pt-50px pb-50px</div>
```

## Active, focus, and hover states

| _omenCSS_        | CSS class example                              | Range                                  |
| ---------------- | ---------------------------------------------- | -------------------------------------- |
| active:py-{size} | .active\:py-1px:active { padding-block: 1px; } | active:py-neg-100px to active:py-100px |
| focus:py-{size}  | .focus\:py-1px:focus { padding-block: 1px; }   | focus:py-neg-100px to focus:py-100px   |
| hover:py-{size}  | .hover\:py-1px:focus { padding-block: 1px; }   | hover:py-neg-100px to hover:py-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:py-10px` to only apply the py-10px utility on hover.

```html
<div class="py-50px hover:py-10px">py-50px</div>
<!-- is equal to: -->
<div class="pt-50px pb-50px">pt-50px pb-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:py-10px     |
| md:         | 480px - 768px  | .md:py-10px     |
| lg:         | 768px - 1080px | .lg:py-10px     |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:py-10px` to apply the py-10px utility at only small screen sizes at or below 480px. Or `active:md:py-10px` to apply the py-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{active | focus | hover}:{media query}:py-{size}`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS states                            | spoken example                                                                                               |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:py-, focus:py-, hover:py-          | active padding block, focus padding block, hover padding block,                                              |
| active:sm:py-, focus:sm:py-, hover:sm:py- | active small screens padding block, focus small screens padding block, hover small screens padding block,    |
| active:md:py-, focus:md:py-, hover:md:py- | active medium screens padding block, focus medium screens padding block, hover medium screens padding block, |
| active:lg:py-, focus:lg:py-, hover:lg:py- | active large screens padding block, focus large screens padding block, hover large screens padding block,    |
