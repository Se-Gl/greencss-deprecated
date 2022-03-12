import React from 'react'

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
