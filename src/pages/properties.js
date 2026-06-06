import { renderLayout } from '../layout/layout.js'

const PROPERTIES = [
  { title: '5 Harbor Park Drive', meta: '30,000 SF · Office · Stamford, CT', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop' },
  { title: '100 Summer Street', meta: '45,000 SF · Mixed Use · Boston, MA', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=450&fit=crop' },
  { title: '200 Park Avenue', meta: '120,000 SF · Office · New York, NY', image: 'https://images.unsplash.com/photo-1577495508048-b7a3e097fb12?w=600&h=450&fit=crop' },
  { title: '50 Washington Blvd', meta: '22,000 SF · Retail · Stamford, CT', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=450&fit=crop' },
  { title: '1 Landmark Square', meta: '85,000 SF · Office · Stamford, CT', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&h=450&fit=crop' },
  { title: '300 Atlantic Street', meta: '15,000 SF · Industrial · Stamford, CT', image: 'https://images.unsplash.com/photo-1586525191012-6a0608980f3b?w=600&h=450&fit=crop' },
]

renderLayout({
  activePage: 'properties',
  variant: 'interior',
  pageTitle: 'Properties',
  content: {
    title: 'Properties — United Realty',
    html: `
      <section>
        <p>Browse our current listings and available commercial spaces across the Northeast.</p>
        <div class="card-grid card-grid--3" style="margin-top: 2rem;">
          ${PROPERTIES.map((p) => `
            <article class="property-card">
              <div class="property-card__image">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
              </div>
              <div class="property-card__body">
                <h2 class="property-card__title">${p.title}</h2>
                <p class="property-card__meta">${p.meta}</p>
                <a class="btn btn--primary" href="/contact/">View Details</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `,
  },
})
