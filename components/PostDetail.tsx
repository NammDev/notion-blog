import React from 'react'
// import NotionRenderer from '../components/NotionRenderer'

import PostHeader from './PostHeader'
import Footer from './PostFooter'
import CommentBox from './CommentBox'
import Category from './Category'
import { TPost } from '@/types'

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = {
    id: 'f5b69b16-e363-4977-823d-21b5eef91504',
    date: { start_date: '2023-01-22' },
    thumbnail:
      'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb90838f2-00d3-4e86-91d4-1386dc5a6d45%2Fda5a93ba-bcf1-405f-9377-ce10d7380954%2Fimage.png?table=block&id=f5b69b16-e363-4977-823d-21b5eef91504&cache=v2',
    type: ['Post'],
    slug: 'docs',
    category: ['📗 Docs'],
    tags: ['Docs', 'Morethanlog'],
    author: [
      {
        id: 'e5ed41b6-1017-4d12-bdba-ee217703dd05',
        name: 'morethanmin',
        profile_photo:
          'https://lh5.googleusercontent.com/-lr5pjNrudeM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuck_j3l31Z6ws1a44V8GfS68MDZZvg/photo.jpg',
      },
    ],
    title: 'Welcome to morethan log!',
    status: ['Public'],
    createdTime: 'Sun Nov 19 2023 18:53:12 GMT+0700 (GMT+07:00)',
    fullWidth: false,
    recordMap: {
      block: {
        'f5b69b16-e363-4977-823d-21b5eef91504': [Object],
        '242b78b8-519d-4892-b481-643238775c73': [Object],
        'f64993f3-53df-4007-962f-276bfe0dd245': [Object],
        '43469749-a03c-435d-aa96-0ae3d24efb43': [Object],
        'c9b0a856-8a4c-454b-9949-d206a148f665': [Object],
        '296f7372-4342-4cfc-b76a-71a97fe2bae7': [Object],
        'f1e2d702-6d12-4d92-b146-1b7cf0117a17': [Object],
        'dce938be-7118-4622-95a8-98a8216cba0f': [Object],
        '4d7da7e3-a857-4c90-a718-a989a978533c': [Object],
        '77ae4b23-10b6-4ab8-900c-d09c0b2e5496': [Object],
        'caa1fb7a-9729-4d91-b202-c15d5221a6a9': [Object],
        '6033fab0-b235-4746-9c5a-0c8dd3229ad8': [Object],
        '592f7cd2-067e-4bab-b561-aea57c309155': [Object],
        'f0d2d26b-6884-481c-af2e-39eeed49e894': [Object],
        '6fef10fb-a47a-4948-9293-d6ebb9c4410c': [Object],
        'dcc8b48a-0821-4d9a-9ebd-0e05fe3d4810': [Object],
        '54a083ce-4ae5-43a9-a1c0-b2486b55d9fe': [Object],
        'b6f5a811-1960-4481-ba7b-1094965097af': [Object],
        '45247849-2d08-4bde-9c9b-373e680955f7': [Object],
        '01c30a0c-9525-4d79-aef7-34c82d29843b': [Object],
        '81dc66c7-6ce6-4b02-9c65-69838ba2edc4': [Object],
        'f38d3baa-3a7e-4673-8c64-4fd19079d569': [Object],
        '742f3431-3f76-44a9-8149-39cccbc7ea28': [Object],
        'cf285167-9d0d-4471-bf83-5b9a34ec3e55': [Object],
        '9b0dd5a4-981d-4052-a050-2038fe693b45': [Object],
        'cebc1f0e-1c0b-47c5-9c85-2da16dc6d5c6': [Object],
        '4a3cc40f-99c1-4841-9940-7bda041ef9f8': [Object],
        '0bd8fe31-d64d-4e66-bb03-f1cfbe602314': [Object],
        '7d860fe5-3630-43f5-a923-3f42a2fbfc15': [Object],
        '8af7cb5c-b3a5-41e4-8b80-bd7b3854cd47': [Object],
        '25f0d768-f560-4c4e-be3f-af84d4dbd9fd': [Object],
        '2dcb11eb-5447-4e1c-a7e0-74eec8a77edd': [Object],
        'a29202f8-b0a0-47ca-9369-219d9a40d807': [Object],
        '70196aef-7bc1-49e0-8872-5c9888f8994d': [Object],
        '6c510974-3cb0-4b00-a9e4-9333e10c6be4': [Object],
        'd50e0551-f80d-4a97-9171-31db8e6aecb6': [Object],
        '9e7bb603-f504-4626-92f6-22ccb5d4fdca': [Object],
        '3143a72b-c811-47b4-aafb-724c39c404e3': [Object],
        '96d3b20a-cbe8-4f05-98a6-bf89d8e1f846': [Object],
        '4276979c-5be8-4a9b-b441-4c720d1fa0e2': [Object],
        '631facce-7808-4745-b576-973d63ace198': [Object],
        '46b67217-7b9b-4cec-b230-56f52adb4a13': [Object],
        'ddc4d5e8-f45c-4e1b-86cd-4c423672e7d4': [Object],
        'b3f6a941-8a83-4c2a-ab37-e7f44171e245': [Object],
        'd495ff62-4105-4a8d-9789-551672e917bd': [Object],
        '0bce636e-aa1b-46fc-be34-613548f2cdc3': [Object],
        '12b64336-2dcf-414f-b089-dacfb492a595': [Object],
        'cfb3359b-53d5-4b52-bc45-8cd0c89ada63': [Object],
        '84ff3573-bc2d-4106-af04-52ea12ab6aec': [Object],
        '7f2e1422-2c78-4aff-aec1-e59e05ef6392': [Object],
      },
      collection: { '9414277b-c7fb-4e6e-81f2-bb733d96246f': [Object] },
      space: {},
      collection_view: { 'a245fe9d-9f5d-4d75-880f-d7b1516be9ce': [Object] },
      notion_user: {},
      collection_query: {},
      signed_urls: {},
    },
  } as TPost

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
