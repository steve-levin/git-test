import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Search } from 'lucide-react'
import { NAV_ITEMS, HEADER_ACTIONS, isNavItemActive } from '@/data/navigation'
import { Logo } from '@/components/Logo'
import { cn } from '@/lib/utils'

type MobileMenuProps = {
  open: boolean
  activePage: string
  onClose: () => void
}

export function MobileMenu({ open, activePage, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  return (
    <div
      className={cn('fixed inset-0 z-[200] lg:hidden', open ? 'visible' : 'invisible')}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={cn('absolute inset-0 bg-black/40 transition-opacity', open ? 'opacity-100' : 'opacity-0')}
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        className={cn(
          'absolute right-0 top-0 h-full w-[min(20rem,85vw)] overflow-y-auto bg-navy p-6 transition-transform',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo light />
          <button type="button" className="text-white" aria-label="Close menu" onClick={onClose}>
            <X className="size-6" />
          </button>
        </div>

        <ul className="divide-y divide-white/10">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                className={cn(
                  'block py-3.5 text-sm font-semibold uppercase tracking-wide text-white',
                  isNavItemActive(item, activePage) && 'text-brand'
                )}
                aria-current={isNavItemActive(item, activePage) ? 'page' : undefined}
                onClick={onClose}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="pb-3 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        to={child.href}
                        className="block py-2 text-sm text-white/75 hover:text-white"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            to={HEADER_ACTIONS.search.href}
            className="flex items-center justify-center gap-2 py-2 text-sm font-semibold uppercase text-white"
            onClick={onClose}
          >
            <Search className="size-4" />
            {HEADER_ACTIONS.search.label}
          </Link>
          <Link
            to={HEADER_ACTIONS.login.href}
            className="border-2 border-white py-2 text-center text-xs font-bold uppercase tracking-wider text-white"
            onClick={onClose}
          >
            {HEADER_ACTIONS.login.label}
          </Link>
        </div>
      </div>
    </div>
  )
}
