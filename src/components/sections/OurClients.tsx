import { CLIENTS } from '@/data/content'

export function OurClients() {
  return (
    <section className="bg-slate-50 py-12 md:py-16" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="clients-heading" className="mb-8 text-center text-2xl font-bold text-navy md:text-3xl">
          Our Clients
        </h2>
        <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-5">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="flex h-12 items-center justify-center text-sm font-bold tracking-wide text-muted-foreground grayscale opacity-60"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
