import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type CtaBannerProps = {
  text?: string
  buttonLabel?: string
  buttonHref?: string
  className?: string
}

export function CtaBanner({
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact us to learn more about our services.',
  buttonLabel = 'Learn More',
  buttonHref = '/contact',
  className,
}: CtaBannerProps) {
  return (
    <section className={cn('bg-brand text-white', className)} aria-label="Call to action">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
        <p className="max-w-2xl text-sm md:text-base">{text}</p>
        <Button variant="brand-outline" size="lg" asChild>
          <Link to={buttonHref}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
