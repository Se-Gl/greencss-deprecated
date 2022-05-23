import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../header'))
const Footer = dynamic(() => import('./Footer'))
const Cookies = dynamic(() => import('./Cookies'))

export default function Layout({ children, className = 'container sm:px-10px md:px-25px lg:px-50px bg-white' }) {
  return (
    <>
      <Header />
      <main>
        <div className={`${className}`}>{children}</div>
      </main>
      <Footer />
      <Cookies />
    </>
  )
}
