---
isBlog: false
title: 'Sizing Variables'
date: 'Mar 27. 2022'
excerpt: 'Utility classes for controlling custom sizing variables.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Sizing'
author: 'Severin Glaser'
keywords: 'sizing, width, height, auto'
classNames: ''
plainText: ' omencss css class example - - w-auto w-auto width: auto; w-min-content w-min-content width: min-content; w-max-content w-max-content width: max-content; w-fit-content w-fit-content width: fit-content; min-w-auto min-w-auto min-width: fit-content; min-w-0px min-w-0px min-width: 0px; min-w-full min-w-full min-width: 100%; min-w-min-content min-w-min-content min-width: min-content; min-w-max-content min-w-max-content min-width: max-content; min-w-fit-content min-w-fit-content min-width: fit-content; max-w-auto max-w-auto max-width: auto; max-w-min-content max-w-min-content max-width: min-content; max-w-max-content max-w-max-content max-width: max-content; max-w-fit-content max-w-fit-content max-width: fit-content; h-auto h-auto height: auto; h-min-content h-min-content height: min-content; h-max-content h-max-content height: max-content; h-fit-content h-fit-content height: fit-content; min-h-auto min-h-auto min-height: fit-content; min-h-0px min-h-0px min-height: 0px; min-h-full min-h-full min-height: 100%; min-h-min-content min-h-min-content min-height: min-content; min-h-max-content min-h-max-content min-height: max-content; min-h-fit-content min-h-fit-content min-height: fit-content; max-h-auto max-h-auto max-height: auto; max-h-min-content max-h-min-content max-height: min-content; max-h-max-content max-h-max-content max-height: max-content; max-h-fit-content max-h-fit-content max-height: fit-content; custom sizing variables control the width minimum width maximum width height minimum height od maximum height on every html element by using the omencss classes shown above html div class=w-auto w-auto div ! w-auto is similar to w-100per div class=w-100per w-100per div ! minimum width 100% div class=min-w-full min-w-full div reset width the w-auto utility can be useful if you need to remove an element’s assigned width under a specific condition like at a particular breakpoint blog responsive-omencss-breakpoints : html div class=w-full sm:w-auto ! div 💡 click to see how to use the default minimum width docs sizing-minimum-width maximum width docs sizing-maximum-width or width docs sizing-width active focus and hover states omencss css class example - active: variable active :max-h-auto:active max-height: auto; focus: variable focus :max-h-auto:focus max-height: auto; hover: variable hover :max-h-auto:focus max-height: auto; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:max-h-auto to only apply the max-h-auto utility class on hover html div class=max-h-min-content hover:max-h-max-content hover min max content div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - sm: 0px - 480px max-h-fit-content md: 480px - 768px max-h-fit-content lg: 768px - 1080px max-h-fit-content omencss media queries can also be combined with active focus and hover states for example use sm:max-h-fit-content to apply the max-h-fit-content utility at only small screen sizes at or below 480px or active:md:max-h-fit-content to apply the max-h-fit-content utility at only between small screen sizes 480px and medium screen sizes 768px and on active state 1 the structure is as follows: conditional state : media query : classname p e active:md:m-auto '
---

| _omenCSS_         | CSS class example                               |
| ----------------- | ----------------------------------------------- |
| w-auto            | .w-auto { width: auto; }                        |
| w-min-content     | .w-min-content { width: min-content; }          |
| w-max-content     | .w-max-content { width: max-content; }          |
| w-fit-content     | .w-fit-content { width: fit-content; }          |
| min-w-auto        | .min-w-auto { min-width: fit-content; }         |
| min-w-0px         | .min-w-0px { min-width: 0px; }                  |
| min-w-full        | .min-w-full { min-width: 100%; }                |
| min-w-min-content | .min-w-min-content { min-width: min-content; }  |
| min-w-max-content | .min-w-max-content { min-width: max-content; }  |
| min-w-fit-content | .min-w-fit-content { min-width: fit-content; }  |
| max-w-auto        | .max-w-auto { max-width: auto; }                |
| max-w-min-content | .max-w-min-content { max-width: min-content; }  |
| max-w-max-content | .max-w-max-content { max-width: max-content; }  |
| max-w-fit-content | .max-w-fit-content { max-width: fit-content; }  |
| h-auto            | .h-auto { height: auto; }                       |
| h-min-content     | .h-min-content { height: min-content; }         |
| h-max-content     | .h-max-content { height: max-content; }         |
| h-fit-content     | .h-fit-content { height: fit-content; }         |
| min-h-auto        | .min-h-auto { min-height: fit-content; }        |
| min-h-0px         | .min-h-0px { min-height: 0px; }                 |
| min-h-full        | .min-h-full { min-height: 100%; }               |
| min-h-min-content | .min-h-min-content { min-height: min-content; } |
| min-h-max-content | .min-h-max-content { min-height: max-content; } |
| min-h-fit-content | .min-h-fit-content { min-height: fit-content; } |
| max-h-auto        | .max-h-auto { max-height: auto; }               |
| max-h-min-content | .max-h-min-content { max-height: min-content; } |
| max-h-max-content | .max-h-max-content { max-height: max-content; } |
| max-h-fit-content | .max-h-fit-content { max-height: fit-content; } |

## Custom Sizing variables

Control the width, minimum width, maximum width, height, minimum height od maximum height on every HTML element by using the omenCSS classes shown above.

```html
<div class="w-auto ">w-auto</div>
<!-- w-auto is similar to w-100per -->
<div class="w-100per">w-100per</div>
<!-- minimum width 100% -->
<div class="min-w-full">min-w-full</div>
```

## Reset width

The `{w-auto}` utility can be useful if you need to remove an element’s assigned width under a specific condition, like at a particular [breakpoint](/blog/responsive-omencss-breakpoints):

```html
<div class="w-full sm:w-auto">
  <!-- ... -->
</div>
```

💡 [Click] to see how to use the default [minimum width](/docs/sizing-minimum-width), [maximum width](/docs/sizing-maximum-width) or [width](/docs/sizing-width).

## Active, focus, and hover states

| _omenCSS_         | CSS class example                                |
| ----------------- | ------------------------------------------------ |
| active:{variable} | .active\:max-h-auto:active { max-height: auto; } |
| focus:{variable}  | .focus\:max-h-auto:focus { max-height: auto; }   |
| hover:{variable}  | .hover\:max-h-auto:focus { max-height: auto; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:max-h-auto` to only apply the max-h-auto utility class on hover.

```html
<div class="max-h-min-content hover:max-h-max-content">hover min/max content</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example       |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:max-h-fit-content |
| md:         | 480px - 768px  | .md:max-h-fit-content |
| lg:         | 768px - 1080px | .lg:max-h-fit-content |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:max-h-fit-content` to apply the `max-h-fit-content` utility at only small screen sizes at or below 480px. Or `active:md:max-h-fit-content` to apply the `max-h-fit-content` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:{classname}` p.e. `active:md:m-auto`
