import { renderLayout } from '../layout/layout.js'
import { interiorSplit } from '../components/interior-content.js'

renderLayout({
  activePage: 'about',
  variant: 'interior',
  pageTitle: 'About',
  content: {
    title: 'About — United Realty',
    html: interiorSplit({
      headline: 'More than a Source, a Resource.',
      paragraphs: [
        'United Realty has been a trusted partner in commercial real estate for over three decades. We combine deep market knowledge with a client-first approach to deliver results across brokerage, consulting, and property management.',
        'Our team brings together specialists in every major asset class, giving clients access to insight and relationships that move deals forward. Whether you are acquiring, disposing, or optimizing a portfolio, we are here to guide every step.',
        'We believe great real estate outcomes start with great relationships — built on transparency, expertise, and a commitment to your long-term success.',
      ],
      imageSrc: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
      imageAlt: 'Modern office building exterior',
    }),
  },
})
