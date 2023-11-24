'use client'
import { useEffect } from 'react'
import { CONFIG } from '@/site.config'

type Props = {
  issueTerm: string
}

const Utterances: React.FC<Props> = ({ issueTerm }) => {
  const scheme = 'light'

  useEffect(() => {
    const theme = scheme === 'light' ? 'github-light' : 'github-dark'
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    if (!anchor) return

    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', `true`)
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('theme', theme)
    script.setAttribute('repo', CONFIG.utterances.config.repo)
    script.setAttribute('label', CONFIG.utterances.config.label)

    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  }, [scheme])
  return (
    <>
      <div className='md:ml-[-4rem]' id='comments'>
        <div className='utterances-frame'></div>
      </div>
    </>
  )
}

export default Utterances
