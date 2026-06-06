import '../styles/main.css'
import { createHeader } from './header.js'
import { createFooter } from './footer.js'

export function renderLayout({ activePage, mainClass = '', content }) {
  document.title = content.title

  const header = createHeader(activePage)
  const main = document.createElement('main')
  main.className = ['page', mainClass].filter(Boolean).join(' ')
  main.innerHTML = content.html

  const footer = createFooter()

  document.body.replaceChildren(header, main, footer)

  content.init?.(main)
}
