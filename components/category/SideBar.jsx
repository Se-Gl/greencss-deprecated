import Link from 'next/link'
import { useRouter } from 'next/router'
import ReusableModal from '../modal/ReusableModal'

export default function SideBar({ categories, subcategories, hasSubcategory = false }) {
  const router = useRouter()

  return (
    <>
      <ReusableModal isSidebar={true} />
      {categories.sort().map((category, index) => (
        <div key={index}>
          <li>
            <Link href={`/docs/category/${category.toLowerCase()}`} passRef>
              <a
                className={`font-bold mb-0px ${router.asPath.includes(category.toLowerCase()) && 'text-purple'}`}
                style={{ textDecoration: 'none' }}>
                {category}
              </a>
            </Link>
          </li>
          {hasSubcategory === true &&
            subcategories.sort().map((subcategory, index) =>
              category === subcategory.frontmatter.category ? (
                <li key={subcategory.slug}>
                  <Link href={`/docs/${subcategory.slug}`} passRef>
                    <a className={`font-normal mb-0px text-15px ml-10px`} style={{ textDecoration: 'none' }}>
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
