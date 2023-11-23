import { getPosts } from '@/apis/getPosts'
import Feed from '@/components/Feed'
import { queryKey } from '@/constants/queryKey'
import { filterPosts } from '@/lib/notion'
import { queryClient } from '@/lib/react-query'
import { CONFIG } from '@/site.config'

import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'

export const revalidate = 151200 // 4.4 days

export default async function Home() {
  const posts = filterPosts(await getPosts())
  await queryClient.prefetchQuery({ queryKey: queryKey.posts(), queryFn: () => posts })
  const dehydratedState = dehydrate(queryClient)

  return (
    <main className='w-full max-w-[1120px] mx-auto my-0 px-4 py-0'>
      <HydrationBoundary state={dehydratedState}>
        <Feed />
      </HydrationBoundary>
    </main>
  )
}
