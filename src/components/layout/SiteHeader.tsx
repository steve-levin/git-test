import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { TopBar } from '@/components/layout/TopBar'
import { MainNav } from '@/components/layout/MainNav'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { Container } from '@/components/layout/Container'

type SiteHeaderProps = {
  activePage: string
}

export function SiteHeader({ activePage }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopBar />
      <div className="border-b border-slate-200">
        <Container className="flex h-16 items-center justify-between gap-6">
          <Logo />
          <MainNav activePage={activePage} />
          <button
            type="button"
            className="ml-auto text-slate-800 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Menu className="size-6" />
          </button>
        </Container>
      </div>
      <MobileMenu open={mobileOpen} activePage={activePage} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
