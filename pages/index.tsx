import Head from 'next/head'
import siteConfig from '../lib/siteConfig'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import LastLaunch from '../components/last-launch'

const { seo } = siteConfig

export const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>
        {seo.brand} | {seo.pages.hero.title}
      </title>
    </Head>
    <Container>
      <LastLaunch />
    </Container>
  </Layout>
)

export default Home
