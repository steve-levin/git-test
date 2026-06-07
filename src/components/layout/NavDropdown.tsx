import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type NavDropdownProps = {
  label: string
  active?: boolean
  children: React.ReactNode
}

export function NavDropdown({ label, active, children }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors',
          active ? 'text-brand bg-brand/5' : 'text-slate-700 hover:bg-slate-50 hover:text-brand'
        )}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <ul
          className="absolute left-0 top-full z-50 mt-0 min-w-56 border border-slate-200 bg-white py-1 shadow-lg"
          role="menu"
        >
          {children}
        </ul>
      )}
    </li>
  )
}

import { Link } from 'react-router-dom'

type NavDropdownItemProps = {
  href: string
  children: React.ReactNode
  onNavigate?: () => void
}

export function NavDropdownItem({ href, children, onNavigate }: NavDropdownItemProps) {
  return (
    <li role="none">
      <Link
        to={href}
        role="menuitem"
        className="block px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand"
        onClick={onNavigate}
      >
        {children}
      </Link>
    </li>
  )
}
