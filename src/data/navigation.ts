export type NavItem = {
  id: string
  label: string
  href: string
  children?: { label: string; href: string; id: string }[]
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'properties', label: 'Properties', href: '/properties' },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '/solutions',
    children: [
      { id: 'brokerage', label: 'Commercial Real Estate Brokerage', href: '/solutions/brokerage' },
      { id: 'industrial', label: 'Industrial Real Estate', href: '/solutions/industrial' },
      { id: 'consulting', label: 'Real Estate Consulting', href: '/solutions/consulting' },
      {
        id: 'property-management',
        label: 'Property Management',
        href: '/solutions/property-management',
      },
    ],
  },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'team', label: 'Team', href: '/team' },
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'triangle-properties', label: 'Triangle Properties', href: '/triangle-properties' },
]

export const DESIGN_VARIANT_ROUTES = [
  { id: 'modern', label: 'Modern', href: '/modern' },
  { id: 'conservative', label: 'Conservative', href: '/conservative' },
  { id: 'bold', label: 'Bold', href: '/bold' },
] as const

export type DesignVariantId = (typeof DESIGN_VARIANT_ROUTES)[number]['id']

export function isNavItemActive(item: NavItem, activePage: string) {
  if (item.id === activePage) return true
  return item.children?.some((child) => child.id === activePage) ?? false
}
