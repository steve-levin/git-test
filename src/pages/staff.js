import { renderLayout } from '../layout/layout.js'

const TEAM = [
  { name: 'James Mitchell', role: 'Principal', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop' },
  { name: 'Sarah Chen', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
  { name: 'Michael Torres', role: 'Senior Broker', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
  { name: 'Emily Watson', role: 'Director of Operations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
  { name: 'David Park', role: 'Vice President', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop' },
]

renderLayout({
  activePage: 'staff',
  variant: 'interior',
  pageTitle: 'Staff',
  content: {
    title: 'Staff — United Realty',
    html: `
      <section>
        <p>Meet the professionals behind United Realty.</p>
        <div class="card-grid card-grid--5" style="margin-top: 2rem;">
          ${TEAM.map((m) => `
            <article class="team-card">
              <div class="team-card__photo">
                <img src="${m.image}" alt="${m.name}" loading="lazy">
              </div>
              <h2 class="team-card__name">${m.name}</h2>
              <p class="team-card__role">${m.role}</p>
            </article>
          `).join('')}
        </div>
      </section>
    `,
  },
})
