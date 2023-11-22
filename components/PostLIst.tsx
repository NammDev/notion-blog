import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DEFAULT_CATEGORY } from '@/constants'
// import usePostsQuery from 'src/hooks/usePostsQuery'
import PostCard from './PostCard'
import { TPost } from '@/types'

type Props = {
  q: string
}

const PostList: React.FC<Props> = ({ q }) => {
  // const router = useRouter()
  // const data = usePostsQuery()
  // const [filteredPosts, setFilteredPosts] = useState(data)

  // const currentTag = `${router.query.tag || ``}` || undefined
  // const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY
  // const currentOrder = `${router.query.order || ``}` || 'desc'

  // useEffect(() => {
  //   setFilteredPosts(() => {
  //     let newFilteredPosts = data
  //     // keyword
  //     newFilteredPosts = newFilteredPosts.filter((post) => {
  //       const tagContent = post.tags ? post.tags.join(' ') : ''
  //       const searchContent = post.title + post.summary + tagContent
  //       return searchContent.toLowerCase().includes(q.toLowerCase())
  //     })

  //     // tag
  //     if (currentTag) {
  //       newFilteredPosts = newFilteredPosts.filter(
  //         (post) => post && post.tags && post.tags.includes(currentTag)
  //       )
  //     }

  //     // category
  //     if (currentCategory !== DEFAULT_CATEGORY) {
  //       newFilteredPosts = newFilteredPosts.filter(
  //         (post) => post && post.category && post.category.includes(currentCategory)
  //       )
  //     }
  //     // order
  //     if (currentOrder !== 'desc') {
  //       newFilteredPosts = newFilteredPosts.reverse()
  //     }

  //     return newFilteredPosts
  //   })
  // }, [q, currentTag, currentCategory, currentOrder, setFilteredPosts])

  const filteredPosts = [
    {
      id: 'f5b69b16-e363-4977-823d-21b5eef91504',
      date: { start_date: '2023-01-22' },
      thumbnail:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb90838f2-00d3-4e86-91d4-1386dc5a6d45%2Fda5a93ba-bcf1-405f-9377-ce10d7380954%2Fimage.png?table=block&id=f5b69b16-e363-4977-823d-21b5eef91504&cache=v2',
      type: ['Post'],
      slug: 'docs',
      category: ['📗 Docs'],
      tags: ['Docs', 'Morethanlog'],
      author: [[Object]],
      title: 'Welcome to morethan log!',
      status: ['Public'],
      createdTime: 'Sun Nov 19 2023 18:53:12 GMT+0700 (GMT+07:00)',
      fullWidth: false,
    },
    {
      id: 'a1a9c5b6-2b2e-4458-9fb5-e99b31a1dd69',
      date: { start_date: '2022-07-01' },
      type: ['Post'],
      slug: 'hot-to-make-sitemap-in-next-js',
      category: ['💻 Frontend'],
      tags: ['SEO', 'Blog', 'Next.js'],
      summary: "Let's load the sitemap dynamically",
      author: [[Object]],
      title: 'Dynamically create sitemap.xml in Next.js',
      status: ['Public'],
      createdTime: 'Sun Nov 19 2023 18:53:12 GMT+0700 (GMT+07:00)',
      fullWidth: false,
    },
    {
      id: 'eadaf266-efaf-4a0f-8d86-e35a0ac65e75',
      date: { start_date: '2022-06-29' },
      type: ['Post'],
      slug: 'apollo-gettings-started-mutate',
      category: ['💻 Frontend'],
      tags: ['Next.js', 'GraphQL', 'Apollo'],
      summary: "Let's try useMutation and see how it handles real asynchronous state.",
      author: [[Object]],
      title: 'Learn how apollo client manages asynchronous state through useMutation',
      status: ['Public'],
      createdTime: 'Sun Nov 19 2023 18:53:12 GMT+0700 (GMT+07:00)',
      fullWidth: false,
    },
    {
      id: '2d32dade-4e8d-42ad-b6b4-6e1ea6e223eb',
      date: { start_date: '2022-06-25' },
      thumbnail:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb90838f2-00d3-4e86-91d4-1386dc5a6d45%2F76bfd580-fa91-4171-a89c-0217c96f98ab%2FKakaoTalk_20230104_231348768.jpg?table=block&id=2d32dade-4e8d-42ad-b6b4-6e1ea6e223eb&cache=v2',
      type: ['Post'],
      slug: 'apollo-gettings-started-query',
      category: ['💻 Frontend'],
      tags: ['Next.js', 'GraphQL', 'Apollo'],
      summary: "Let's use GraphQL using apollo client",
      author: [[Object]],
      title: 'Handling GraphQL queries in apollo client',
      status: ['Public'],
      createdTime: 'Sun Nov 19 2023 18:53:12 GMT+0700 (GMT+07:00)',
      fullWidth: false,
    },
    {
      id: '9b3bd1ba-f994-4738-a4d3-b032d4727c41',
      date: { start_date: '2022-06-21' },
      thumbnail:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb90838f2-00d3-4e86-91d4-1386dc5a6d45%2Fb1161ba1-6d74-407a-8ab2-8c14408d74a9%2F72514247.jfif?table=block&id=9b3bd1ba-f994-4738-a4d3-b032d4727c41&cache=v2',
      type: ['Post'],
      slug: 'about-graphql',
      category: ['🤖 Computer Science'],
      tags: ['GraphQL', 'Rest'],
      summary: 'Learn GraphQL 🙄',
      author: [[Object]],
      title: 'About GraphQL',
      status: ['Public'],
      createdTime: 'Sun Nov 19 2023 18:53:12 GMT+0700 (GMT+07:00)',
      fullWidth: false,
    },
    {
      id: '82a59ac3-090a-4fcc-b520-ac5fc71c721e',
      date: { start_date: '2022-06-17' },
      type: ['Post'],
      slug: 'how-to-apply-ga-to-next.js',
      category: ['💻 Frontend'],
      tags: ['Next.js', 'GA'],
      summary: "Let's understand the principle and apply ga to next.js 😎",
      author: [[Object]],
      title: 'Applying google analytics to Next.js',
      status: ['Public'],
      createdTime: 'Sun Nov 19 2023 18:53:12 GMT+0700 (GMT+07:00)',
      fullWidth: false,
    },
    {
      id: '65049e55-7030-4d48-b3d2-f0d88814f784',
      date: { start_date: '2022-06-10' },
      type: ['Post'],
      slug: 'about-opensource-license',
      category: ['🤖 Computer Science'],
      tags: ['Open Source', 'Github'],
      summary:
        'Briefly learn about the open source license, and apply the license to your source code uploaded on github 🙂',
      author: [[Object]],
      title: 'About open source license(revalidate)',
      status: ['Public'],
      createdTime: 'Sun Nov 19 2023 18:53:12 GMT+0700 (GMT+07:00)',
      fullWidth: false,
    },
  ] as unknown as TPost[]

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
