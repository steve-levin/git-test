export function createLogo({ className = 'site-logo', variant = 'default' } = {}) {
  const link = document.createElement('a')
  link.className = className
  link.href = '/'
  link.setAttribute('aria-label', 'United Realty home')

  const mark = document.createElement('span')
  mark.className = 'site-logo__mark'
  mark.textContent = 'UR'

  const text = document.createElement('span')
  text.className = 'site-logo__text'
  text.innerHTML = 'UNITED<br>REALTY'

  if (variant === 'footer') {
    link.classList.add('site-footer__logo')
  }

  link.append(mark, text)
  return link
}
