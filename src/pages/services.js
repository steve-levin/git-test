import { renderLayout } from '../layout/layout.js'

renderLayout({
  activePage: 'services',
  content: {
    title: 'Services — git-test',
    html: `
      <section class="section">
        <h1>Services</h1>
        <p class="lead">What we offer — placeholder content for now.</p>
      </section>
      <section class="section">
        <ul class="service-list">
          <li class="service-card">
            <h2>Web Development</h2>
            <p>Fast, responsive sites built with modern tooling.</p>
          </li>
          <li class="service-card">
            <h2>Design Systems</h2>
            <p>Reusable components and consistent visual language.</p>
          </li>
          <li class="service-card">
            <h2>Consulting</h2>
            <p>Architecture reviews and technical guidance.</p>
          </li>
        </ul>
      </section>
    `,
  },
})
