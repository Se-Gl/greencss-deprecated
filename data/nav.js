// TODO dynamic import
import NavBrandColor from '@/components/icon/Nav/Brand/NavBrandColor'
import NavBrandComposition from '@/components/icon/Nav/Brand/NavBrandComposition'
import NavBrandLogo from '@/components/icon/Nav/Brand/NavBrandLogo'
import NavBrandTypo from '@/components/icon/Nav/Brand/NavBrandTypo'
import NavContactAbout from '@/components/icon/Nav/Contact/NavContactAbout'
import NavContactNewsletter from '@/components/icon/Nav/Contact/NavContactNewsletter'
import NavDocsActivate from '@/components/icon/Nav/Docs/NavDocsActivate'
import NavDocsAnimation from '@/components/icon/Nav/Docs/NavDocsAnimation'
import NavDocsBackground from '@/components/icon/Nav/Docs/NavDocsBackground'

export const navmenu = [
  { title: 'blog', path: '/blog' },
  { title: 'brand', path: '/brand' },
  { title: 'docs', path: '/docs' },
  { title: 'contact', path: '/contact' }
]

export const navsublinks = [
  {
    page: 'blog',
    pageLink: '/blog',
    subtext:
      'A Blog - the right way to write a story - Explore the blog posts, to learn more about the latest tips and tricks.'
  },
  {
    page: 'brand',
    pageLink: '/brand',
    subtext:
      'A Brand Book - the right way to get to know a story - Explore the logo, typography, colours and composition',
    links: [
      { label: 'logo', icon: <NavBrandLogo width='50px' height='50px' />, url: '/brand/logo' },
      { label: 'typography', icon: <NavBrandTypo width='50px' height='50px' />, url: '/brand/typography' },
      { label: 'colours', icon: <NavBrandColor width='50px' height='50px' />, url: '/brand/colours' },
      { label: 'composition', icon: <NavBrandComposition width='50px' height='50px' />, url: '/brand/composition' }
    ]
  },
  // TODO add all doc category pages
  {
    page: 'docs',
    pageLink: '/docs',
    subtext:
      'Docs - the right way to get to know the system - Get to know greenCSS and start writing sustainable webdesign.',
    links: [
      { label: 'activate', icon: <NavDocsActivate width='50px' height='50px' />, url: '/docs/category/activate' },
      { label: 'animation', icon: <NavDocsAnimation width='50px' height='50px' />, url: '/docs/category/animation' },
      { label: 'background', icon: <NavDocsBackground width='50px' height='50px' />, url: '/docs/category/background' }
    ]
  },
  {
    page: 'contact',
    pageLink: '/contact',
    subtext: 'Contact - the right way to get to know each other.',
    links: [
      { label: 'about', icon: <NavContactNewsletter width='50px' height='50px' />, url: '/#' },
      { label: 'newsletter', icon: <NavContactAbout width='50px' height='50px' />, url: '/contact#footer-social' }
    ]
  }
]
