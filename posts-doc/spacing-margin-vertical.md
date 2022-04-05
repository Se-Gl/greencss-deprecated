---
isBlog: false
title: 'Margin Vertical'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s margin to its vertical sides.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'margin, negative margin, spacing, margin-block'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step - - - - my- size my-1px margin-block: 1px; my-0px my-100px 1px my-neg- size my-neg-1px margin-block: -1px; my-neg-100px my-neg-1px 1px add vertical margin control the vertical margin on the top and bottom margin-block use the my- size utility the vertical margin class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g `my-0px my-1px my-100px` additionally you can also use rem values reminder: 1rem = 10px the rem margin class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g `my-0rem my-1rem my-30rem` 💡 margin-block can mainly be display in modern browsers with the latest updates instead you can also use margin top and bottom docs spacing-margin-side  active focus and hover states omencss css class example range - active:my- size active :my-1px:active margin-block: 1px; active:my-neg-100px to active:my-100px focus:my- size focus :my-1px:focus margin-block: 1px; focus:my-neg-100px to focus:my-100px hover:my- size hover :my-1px:focus margin-block: 1px; hover:my-neg-100px to hover:my-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use `hover:my-10px` to only apply the my-10px utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:my-10px md: 480px - 768px md:my-10px lg: 768px - 1080px lg:my-10px omencss media queries can also be combined with active focus and hover states for example use `sm:my-10px` to apply the my-10px utility at only small screen sizes at or below 480px or `active:md:my-10px` to apply the my-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` active focus hover : media query :my- size ` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - - active:my- focus:my- hover:my- active margin block focus margin block hover margin block active:sm:my- focus:sm:my- hover:sm:my- active small screens margin block focus small screens margin block hover small screens margin block active:md:my- focus:md:my- hover:md:my- active medium screens margin block focus medium screens margin block hover medium screens margin block active:lg:my- focus:lg:my- hover:lg:my- active large screens margin block focus large screens margin block hover large screens margin block sources - margin-block https: developer mozilla org en-us docs web css margin-block '
---

| _omenCSS_     | CSS class example                   | minimum Value | maximum Value | Step |
| ------------- | ----------------------------------- | ------------- | ------------- | ---- |
| my-{size}     | .my-1px { margin-block: 1px; }      | my-0px        | my-100px      | 1px  |
| my-neg-{size} | .my-neg-1px { margin-block: -1px; } | my-neg-100px  | my-neg-1px    | 1px  |

## Add vertical margin

Control the vertical margin on the top, and bottom [margin-block]. Use the my-{size} utility. The vertical margin class range is from negative -100 to positive 100, uses pixel and the [px] postfix. The steps are +/- 1px. e.g. `my-0px, my-1px,... my-100px`

Additionally you can also use rem values. Reminder: 1rem = 10px. The rem margin class range is from negative -30 to positive 30 and uses the [rem] postfix. The steps are +/- 1rem. e.g. `my-0rem, my-1rem,... my-30rem`

💡 margin-block can mainly be display in modern browsers with the latest updates. Instead you can also use [margin top and bottom](/docs/spacing-margin-side).

```html
<div class="my-50px">px-50px</div>
<!-- is equal to: -->
<div class="mt-50px mb-50px">mt-50px mb-50px</div>
```

## Active, focus, and hover states

| _omenCSS_        | CSS class example                             | Range                                  |
| ---------------- | --------------------------------------------- | -------------------------------------- |
| active:my-{size} | .active\:my-1px:active { margin-block: 1px; } | active:my-neg-100px to active:my-100px |
| focus:my-{size}  | .focus\:my-1px:focus { margin-block: 1px; }   | focus:my-neg-100px to focus:my-100px   |
| hover:my-{size}  | .hover\:my-1px:focus { margin-block: 1px; }   | hover:my-neg-100px to hover:my-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:my-10px` to only apply the my-10px utility on hover.

```html
<div class="my-50px hover:my-10px">my-50px</div>
<!-- is equal to: -->
<div class="mt-50px mb-50px">mt-50px mb-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:my-10px     |
| md:         | 480px - 768px  | .md:my-10px     |
| lg:         | 768px - 1080px | .lg:my-10px     |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:my-10px` to apply the my-10px utility at only small screen sizes at or below 480px. Or `active:md:my-10px` to apply the my-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{active | focus | hover}:{media query}:my-{size}`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                       | spoken example                                                                                            |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:my-, focus:my-, hover:my-          | active margin block, focus margin block, hover margin block,                                              |
| active:sm:my-, focus:sm:my-, hover:sm:my- | active small screens margin block, focus small screens margin block, hover small screens margin block,    |
| active:md:my-, focus:md:my-, hover:md:my- | active medium screens margin block, focus medium screens margin block, hover medium screens margin block, |
| active:lg:my-, focus:lg:my-, hover:lg:my- | active large screens margin block, focus large screens margin block, hover large screens margin block,    |

## Sources

- [margin-block](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block)
