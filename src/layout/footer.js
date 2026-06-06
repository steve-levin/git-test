import { createLogo } from '../components/logo.js'
import { iconEmail, iconPhone, iconLocation, iconLinkedIn } from '../components/icons.js'

export function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'site-footer'

  const main = document.createElement('div')
  main.className = 'site-footer__main'

  main.appendChild(createLogo({ variant: 'footer' }))

  const contact = document.createElement('div')
  contact.className = 'site-footer__contact'
  contact.innerHTML = `
    <div class="site-footer__contact-item">
      ${iconEmail()}
      <a href="mailto:info@unitedrealty.com">info@unitedrealty.com</a>
    </div>
    <div class="site-footer__contact-item">
      ${iconPhone()}
      <a href="tel:+12035551234">(203) 555-1234</a>
    </div>
    <div class="site-footer__contact-item">
      ${iconLocation()}
      <span>123 Main Street<br>Stamford, CT 06901</span>
    </div>
  `

  const social = document.createElement('div')
  social.className = 'site-footer__social'
  social.innerHTML = `
    <a href="#" aria-label="LinkedIn">${iconLinkedIn()}</a>
    <a href="#" aria-label="Facebook">f</a>
  `

  main.append(contact, social)

  const bar = document.createElement('div')
  bar.className = 'site-footer__bar'
  bar.innerHTML = `
    <div class="site-footer__bar-inner">
      <span>© ${new Date().getFullYear()} United Realty. All rights reserved.</span>
      <a href="#">Privacy Policy</a>
    </div>
  `

  footer.append(main, bar)
  return footer
}
