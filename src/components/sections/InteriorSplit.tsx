type InteriorSplitProps = {
  headline: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
}

export function InteriorSplit({ headline, paragraphs, imageSrc, imageAlt }: InteriorSplitProps) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-start">
      <section>
        <h2 className="mb-5 text-2xl font-bold text-navy">{headline}</h2>
        <div className="space-y-4 text-muted-foreground">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>
      <figure className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={imageSrc} alt={imageAlt} className="size-full object-cover" />
      </figure>
    </div>
  )
}
