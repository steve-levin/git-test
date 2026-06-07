import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { COMPANY } from '@/data/company'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md'
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const markSize = size === 'sm' ? 'size-7 text-[10px]' : 'size-9 text-xs'

  return (
    <Link to="/" className={cn('flex items-center gap-2.5', className)} aria-label={`${COMPANY.name} home`}>
      <span className={cn('grid place-items-center bg-brand font-bold text-white', markSize)}>
        {COMPANY.shortName}
      </span>
      <span className={cn('font-semibold uppercase leading-tight tracking-wide text-slate-900', size === 'sm' ? 'text-[10px]' : 'text-xs')}>
        {COMPANY.name}
      </span>
    </Link>
  )
}
