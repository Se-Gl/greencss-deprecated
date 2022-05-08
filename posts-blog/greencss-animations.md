---
isBlog: true
title: 'Simplest way to add beautiful CSS animations in 2022'
date: 'Feb 24. 2022'
excerpt: 'Create simple, unique and professional looking css animations for your website.'
cover_image: '/images/blog/cover/motion_qn0fvq.webp'
category: 'Animation'
author: 'Severin Glaser'
keywords: 'Animation, css animations, stagger animation, react, javascript'
classNames: ''
author_image: '/images/blog/users/segl-avatar.webp'
plainText: " in this tutorial we will show you how to use over 100 different animation types for your website - with one line of code! how to stagger css animations ok honestly! this hardly works without javascript for this reason a stagger effect will be demonstrated based on the mobile navigation bar in nextjs ! nav result images blog blogcontent mobile-nav edkd2s gif?style=centerme js const menu = title: 'home' path: ' ' title: 'brand' path: ' brand' title: 'blog' path: ' blog' ul classname='text-16px text-black flex justify-center items-center min-h-100per flex-col text-left' li menu map item index = return link key= index href= item path a style= textdecoration: 'none' cursor: 'pointer' h3 classname= p-20px clip-inset-in-top animate animation-forwards animation-delay- index + 1 1 00ms item title h3 a link li ul in summary we map over the menu function special attention should be paid to the h3 tag it contains all the classes for the animation js h3 classname= clip-inset-in-top animate animation-forwards animation-delay- index + 1 1 00ms item title h3 1 in total only 4 css classes are necessary for achieving this animation 2 clip-inset-in-top is the animation type 3 animate is the default greenCSS animation-duration property which lasts for 750ms 4 animation-forwards signifies that the animation should retain the current condition after completion 5 animation-delay- index + 1 1 00ms is the most important part for the stagger effect it is conditional and tied to the index the actual calculation takes place at this point index + 1 1 as a result each mapped element gets a different animation delay home has an animation-delay of 100ms brand has an animation-delay of 200ms and blog has an animation-delay of 300ms the different delays create a stagger effect a graphical overview for all animations can be found on the examples page docs animation example what exactly is a vanilla css animation? an animation represents a process which generates a moving frame for the viewer by creating and displaying individual sequences of pixels especially in web development animations can make the difference between a good and a perfect website however it should be used with caution because the boundary between perfect and too much may mean the complete opposite of what was originally intended cascading style sheets css animations usually consist of @keyframes and have different properties such as animation-name animation-duration animation-delay animation-iteration-count animation-direction animation-timing-function animation-fill-mode or animation if you use greenCSS you don't need to code anything greenCSS contains over 100 different css animations all of them are handmade a graphical overview of all animations can be found on the examples page docs animation example why you should use animations the collaboration of design and code plays an important role especially in web development nowadays a beautiful website is more or less easy to create however bringing a web application alive is more difficult the keyword for this process is animation animation originates from the latin verb animare and means as much as spirit life breath or simply to bring to life become dynamic make your beautiful website shine! "
---

In this tutorial we will show you how to use over 100 different animation types for your website - with one line of code!

## How to stagger CSS animations

Ok. Honestly! This hardly works without JavaScript. For this reason, a stagger effect will be demonstrated based on the mobile navigation bar in NextJS.

![Nav Result](/images/blog/blogcontent/mobile-nav_edkd2s.gif?style=centerme)

```js
const menu = [
  { title: 'Home', path: '/' },
  { title: 'Brand', path: '/brand' },
  { title: 'Blog', path: '/blog' }
]

...

<ul className='text-16px text-black flex justify-center items-center min-h-100per flex-col text-left'>
  <li>
    {menu.map((item, index) => {
      return (
        <Link key={index} href={item.path}>
          <a style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <h3
              className={`p-20px clip-inset-in-top animate animation-forwards animation-delay-${(index + 1) * 1}00ms`}>
              {item.title}
            </h3>
          </a>
        </Link>
      )
    })}
  </li>
</ul>
```

In summary, we map over the "menu" function. Special attention should be paid to the h3 tag. It contains all the classes for the animation.

```js
<h3 className={`clip-inset-in-top animate animation-forwards animation-delay-${(index + 1) * 1}00ms`}>{item.title}</h3>
```

1. In total, only 4 CSS classes are necessary for achieving this animation.
2. `clip-inset-in-top` is the animation type.
3. `animate` is the default greenCSS animation-duration property, which lasts for 750ms.
4. `animation-forwards` signifies that the animation should retain the current condition after completion.
5. `animation-delay-${(index + 1) * 1}00ms` is the most important part for the stagger effect. It is conditional and tied to the index.

The actual calculation takes place at this point `(index + 1) * 1`. As a result, each mapped element gets a different animation delay. "Home" has an animation-delay of 100ms, "Brand" has an animation-delay of 200ms and "Blog" has an animation-delay of 300ms. The different delays create a stagger effect.

A graphical overview for all animations can be found on the [examples page](/examples/animation).

## What exactly is a vanilla CSS animation?

An animation represents a process which generates a moving frame for the viewer by creating and displaying individual sequences of pixels. Especially in web development, animations can make the difference between a good and a perfect website. However, it should be used with caution, because the boundary between perfect and too much may mean the complete opposite of what was originally intended.

Cascading Style Sheets (CSS) animations usually consist of @keyframes and have different properties such as animation-name, animation-duration, animation-delay, animation-iteration-count, animation-direction, animation-timing-function, animation-fill-mode or animation. If you use greenCSS, you don't need to code anything. greenCSS contains over 100 different css animations. All of them are handmade. A graphical overview of all animations can be found on the [examples page](/examples/animation).

### Why you should use animations

The collaboration of design and code plays an important role, especially in web development. Nowadays, a beautiful website is more or less easy to create. However, bringing a web application alive is more difficult. The keyword for this process is "animation". Animation originates from the latin verb "animare" and means as much as spirit, life, breath or simply to bring to life.

Become dynamic, make your beautiful website shine!
