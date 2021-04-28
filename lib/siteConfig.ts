import { getYear } from './util'

const brand = 'brand'
const metaDescription = ''
const canonicalURL = 'http://www.example.com'

const siteConfig = {
  SEO: {
    brand: brand,
    metaDescription: metaDescription,
    canonicalURL: canonicalURL,
    pages: {
      hero: {
        title: 'lorem ipsum',
      },
    },
  },
  navMenu: [
    { name: 'works', link: 'works' },
    { name: 'about me', link: 'about' },
    { name: 'blog', link: 'posts' },
  ],
  footerMenu: [{ name: 'Privacy', link: 'privacy' }],
  footerCopyright: `Copyright ${brand} ©${getYear()} , All rights reserved.`,
}

export default siteConfig
