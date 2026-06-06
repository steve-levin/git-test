const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about/' },
  { id: 'contact', label: 'Contact', href: '/contact/' },
]

export function createHeader(activePage) {
  const header = document.createElement('header')
  header.className = 'site-header'

  const inner = document.createElement('div')
  inner.className = 'site-header__inner'

  const logo = document.createElement('a')
  logo.className = 'site-logo'
  logo.href = '/'
  logo.textContent = 'git-test'

  const nav = document.createElement('nav')
  nav.className = 'site-nav'
  nav.setAttribute('aria-label', 'Main')

  for (const item of NAV_ITEMS) {
    const link = document.createElement('a')
    link.href = item.href
    link.textContent = item.label
    if (item.id === activePage) {
      link.setAttribute('aria-current', 'page')
    }
    nav.appendChild(link)
  }

  inner.append(logo, nav)
  header.appendChild(inner)
  return header
}
