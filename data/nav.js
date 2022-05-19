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
import NavDocsBorder from '@/components/icon/Nav/Docs/NavDocsBorder'
import NavDocsEffects from '@/components/icon/Nav/Docs/NavDocsEffects'
import NavDocsFilter from '@/components/icon/Nav/Docs/NavDocsFIlter'
import NavDocsFlexbox from '@/components/icon/Nav/Docs/NavDocsFlexbox'
import NavDocsGrid from '@/components/icon/Nav/Docs/NavDocsGrid'
import NavDocsLayout from '@/components/icon/Nav/Docs/NavDocsLayout'
import NavDocsSizing from '@/components/icon/Nav/Docs/NavDocsSizing'
import NavDocsSpacing from '@/components/icon/Nav/Docs/NavDocsSpacing'
import NavDocsTables from '@/components/icon/Nav/Docs/NavDocsTables'
import NavDocsTransform from '@/components/icon/Nav/Docs/NavDocsTransform'
import NavDocsTypography from '@/components/icon/Nav/Docs/NavDocsTypography'
import NavDocsUnited from '@/components/icon/Nav/Docs/NavDocsUnited'

export const navmenu = [
  { title: 'blog', path: '/blog' },
  { title: 'brand', path: '/brand' },
  { title: 'docs', path: '/docs' },
  { title: 'contact', path: '/contact' }
]

export const mobileBrandMenu = [
  { label: 'logo', icon: <NavBrandLogo />, url: '/brand/logo' },
  { label: 'typography', icon: <NavBrandTypo />, url: '/brand/typography' },
  { label: 'colours', icon: <NavBrandColor />, url: '/brand/colours' },
  { label: 'composition', icon: <NavBrandComposition />, url: '/brand/composition' }
]

export const mobileDocsMenu = [
  { label: 'activate', icon: <NavDocsActivate />, url: '/docs/category/activate' },
  { label: 'animation', icon: <NavDocsAnimation />, url: '/docs/category/animation' },
  {
    label: 'background',
    icon: <NavDocsBackground />,
    url: '/docs/category/background'
  },
  { label: 'border', icon: <NavDocsBorder />, url: '/docs/category/border' },
  { label: 'effects', icon: <NavDocsEffects />, url: '/docs/category/effects' },
  { label: 'filter', icon: <NavDocsFilter />, url: '/docs/category/filter' },
  { label: 'flexbox', icon: <NavDocsFlexbox />, url: '/docs/category/flexbox' },
  { label: 'grid', icon: <NavDocsGrid />, url: '/docs/category/grid' },
  { label: 'layout', icon: <NavDocsLayout />, url: '/docs/category/layout' },
  { label: 'sizing', icon: <NavDocsSizing />, url: '/docs/category/sizing' },
  { label: 'spacing', icon: <NavDocsSpacing />, url: '/docs/category/spacing' },
  { label: 'tables', icon: <NavDocsTables />, url: '/docs/category/tables' },
  { label: 'transform', icon: <NavDocsTransform />, url: '/docs/category/transform' },
  { label: 'typography', icon: <NavDocsTypography />, url: '/docs/category/typography' },
  { label: 'united', icon: <NavDocsUnited />, url: '/docs/category/united' }
]

export const mobileContactMenu = [
  { label: 'about', icon: <NavContactNewsletter />, url: '/#' },
  { label: 'newsletter', icon: <NavContactAbout />, url: '/contact#footer-social' }
]

export const navsublinks = [
  // TODO add dynamic blog posts
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
      { label: 'logo', icon: <NavBrandLogo />, url: '/brand/logo' },
      { label: 'typography', icon: <NavBrandTypo />, url: '/brand/typography' },
      { label: 'colours', icon: <NavBrandColor />, url: '/brand/colours' },
      { label: 'composition', icon: <NavBrandComposition />, url: '/brand/composition' }
    ]
  },
  {
    page: 'docs',
    pageLink: '/docs',
    subtext:
      'Docs - the right way to get to know the system - Get to know greenCSS and start writing sustainable webdesign.',
    links: [
      { label: 'activate', icon: <NavDocsActivate />, url: '/docs/category/activate' },
      { label: 'animation', icon: <NavDocsAnimation />, url: '/docs/category/animation' },
      {
        label: 'background',
        icon: <NavDocsBackground />,
        url: '/docs/category/background'
      },
      { label: 'border', icon: <NavDocsBorder />, url: '/docs/category/border' },
      { label: 'effects', icon: <NavDocsEffects />, url: '/docs/category/effects' },
      { label: 'filter', icon: <NavDocsFilter />, url: '/docs/category/filter' },
      { label: 'flexbox', icon: <NavDocsFlexbox />, url: '/docs/category/flexbox' },
      { label: 'grid', icon: <NavDocsGrid />, url: '/docs/category/grid' },
      { label: 'layout', icon: <NavDocsLayout />, url: '/docs/category/layout' },
      { label: 'sizing', icon: <NavDocsSizing />, url: '/docs/category/sizing' },
      { label: 'spacing', icon: <NavDocsSpacing />, url: '/docs/category/spacing' },
      { label: 'tables', icon: <NavDocsTables />, url: '/docs/category/tables' },
      { label: 'transform', icon: <NavDocsTransform />, url: '/docs/category/transform' },
      { label: 'typography', icon: <NavDocsTypography />, url: '/docs/category/typography' },
      { label: 'united', icon: <NavDocsUnited />, url: '/docs/category/united' }
    ]
  },
  {
    page: 'contact',
    pageLink: '/contact',
    subtext: 'Contact - the right way to get to know each other.',
    links: [
      { label: 'about', icon: <NavContactNewsletter />, url: '/#' },
      { label: 'newsletter', icon: <NavContactAbout />, url: '/contact#footer-social' }
    ]
  }
]
