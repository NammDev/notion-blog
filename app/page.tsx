import Feed from '@/components/Feed'
import { filterPosts } from '@/lib/notion'

export default function Home() {
  return (
    <main className='w-full max-w-[1120px] mx-auto my-0 px-4 py-0'>
      <Feed />
    </main>
  )
}
