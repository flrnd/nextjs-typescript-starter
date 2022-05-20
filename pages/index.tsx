import Head from "next/head";
import siteConfig from "../lib/siteConfig";
import Layout from "../components/layout/layout";
import Container from "../components/layout/container";

const { seo } = siteConfig;

export const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>
        {seo.brand} | {seo.pages.hero.title}
      </title>
    </Head>
    <Container>
      <h1>hello world</h1>
    </Container>
  </Layout>
);

export default Home;
