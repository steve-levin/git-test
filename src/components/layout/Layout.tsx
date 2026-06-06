import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { cn } from '@/lib/utils'

type LayoutProps = {
  activePage: string
  variant?: 'home' | 'interior'
  pageTitle?: string
  showCta?: boolean
}

export function Layout({
  activePage,
  variant = 'home',
  pageTitle,
  showCta = true,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header activePage={activePage} />
      <main className={cn('flex-1', variant === 'interior' && 'page--interior')}>
        {variant === 'interior' && pageTitle && (
          <div className="bg-brand text-white">
            <div className="mx-auto max-w-6xl px-6 py-5">
              <h1 className="text-2xl font-semibold capitalize md:text-3xl">{pageTitle}</h1>
            </div>
          </div>
        )}
        {variant === 'interior' ? (
          <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
            <Outlet />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      {showCta && <CtaBanner />}
      <Footer />
    </div>
  )
}
