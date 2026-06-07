import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '@/data/company'
import { Button } from '@/components/ui/button'

export default function TrianglePropertiesPage() {
  useEffect(() => {
    document.title = 'Triangle Properties — Island Commercial Realty'
  }, [])

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <section>
        <h2 className="mb-5 text-2xl font-semibold text-slate-900">{COMPANY.sisterCompany.name}</h2>
        <p className="mb-4 text-slate-600">{COMPANY.sisterCompany.description}</p>
        <ul className="mb-8 space-y-2 text-sm text-slate-600">
          <li>· Tenant relations &amp; lease administration</li>
          <li>· Maintenance coordination &amp; vendor management</li>
          <li>· Financial reporting &amp; budget oversight</li>
          <li>· Asset performance optimization</li>
        </ul>
        <Button variant="brand" asChild>
          <Link to="/contact">Contact Triangle Properties</Link>
        </Button>
      </section>
      <figure className="aspect-[4/3] overflow-hidden bg-slate-200">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop"
          alt="Managed commercial property"
          className="size-full object-cover"
        />
      </figure>
    </div>
  )
}
