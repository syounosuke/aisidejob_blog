'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import config from '../../../../sanity.config'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then(mod => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>Loading Sanity Studio...</div>
      </div>
    )
  }
)

export default function StudioPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>Loading Sanity Studio...</div>
      </div>
    )
  }

  return (
    <div style={{ height: '100vh' }}>
      <NextStudio config={config} />
    </div>
  )
}