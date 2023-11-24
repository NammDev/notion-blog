'use client'

import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { PostDetail } from '@/types'
import { queryKey } from '@/constants/queryKey'
import NotionPage from './NotionPage'

type Props = {
  slug: string
}

const PageDetail: React.FC<Props> = ({ slug }) => {
  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  })

  if (!data) return null

  return (
    <div className='max-w-4xl mx-auto my-0'>
      <NotionPage recordMap={data.recordMap} />
    </div>
  )
}

export default PageDetail
