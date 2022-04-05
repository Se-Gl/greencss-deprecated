---
isBlog: false
title: 'Spacing Variables'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling custom spacing variables.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'spacing, margin, padding, auto'
classNames: ''
plainText: ' omencss css class example m-auto w-auto margin: auto; mx-auto mx-auto margin-inline: auto; my-auto my-auto margin-block: auto; mt-auto mt-auto margin-top: auto; mr-auto mr-auto margin-right: auto; mb-auto mb-auto margin-bottom: auto; ml-auto ml-auto margin-left: auto; p-auto p-auto padding: auto; px-auto px-auto padding-inline: auto; py-auto py-auto padding-block: auto; pt-auto pt-auto padding-top: auto; pr-auto pr-auto padding-right: auto; pb-auto pb-auto padding-bottom: auto; pl-auto pl-auto padding-left: auto; custom sizing variables control the margin auto or padding auto classes on every html element by using the omencss classes shown above  active focus and hover states omencss css class example active: variable active :m-auto:active margin: auto; focus: variable focus :m-auto:focus margin: auto; hover: variable hover :m-auto:focus margin: auto; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:m-auto` to only apply the m-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:m-auto md: 480px 768px md:m-auto lg: 768px 1080px lg:m-auto omencss media queries can also be combined with active focus and hover states for example use `sm:m-auto` to apply the `m-auto` utility at only small screen sizes at or below 480px or `active:md:m-auto` to apply the `m-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query : classname ` p e `active:md:m-auto` '
---

| _omenCSS_ | CSS class example                  |
| --------- | ---------------------------------- |
| m-auto    | .w-auto { margin: auto; }          |
| mx-auto   | .mx-auto { margin-inline: auto; }  |
| my-auto   | .my-auto { margin-block: auto; }   |
| mt-auto   | .mt-auto { margin-top: auto; }     |
| mr-auto   | .mr-auto { margin-right: auto; }   |
| mb-auto   | .mb-auto { margin-bottom: auto; }  |
| ml-auto   | .ml-auto { margin-left: auto; }    |
| p-auto    | .p-auto { padding: auto; }         |
| px-auto   | .px-auto { padding-inline: auto; } |
| py-auto   | .py-auto { padding-block: auto; }  |
| pt-auto   | .pt-auto { padding-top: auto; }    |
| pr-auto   | .pr-auto { padding-right: auto; }  |
| pb-auto   | .pb-auto { padding-bottom: auto; } |
| pl-auto   | .pl-auto { padding-left: auto; }   |

## Custom Sizing variables

Control the margin auto, or padding auto classes on every HTML element by using the omenCSS classes shown above.

```html
<div class="m-auto ">m-auto</div>
<div class="mt-auto ">mt-auto</div>
<div class="mr-auto ">mr-auto</div>
<div class="mb-auto ">mb-auto</div>
<div class="ml-auto ">ml-auto</div>
```

## Active, focus, and hover states

| _omenCSS_         | CSS class example                        |
| ----------------- | ---------------------------------------- |
| active:{variable} | .active\:m-auto:active { margin: auto; } |
| focus:{variable}  | .focus\:m-auto:focus { margin: auto; }   |
| hover:{variable}  | .hover\:m-auto:focus { margin: auto; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:m-auto` to only apply the m-auto utility class on hover.

```html
<div class="m-auto hover:my-auto">my-auto class on hover</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:m-auto      |
| md:         | 480px - 768px  | .md:m-auto      |
| lg:         | 768px - 1080px | .lg:m-auto      |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:m-auto` to apply the `m-auto` utility at only small screen sizes at or below 480px. Or `active:md:m-auto` to apply the `m-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:{classname}` p.e. `active:md:m-auto`
