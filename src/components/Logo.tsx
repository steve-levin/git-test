import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  light?: boolean
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Link to="/" className={cn('flex items-center gap-2', className)} aria-label="United Realty home">
      <span className="grid size-9 place-items-center bg-brand text-xs font-extrabold text-white">UR</span>
      <span className={cn('text-xs font-bold leading-tight tracking-wider', light ? 'text-white' : 'text-navy')}>
        UNITED
        <br />
        REALTY
      </span>
    </Link>
  )
}
