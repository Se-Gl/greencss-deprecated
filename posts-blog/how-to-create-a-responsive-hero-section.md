---
isBlog: true
title: 'Create a responsive hero section for your website - in 5 minutes'
date: 'Apr 06. 2022'
excerpt: 'Design and code a simple, modern and responsive 2 grid hero section for your landing page.'
cover_image: '/images/blog/cover/stones-hero.webp'
category: 'Tutorial'
author: 'Severin Glaser'
keywords: 'hero section, hero, landing page, website'
classNames: ''
plainText: " this is a tutorial to create a hero section for your website by using omencss the aim is to create a responsive layout and a stunning first impression for your website check the html entire-source-code-for-a-html-site or nextjs react code snippets nextjs react-source-code in order to get started right away and if you know how css works this tutorial requires omencss to be installed see the tutorial on how to get started blog what-is-omencss get-started-now right away a live hero section example examples hero is online start coding html to get started you can download the hero image here https: omencss com images blog blogcontent hero-image webp the entire project is wrapped in a `container` class for the responsive appearance a grid system will used the setup is straightforward the project let us build a smooth transition for the button and a responsive layout for an awesome first impression for your website the design idea for the hero section comes from https: www figma com community file 1087825555350003165 website-hero-sections-figma-template-%7c-brix-templates which is licensed under cc by 4 0 this is what we will code in under 5 minutes: ! reduce file size images blog blogcontent hero-section webp?style=centerme the navbar 1 first a navigation bar is created this consists of a `flex` element that separates the left and right side with witespace for this purpose `justify-between` is used the button on the right side has four states the default with `bg-blue` the hover `hover:bg-blue-5` the active `active:bg-blue-3` and the focus `focus:bg-blue-7`state for a smooth and professional transition `transition-all` and `transition-duration-500ms` should be used  set the grid to get a responsive layout for the hero section a parent element must consist of a grid system the following code snippet can be used for this by default it consists of 2 columns `grid-col-2` with a gap of 30pixel small and medium screens use `grid-col-1` where the whole width is used  left hero part 1 the left side is quite common it consists only of text blocks which have a different font-size font-color and font-weight  right hero part 1 the right side is also easy to handle since we are using an image the image can be implemented as a background image or as an ` img ` tag in this section we will cover both solutions again `col-span-1` and relative heights and widths are used to give the image the desired dimensions  image as background image a div is inserted inside the right hero section right-hero-part the image is adjusted by means of the style properties note: `background-position: '60% 40%'` is being used to focus the image adjuste the values as needed for your image  image with the img-tag an img element is inserted inside the right hero section right-hero-part  html source code  nextjs react source code 1 create a new function in your components folder and `import image from 'next image'` the structure is the same as in the html example only the style tags change and instead of a background image or the image tag the image component of nextjs will be used  "
---

