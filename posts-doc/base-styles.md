---
isBlog: false
title: 'Base styles & guideline'
date: 'Mar 18. 2022'
excerpt: 'An opinionated set of base styles, structure and guidelines for omenCSS projects.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Base Styles'
author: 'Severin Glaser'
keywords: 'base style, guideline, guide, structure'
classNames: ''
plainText: " omencss is a pure css library built with scss compiled and minified for all javascript python php etc frameworks the entire code base or partial code classes can be easily imported into your project all default browser variables are disabled this allows you to decide for your own design structure and arrangement all omencss classes have the same structure a simple explanation of this principle can be given with the help of the text-blue class 1 if the text colour for an element is to be changed the class is inserted this value is the default value for all responsive display sizes html p class=text-blue purple text p --- 1 if the text colour for an element is to be changed on small screens only 0px - 480px the class is inserted with a pre-class called sm in the following example on small screens up to 480px width the text is displayed in purple on other screens the text is displayed in blue - as the default class is set to text-blue html p class=text-blue sm text-purple purple text p --- 1 if the text colour for an element is to be changed on medium screens only 480px - 768px the class is inserted with a pre-class called md in the following example on medium screens 480px - 768px width the text is displayed in purple is the screen smaller or bigger the text is displayed in blue - as the default class is set to text-blue html p class=text-blue md text-purple purple text p --- 1 if the text colour for an element is to be changed on large screens only 768px - 1080px the class is inserted with a pre-class called lg in the following example on medium screens 768px - 1080px width the text is displayed in purple is the screen smaller or bigger the text is displayed in blue - as the default class is set to text-blue html p class=text-blue lg text-purple purple text p --- 1 note that this method can also be used for hover focus or active classes the same principle can be used to add a pre-class the default values in the following example shows a blue text with a blue-1 text colour on hover on small screens the text becomes red and has a hover class of red-1 html p class=text-blue hover text-blue-1 sm text-red hover sm text-red-1 purple text p values & unit sizes some classes require special mathemathical values all amounts are specified within a class this allows intuitive and easy to understand writing of css classes the value and the unit are always written after the class html opacity 1 percent p class=opacity-1per opacity text p html width 100 pixel div class=w-100px width element div html width 20 rem div class=w-20rem width element div the properties can also have netagive values those are supplemented by the -neg class html on small screens rotate the element by 180 degrees in a netagive direction div class=sm rotate-neg-180deg rotate in negative direction div default values are removed 1 omencss removes all of the default values like margins paddings text-decoration headings blockquotes paragraphs input states lists border etc 2 visitors who do not want to experience animations or transitions will not register motion 3 the standard font size is automatically converted to the power of 10 reduced by 62 5% in other words 1rem = 10pixel this decision simplifies the calculation for the developer css default css reset file html body div span applet object iframe h1 h2 h3 h4 h5 h6 p blockquote pre a abbr acronym address big cite code del dfn em img ins kbd q s samp small strike strong sub sup tt var b u i center dl dt dd ol ul li fieldset form label legend table caption tbody tfoot thead tr th td article aside canvas details embed figure figcaption footer header hgroup menu nav output ruby section summary time mark audio video margin 0; padding 0; border 0; font inherit; vertical-align baseline; html5 display-role reset for older browsers article aside details figcaption figure footer header hgroup menu nav section display block; body line-height 1; ol ul list-style none; blockquote q quotes none; blockquote before blockquote after q before q after content ''; content none; table border-collapse collapse; border-spacing 0; set core root defaults html font-size 62 5%; default pixel size reset to 10px remove all animations transitions and smooth scroll for people that prefer not to see them @media prefers-reduced-motion reduce html focus-within scroll-behavior auto; before after animation-duration 0 01ms !important; animation-iteration-count 1 !important; transition-duration 0 01ms !important; scroll-behavior auto !important; before after box-sizing border-box; margin 0; body line-height 1 5; -webkit-font-smoothing antialiased; img picture video canvas svg display block; max-width 100%; input button textarea select font inherit; p h1 h2 h3 h4 h5 h6 overflow-wrap break-word; root next isolation isolate; remove outline a focus button focus input focus focus outline none; a -moz-focus-inner button -moz-focus-inner input -moz-focus-inner -moz-focus-inner border 0; focus outline none; -moz-focus-inner border 0; executive summary 1 all default browser values are reset allowing you to incorporate your design and avoid annoying default settings 2 the text and the distances are calculated to the power of 10 10px = 1rem 3 all omencss classes have the same structure 4 the default class does not have any pre-classes p e text-blue 5 values and unit sizes are written as a post-class - at the end of every class p e opacity-100per 6 omencss lets you conditionally apply utility classes in different states using variant modifiers such as active hover or focus statements the utility classes are entered before the default class check the adequate documentation site for the respective class p e hover text-blue mnemonic aid on hover set the colour to blue 7 you can also use variant modifiers to target media queries and make your website responsive within seconds the variant modifier classes are entered after the utility class and before the default class p e hover sm text-blue mnemonic aid hover on small screens the text with a blue colour "
---

