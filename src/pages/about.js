import { renderLayout } from '../components/layout.js'

renderLayout({
  activePage: 'about',
  content: {
    title: 'About — git-test',
    html: `
      <section class="section">
        <h1>About</h1>
        <p class="lead">This project is a lightweight foundation built with Vite and vanilla JavaScript.</p>
      </section>
      <section class="section">
        <h2>Structure</h2>
        <p>Pages live in <code>src/pages/</code>, shared UI in <code>src/components/</code>, and styles in <code>src/styles/</code>. Each route has its own HTML entry point for clean file-based navigation.</p>
      </section>
    `,
  },
})
