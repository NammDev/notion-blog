import { getPosts } from '@/apis/getPosts'
import PostDetail from '@/components/PostDetail'
import { filterPosts } from '@/lib/notion'

type Props = { params: { slug: string } }

const Detail: React.FC<Props> = async ({ params }) => {
  const posts = await getPosts()
  const feedPosts = filterPosts(posts)
  return (
    <div className='px-0 py-8'>
      <PostDetail />
    </div>
  )
}

export default Detail
