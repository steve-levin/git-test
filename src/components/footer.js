export function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'site-footer'

  const inner = document.createElement('div')
  inner.className = 'site-footer__inner'
  inner.textContent = `© ${new Date().getFullYear()} git-test`

  footer.appendChild(inner)
  return footer
}
