import React from 'react'
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
      <div className='absolute right-0per mt-0px cursor-pointer'>
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
