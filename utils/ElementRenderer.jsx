import React from 'react'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { VsStyle } from '@/data/SynatxStyle'
import { HashLink } from './HashLink'
import CopyIcon from '@/components/icon/Animation/Copy'

function flattenHeader(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flattenHeader, text)
}

export function HeadingRenderer(props) {
  let children = React.Children.toArray(props.children)
  let text = children.reduce(flattenHeader, '')
  let slugify = text.toLowerCase().replace(/\ /g, '-')
  return React.createElement('h' + props.level, { id: slugify }, props.children)
}

export function LinkRenderer({ node, ...props }) {
  return <HashLink href={props.href}>{props.children[0]}</HashLink>
}

export function CodeRenderer({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <div className='relative'>
      <div className='absolute right-0per mt-0px cursor-copy'>
        <CopyIcon
          className='fill-black-10 hover:fill-white transition-all transition-duration-500ms'
          copy={children
            .toString()
            .replace(/(?:\\[rn]|[\r\n]+)+/g, ' ')
            .replace(/\"/g, "'")
            .replace(/\  /g, '')}
        />
      </div>
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={VsStyle}
        language={match[1]}
        PreTag='div'
        {...props}
      />
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export function ImageRenderer(paragraph) {
  const { node } = paragraph

  if (node.children[0].tagName === 'img') {
    const image = node.children[0]
    const metastring = image.properties.alt
    const alt = metastring?.replace(/ *\{[^)]*\} */g, '')
    const metaWidth = metastring.match(/{([^}]+)x/)
    const metaHeight = metastring.match(/x([^}]+)}/)
    const width = metaWidth ? metaWidth[1] : '800'
    const height = metaHeight ? metaHeight[1] : '600'
    const isPriority = metastring?.toLowerCase().match('{priority}')
    const hasCaption = metastring?.toLowerCase().includes('{caption:')
    const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

    return (
      <div className='mb-50px w-100per h-100per'>
        <div className='flex justify-center'>
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            alt={alt}
            priority={isPriority}
            placeholder='blur'
            blurDataURL={`/_next/image?url=${image.properties.src}&w=16&q=1`}
          />
        </div>
        {hasCaption ? (
          <p className='text-center mb-0px text-black-10 text-15px' aria-label={caption}>
            {caption}
          </p>
        ) : null}
      </div>
    )
  }
  return <p>{paragraph.children}</p>
}
