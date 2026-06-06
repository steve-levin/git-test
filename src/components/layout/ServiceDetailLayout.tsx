import { useParams } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { SERVICES } from '@/data/content'

export function ServiceDetailLayout() {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find((item) => item.slug === slug)

  return (
    <Layout
      activePage={slug ?? 'services'}
      variant="interior"
      pageTitle={service?.title ?? 'Services'}
    />
  )
}
