import type { DesignVariantId } from '@/data/navigation'

export type DesignVariant = {
  id: DesignVariantId
  label: string
  hero: string
  heroOverlay: string
  section: string
  heading: string
  card: string
  accent: string
  navActive: string
}

export const DESIGN_VARIANTS: Record<DesignVariantId, DesignVariant> = {
  modern: {
    id: 'modern',
    label: 'Modern',
    hero: 'bg-slate-900 text-white',
    heroOverlay: 'bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent',
    section: 'bg-white',
    heading: 'text-slate-900 uppercase tracking-wide',
    card: 'border border-slate-200 bg-white',
    accent: 'text-brand',
    navActive: 'text-brand bg-brand/5',
  },
  conservative: {
    id: 'conservative',
    label: 'Conservative',
    hero: 'bg-slate-800 text-white',
    heroOverlay: 'bg-gradient-to-t from-slate-900/80 to-slate-800/30',
    section: 'bg-slate-50',
    heading: 'text-slate-800 uppercase tracking-widest',
    card: 'border border-slate-300 bg-white shadow-sm',
    accent: 'text-slate-800',
    navActive: 'text-slate-900 bg-slate-100',
  },
  bold: {
    id: 'bold',
    label: 'Bold',
    hero: 'bg-brand text-white',
    heroOverlay: 'bg-gradient-to-r from-brand/90 via-brand/40 to-transparent',
    section: 'bg-white',
    heading: 'text-brand uppercase tracking-wide',
    card: 'border-2 border-brand/20 bg-white',
    accent: 'text-brand',
    navActive: 'text-white bg-brand',
  },
}

export function getVariant(id: DesignVariantId) {
  return DESIGN_VARIANTS[id]
}
