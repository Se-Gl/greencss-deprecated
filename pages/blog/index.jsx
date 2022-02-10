import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogLayout from '../../components/blog/BlogLayout'
import Layout from '../../components/reusable/Layout'
import BlogCard from '../../components/blog/BlogCard'
import { sortByDate } from '../../utils/SortByDate'

export default function BlogIndex({ posts }) {
  return (
    <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
      <div className='min-w-100per relative'>
        <div className='m-auto max-w-50rem mb-10rem'>
          <h1 className='font-bold text-50px mb-50px leading-120per'>A Blog - the right way to tell a story</h1>
          <p className='text-25px font-normal mt-25px'>
            Explore the blog posts, to learn more about the latest tips and tricks.
          </p>
        </div>
        <BlogLayout>
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </BlogLayout>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownMeta)

    return {
      slug,
      frontmatter
    }
  })
  //   console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 6)
    }
  }
}
