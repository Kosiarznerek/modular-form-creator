import type { DetailProps } from './Detail.types'
import { Field, Label, Value } from './Detail.styles'

export function Detail({ label, value, wide = false }: DetailProps) {
  return (
    <Field data-wide={wide}>
      <Label>{label}</Label>
      <Value>{value || '—'}</Value>
    </Field>
  )
}
