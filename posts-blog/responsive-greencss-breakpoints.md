---
isBlog: true
title: 'How to use responsive greenCSS breakpoints?'
date: 'Mar 27. 2022'
excerpt: 'Responsive breakpoints - small, medium, large screens or default values.'
cover_image: '/images/blog/cover/breakpoints.webp'
category: 'Information'
author: 'Severin Glaser'
keywords: ['greenCSS', 'tutorial', 'reference', 'guide', 'breakpoints']
classNames: ''
author_image: '/images/blog/users/segl-avatar.webp'
plainText: ' this article introduces greenCSS’s responsive breakpoints the motto is not just mobile first we want to ensure that every screen looks amazing for this reason the breakpoints are divided into the following three classes: sm: md: lg: use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example - - sm: 0px - 480px sm:m-10px md: 480px - 768px md:m-10px lg: 768px - 1080px lg:m-10px greenCSS media queries can also be combined with active focus and hover states for example use sm:m-10px to apply the 10px margin utility at only small screen sizes at or below 480px or active:md:m-10px to apply the m-10px utility only between small screen sizes 480px and medium screen sizes 768px if you use lg-m-10px the margin of 10px will only be set between 768px and 1080px if you want to use standard values for all screens you can use the default class name: m-10px 1 the structure is as follows: conditional state : media query : classname size p e active:md:m-10px '
---

This article introduces greenCSS’s responsive breakpoints. The motto is not just "mobile first". We want to ensure that every screen looks amazing. For this reason, the breakpoints are divided into the following three classes: `{sm:* | md:* | lg:*}`

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:m-10px       |
| md:         | 480px - 768px  | .md:m-10px       |
| lg:         | 768px - 1080px | .lg:m-10px       |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:m-10px` to apply the 10px margin utility at only small screen sizes at or below 480px. Or `active:md:m-10px` to apply the m-10px utility only between small screen sizes (480px) and medium screen sizes (768px). If you use `lg-m-10px` the margin of 10px will only be set between 768px and 1080px. If you want to use standard values for all screens, you can use the default class name: `m-10px`

1. The structure is as follows: `{conditional state}:{media query}:{classname}{size}` p.e. `active:md:m-10px`
