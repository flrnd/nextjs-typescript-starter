import CoverImage from './cover-image'
import PostTitle from './post-title'

interface Props {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props): JSX.Element => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">author</div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">author</div>
        <div className="mb-6 text-lg">{date}</div>
      </div>
    </>
  )
}

export default PostHeader
