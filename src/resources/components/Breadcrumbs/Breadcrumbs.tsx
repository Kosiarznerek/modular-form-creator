import type { BreadcrumbsProps } from './BreadcrumbsProps.types'
import { CrumbLink, CurrentItem, Item, Separator, Trail } from './Breadcrumbs.styles'

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Trail aria-label="Breadcrumb">
      {items.map((item, index) => (
        <Item key={`${item.label}-${index}`}>
          {index > 0 && <Separator>/</Separator>}
          {item.to ? (
            <CrumbLink to={item.to}>{item.label}</CrumbLink>
          ) : (
            <CurrentItem>{item.label}</CurrentItem>
          )}
        </Item>
      ))}
    </Trail>
  )
}
