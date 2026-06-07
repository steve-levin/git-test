import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { NAV_ITEMS, isNavItemActive } from '@/data/navigation'
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
    <>
      <button
        type="button"
        className={cn(
          'fixed inset-0 z-40 bg-black/30 transition-opacity lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        className={cn(
          'fixed right-0 top-[calc(2.25rem+4rem)] z-50 h-[calc(100%-2.25rem-4rem)] w-[min(20rem,85vw)] overflow-y-auto border-l border-slate-200 bg-white shadow-xl transition-transform duration-200 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <Logo size="sm" />
          <button type="button" className="text-slate-700" aria-label="Close menu" onClick={onClose}>
            <X className="size-5" />
          </button>
        </div>
        <ul className="divide-y divide-slate-100 p-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                className={cn(
                  'block px-3 py-3 text-xs font-semibold uppercase tracking-wide transition-colors',
                  isNavItemActive(item, activePage) ? 'text-brand' : 'text-slate-700 hover:text-brand'
                )}
                onClick={onClose}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="pb-2 pl-5">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        to={child.href}
                        className="block py-2 text-sm text-slate-500 transition-colors hover:text-brand"
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
      </div>
    </>
  )
}
