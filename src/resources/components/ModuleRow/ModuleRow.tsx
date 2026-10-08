import type { ModuleRowProps } from './ModuleRow.types'
import { ActionLink, Copy, LockedHint, Number, Row, State } from './ModuleRow.styles'

export function ModuleRow({
  number,
  title,
  description,
  complete,
  href,
  locked = false,
}: ModuleRowProps) {
  return (
    <Row data-locked={locked}>
      <Number>{number}</Number>
      <Copy>
        <h3>{title}</h3>
        <p>{description}</p>
      </Copy>
      <State data-complete={complete}>
        {complete ? 'Complete' : locked ? 'Locked' : 'Not started'}
      </State>
      {locked ? (
        <LockedHint>Complete Basic Info first</LockedHint>
      ) : (
        <ActionLink to={href}>{complete ? 'Review' : 'Open module'}</ActionLink>
      )}
    </Row>
  )
}
