'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Analytics, track } from '@vercel/analytics/react'

export default function ICupPage() {
  const router = useRouter()

  useEffect(() => {
    track('ICupRedirect', {
      source: 'direct_url',
      destination: 'docs.google.com'
    })

    router.push('https://docs.google.com/document/d/11nlLg45PQw6HYTYWLSZ-kc5Zmlt1akqGOUjh6gS2CN4/edit?usp=sharing')
  }, [router])

  return (
    <>
      <Analytics />
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white">Redirecting...</p>
      </div>
    </>
  )
}
