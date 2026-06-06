import { renderLayout } from '../layout/layout.js'

renderLayout({
  activePage: 'services',
  variant: 'interior',
  pageTitle: 'Services',
  content: {
    title: 'Services — United Realty',
    html: `
      <section>
        <p class="lead">United Realty offers a full suite of commercial real estate services tailored to owners, investors, and tenants.</p>
        <div class="card-grid card-grid--3" style="margin-top: 2rem;">
          <article class="property-card">
            <div class="property-card__body">
              <h2 class="property-card__title">Brokerage</h2>
              <p class="property-card__meta">Leasing and sales representation across office, retail, and industrial assets.</p>
              <a class="btn btn--primary" href="/services/brokerage/">Learn More</a>
            </div>
          </article>
          <article class="property-card">
            <div class="property-card__body">
              <h2 class="property-card__title">Real Estate Consulting</h2>
              <p class="property-card__meta">Strategic advisory for acquisitions, dispositions, and portfolio optimization.</p>
              <a class="btn btn--primary" href="/services/consulting/">Learn More</a>
            </div>
          </article>
          <article class="property-card">
            <div class="property-card__body">
              <h2 class="property-card__title">Property Management</h2>
              <p class="property-card__meta">Day-to-day operations, tenant relations, and asset performance.</p>
              <a class="btn btn--primary" href="/services/property-management/">Learn More</a>
            </div>
          </article>
        </div>
      </section>
    `,
  },
})
