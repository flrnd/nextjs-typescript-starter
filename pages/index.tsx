import Head from 'next/head'
import siteConfig from '../lib/siteConfig'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'

const mainHeading = 'Something cool'
const mainSubHeading = "Because it's cool"
const mainParagraph =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
const { SEO } = siteConfig

export const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>
        {SEO.pages.hero.title} | {SEO.brand}
      </title>
    </Head>
    <Container>
      <div className="pt-20 md:pt-24 lg:pt-32 px-4 lg:px-8 justify-center items-start text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">{mainHeading}</h1>
        <p className="text_xl lg:text-2xl">{mainSubHeading}</p>
        <p>{mainParagraph}</p>
      </div>
    </Container>
  </Layout>
)

export default Home
