import { renderLayout } from '../components/layout.js'

renderLayout({
  activePage: 'contact',
  content: {
    title: 'Contact — git-test',
    html: `
      <section class="section">
        <h1>Contact</h1>
        <p class="lead">Send a message — this form is a placeholder for now.</p>
        <form class="contact-form" id="contact-form">
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
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button class="cta" type="submit">Send message</button>
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
