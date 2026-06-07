import { Link } from 'react-router-dom'
import type { DesignVariantId } from '@/data/navigation'
import { SOLUTIONS } from '@/data/content'
import { getVariant } from '@/lib/design-variants'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

type ServicesHighlightSectionProps = {
  variant: DesignVariantId
}

const HIGHLIGHTS = SOLUTIONS.slice(0, 3)

export function ServicesHighlightSection({ variant }: ServicesHighlightSectionProps) {
  const styles = getVariant(variant)

  return (
    <section className={cn('py-16 md:py-20', styles.section)} aria-labelledby="services-heading">
      <Container>
        <h2 id="services-heading" className={cn('mb-10 text-center text-2xl font-semibold md:text-3xl', styles.heading)}>
          Our Solutions
        </h2>
        <div className="grid gap-0 md:grid-cols-3">
          {HIGHLIGHTS.map((solution, index) => (
            <Link
              key={solution.id}
              to={`/solutions/${solution.id}`}
              className={cn(
                'group border border-slate-200 p-8 transition-colors hover:bg-slate-50',
                index > 0 && 'md:border-l-0'
              )}
            >
              <span className="text-3xl font-light text-brand/30 transition-colors group-hover:text-brand">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{solution.summary}</p>
              <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wide text-brand">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
