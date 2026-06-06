export function initDropdown(itemElement, trigger, menu) {
  const open = () => {
    itemElement.classList.add('site-nav__item--open')
    trigger.setAttribute('aria-expanded', 'true')
  }

  const close = () => {
    itemElement.classList.remove('site-nav__item--open')
    trigger.setAttribute('aria-expanded', 'false')
  }

  const toggle = () => {
    if (itemElement.classList.contains('site-nav__item--open')) {
      close()
    } else {
      open()
    }
  }

  trigger.addEventListener('click', (event) => {
    event.preventDefault()
    toggle()
  })

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
    if (event.key === 'Escape') {
      close()
      trigger.focus()
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      open()
      menu.querySelector('a')?.focus()
    }
  })

  menu.addEventListener('keydown', (event) => {
    const links = [...menu.querySelectorAll('a')]
    const index = links.indexOf(document.activeElement)

    if (event.key === 'Escape') {
      close()
      trigger.focus()
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      links[Math.min(index + 1, links.length - 1)]?.focus()
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (index <= 0) {
        trigger.focus()
      } else {
        links[index - 1]?.focus()
      }
    }
  })

  document.addEventListener('click', (event) => {
    if (!itemElement.contains(event.target)) {
      close()
    }
  })

  return { open, close }
}
