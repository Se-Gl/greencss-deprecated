import Link from 'next/link'
import { useRouter } from 'next/router'
import ReusableModal from '../modal/ReusableModal'

export default function SideBar({ categories, posts, hasSubcategory = false, showSearch = true }) {
  const router = useRouter()

  return (
    <>
      {showSearch === true && <ReusableModal isSidebar={true} />}
      {categories.sort().map((category, index) => (
        <div key={index} className='whitespace-nowrap overflow-x-hidden'>
          <li>
            <Link href={`/docs/category/${category.toLowerCase()}`} passRef>
              <a
                className={`font-bold mb-0px ${
                  router.asPath.includes(category.toLowerCase()) && 'border-left-1px border-solid border-purple pl-5px'
                }`}
                style={{ textDecoration: 'none' }}>
                {category.replace('-', ' ')}
              </a>
            </Link>
          </li>
          {hasSubcategory === true &&
            posts.sort().map((subcategory, index) =>
              category === subcategory.frontmatter.category ? (
                <li key={subcategory.slug}>
                  <Link href={`/docs/${subcategory.slug}`} passRef>
                    <a className={`font-normal mb-0px text-15px no-decoration`}>
                      {subcategory.frontmatter.title.slice(0, 20)}
                    </a>
                  </Link>
                </li>
              ) : null
            )}
        </div>
      ))}
    </>
  )
}
