import type { PageHeadingProps } from './PageHeading.types'
import { Action, Copy, Description, Eyebrow, Heading, Title } from './PageHeading.styles'

export function PageHeading({ eyebrow, title, description, action }: PageHeadingProps) {
  return (
    <Heading>
      <Copy>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Copy>
      {action && <Action>{action}</Action>}
    </Heading>
  )
}
