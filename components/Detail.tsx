'use client'

import usePostsQuery from '@/hooks/usePostsQuery'
import PostDetail from './PostDetail'
import useMermaidEffect from '@/hooks/useMermaidEffect'

type Props = { slug: string }

const Detail: React.FC<Props> = ({ slug }) => {
  const data = usePostsQuery()
  useMermaidEffect()

  if (!data) return null
  return (
    <div className='px-0 py-8'>
      <PostDetail slug={slug} />
    </div>
  )
}

export default Detail
