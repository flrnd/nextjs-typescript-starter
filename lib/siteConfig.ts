import { getYear } from './util'

// Company data
const company = {
  name: 'company name',
  description: 'The best company & Co',
  brand: 'brand & co',
  canonicalURL: 'http://www.example.com',
  address: '908 New Hampshire Avenue #100, Washington, DC 20037, United States',
  phone: '+1 123-123-2345',
  email: 'info@example.com',
}

// Social media links
const social = {
  twitter: '@twitter',
  instagram: '@instagram',
  facebook: '@facebook',
  youtube: '@youtube',
  linkedin: '@linkedin',
}

// Data for pages SEO
const pages = {
  hero: {
    title: 'lorem ipsum',
    description: '',
  },
  about: {
    title: 'about us',
    description: '',
  },
  projects: {
    title: 'My awesome projects',
    description: '',
  },
  blog: {
    title: 'my awesome blog',
    description: '',
  },
}

// site object
const siteConfig = {
  seo: {
    brand: company.brand,
    description: company.description,
    canonicalURL: company.canonicalURL,
    pages: pages,
  },
  social: social,
  navMenu: [
    { name: 'Our work', link: 'projects' },
    { name: 'about us', link: 'about' },
    { name: 'blog', link: 'posts' },
  ],
  footerMenu: [{ name: 'Privacy', link: 'privacy' }],
  footerCopyright: `Copyright ${
    company.brand
  } ©${getYear()}, All rights reserved.`,
}

export default siteConfig
