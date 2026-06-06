import { NAV_ITEMS, HEADER_ACTIONS, isNavItemActive } from './navigation.js'
import { createLogo } from './logo.js'
import { iconMenu, iconClose, iconSearch } from './icons.js'

export function createMobileMenu(activePage) {
  const menu = document.createElement('div')
  menu.className = 'mobile-menu'
  menu.id = 'mobile-menu'
  menu.setAttribute('aria-hidden', 'true')

  menu.innerHTML = `
    <div class="mobile-menu__backdrop" data-close></div>
    <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div class="mobile-menu__header"></div>
      <ul class="mobile-menu__nav"></ul>
      <div class="mobile-menu__actions"></div>
    </div>
  `

  const header = menu.querySelector('.mobile-menu__header')
  header.appendChild(createLogo())

  const closeButton = document.createElement('button')
  closeButton.type = 'button'
  closeButton.className = 'mobile-menu__close'
  closeButton.setAttribute('aria-label', 'Close menu')
  closeButton.innerHTML = iconClose()
  header.appendChild(closeButton)

  const navList = menu.querySelector('.mobile-menu__nav')

  for (const item of NAV_ITEMS) {
    const li = document.createElement('li')

    const link = document.createElement('a')
    link.href = item.href
    link.className = 'mobile-menu__link'
    link.textContent = item.label
    if (isNavItemActive(item, activePage)) {
      link.setAttribute('aria-current', 'page')
    }
    li.appendChild(link)

    if (item.children) {
      const subnav = document.createElement('ul')
      subnav.className = 'mobile-menu__subnav'
      for (const child of item.children) {
        const subItem = document.createElement('li')
        const subLink = document.createElement('a')
        subLink.href = child.href
        subLink.textContent = child.label
        subItem.appendChild(subLink)
        subnav.appendChild(subItem)
      }
      li.appendChild(subnav)
    }

    navList.appendChild(li)
  }

  const actions = menu.querySelector('.mobile-menu__actions')
  actions.innerHTML = `
    <a class="site-header__search" href="${HEADER_ACTIONS.search.href}">
      ${iconSearch()}
      ${HEADER_ACTIONS.search.label}
    </a>
    <a class="site-header__login" href="${HEADER_ACTIONS.login.href}">${HEADER_ACTIONS.login.label}</a>
  `

  const open = () => {
    menu.classList.add('mobile-menu--open')
    menu.setAttribute('aria-hidden', 'false')
    document.body.classList.add('mobile-menu-open')
    closeButton.focus()
  }

  const toggleButton = document.createElement('button')
  toggleButton.type = 'button'
  toggleButton.className = 'site-header__toggle'
  toggleButton.setAttribute('aria-label', 'Open menu')
  toggleButton.setAttribute('aria-expanded', 'false')
  toggleButton.setAttribute('aria-controls', 'mobile-menu')
  toggleButton.innerHTML = iconMenu()

  const close = () => {
    menu.classList.remove('mobile-menu--open')
    menu.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('mobile-menu-open')
    toggleButton.setAttribute('aria-expanded', 'false')
    toggleButton.setAttribute('aria-label', 'Open menu')
  }

  closeButton.addEventListener('click', close)
  menu.querySelector('[data-close]').addEventListener('click', close)

  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      close()
      toggleButton.focus()
    }
  })

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close)
  })

  toggleButton.addEventListener('click', () => {
    const isOpen = menu.classList.contains('mobile-menu--open')
    if (isOpen) {
      close()
    } else {
      open()
      toggleButton.setAttribute('aria-expanded', 'true')
      toggleButton.setAttribute('aria-label', 'Close menu')
    }
  })

  return { menu, toggleButton, close }
}
