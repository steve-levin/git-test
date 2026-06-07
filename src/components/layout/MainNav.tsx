import { Link } from 'react-router-dom'
import { NAV_ITEMS, isNavItemActive } from '@/data/navigation'
import { NavDropdown, NavDropdownItem } from '@/components/layout/NavDropdown'
import { cn } from '@/lib/utils'

type MainNavProps = {
  activePage: string
}

export function MainNav({ activePage }: MainNavProps) {
  return (
    <nav className="hidden lg:block" aria-label="Main">
      <ul className="flex items-center gap-0.5">
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <NavDropdown key={item.id} label={item.label} active={isNavItemActive(item, activePage)}>
              {item.children.map((child) => (
                <NavDropdownItem key={child.id} href={child.href}>
                  {child.label}
                </NavDropdownItem>
              ))}
            </NavDropdown>
          ) : (
            <li key={item.id}>
              <Link
                to={item.href}
                className={cn(
                  'block px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors',
                  item.id === activePage
                    ? 'bg-brand/5 text-brand'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-brand'
                )}
                aria-current={item.id === activePage ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
