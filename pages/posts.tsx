import Head from 'next/head'
import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import HeroPost from '../components/post/hero-post'
import MoreStories from '../components/post/more-stories'
import { getAllPosts } from '../lib/api'
import { Item, IPost } from '../lib/interfaces'
import siteConfig from '../lib/siteConfig'

interface Props {
  allPosts: IPost[]
}

const Posts = ({ allPosts }: Props): JSX.Element => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const { seo } = siteConfig

  return (
    <>
      <Layout>
        <Head>
          <title>
            {seo.brand} | {seo.pages.blog.title}
          </title>
          <meta name="description" content={seo.pages.blog.description} />
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              description={heroPost.description}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Posts

interface PostsProps {
  props: { allPosts: Item[] }
}

export const getStaticProps = async (): Promise<PostsProps> => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'description',
    'slug',
    'coverImage',
  ])

  return {
    props: { allPosts },
  }
}
