import { createLogo } from '../components/logo.js'
import { createDesktopNav } from '../components/desktop-nav.js'
import { createMobileMenu } from '../components/mobile-menu.js'
import { HEADER_ACTIONS } from '../components/navigation.js'
import { iconSearch } from '../components/icons.js'

export function createHeader(activePage) {
  const header = document.createElement('header')
  header.className = 'site-header'

  const inner = document.createElement('div')
  inner.className = 'site-header__inner'

  inner.appendChild(createLogo())
  inner.appendChild(createDesktopNav(activePage))

  const actions = document.createElement('div')
  actions.className = 'site-header__actions'
  actions.innerHTML = `
    <a class="site-header__search" href="${HEADER_ACTIONS.search.href}">
      ${iconSearch()}
      ${HEADER_ACTIONS.search.label}
    </a>
    <a class="site-header__login" href="${HEADER_ACTIONS.login.href}">${HEADER_ACTIONS.login.label}</a>
  `
  inner.appendChild(actions)

  const { menu, toggleButton } = createMobileMenu(activePage)
  inner.appendChild(toggleButton)
  header.append(inner, menu)

  return header
}
