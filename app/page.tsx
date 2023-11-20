import Footer from '@/components/Footer'
import ProfileCard from '@/components/ProfileCard'
import TagList from '@/components/TagList'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full max-w-[1120px] mx-auto my-0 px-4 py-0'>
      <div className='grid grid-cols-12 gap-6 md:grid-cols-12 md:gap-4 lg:gap-6 py-8'>
        <div className='hidden lg:block overflow-scroll sticky lg:col-span-2 top-[63px] scrollbar-none h-[calc(100vh-73px)]'>
          <TagList />
        </div>
        <div className='col-span-12 lg:col-span-7'>Profile</div>
        <div className='hidden lg:block overflow-scroll sticky lg:col-span-3 top-[63px] scrollbar-none h-[calc(100vh-73px)]'>
          <ProfileCard />
          {/* <ServiceCard />
          <ContactCard /> */}
          <div className='pt-4'>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
