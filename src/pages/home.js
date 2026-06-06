import { renderLayout } from '../layout/layout.js'

const labels = ['Click me', 'It works!', 'Again?', 'One more time']
let labelIndex = 0

renderLayout({
  activePage: 'home',
  mainClass: 'page--centered',
  content: {
    title: 'Home — git-test',
    html: `
      <section class="section">
        <h1>Hello from Cursor</h1>
        <p class="lead">A simple, scalable baseline for a multi-page site.</p>
        <button class="cta" id="cta" type="button">Click me</button>
      </section>
    `,
    init(main) {
      main.querySelector('#cta').addEventListener('click', (event) => {
        labelIndex = (labelIndex + 1) % labels.length
        event.currentTarget.textContent = labels[labelIndex]
      })
    },
  },
})
