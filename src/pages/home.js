import { renderLayout } from '../layout/layout.js'

const PROPERTIES = [
  {
    title: '5 Harbor Park Drive',
    meta: '30,000 SF · Office · Stamford, CT',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop',
  },
  {
    title: '100 Summer Street',
    meta: '45,000 SF · Mixed Use · Boston, MA',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=450&fit=crop',
  },
  {
    title: '200 Park Avenue',
    meta: '120,000 SF · Office · New York, NY',
    image: 'https://images.unsplash.com/photo-1577495508048-b7a3e097fb12?w=600&h=450&fit=crop',
  },
]

const TEAM = [
  { name: 'James Mitchell', role: 'Principal', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop' },
  { name: 'Sarah Chen', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
  { name: 'Michael Torres', role: 'Senior Broker', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
  { name: 'Emily Watson', role: 'Director of Operations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
  { name: 'David Park', role: 'Vice President', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop' },
]

const CLIENTS = ['AT&T', 'Aetna', 'Cigna', 'Yale', 'UBS']

function propertyCards() {
  return PROPERTIES.map((p) => `
    <article class="property-card">
      <div class="property-card__image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="property-card__body">
        <h3 class="property-card__title">${p.title}</h3>
        <p class="property-card__meta">${p.meta}</p>
        <a class="btn btn--primary" href="/properties/">View Details</a>
      </div>
    </article>
  `).join('')
}

function teamCards() {
  return TEAM.map((m) => `
    <article class="team-card">
      <div class="team-card__photo">
        <img src="${m.image}" alt="${m.name}" loading="lazy">
      </div>
      <h3 class="team-card__name">${m.name}</h3>
      <p class="team-card__role">${m.role}</p>
    </article>
  `).join('')
}

function clientLogos() {
  return CLIENTS.map((name) => `<div class="client-logo">${name}</div>`).join('')
}

renderLayout({
  activePage: 'home',
  content: {
    title: 'United Realty',
    html: `
      <section class="hero" aria-label="Hero">
        <div class="hero__image">
          <img src="https://images.unsplash.com/photo-1486718448742-163732cd1542?w=1600&h=900&fit=crop" alt="Modern commercial building at dusk">
        </div>
        <div class="hero__overlay" aria-hidden="true"></div>
        <div class="hero__content">
          <h1 class="hero__title">Commercial Real Estate Expertise You Can Trust</h1>
        </div>
      </section>

      <section class="featured-properties" aria-labelledby="featured-heading">
        <div class="container">
          <h2 id="featured-heading" class="section-heading">Featured Properties</h2>
          <div class="card-grid card-grid--3">
            ${propertyCards()}
          </div>
        </div>
      </section>

      <section class="what-we-do" aria-labelledby="services-heading">
        <div class="what-we-do__bg" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop" alt="">
        </div>
        <div class="what-we-do__inner container">
          <h2 id="services-heading" class="section-heading">What We Do</h2>
          <div class="card-grid card-grid--3">
            <article class="service-pillar">
              <div class="service-pillar__icon" aria-hidden="true">B</div>
              <h3 class="service-pillar__title">Brokerage</h3>
              <p class="service-pillar__text">Full-service commercial brokerage across office, retail, and industrial markets.</p>
            </article>
            <article class="service-pillar">
              <div class="service-pillar__icon" aria-hidden="true">C</div>
              <h3 class="service-pillar__title">Real Estate Consulting</h3>
              <p class="service-pillar__text">Strategic advisory for acquisitions, dispositions, and portfolio planning.</p>
            </article>
            <article class="service-pillar">
              <div class="service-pillar__icon" aria-hidden="true">P</div>
              <h3 class="service-pillar__title">Property Management</h3>
              <p class="service-pillar__text">Operational excellence for owners and tenants across asset types.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="our-team" aria-labelledby="team-heading">
        <div class="container">
          <h2 id="team-heading" class="section-heading">Our Team</h2>
          <div class="card-grid card-grid--5">
            ${teamCards()}
          </div>
        </div>
      </section>

      <section class="our-clients" aria-labelledby="clients-heading">
        <div class="container">
          <h2 id="clients-heading" class="section-heading">Our Clients</h2>
          <div class="card-grid card-grid--5">
            ${clientLogos()}
          </div>
        </div>
      </section>
    `,
  },
})
