'use client'
import React from 'react'

import PostHeader from './PostHeader'
import Footer from './PostFooter'
import CommentBox from './CommentBox'
import Category from './Category'
import NotionRenderer from './NotionRenderer'
import { useQuery } from '@tanstack/react-query'
import { PostDetail } from '@/types'
import { queryKey } from '@/constants/queryKey'

type Props = {
  slug: string
}

const PostDetail: React.FC<Props> = ({ slug }) => {
  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  })

  if (!data) return null

  const category = (data.category && data.category?.[0]) || undefined

  return (
    <div className='max-w-4xl bg-[rgb(40,40,40)] shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px] mx-auto my-0 px-6 py-12 rounded-3xl'>
      <article className='max-w-2xl mx-auto my-0'>
        {category && (
          <div className='mb-2'>
            <Category readOnly={data.status?.[0] === 'PublicOnDetail'}>{category}</Category>
          </div>
        )}
        {data.type[0] === 'Post' && <PostHeader data={data} />}
        <div>{/* <NotionRenderer recordMap={data.recordMap} /> */}</div>
        {data.type[0] === 'Post' && (
          <>
            <Footer />
            {/* <CommentBox data={data} /> */}
          </>
        )}
      </article>
    </div>
  )
}

export default PostDetail
