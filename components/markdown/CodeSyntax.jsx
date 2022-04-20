import CopyIcon from '../icon/Animation/Copy'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { VsStyle } from '@/data/SynatxStyle'

export default function CodeSyntax({ children }) {
  return (
    <div className='relative mb-50px' id='code-block'>
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
      <SyntaxHighlighter language='html' style={VsStyle}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
