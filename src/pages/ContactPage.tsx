import { useEffect, type FormEvent } from 'react'
import { COMPANY } from '@/data/company'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — Island Commercial Realty'
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <section>
        <p className="mb-6 text-slate-600">
          Reach our brokerage and consulting team. We respond within one business day.
        </p>
        <dl className="space-y-4 text-sm text-slate-600">
          <div>
            <dt className="font-semibold text-slate-900">Phone</dt>
            <dd>
              <a href={COMPANY.phoneHref} className="hover:text-brand">
                {COMPANY.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Email</dt>
            <dd>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-brand">
                {COMPANY.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Office</dt>
            <dd>
              {COMPANY.address.line1}
              <br />
              {COMPANY.address.line2}
            </dd>
          </div>
        </dl>
      </section>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-900">
          Name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="border border-slate-300 px-3 py-2.5 font-normal focus:outline-2 focus:outline-brand"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-900">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="border border-slate-300 px-3 py-2.5 font-normal focus:outline-2 focus:outline-brand"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-900">
          Message
          <textarea
            name="message"
            rows={5}
            required
            className="border border-slate-300 px-3 py-2.5 font-normal focus:outline-2 focus:outline-brand"
          />
        </label>
        <Button variant="brand" type="submit" className="self-start">
          Send Message
        </Button>
      </form>
    </div>
  )
}
