import React from 'react'
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { VsStyle } from '@/data/SynatxStyle'

function flattenHeader(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flattenHeader, text)
}

export function HeadingRenderer(props) {
  let children = React.Children.toArray(props.children)
  let text = children.reduce(flattenHeader, '')
  let slugify = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement('h' + props.level, { id: slugify }, props.children)
}

export function LinkRenderer({ node, ...props }) {
  return (
    <Link href={props.href}>
      <a>{props.children[0]}</a>
    </Link>
  )
}

export function CodeRenderer({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <>
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={VsStyle}
        language={match[1]}
        PreTag='div'
        {...props}
      />
    </>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}
