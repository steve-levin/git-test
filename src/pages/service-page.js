import { renderLayout } from '../layout/layout.js'
import { interiorSplit } from '../components/interior-content.js'

const SERVICES = {
  brokerage: {
    activePage: 'brokerage',
    pageTitle: 'Brokerage',
    title: 'Brokerage — United Realty',
    headline: 'Expert Representation for Every Transaction',
    paragraphs: [
      'Our brokerage team delivers market-leading results for landlords and tenants across office, retail, and industrial properties.',
      'From site selection to lease negotiation and disposition strategy, we bring deep local knowledge and a proven track record of closing complex deals.',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  },
  consulting: {
    activePage: 'consulting',
    pageTitle: 'Real Estate Consulting',
    title: 'Real Estate Consulting — United Realty',
    headline: 'Strategic Insight for Confident Decisions',
    paragraphs: [
      'Our consulting practice helps owners and investors evaluate opportunities, assess risk, and build portfolios aligned with long-term goals.',
      'We provide market analysis, feasibility studies, and advisory support for acquisitions, dispositions, and repositioning strategies.',
    ],
    image: 'https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?w=800&h=600&fit=crop',
  },
  'property-management': {
    activePage: 'property-management',
    pageTitle: 'Property Management',
    title: 'Property Management — United Realty',
    headline: 'Protecting Value, Enhancing Performance',
    paragraphs: [
      'Our property management team handles day-to-day operations so owners can focus on growth. We manage tenant relations, maintenance, and financial reporting with precision.',
      'From single assets to multi-building portfolios, we deliver consistent service and transparent communication.',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  },
}

export function renderServicePage(slug) {
  const service = SERVICES[slug]
  if (!service) return

  renderLayout({
    activePage: service.activePage,
    variant: 'interior',
    pageTitle: service.pageTitle,
    content: {
      title: service.title,
      html: interiorSplit({
        headline: service.headline,
        paragraphs: service.paragraphs,
        imageSrc: service.image,
        imageAlt: service.pageTitle,
      }),
    },
  })
}
