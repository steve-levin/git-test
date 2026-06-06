import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { DesktopNav, HeaderActions } from '@/components/layout/DesktopNav'
import { MobileMenu } from '@/components/layout/MobileMenu'

type HeaderProps = {
  activePage: string
}

export function Header({ activePage }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-border bg-white">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center gap-6 px-6">
          <Logo />
          <div className="flex-1">
            <DesktopNav activePage={activePage} />
          </div>
          <HeaderActions />
          <button
            type="button"
            className="ml-auto text-navy lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>
      <MobileMenu open={mobileOpen} activePage={activePage} onClose={() => setMobileOpen(false)} />
    </>
  )
}
