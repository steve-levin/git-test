import { Outlet } from 'react-router-dom'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { cn } from '@/lib/utils'

type AppShellProps = {
  activePage: string
  variant?: 'home' | 'interior'
  pageTitle?: string
}

export function AppShell({ activePage, variant = 'home', pageTitle }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader activePage={activePage} />
      <main className="flex-1">
        {variant === 'interior' && pageTitle && (
          <div className="border-b border-slate-200 bg-slate-100">
            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
              <h1 className="text-2xl font-semibold uppercase tracking-wide text-slate-900 md:text-3xl">
                {pageTitle}
              </h1>
            </div>
          </div>
        )}
        <div className={cn(variant === 'interior' && 'mx-auto max-w-7xl px-6 py-12 lg:px-8')}>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
