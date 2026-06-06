import { WHAT_WE_DO } from '@/data/content'

export function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-navy py-12 text-white md:py-16" aria-labelledby="services-heading">
      <div
        className="absolute inset-0 opacity-15"
        aria-hidden="true"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 id="services-heading" className="mb-8 text-center text-2xl font-bold md:text-3xl">
          What We Do
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {WHAT_WE_DO.map((item) => (
            <article key={item.title} className="px-4 py-6 text-center">
              <div
                className="mx-auto mb-4 grid size-12 place-items-center rounded-full border-2 border-brand text-lg text-brand"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="mb-2 font-bold">{item.title}</h3>
              <p className="text-sm text-white/75">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
