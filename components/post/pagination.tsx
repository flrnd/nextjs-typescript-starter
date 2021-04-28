import Link from 'next/link'
import { IPost } from '../../lib/interfaces'

interface Props {
  current: number
  posts: IPost[]
}

const Pagination = ({ current, posts }: Props): JSX.Element => {
  const prev = current - 1 >= 0 ? posts[current - 1] : null
  const next = current + 1 < posts.length ? posts[current + 1] : null

  return (
    <nav className="pagination-nav pb-5">
      <ul className="flex justify-between">
        <li className="prev">
          {prev ? (
            <Link as={`/posts/${prev.slug}`} href="/posts/[slug]">
              <a className="font-bold lg:text-xl">{prev.title}</a>
            </Link>
          ) : (
            ''
          )}
        </li>
        <li className="next">
          {next ? (
            <Link as={`/posts/${next.slug}`} href="/posts/[slug]">
              <a className="font-bold lg:text-xl p-3">{next.title}</a>
            </Link>
          ) : (
            ''
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
