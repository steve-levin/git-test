export const COMPANY = {
  name: 'Island Commercial Realty',
  shortName: 'ICR',
  founded: 1972,
  tagline: null,
  phone: '(516) 555-0197',
  phoneHref: 'tel:+15165550197',
  email: 'info@islandcommercial.com',
  address: {
    line1: '1200 Corporate Drive',
    line2: 'Melville, NY 11747',
  },
  sisterCompany: {
    name: 'Triangle Properties',
    slug: 'triangle-properties',
    description:
      'Property management services are delivered through our sister company, Triangle Properties — providing operational excellence for commercial assets across Long Island.',
  },
  languages: [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'ko', label: 'Korean' },
    { code: 'zh', label: 'Chinese' },
  ],
} as const
