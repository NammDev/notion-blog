import { getPosts } from '@/apis/getPosts'
import { getRecordMap } from '@/apis/getRecordMap'
import PostDetail from '@/components/PostDetail'
import { queryKey } from '@/constants/queryKey'
import { filterPosts } from '@/lib/notion'
import { FilterPostsOptions } from '@/lib/notion/filterPosts'
import { queryClient } from '@/lib/react-query'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

const filter: FilterPostsOptions = {
  acceptStatus: ['Public', 'PublicOnDetail'],
  acceptType: ['Paper', 'Post', 'Page'],
}

type Props = { params: { slug: string } }

export const revalidate = 151200 // 4.4 days

const Detail: React.FC<Props> = async ({ params }) => {
  const { slug } = params

  const posts = await getPosts()
  const feedPosts = filterPosts(posts)
  await queryClient.prefetchQuery({ queryKey: queryKey.posts(), queryFn: () => feedPosts })

  const detailPosts = filterPosts(posts, filter)
  const postDetail = detailPosts.find((t: any) => t.slug === slug)
  const recordMap = await getRecordMap(postDetail?.id!)

  await queryClient.prefetchQuery({
    queryKey: queryKey.post(`${slug}`),
    queryFn: () => ({
      ...postDetail,
      recordMap,
    }),
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <div className='px-0 py-8'>
      <HydrationBoundary state={dehydratedState}>
        <PostDetail slug={slug} />
      </HydrationBoundary>
    </div>
  )
}

export default Detail
