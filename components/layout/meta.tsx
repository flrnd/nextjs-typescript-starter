import Head from 'next/head'
import siteConfig from '../../lib/siteConfig'

const { seo } = siteConfig

const Meta = (): JSX.Element => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="canonical" href={seo.canonicalURL} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="msapplication-TileColor" content="#1a1a1a" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#1a1a1a" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content="assets/illustrations/social-hero-0bc1b63126827f0e5960d78e61555707.png"
      />
      <meta property="og:title" content={seo.brand} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonicalURL} />
    </Head>
  )
}

export default Meta
