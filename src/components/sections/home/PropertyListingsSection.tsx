import { Link } from 'react-router-dom'
import type { DesignVariantId } from '@/data/navigation'
import { LISTINGS } from '@/data/content'
import { getVariant } from '@/lib/design-variants'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

type PropertyListingsSectionProps = {
  variant: DesignVariantId
}

export function PropertyListingsSection({ variant }: PropertyListingsSectionProps) {
  const styles = getVariant(variant)

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20" aria-labelledby="listings-heading">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 id="listings-heading" className={cn('text-2xl font-semibold md:text-3xl', styles.heading)}>
            Property Listings
          </h2>
          <Link to="/properties" className="text-xs font-semibold uppercase tracking-wide text-brand hover:text-brand-dark">
            View All
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LISTINGS.map((listing) => (
            <article key={listing.id} className={cn('flex flex-col', styles.card)}>
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img src={listing.image} alt={listing.name} className="size-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-5">
                <h3 className="font-semibold text-slate-900">{listing.name}</h3>
                <p className="text-xs text-slate-500">{listing.address}</p>
                <p className="mt-1 flex-1 text-sm text-slate-600">{listing.meta}</p>
                <Link
                  to="/properties"
                  className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand hover:text-brand-dark"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
