import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/reusable/Layout'
import { getPosts } from '@/lib/posts'
import BlogCard from '@/components/blog/BlogCard'
import BlogLayout from '@/components/blog/BlogLayout'
import { BackButton } from '@/components/reusable/Button'
import SideBar from '@/components/category/SideBar'

export default function CategorySlugPage({ posts, categoryName, categories }) {
  return (
    <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
      <div className='grid grid-col-6 gap-30px'>
        <div className='grid-col-1 col-span-1 min-h-100vh sm:display-none md:display-none' id='sidebar'>
          <ul>
            <SideBar categories={categories} />
          </ul>
        </div>
        <div className='min-w-100per relative col-span-5 sm:col-span-6 md:col-span-6'>
          <BackButton>Back</BackButton>
          <div className='min-w-100per relative' id={`category-${categoryName}`}>
            <div className='m-auto max-w-50rem mb-10rem'>
              <h1>Browse by category: {categoryName}</h1>
              <p>
                Get an overview in the category &apos;{categoryName}&apos; and browse through all the documentation.
              </p>
            </div>
            <BlogLayout>
              {posts.map((post, index) => (
                <BlogCard key={index} post={post} index={index} />
              ))}
            </BlogLayout>
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
    params: { category_name: category }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const posts = getPosts()
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]
  const categoryPosts = posts.filter((post) => post.frontmatter.category.toLowerCase() === category_name)

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories
    }
  }
}
