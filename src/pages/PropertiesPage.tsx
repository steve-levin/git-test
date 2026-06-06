import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ALL_PROPERTIES } from '@/data/content'

export default function PropertiesPage() {
  useEffect(() => {
    document.title = 'Properties — United Realty'
  }, [])

  return (
    <section>
      <p className="mb-8 text-muted-foreground">
        Browse our current listings and available commercial spaces across the Northeast.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {ALL_PROPERTIES.map((property) => (
          <article key={property.title} className="flex flex-col border border-border bg-white">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={property.image} alt={property.title} className="size-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h2 className="font-bold text-navy">{property.title}</h2>
              <p className="flex-1 text-sm text-muted-foreground">{property.meta}</p>
              <Button variant="brand" asChild>
                <Link to="/contact">View Details</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
