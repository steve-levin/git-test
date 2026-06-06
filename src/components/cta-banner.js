export function createCtaBanner({
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact us to learn more about our services.',
  buttonLabel = 'Learn More',
  buttonHref = '/contact/',
} = {}) {
  const section = document.createElement('section')
  section.className = 'cta-banner'
  section.setAttribute('aria-label', 'Call to action')

  section.innerHTML = `
    <div class="cta-banner__inner">
      <p class="cta-banner__text">${text}</p>
      <a class="btn btn--outline" href="${buttonHref}">${buttonLabel}</a>
    </div>
  `

  return section
}
