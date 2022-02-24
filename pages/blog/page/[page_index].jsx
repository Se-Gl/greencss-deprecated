import fs from 'fs'
import path from 'path'
import BlogLayout from '@/components/blog/BlogLayout'
import Layout from '@/components/reusable/Layout'
import BlogCard from '@/components/blog/BlogCard'
import { POSTS_PER_PAGE } from '@/config/index'
import Pagination from '@/components/reusable/Pagination'
import { getPosts } from '@/lib/posts'

export default function BlogIndex({ posts, numPages, currentPage }) {
  return (
    <Layout
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'
      title='A Blog - the right way to tell a story | omenCSS Blog'
      description='Explore the blog posts, to learn more about the latest tips and tricks.'
      url='blog'
      keywords='Blog, write, news, updates, css, omenCSS'>
      <div className='min-w-100per relative'>
        <div className='m-auto max-w-50rem mb-10rem'>
          <h1>A Blog - the right way to tell a story</h1>
          <p>Explore the blog posts, to learn more about the latest tips and tricks.</p>
        </div>
        <BlogLayout>
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </BlogLayout>
        <Pagination currentPage={currentPage} numPages={numPages} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts-blog'))
  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() }
    })
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1)
  const files = fs.readdirSync(path.join('posts-blog'))
  const posts = getPosts('posts-blog')

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE)

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page
    }
  }
}
