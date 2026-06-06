import { NAV_ITEMS, isNavItemActive } from './navigation.js'
import { initDropdown } from './dropdown.js'
import { iconChevron } from './icons.js'

export function createDesktopNav(activePage) {
  const nav = document.createElement('nav')
  nav.className = 'site-header__nav'
  nav.setAttribute('aria-label', 'Main')

  const list = document.createElement('ul')
  list.className = 'site-nav'

  for (const item of NAV_ITEMS) {
    const li = document.createElement('li')
    li.className = 'site-nav__item'

    if (item.children) {
      li.classList.add('site-nav__item--has-dropdown')

      const trigger = document.createElement('button')
      trigger.type = 'button'
      trigger.className = 'site-nav__link site-nav__link--trigger'
      trigger.textContent = item.label
      trigger.setAttribute('aria-haspopup', 'true')
      trigger.setAttribute('aria-expanded', 'false')

      if (isNavItemActive(item, activePage)) {
        trigger.setAttribute('aria-current', 'page')
      }

      trigger.insertAdjacentHTML('beforeend', iconChevron())

      const menu = document.createElement('ul')
      menu.className = 'site-nav__dropdown'
      menu.setAttribute('role', 'menu')

      for (const child of item.children) {
        const menuItem = document.createElement('li')
        menuItem.setAttribute('role', 'none')
        const link = document.createElement('a')
        link.href = child.href
        link.textContent = child.label
        link.setAttribute('role', 'menuitem')
        menuItem.appendChild(link)
        menu.appendChild(menuItem)
      }

      initDropdown(li, trigger, menu)
      li.append(trigger, menu)
    } else {
      const link = document.createElement('a')
      link.href = item.href
      link.className = 'site-nav__link'
      link.textContent = item.label
      if (item.id === activePage) {
        link.setAttribute('aria-current', 'page')
      }
      li.appendChild(link)
    }

    list.appendChild(li)
  }

  nav.appendChild(list)
  return nav
}
