import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY } from '@/data/company'
import { DESIGN_VARIANT_ROUTES } from '@/data/navigation'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/layout/Container'

export function SiteFooter() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <Logo size="sm" />
          <address className="not-italic text-sm leading-relaxed text-slate-600">
            {COMPANY.address.line1}
            <br />
            {COMPANY.address.line2}
          </address>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-600">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand"
          >
            LinkedIn
          </a>
          <Link to="/fair-housing" className="transition-colors hover:text-brand">
            Fair Housing Notice
          </Link>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 self-start border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition-colors hover:border-brand hover:text-brand"
        >
          <ArrowUp className="size-3.5" />
          Back to Top
        </button>
      </Container>

      <div className="border-t border-slate-200 bg-white">
        <Container className="flex flex-col gap-3 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {COMPANY.name}. Established {COMPANY.founded}.
          </span>
          <nav className="flex gap-4" aria-label="Design variants">
            {DESIGN_VARIANT_ROUTES.map((route) => (
              <Link key={route.id} to={route.href} className="transition-colors hover:text-brand">
                {route.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  )
}
