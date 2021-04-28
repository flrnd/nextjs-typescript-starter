import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  description: string
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  description,
  slug,
}: Props): JSX.Element => {
  return (
    <section>
      <div className="mt-2 mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">{date}</div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
