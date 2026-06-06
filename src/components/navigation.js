export const NAV_ITEMS = [
  { id: 'properties', label: 'Properties', href: '/properties/' },
  {
    id: 'services',
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Brokerage', href: '/services/brokerage/' },
      { label: 'Real Estate Consulting', href: '/services/consulting/' },
      { label: 'Property Management', href: '/services/property-management/' },
    ],
  },
  { id: 'about', label: 'About', href: '/about/' },
  { id: 'news', label: 'News', href: '/news/' },
  { id: 'staff', label: 'Staff', href: '/staff/' },
  { id: 'contact', label: 'Contact', href: '/contact/' },
]

export const HEADER_ACTIONS = {
  search: { label: 'Property Search', href: '/properties/' },
  login: { label: 'Client Login', href: '/contact/' },
}

export function isNavItemActive(item, activePage) {
  if (item.id === activePage) return true
  return item.children?.some((child) => {
    const slug = child.href.split('/').filter(Boolean).pop()
    return slug === activePage
  }) ?? false
}
