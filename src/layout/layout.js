import '../styles/main.css'
import { createHeader } from './header.js'
import { createFooter } from './footer.js'
import { createCtaBanner } from '../components/cta-banner.js'

export function renderLayout({
  activePage,
  variant = 'default',
  pageTitle = '',
  mainClass = '',
  showCta = true,
  cta,
  content,
}) {
  document.title = content.title

  const header = createHeader(activePage)
  const main = document.createElement('main')
  main.className = ['page', variant === 'interior' ? 'page--interior' : '', mainClass]
    .filter(Boolean)
    .join(' ')

  if (variant === 'interior') {
    main.innerHTML = `
      <div class="page-banner">
        <div class="page-banner__inner">
          <h1>${pageTitle}</h1>
        </div>
      </div>
      <div class="page-content">
        ${content.html}
      </div>
    `
  } else {
    main.innerHTML = content.html
  }

  const footer = createFooter()
  const fragments = [header, main]

  if (showCta) {
    fragments.push(createCtaBanner(cta))
  }

  fragments.push(footer)
  document.body.replaceChildren(...fragments)

  content.init?.(main)
}
