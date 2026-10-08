import type { DetailsSectionProps } from './DetailsSection.types'
import { EditLink, Fields, Header, Section, Title } from './DetailsSection.styles'

export function DetailsSection({ title, href, children }: DetailsSectionProps) {
  return (
    <Section>
      <Header>
        <Title>{title}</Title>
        <EditLink to={href}>Edit</EditLink>
      </Header>
      <Fields>{children}</Fields>
    </Section>
  )
}
