import { Hero } from '@/components/sections/Hero'
import { FeaturedProperties } from '@/components/sections/FeaturedProperties'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { OurTeam } from '@/components/sections/OurTeam'
import { OurClients } from '@/components/sections/OurClients'
import { PROPERTIES } from '@/data/content'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    document.title = 'United Realty'
  }, [])

  return (
    <>
      <Hero />
      <FeaturedProperties properties={PROPERTIES} />
      <WhatWeDo />
      <OurTeam />
      <OurClients />
    </>
  )
}
