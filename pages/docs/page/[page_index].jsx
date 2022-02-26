import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/reusable/Layout'
import { getPosts } from '@/lib/posts'
import BrandCard from '@/components/brand/BrandCard'

export default function CategoryPage({ categories }) {
  return (
    <Layout>
      <div className='min-w-100per relative' id='docs-index'>
        <div className='m-auto max-w-60rem mb-10rem'>
          <h1>Docs - the right way to get to know the system</h1>
          {/* <TODO add svg /> */}
          <p>Search by categories. Get to know omenCSS and start writing design.</p>
          <h2 className='mt-50px'>The types</h2>
          <p className='mt-25px'>
            omenCSS features 21 core elements. These in turn are filtered into over 250 subcategories. You are looking
            for a specific css class element? Use the search function instead, just press F3.
          </p>
          <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
            {categories.sort().map((category, index) => (
              <BrandCard title={category} link={`/docs/category/${category.toLowerCase()}`} key={index} />
            ))}
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
  const categoryPosts = posts.filter((post) => post.frontmatter.category.toLowerCase() === params)

  return {
    props: {
      posts: categoryPosts,
      categories: uniqueCategories
    }
  }
}
