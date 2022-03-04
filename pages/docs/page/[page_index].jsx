import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/reusable/Layout'
import { getPosts } from '@/lib/posts'
import BrandCard from '@/components/brand/BrandCard'
import SideBar from '@/components/category/SideBar'
import DocsHero from '@/components/icon/Docs/DocsHero'
import SubSectionHero from '@/components/reusable/SubSectionHero'

export default function CategoryPage({ categories, posts }) {
  return (
    <Layout
      title='omenCSS documentation - an overview'
      description='Docs - the right way to get to know the omenCSS by browsing the documentation. Search by categories. Get to know omenCSS and start writing design.'
      url='docs'
      keywords='docs, documentation, information, search, css'>
      <div className='grid grid-col-6 gap-30px'>
        <div className='grid-col-1 col-span-1 min-h-100vh sm:display-none md:display-none' id='sidebar'>
          <ul>
            <SideBar categories={categories} posts={posts} hasSubcategory={true} />
          </ul>
        </div>
        <div className='min-w-100per relative col-span-5 sm:col-span-6 md:col-span-6' id='docs-index'>
          <SubSectionHero
            header='Docs - the right way to get to know the system'
            subheader='Search by categories. Get to know omenCSS and start writing design.'
            illustration={<DocsHero width='100%' height='100%' />}
          />
          <div className='m-auto max-w-60rem mb-10rem'>
            {/* <h1>Docs - the right way to get to know the system</h1>
            <Smartphone /> */}
            {/* <p>Search by categories. Get to know omenCSS and start writing design.</p> */}
            <h2 className='mt-50px'>The types</h2>
            <p className='mt-25px'>
              omenCSS features 21 core elements. These in turn are filtered into over 250 subcategories. You are looking
              for a specific css class element? Use the search function instead, just press F3.
            </p>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-15px sm:grid-col-1 md:grid-col-1'>
              {categories.sort().map((category, index) => (
                <BrandCard title={category} link={`/docs/category/${category.toLowerCase()}`} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
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
  const posts = getPosts()
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  return {
    props: {
      posts,
      categories: uniqueCategories
    }
  }
}
