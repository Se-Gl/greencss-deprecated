import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import SideBar from '@/components/category/SideBar'
import { sortAlphabetically } from '@/utils/SortBy'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const SyntaxComponent = dynamic(() => import('@/components/markdown/SyntaxComponent'))
const BrandCard = dynamic(() => import('@/components/brand/BrandCard'))

const syntax = [
  {
    header: 'Quick Start | NPM',
    description:
      'The simplest and fastest way to get up and running with greenCSS is to use NPM. This is the normal approach for all JavaScript frameworks like Angular, React or Vue. Here you can decide for yourself how to set up your code base for the production.',
    markdown: 'npm i greenCSS'
  },
  {
    header: 'Quick Start | CDN',
    description: 'The most straightforward approach for non-JavaScript frameworks is to use CDN.',
    markdown:
      '<head>\n  <title>Your awesome Website - designed with greenCSS</title>\n  <link rel="stylesheet" href="link-to-greenCSS-cdn" />\n</head>'
  }
]

export default function DocsCategoryPage({ categories, posts }) {
  return (
    <LayoutTitle title='greenCSS documentation - an overview'>
      <Layout
        description='Docs - the right way to get to know the greenCSS by browsing the documentation. Search by categories. Get to know greenCSS and start writing design.'
        url='docs'
        keywords='docs, documentation, information, search, css'>
        <div className='grid grid-col-12 gap-30px'>
          <div
            className='overflow-y-scroll sticky top-20per max-h-75vh col-span-3 sm:display-none md:display-none'
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#898989 #fdfdfd' }}
            id='sidebar'>
            <ul>
              <SideBar categories={categories} posts={posts} hasSubcategory={true} />
            </ul>
          </div>
          <div className='min-w-100per relative col-span-9 sm:col-span-12 md:col-span-12' id='docs-index'>
            <div className='max-w-75rem mb-10rem'>
              <p className='text-greenCSS-5 font-600 text-15px mb-5px'>Documentation</p>
              <h1 className='font-900 mb-15px'>Docs - the right way to get to know the system</h1>
              <h2 className='text-20px font-normal mb-25px'>Get to know greenCSS and start writing design.</h2>
            </div>
            {syntax.map((syn, index) => (
              <SyntaxComponent header={syn.header} description={syn.description} markdown={syn.markdown} key={index}>
                {syn.markdown}
              </SyntaxComponent>
            ))}
            <h2 className='mt-10rem'>The types</h2>
            <p className='mt-25px'>
              greenCSS features 21 core elements. These in turn are filtered into over 250 subcategories. You are
              looking for a specific css class element? Use the search function instead, just press F3.
            </p>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-15px sm:grid-col-1 md:grid-col-1'>
              {categories.sort().map((category, index) => (
                <BrandCard title={category} link={`/docs/category/${category.toLowerCase()}`} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </LayoutTitle>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts-doc'))
  const categories = files.map((filename) => {
    const markdownMeta = fs.readFileSync(path.join('posts-doc', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { page_index: category.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const posts = getPosts(sortAlphabetically)
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  return {
    props: {
      posts,
      categories: uniqueCategories
    }
  }
}
