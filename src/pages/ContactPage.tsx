import { useEffect, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — United Realty'
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <section>
      <p className="mb-8 text-muted-foreground">
        Get in touch with our team. We will respond within one business day.
      </p>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            className="border border-border px-3 py-2.5 font-normal focus:outline-2 focus:outline-brand"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="border border-border px-3 py-2.5 font-normal focus:outline-2 focus:outline-brand"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
          Message
          <textarea
            name="message"
            rows={5}
            required
            className="border border-border px-3 py-2.5 font-normal focus:outline-2 focus:outline-brand"
          />
        </label>
        <Button variant="brand" type="submit" className="self-start">
          Send Message
        </Button>
      </form>
    </section>
  )
}
