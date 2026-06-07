import { useParams } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { SOLUTIONS } from '@/data/content'

export function SolutionDetailShell() {
  const { slug } = useParams<{ slug: string }>()
  const solution = SOLUTIONS.find((item) => item.id === slug)

  return (
    <AppShell
      activePage={slug ?? 'solutions'}
      variant="interior"
      pageTitle={solution?.title ?? 'Solutions'}
    />
  )
}
