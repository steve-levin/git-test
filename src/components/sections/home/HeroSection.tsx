import { Link } from 'react-router-dom'
import type { DesignVariantId } from '@/data/navigation'
import { getVariant } from '@/lib/design-variants'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'
import heroImage from '@/assets/hero.png'

type HeroSectionProps = {
  variant: DesignVariantId
}

export function HeroSection({ variant }: HeroSectionProps) {
  const styles = getVariant(variant)

  return (
    <section className={cn('relative min-h-[min(70vh,40rem)] overflow-hidden', styles.hero)} aria-label="Hero">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroImage}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-modern-office-building-at-night-9761/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className={cn('absolute inset-0', styles.heroOverlay)} aria-hidden="true" />
      <Container className="relative flex min-h-[min(70vh,40rem)] flex-col justify-end pb-16 pt-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          Long Island · Est. 1972
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          Commercial &amp; Industrial Real Estate Expertise
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
          Brokerage, consulting, and property management for business owners and investors across Nassau and Suffolk counties.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/properties"
            className="bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            View Properties
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-slate-900"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  )
}
