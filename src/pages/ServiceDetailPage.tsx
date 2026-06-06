import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { InteriorSplit } from '@/components/sections/InteriorSplit'
import { SERVICES } from '@/data/content'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find((item) => item.slug === slug)

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — United Realty`
    }
  }, [service])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <InteriorSplit
      headline={service.headline}
      paragraphs={service.paragraphs}
      imageSrc={service.image}
      imageAlt={service.title}
    />
  )
}
