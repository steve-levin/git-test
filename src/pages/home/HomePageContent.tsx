import { useEffect } from 'react'
import type { DesignVariantId } from '@/data/navigation'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { FeaturedListingSection } from '@/components/sections/home/FeaturedListingSection'
import { PropertyListingsSection } from '@/components/sections/home/PropertyListingsSection'
import { ServicesHighlightSection } from '@/components/sections/home/ServicesHighlightSection'
import { ClientLogoSlider } from '@/components/sections/home/ClientLogoSlider'

type HomePageContentProps = {
  variant: DesignVariantId
  title?: string
}

export function HomePageContent({ variant, title = 'Island Commercial Realty' }: HomePageContentProps) {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <HeroSection variant={variant} />
      <FeaturedListingSection variant={variant} />
      <PropertyListingsSection variant={variant} />
      <ServicesHighlightSection variant={variant} />
      <ClientLogoSlider variant={variant} />
    </>
  )
}
