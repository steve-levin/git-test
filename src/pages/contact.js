import { renderLayout } from '../layout/layout.js'

renderLayout({
  activePage: 'contact',
  variant: 'interior',
  pageTitle: 'Contact',
  content: {
    title: 'Contact — United Realty',
    html: `
      <section>
        <p>Get in touch with our team. We will respond within one business day.</p>
        <form class="contact-form" id="contact-form" style="margin-top: 2rem;">
          <label>
            Name
            <input type="text" name="name" autocomplete="name" required>
          </label>
          <label>
            Email
            <input type="email" name="email" autocomplete="email" required>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button class="btn btn--primary" type="submit">Send Message</button>
        </form>
      </section>
    `,
    init(main) {
      main.querySelector('#contact-form').addEventListener('submit', (event) => {
        event.preventDefault()
        event.currentTarget.reset()
      })
    },
  },
})
