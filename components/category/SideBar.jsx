import Link from 'next/link'
import { useRouter } from 'next/router'
import ReusableModal from '../modal/ReusableModal'

export default function SideBar({ categories }) {
  const router = useRouter()

  return (
    <>
      <ReusableModal isSidebar={true} />
      {categories.sort().map((category, index) => (
        <li key={index}>
          <Link href={`/docs/category/${category.toLowerCase()}`} passRef>
            <a
              className={`font-bold mb-0px ${router.asPath.includes(category.toLowerCase()) && 'text-purple'}`}
              style={{ textDecoration: 'none' }}>
              {category}
            </a>
          </Link>
        </li>
      ))}
    </>
  )
}
