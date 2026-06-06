import { useEffect } from 'react'
import { NEWS } from '@/data/content'

export default function NewsPage() {
  useEffect(() => {
    document.title = 'News — United Realty'
  }, [])

  return (
    <section>
      <p className="mb-8 text-muted-foreground">Latest updates from United Realty.</p>
      <ul className="divide-y divide-border">
        {NEWS.map((article) => (
          <li key={article.title} className="py-5">
            <h2 className="mb-1 text-lg font-semibold text-navy">{article.title}</h2>
            <time className="text-sm text-muted-foreground">{article.date}</time>
          </li>
        ))}
      </ul>
    </section>
  )
}
