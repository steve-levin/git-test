import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY } from '@/data/company'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

export function TopBar() {
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState<(typeof COMPANY.languages)[number]>(COMPANY.languages[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Container className="flex h-9 items-center justify-between text-xs">
        <a
          href={COMPANY.phoneHref}
          className="flex items-center gap-1.5 font-medium text-slate-700 transition-colors hover:text-brand"
        >
          <Phone className="size-3.5 lg:hidden" aria-hidden="true" />
          <span className="hidden lg:inline">{COMPANY.phone}</span>
          <span className="sr-only lg:hidden">{COMPANY.phone}</span>
        </a>

        <div className="flex items-center gap-4">
          <div ref={ref} className="relative">
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-slate-600 transition-colors hover:text-brand"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((value) => !value)}
            >
              {selectedLang.label}
              <ChevronDown className={cn('size-3 transition-transform', langOpen && 'rotate-180')} />
            </button>
            {langOpen && (
              <ul
                className="absolute right-0 top-full z-50 mt-1 min-w-32 border border-slate-200 bg-white py-1 shadow-lg"
                role="listbox"
              >
                {COMPANY.languages.map((lang) => (
                  <li key={lang.code} role="option" aria-selected={selectedLang.code === lang.code}>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 hover:text-brand"
                      onClick={() => {
                        setSelectedLang(lang)
                        setLangOpen(false)
                      }}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/about"
            className="hidden font-bold uppercase tracking-wider text-slate-500 transition-colors hover:text-brand sm:inline"
            aria-label="SIOR member"
          >
            SIOR
          </Link>
        </div>
      </Container>
    </div>
  )
}