omenCSS is a pure css library, built with SCSS. compiled and minified for all JavaScript, Python, PHP etc. frameworks. The entire code base or partial code classes can be easily imported into your project. All default browser variables are disabled. This allows you to decide for your own design.

## Structure and Arrangement

All omenCSS classes have the same structure. A simple explanation of this principle can be given with the help of the `text-blue` class.

1. If the text colour for an element is to be changed, the class is inserted. This value is the default value for all responsive display sizes.

```html
<p class="text-blue">Purple text</p>
```

---

1. If the text colour for an element is to be changed on small screens only (0px - 480px), the class is inserted with a pre-class called "sm:". In the following example, on small screens up to 480px width, the text is displayed in purple. On other screens, the text is displayed in blue - as the default class is set to text-blue.

```html
<p class="text-blue sm:text-purple">Purple text</p>
```

---

1. If the text colour for an element is to be changed on medium screens only (480px - 768px), the class is inserted with a pre-class called "md:". In the following example, on medium screens 480px - 768px width, the text is displayed in purple. Is the screen smaller or bigger, the text is displayed in blue - as the default class is set to text-blue.

```html
<p class="text-blue md:text-purple">Purple text</p>
```

---

1. If the text colour for an element is to be changed on large screens only (768px - 1080px), the class is inserted with a pre-class called "lg:". In the following example, on medium screens 768px - 1080px width, the text is displayed in purple. Is the screen smaller or bigger, the text is displayed in blue - as the default class is set to text-blue.

```html
<p class="text-blue lg:text-purple">Purple text</p>
```

---

1. Note that this method can also be used for hover, focus or active classes. The same principle can be used to add a pre-class. The default values in the following example shows a blue text with a blue-1 text colour on hover. On small screens the text becomes red and has a hover class of red-1.

```html
<p class="text-blue hover:text-blue-1 sm:text-red hover:sm:text-red-1">Purple text</p>
```

## Values & Unit Sizes

Some classes require special mathemathical values. All amounts are specified within a class, this allows intuitive and easy to understand writing of CSS classes. The value and the unit are always written after the class.

```html
/* opacity 1 percent */
<p class="opacity-1per">Opacity text</p>
```

```html
/* width 100 pixel */
<div class="w-100px">Width element</div>
```

```html
/* width 20 rem */
<div class="w-20rem">Width element</div>
```

The properties can also have netagive values. Those are supplemented by the -neg class.

```html
/* on small screens rotate the element by 180 degrees in a netagive direction*/
<div class="sm:rotate-neg-180deg">Rotate in negative direction</div>
```

## Default values are removed

1. omenCSS removes all of the default values like margins, paddings, text-decoration, headings, blockquotes, paragraphs, input states, lists, border etc.
2. Visitors who do not want to experience animations or transitions, will not register motion.
3. The standard font size is automatically converted to the power of 10 (Reduced by 62.5%). In other words, 1rem = 10pixel. This decision simplifies the calculation for the developer.

```css
/* default CSS reset file */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Set core root defaults */
html {
  font-size: 62.5%; // default pixel size reset to 10px
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

// remove outline
a:focus,
button:focus,
input:focus,
:focus {
  outline: none;
}

a::-moz-focus-inner,
button::-moz-focus-inner,
input::-moz-focus-inner,
::-moz-focus-inner {
  border: 0;
}

:focus {
  outline: none;
}

::-moz-focus-inner {
  border: 0;
}
```

## Executive Summary

1. All default browser values are reset, allowing you to incorporate your design and avoid annoying default settings.
2. The text and the distances are calculated to the power of 10. 10px = 1rem
3. All omenCSS classes have the same structure.
4. The default class does not have any pre-classes. p.e. "text-blue".
5. Values and unit sizes are written as a post-class - at the end of every class. p.e. "opacity-100per"
6. omenCSS lets you conditionally apply utility classes in different states using variant modifiers such as active, hover or focus statements. The utility classes are entered before the default class. Check the adequate documentation site for the respective class. p.e. "hover:text-blue" Mnemonic aid: on hover set the colour to blue.
7. You can also use variant modifiers to target media queries and make your website responsive within seconds. The variant modifier classes are entered after the utility class and before the default class. p.e. "hover:sm:text-blue" Mnemonic aid: hover on small screens the text with a blue colour.
