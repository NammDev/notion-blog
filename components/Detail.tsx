'use client'

import useMermaidEffect from '@/hooks/useMermaidEffect'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { queryKey } from '@/constants/queryKey'
import { PostDetail as PostDetailType } from '@/types'
import PostDetail from './PostDetail'
import PageDetail from './PageDetail'

type Props = { slug: string }

const Detail: React.FC<Props> = ({ slug }) => {
  const { data } = useQuery<PostDetailType>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  })
  useMermaidEffect()

  if (!data) return null
  return (
    <div className={cn('px-0 py-8', data.type[0] === 'Paper' && 'px-0 py-10')}>
      {data.type[0] === 'Page' && <PageDetail slug={slug} />}
      {data.type[0] !== 'Page' && <PostDetail slug={slug} />}
    </div>
  )
}

export default Detail
