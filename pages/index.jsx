import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Hero from '../components/LandingPage/Hero'
import News from '../components/LandingPage/News'
import Presentation from '../components/LandingPage/Presentation'
import Service from '../components/LandingPage/Service'
import Support from '../components/LandingPage/Support'
import Testimonial from '../components/LandingPage/Testimonial'
import Bubbles from '../components/reusable/Bubbles'
import { sortByDate } from '../utils/SortByDate'
import Layout from '../components/reusable/Layout'

export default function HomePage({ posts }) {
  return (
    <div className='overflow-x-hidden'>
      <Layout className='container min-h-100vh relative z-2'>
        <Hero />
        <Presentation />
        <Support />
        <News posts={posts} />
        <Testimonial />
        <Service />
        <Bubbles />
      </Layout>
    </div>
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
      posts: posts.sort(sortByDate).slice(0, 3)
    }
  }
}
