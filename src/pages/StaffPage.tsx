import { useEffect } from 'react'
import { TEAM } from '@/data/content'

export default function StaffPage() {
  useEffect(() => {
    document.title = 'Staff — United Realty'
  }, [])

  return (
    <section>
      <p className="mb-8 text-muted-foreground">Meet the professionals behind United Realty.</p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
        {TEAM.map((member) => (
          <article key={member.name} className="text-center">
            <div className="mb-3 aspect-square overflow-hidden bg-muted">
              <img src={member.image} alt={member.name} className="size-full object-cover" loading="lazy" />
            </div>
            <h2 className="text-sm font-bold text-navy">{member.name}</h2>
            <p className="text-xs text-muted-foreground">{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
