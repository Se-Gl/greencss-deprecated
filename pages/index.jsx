import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout className=''>
      <main className='bg-light min-h-100vh overflow-x-hidden'>
        <div className='relative min-h-100vh text-center z-2 flex justify-center items-center'>
          <h1 className='slide-top inline-block vertical-middle max-w-58rem font-800 leading-120per text-96px hero-title'>
            Writing CSS reimagined
          </h1>
        </div>
        <div className='bubbles'>
          <div className='bubble' />
          <div className='bubble' />
          <div className='bubble' />
        </div>
      </main>
    </Layout>
  )
}
