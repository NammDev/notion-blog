import React, { useEffect, useState } from 'react'
import { DEFAULT_CATEGORY } from '@/constants'
// import usePostsQuery from 'src/hooks/usePostsQuery'
import PostCard from './PostCard'
import { TPost } from '@/types'
import usePostsQuery from '@/hooks/usePostsQuery'
import { useSearchParams } from 'next/navigation'

type Props = {
  q: string
}

const PostList: React.FC<Props> = ({ q }) => {
  const searchParams = useSearchParams()

  const data = usePostsQuery()
  const [filteredPosts, setFilteredPosts] = useState(data)

  const currentTag = searchParams.get('tag') || undefined
  const currentCategory = searchParams.get('category') || DEFAULT_CATEGORY
  const currentOrder = searchParams.get('order') || 'desc'

  useEffect(() => {
    setFilteredPosts(() => {
      let newFilteredPosts = data
      // keyword
      newFilteredPosts = newFilteredPosts.filter((post) => {
        const tagContent = post.tags ? post.tags.join(' ') : ''
        const searchContent = post.title + post.summary + tagContent
        return searchContent.toLowerCase().includes(q.toLowerCase())
      })

      // tag
      if (currentTag) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }

      // category
      if (currentCategory !== DEFAULT_CATEGORY) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) => post && post.category && post.category.includes(currentCategory)
        )
      }
      // order
      if (currentOrder !== 'desc') {
        newFilteredPosts = newFilteredPosts.reverse()
      }

      return newFilteredPosts
    })
  }, [q, currentTag, currentCategory, currentOrder, setFilteredPosts, data])

  return (
    <>
      <div className='my-2'>
        {!filteredPosts.length && <p className='text-gray-500 dark:text-gray-300'>Nothing! 😺</p>}
        {filteredPosts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </>
  )
}

export default PostList
