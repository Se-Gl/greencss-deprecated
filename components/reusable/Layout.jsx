import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'))
const Footer = dynamic(() => import('./Footer'))
const Cookies = dynamic(() => import('./Cookies'))

export default function Layout({ children, className = 'container sm:px-10px md:px-25px lg:px-50px bg-white' }) {
  return (
    <>
      <Header />
      <main>
        <div className={`pt-15rem sm:pt-0rem md:pt-0rem ${className}`}>{children}</div>
      </main>
      <Footer />
      <Cookies />
    </>
  )
}
