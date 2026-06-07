import { Outlet } from 'react-router-dom'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'

type HomeShellProps = {
  activePage?: string
}

export function HomeShell({ activePage = 'home' }: HomeShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader activePage={activePage} />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
