import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LISTINGS } from '@/data/content'
import { Button } from '@/components/ui/button'

export default function PropertiesPage() {
  useEffect(() => {
    document.title = 'Properties — Island Commercial Realty'
  }, [])

  return (
    <section>
      <p className="mb-10 max-w-2xl text-slate-600">
        Active commercial and industrial listings across Long Island. Contact our team for detailed offering memoranda and tour scheduling.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LISTINGS.map((listing) => (
          <article key={listing.id} className="flex flex-col border border-slate-200 bg-white">
            <div className="aspect-[4/3] overflow-hidden bg-slate-200">
              <img src={listing.image} alt={listing.name} className="size-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h2 className="font-semibold text-slate-900">{listing.name}</h2>
              <p className="text-xs text-slate-500">{listing.address}</p>
              <p className="flex-1 text-sm text-slate-600">{listing.meta}</p>
              <Button variant="brand" asChild className="self-start">
                <Link to="/contact">Inquire</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
