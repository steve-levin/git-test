import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SOLUTIONS } from '@/data/content'
import { Button } from '@/components/ui/button'

export default function SolutionsPage() {
  useEffect(() => {
    document.title = 'Solutions — Island Commercial Realty'
  }, [])

  return (
    <section>
      <p className="mb-10 max-w-2xl text-slate-600">
        Full-service commercial real estate solutions for business owners, brokers, and institutional clients since 1972.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {SOLUTIONS.map((solution) => (
          <article key={solution.id} className="flex flex-col border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">{solution.title}</h2>
            <p className="mt-2 flex-1 text-sm text-slate-600">{solution.summary}</p>
            <Button variant="brand" asChild className="mt-6 self-start">
              <Link to={solution.external ? '/triangle-properties' : `/solutions/${solution.id}`}>
                Learn More
              </Link>
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
