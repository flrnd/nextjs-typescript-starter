import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib/api'
import Layout from '../../components/layout/layout'
import Container from '../../components/layout/container'
import { IPost } from '../../lib/interfaces'
import PostTitle from '../../components/post/post-title'
import PostHeader from '../../components/post/post-header'
import PostBody from '../../components/post/post-body'

interface Props {
  post: IPost
}

const Post = ({ post }: Props): JSX.Element => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | my personal blog </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params): Promise<any> {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'description',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths(): Promise<any> {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
