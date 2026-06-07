import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { SOLUTIONS } from '@/data/content'

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const solution = SOLUTIONS.find((item) => item.id === slug)

  useEffect(() => {
    if (solution) {
      document.title = `${solution.title} — Island Commercial Realty`
    }
  }, [solution])

  if (!solution) {
    return <Navigate to="/solutions" replace />
  }

  if (solution.external) {
    return <Navigate to="/triangle-properties" replace />
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <section>
        <h2 className="mb-5 text-2xl font-semibold text-slate-900">{solution.title}</h2>
        <p className="text-slate-600">{solution.description}</p>
      </section>
      <figure className="aspect-[4/3] overflow-hidden bg-slate-200">
        <img src={solution.image} alt={solution.title} className="size-full object-cover" />
      </figure>
    </div>
  )
}
