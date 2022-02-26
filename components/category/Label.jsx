import Link from 'next/link'

export default function Label({ children }) {
  const colorKey = {
    Animation: 'purple',
    Transition: '',
    Spacing: '',
    Flexbox: '',
    Grid: '',
    Layout: '',
    Sizing: '',
    Responsive: '',
    Colour: '',
    Transforms: '',
    Background: '',
    Borders: '',
    Effects: '',
    Filters: '',
    Typography: '',
    Components: '',
    Tables: '',
    Interactivity: '',
    SVG: '',
    Accessibility: '',
    Random: ''
  }

  return (
    <div className={`p-10px bg-${colorKey[children]} font-bold rounded-10px`}>
      <Link href={`/docs/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
