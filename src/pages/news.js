import { renderLayout } from '../layout/layout.js'

const ARTICLES = [
  { title: 'United Realty Closes $45M Office Sale in Stamford', date: 'March 12, 2026' },
  { title: 'Market Outlook: Northeast Industrial Demand Remains Strong', date: 'February 28, 2026' },
  { title: 'Welcome Our New Managing Director, Sarah Chen', date: 'January 15, 2026' },
]

renderLayout({
  activePage: 'news',
  variant: 'interior',
  pageTitle: 'News',
  content: {
    title: 'News — United Realty',
    html: `
      <section>
        <p>Latest updates from United Realty.</p>
        <ul style="list-style: none; margin-top: 2rem;">
          ${ARTICLES.map((a) => `
            <li style="padding: 1.25rem 0; border-bottom: 1px solid var(--color-border);">
              <h2 style="font-size: 1.125rem; margin-bottom: 0.25rem;">${a.title}</h2>
              <time style="font-size: 0.875rem; color: var(--color-text-muted);">${a.date}</time>
            </li>
          `).join('')}
        </ul>
      </section>
    `,
  },
})
