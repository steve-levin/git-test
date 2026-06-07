import { useEffect } from 'react'
import { TEAM } from '@/data/content'

export default function TeamPage() {
  useEffect(() => {
    document.title = 'Team — Island Commercial Realty'
  }, [])

  return (
    <section>
      <p className="mb-10 max-w-2xl text-slate-600">
        Our team brings decades of combined experience in Long Island commercial and industrial real estate.
      </p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {TEAM.map((member) => (
          <article key={member.name} className="text-center">
            <div className="mb-3 aspect-square overflow-hidden bg-slate-200">
              <img src={member.image} alt={member.name} className="size-full object-cover" loading="lazy" />
            </div>
            <h2 className="text-sm font-semibold text-slate-900">{member.name}</h2>
            <p className="text-xs text-slate-500">{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
