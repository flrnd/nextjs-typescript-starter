import Head from 'next/head'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import siteConfig from '../lib/siteConfig'

const About = (): JSX.Element => {
  const { seo } = siteConfig
  return (
    <Layout>
      <Head>
        <title>
          {seo.brand} | {seo.pages.about.title}
        </title>
        <meta name="description" content={seo.pages.about.description} />
      </Head>
      <Container>
        <h1>About page</h1>
      </Container>
    </Layout>
  )
}

export default About
