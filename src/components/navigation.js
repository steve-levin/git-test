export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about/' },
  { id: 'services', label: 'Services', href: '/services/' },
  { id: 'contact', label: 'Contact', href: '/contact/' },
]

export function createNavigation(activePage) {
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

  return nav
}
