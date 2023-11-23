import { getPosts } from '@/apis/getPosts'
import { getRecordMap } from '@/apis/getRecordMap'
import Detail from '@/components/Detail'
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

const Page: React.FC<Props> = async ({ params }) => {
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
    <HydrationBoundary state={dehydratedState}>
      <Detail slug={slug} />
    </HydrationBoundary>
  )
}

export default Page
