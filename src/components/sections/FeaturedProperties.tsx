import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type Property = {
  title: string
  meta: string
  image: string
}

type FeaturedPropertiesProps = {
  properties: Property[]
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="py-12 md:py-16" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="featured-heading" className="mb-8 text-center text-2xl font-bold text-navy md:text-3xl">
          Featured Properties
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <article key={property.title} className="flex flex-col border border-border bg-white">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={property.image} alt={property.title} className="size-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-bold text-navy">{property.title}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{property.meta}</p>
                <Button variant="brand" asChild>
                  <Link to="/properties">View Details</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
