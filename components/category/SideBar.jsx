import Link from 'next/link'
import { useRouter } from 'next/router'
import ReusableModal from '../modal/ReusableModal'
import { LinkButtonLeft } from '../reusable/Button'

export default function SideBar({ categories, posts, hasSubcategory = false, showSearch = true }) {
  const router = useRouter()

  return (
    <>
      {showSearch === true && <ReusableModal isSidebar={true} />}
      {categories.sort().map((category, index) => (
        <div key={index} className='whitespace-nowrap overflow-x-hidden mt-25px'>
          <li>
            <Link href={`/docs/category/${category.toLowerCase()}`} passRef>
              <a className='font-bold mb-0px no-decoration'>
                {router.asPath.includes(category.toLowerCase()) ? (
                  <LinkButtonLeft className='font-bold text-25px'>{category.replace('-', ' ')}</LinkButtonLeft>
                ) : (
                  category.replace('-', ' ')
                )}
              </a>
            </Link>
          </li>
          {hasSubcategory === true &&
            posts.sort().map((subcategory, index) =>
              category === subcategory.frontmatter.category ? (
                <li key={subcategory.slug} className='py-5px'>
                  <Link href={`/docs/${subcategory.slug}`} passRef>
                    <a className={`font-normal mb-0px text-15px no-decoration`}>{subcategory.frontmatter.title}</a>
                  </Link>
                </li>
              ) : null
            )}
        </div>
      ))}
    </>
  )
}
