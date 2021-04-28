import CoverImage from './cover-image'
import Link from 'next/link'

interface Props {
  title: string
  coverImage: string
  date: string
  description: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  description,
  slug,
}: Props): JSX.Element => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">{date}</div>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
    </div>
  )
}

export default PostPreview
