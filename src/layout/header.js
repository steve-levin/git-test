import { createNavigation } from '../components/navigation.js'

export function createHeader(activePage) {
  const header = document.createElement('header')
  header.className = 'site-header'

  const inner = document.createElement('div')
  inner.className = 'site-header__inner'

  const logo = document.createElement('a')
  logo.className = 'site-logo'
  logo.href = '/'
  logo.textContent = 'git-test'

  inner.append(logo, createNavigation(activePage))
  header.appendChild(inner)
  return header
}
