import { Link } from 'react-router-dom'
import type { DesignVariantId } from '@/data/navigation'
import { FEATURED_LISTING } from '@/data/content'
import { getVariant } from '@/lib/design-variants'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

type FeaturedListingSectionProps = {
  variant: DesignVariantId
}

export function FeaturedListingSection({ variant }: FeaturedListingSectionProps) {
  const styles = getVariant(variant)

  return (
    <section className={cn('py-16 md:py-20', styles.section)} aria-labelledby="featured-listing-heading">
      <Container>
        <h2 id="featured-listing-heading" className={cn('mb-10 text-2xl font-semibold md:text-3xl', styles.heading)}>
          Featured Listing
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] overflow-hidden bg-slate-200">
            <img
              src={FEATURED_LISTING.image}
              alt={FEATURED_LISTING.name}
              className="size-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{FEATURED_LISTING.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{FEATURED_LISTING.address}</p>
            <ul className="mt-6 space-y-2">
              {FEATURED_LISTING.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-brand" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
            <Link
              to="/properties"
              className="mt-8 inline-block bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              View Details
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
