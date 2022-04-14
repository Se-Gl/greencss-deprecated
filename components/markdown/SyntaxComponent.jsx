import CodeSyntax from '@/components/markdown/CodeSyntax'

export default function SyntaxComponent({ header, description, children }) {
  return (
    <>
      <h2>{header}</h2>
      <p className='text-20px font-normal mb-25px'>{description}</p>
      <CodeSyntax>{children}</CodeSyntax>
    </>
  )
}
