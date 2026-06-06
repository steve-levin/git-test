import { TEAM } from '@/data/content'

export function OurTeam() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="team-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="team-heading" className="mb-8 text-center text-2xl font-bold text-navy md:text-3xl">
          Our Team
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {TEAM.map((member) => (
            <article key={member.name} className="text-center">
              <div className="mb-3 aspect-square overflow-hidden bg-muted">
                <img src={member.image} alt={member.name} className="size-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-sm font-bold text-navy">{member.name}</h3>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
