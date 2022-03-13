import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const HashLink = ({ href, children }) => {
  const router = useRouter()

  useEffect(() => {
    const onHashChangeStart = (url) => {
      //   console.log(`Path changing to ${url}`)
    }

    router.events.on('hashChangeStart', onHashChangeStart)

    return () => {
      router.events.off('hashChangeStart', onHashChangeStart)
    }
  }, [router.events])

  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}
