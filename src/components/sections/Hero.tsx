import heroImage from '@/assets/hero.png'

export function Hero() {
  return (
    <section className="relative flex min-h-[min(50vh,32rem)] items-end overflow-hidden bg-navy text-white" aria-label="Hero">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Modern commercial building at dusk" className="size-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-10">
        <h1 className="max-w-xl text-3xl font-bold md:text-4xl lg:text-5xl">
          Commercial Real Estate Expertise You Can Trust
        </h1>
      </div>
    </section>
  )
}