This is a tutorial to create a hero section for your website by using omenCSS. The aim is to create a responsive layout and a stunning first impression for your website. Check the [HTML](#entire-source-code-for-a-html-site) or [NextJS/React code snippets](#nextjs/react-source-code) - in order to get started right away and if you know how CSS works. This tutorial requires omenCSS to be installed. See the tutorial on how to [get started](/blog/what-is-omencss#get-started-now) right away. A [live hero section example](/examples/hero) is online.

## Start Coding - HTML

To get started you can [download the hero image here](https://omencss.com/images/blog/blogcontent/Hero-Image.webp). The entire project is wrapped in a `container` class. For the responsive appearance a grid system will used. The setup is straightforward.

## The Project

Let us build a smooth transition for the button and a responsive layout for an awesome first impression for your website. The design idea for the Hero Section comes [from](https://www.figma.com/community/file/1087825555350003165/Website-Hero-Sections-Figma-Template-%7C-BRIX-Templates), which is Licensed under CC BY 4.0.

This is what we will code in under 5 minutes:

![reduce file size](/images/blog/blogcontent/hero-section.webp?style=centerme)

### The NavBar

1. First, a navigation bar is created. This consists of a `flex` element that separates the left and right side with witespace. For this purpose `justify-between` is used. The button on the right side has four states. The default with `bg-blue`, the hover `hover:bg-blue-5`, the active `active:bg-blue-3` and the focus `focus:bg-blue-7`state. For a smooth and professional transition, `transition-all` and `transition-duration-500ms` should be used.

```html
{/* NAV section */}
<div class="flex justify-between my-50px h-120px w-100per">
  <div class="my-auto">
    <span class="text-30px sm:text-20px font-400 text-black">your</span>
    <span class="text-30px sm:text-20px font-900 text-blue">COMPANY</span>
  </div>
  <div>
    <button
      class="outline-none bg-blue hover:bg-blue-5 active:bg-blue-3 focus:bg-blue-7 py-20px px-40px text-white text-15px font-900 rounded-50px transition-all transition-duration-500ms">
      Get in touch
    </button>
  </div>
</div>
{/* NAV section END */}
```

### Set the Grid

To get a responsive layout for the Hero section, a parent element must consist of a grid system. The following code snippet can be used for this. By default it consists of 2 columns `grid-col-2` with a gap of 30pixel. Small and medium screens use `grid-col-1` where the whole width is used.

```html
<div
  class="m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden"
  style="max-width: 110rem">
  {children}
</div>
```

### Left Hero Part

1. The left side is quite common. It consists only of text blocks, which have a different font-size, font-color and font-weight.

```html
{/* Left Hero section */}
<div class="col-span-1 flex sm:mb-10rem md:mb-10rem">
  <div class="m-auto sm:m-unset max-w-50rem">
    <span class="text-blue text-15px">– </span>
    <span class="text-blue text-15px font-800 uppercase">Design Agency</span>
    <h1 class="font-900 text-65px lg:text-45px">A top-notch Design Agency</h1>
    <p class="mb-0px text-black-10 text-15px">
      Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat massa
      rhoncus odio feugiat tellus, elit massa sed.
    </p>
  </div>
</div>
{/* Left Hero section END*/}
```

### Right Hero Part

1. The right side is also easy to handle. Since we are using an image, the image can be implemented as a background image or as an `<img>` tag. In this section we will cover both solutions. Again, `col-span-1` and relative heights and widths are used to give the image the desired dimensions.

```html
{/* Right Hero section*/}
<div class="col-span-1 flex">
  <div class="w-100per sm:w-100per md:w-100per">
    <div class="relative h-75vh overflow-hidden">{children}</div>
  </div>
</div>
```

### Image as Background Image

A div is inserted inside the [Right Hero Section](#right-hero-part). The image is adjusted by means of the "style" properties.
Note: `background-position: '60% 40%'` is being used to focus the image. Adjuste the values as needed for your image.

```html
<!-- background image example -->
<div
  class="rounded-20px w-100per h-100per"
  style="background-image:
'url(https://omencss.com/images/blog/blogcontent/Hero-Image.webp)', background-repeat: 'no-repeat', background-size:
'cover', background-position: '60% 40%' " />
<!-- background image example END -->
```

### Image with the img-tag

An img element is inserted inside the [Right Hero Section](#right-hero-part).

```html
<!-- image tag example -->
<img
  src="https://omencss.com/images/blog/blogcontent/Hero-Image.webp"
  alt="omenCSS Hero Image sample"
  class="block w-100per h-100per object-contain rounded-10px" />
<!-- image tag example END -->
```

## HTML source code

```html
<div class="container bg-white sm:px-10px md:px-25px lg:px-50px min-h-100vh">
  {/* NAV section */}
  <div class="flex justify-between my-50px h-120px w-100per">
    <div class="my-auto">
      <span class="text-30px sm:text-20px font-400 text-black">your</span>
      <span class="text-30px sm:text-20px font-900 text-blue">COMPANY</span>
    </div>
    <div>
      <button
        class="outline-none bg-blue hover:bg-blue-5 active:bg-blue-3 focus:bg-blue-7 py-20px px-40px text-white text-15px font-900 rounded-50px transition-all transition-duration-500ms">
        Get in touch
      </button>
    </div>
  </div>
  {/* NAV section END */}
  <div
    class="m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden"
    style="max-width: 110rem">
    {/* Left Hero section */}
    <div class="col-span-1 flex sm:mb-10rem md:mb-10rem">
      <div class="m-auto sm:m-unset max-w-50rem">
        <span class="text-blue text-15px">– </span>
        <span class="text-blue text-15px font-800 uppercase">Design Agency</span>
        <h1 class="font-900 text-65px lg:text-45px">A top-notch Design Agency</h1>
        <p class="mb-0px text-black-10 text-15px">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat massa
          rhoncus odio feugiat tellus, elit massa sed.
        </p>
      </div>
    </div>
    {/* Left Hero section END*/} {/* Right Hero section*/}
    <div class="col-span-1 flex">
      <div class="w-100per sm:w-100per md:w-100per">
        <div class="relative h-75vh overflow-hidden">
          <!-- background image example -->
          <div
            class="rounded-20px w-100per h-100per"
            style="background-image:
'url(https://omencss.com/images/blog/blogcontent/Hero-Image.webp)', background-repeat: 'no-repeat', background-size:
'cover', background-position: '60% 40%' " />
          <!-- background image example END -->
          <!-- image tag example -->
          <img
            src="https://omencss.com/images/blog/blogcontent/Hero-Image.webp"
            alt="omenCSS Hero Image sample"
            class="block w-100per h-100per object-contain rounded-10px" />
          <!-- image tag example END -->
        </div>
      </div>
    </div>
    {/* Right Hero section END*/}
  </div>
</div>
```

## NextJS/React source code

1. Create a new function in your components folder and `import Image from 'next/image'`. The structure is the same as in the HTML example. Only the style tags change and instead of a background image or the image tag the image component of NextJS will be used.

```html
import Image from 'next/image'

export default function HeroComponent() {
  return (
    <div className='container bg-white sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
      {/* NAV section */}
      <div className='flex justify-between my-50px h-120px w-100per'>
        <div className='my-auto'>
          <span className='text-30px sm:text-20px font-400 text-black'>your</span>
          <span className='text-30px sm:text-20px font-900 text-blue'>COMPANY</span>
        </div>
        <div>
          <button className='outline-none bg-blue hover:bg-blue-5 active:bg-blue-3 focus:bg-blue-7 py-20px px-40px text-white text-15px font-900 rounded-50px transition-all transition-duration-500ms'>
            Get in touch
          </button>
        </div>
      </div>
      {/* NAV section END */}
      <div
        className='m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden'
        style={{ maxWidth: '110rem' }}>
        {/* Left Hero section */}
        <div className='col-span-1 flex sm:mb-10rem md:mb-10rem'>
          <div className='m-auto sm:m-unset max-w-50rem'>
            <span className='text-blue text-15px'>– </span>
            <span className='text-blue text-15px font-800 uppercase'>Design Agency</span>
            <h1 className='font-900 text-65px lg:text-45px'>A top-notch Design Agency</h1>
            <p className='mb-0px text-black-10 text-15px'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat
              massa rhoncus odio feugiat tellus, elit massa sed.
            </p>
          </div>
        </div>
        {/* Left Hero section END*/}
        {/* Right Hero section*/}
        <div className='col-span-1 flex'>
          <div className='w-100per sm:w-100per md:w-100per'>
            <div className='relative h-75vh overflow-hidden'>
              {/* NextJS image */}
              <Image
                layout='fill'
                objectFit='cover'
                src='https://omencss.com/images/blog/blogcontent/Hero-Image.webp'
                alt='omenCSS Hero Image sample'
              />
            </div>
          </div>
        </div>
        {/* Right Hero section END*/}
      </div>
    </div>
  )
}
```
