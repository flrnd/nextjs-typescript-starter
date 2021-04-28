import Head from 'next/head'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import siteConfig from '../lib/siteConfig'

const Projects = (): JSX.Element => {
  const { seo } = siteConfig
  return (
    <Layout>
      <Head>
        <title>
          {seo.brand} | {seo.pages.projects.title}
        </title>
        <meta name="description" content={seo.pages.projects.description} />
      </Head>
      <Container>
        <h1>Projects page</h1>
      </Container>
    </Layout>
  )
}

export default Projects
