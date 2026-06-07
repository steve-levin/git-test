import type { DesignVariantId } from '@/data/navigation'
import { CLIENT_LOGOS } from '@/data/content'
import { getVariant } from '@/lib/design-variants'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

type ClientLogoSliderProps = {
  variant: DesignVariantId
}

export function ClientLogoSlider({ variant }: ClientLogoSliderProps) {
  const styles = getVariant(variant)

  return (
    <section className="overflow-hidden border-t border-slate-200 bg-slate-50 py-12" aria-labelledby="clients-heading">
      <Container>
        <h2 id="clients-heading" className={cn('mb-8 text-center text-xl font-semibold md:text-2xl', styles.heading)}>
          Trusted By
        </h2>
      </Container>
      <div className="flex gap-12 overflow-x-auto pb-2">
          {CLIENT_LOGOS.map((logo) => (
            <span
              key={logo}
              className="inline-flex shrink-0 items-center text-sm font-semibold uppercase tracking-wider text-slate-400"
            >
              {logo}
            </span>
          ))}
        </div>
    </section>
  )
}
