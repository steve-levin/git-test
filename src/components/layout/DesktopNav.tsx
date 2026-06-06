import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Search } from 'lucide-react'
import { NAV_ITEMS, HEADER_ACTIONS, isNavItemActive } from '@/data/navigation'
import { cn } from '@/lib/utils'

type DesktopNavProps = {
  activePage: string
}

export function DesktopNav({ activePage }: DesktopNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav ref={navRef} className="hidden lg:block" aria-label="Main">
      <ul className="flex items-center justify-center gap-1">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="relative">
            {item.children ? (
              <>
                <button
                  type="button"
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy hover:text-brand',
                    isNavItemActive(item, activePage) && 'text-brand'
                  )}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.id}
                  onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                >
                  {item.label}
                  <ChevronDown className={cn('size-3.5 transition-transform', openDropdown === item.id && 'rotate-180')} />
                </button>
                {openDropdown === item.id && (
                  <ul className="absolute left-0 top-full z-50 mt-1 min-w-56 bg-navy py-2 shadow-lg" role="menu">
                    {item.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          to={child.href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm text-white hover:bg-white/10"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  'block px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy hover:text-brand',
                  item.id === activePage && 'text-brand'
                )}
                aria-current={item.id === activePage ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function HeaderActions({ className }: { className?: string }) {
  return (
    <div className={cn('hidden items-center gap-4 lg:flex', className)}>
      <Link
        to={HEADER_ACTIONS.search.href}
        className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy hover:text-brand"
      >
        <Search className="size-4" />
        {HEADER_ACTIONS.search.label}
      </Link>
      <Link
        to={HEADER_ACTIONS.login.href}
        className="border-2 border-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand hover:bg-brand hover:text-white"
      >
        {HEADER_ACTIONS.login.label}
      </Link>
    </div>
  )
}
