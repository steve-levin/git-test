import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/data/content'

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services — United Realty'
  }, [])

  return (
    <section>
      <p className="mb-8 text-lg text-muted-foreground">
        United Realty offers a full suite of commercial real estate services tailored to owners, investors, and tenants.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((service) => (
          <article key={service.slug} className="flex flex-col border border-border bg-white p-5">
            <h2 className="mb-2 font-bold text-navy">{service.title}</h2>
            <p className="mb-4 flex-1 text-sm text-muted-foreground">{service.summary}</p>
            <Button variant="brand" asChild>
              <Link to={`/services/${service.slug}`}>Learn More</Link>
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
