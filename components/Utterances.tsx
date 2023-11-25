'use client'
import { createRef, useEffect } from 'react'
import { CONFIG } from '@/site.config'
import { useTheme } from 'next-themes'

type Props = {
  issueTerm: string
}

const Utterances: React.FC<Props> = ({ issueTerm }) => {
  const { theme } = useTheme()
  const gTheme = theme === 'light' ? 'github-light' : 'github-dark'
  const utterancesRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://utteranc.es/client.js'
    scriptElement.async = true
    scriptElement.defer = true
    scriptElement.setAttribute('crossorigin', 'annonymous')
    scriptElement.setAttribute('repo', CONFIG.utterances.config.repo)
    scriptElement.setAttribute('label', CONFIG.utterances.config.label)
    scriptElement.setAttribute('issue-term', 'title')
    scriptElement.setAttribute('theme', gTheme)

    scriptElement.onload = () => {
      const comments = document.getElementById('comments-container')
      if (comments?.children[1] && comments) {
        //@ts-ignore
        comments.children[1].style.display = 'none'
      }
    }

    utterancesRef.current?.appendChild(scriptElement)
  }, [utterancesRef, gTheme])

  return (
    <>
      <div ref={utterancesRef} className='md:ml-[-4rem]' id='comments-container'></div>
    </>
  )
}

export default Utterances
