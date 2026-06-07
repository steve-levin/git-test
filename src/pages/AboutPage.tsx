import { useEffect } from 'react'
import { COMPANY } from '@/data/company'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About — Island Commercial Realty'
  }, [])

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <section>
        <h2 className="mb-5 text-2xl font-semibold text-slate-900">
          Established Expertise. Modern Approach.
        </h2>
        <div className="space-y-4 text-slate-600">
          <p>
            Founded in {COMPANY.founded}, {COMPANY.name} has served Long Island&apos;s commercial and industrial
            markets with a disciplined, relationship-driven approach. We represent business owners, investors, and
            fellow brokers in transactions that demand precision and local knowledge.
          </p>
          <p>
            Our practice spans brokerage, consulting, and industrial specialization — with property management
            delivered through our sister company, {COMPANY.sisterCompany.name}.
          </p>
          <p>
            We are SIOR-affiliated professionals committed to high-trust advisory, transparent communication, and
            outcomes that protect long-term value.
          </p>
        </div>
      </section>
      <figure className="aspect-[4/3] overflow-hidden bg-slate-200">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&h=600&fit=crop"
          alt="Commercial office building"
          className="size-full object-cover"
        />
      </figure>
    </div>
  )
}
