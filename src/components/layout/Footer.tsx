import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1fr_2fr_auto] md:items-start">
        <Logo light />

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <div className="flex gap-3 text-sm">
            <Mail className="mt-0.5 size-4 shrink-0" />
            <a href="mailto:info@unitedrealty.com" className="hover:underline">
              info@unitedrealty.com
            </a>
          </div>
          <div className="flex gap-3 text-sm">
            <Phone className="mt-0.5 size-4 shrink-0" />
            <a href="tel:+12035551234" className="hover:underline">
              (203) 555-1234
            </a>
          </div>
          <div className="flex gap-3 text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>
              123 Main Street
              <br />
              Stamford, CT 06901
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href="#"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center border border-white/30 hover:bg-white/10"
          >
            in
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="grid size-9 place-items-center border border-white/30 hover:bg-white/10"
          >
            f
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} United Realty. All rights reserved.</span>
          <Link to="#" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
