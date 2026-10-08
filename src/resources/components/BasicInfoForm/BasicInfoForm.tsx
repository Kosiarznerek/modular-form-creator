import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../design-system/components/Button'
import { Input } from '../../../design-system/components/Input'
import { Select } from '../../../design-system/components/Select'
import { Notice } from '../../../shared/components/Notice/Notice'
import { ActionLink } from '../../../shared/components/ActionLink/ActionLink'
import { errorMessage } from '../../../shared/errors/errorMessage'
import { replaceResource } from '../../api/replaceResource'
import { updateBasicInfo } from '../../api/updateBasicInfo'
import { ModuleFormFrame } from '../ModuleFormFrame/ModuleFormFrame'
import { useCompletedEditBuffer } from '../../hooks/useCompletedEditBuffer'
import { toResourcePayload } from '../../mappers/toResourcePayload'
import { FormActions, FormGrid, FullWidthField } from '../FormFields.styles'
import type { BasicInfoFormProps } from './BasicInfoForm.types'
import { BasicInfoFormRoot } from './BasicInfoForm.styles'

export function BasicInfoForm({ resource, initialValues }: BasicInfoFormProps) {
  const navigate = useNavigate()
  const { edits, stage, clear } = useCompletedEditBuffer()
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const key = String(resource.resourceId)
  const staged = edits[key]
  const changed = JSON.stringify(values) !== JSON.stringify(resource.basicInfo)
  const canSave = changed || Boolean(staged)

  function change<K extends keyof BasicInfoFormProps['initialValues']>(
    field: K,
    value: BasicInfoFormProps['initialValues'][K],
  ) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (resource.status === 'completed') {
      stage(key, { ...(staged ?? toResourcePayload(resource)), basicInfo: next })
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setError('')
    const cleanValues = {
      ...values,
      resourceName: values.resourceName.trim(),
      owner: values.owner.trim(),
      email: values.email.trim(),
      description: values.description.trim(),
    }
    try {
      if (resource.status === 'completed') {
        await replaceResource(key, {
          ...(staged ?? toResourcePayload(resource)),
          basicInfo: cleanValues,
        })
        clear(key)
        navigate(`/resources/${key}`)
      } else {
        await updateBasicInfo(key, cleanValues)
        navigate(`/resources/${key}/project-details`)
      }
    } catch (reason) {
      setError(errorMessage(reason))
    } finally {
      setSaving(false)
    }
  }

  function discard() {
    clear(key)
    setValues(resource.basicInfo)
  }

  return (
    <BasicInfoFormRoot>
      <ModuleFormFrame resource={resource} module="Basic Info" step="01 / 02">
        {error && <Notice>{error}</Notice>}
        {resource.status === 'completed' && staged && (
          <Notice kind="success">
            Changes are staged in memory and are not saved yet.
          </Notice>
        )}
        <FormGrid onSubmit={(event) => void submit(event)}>
          <FullWidthField>
            <Input
              label="Resource name"
              helperText="Locked after creation"
              value={values.resourceName || resource.name}
              state="locked"
            />
          </FullWidthField>
          <Input
            label="Owner *"
            required
            maxLength={255}
            pattern="[A-Za-z ]+"
            title="Use letters and spaces."
            value={values.owner}
            onChange={(event) => change('owner', event.target.value)}
            placeholder="Full name"
          />
          <Input
            label="Email *"
            required
            type="email"
            value={values.email}
            onChange={(event) => change('email', event.target.value)}
            placeholder="name@company.com"
          />
          <Select
            label="Priority *"
            required
            value={values.priority}
            onChange={(event) => change('priority', event.target.value)}
            options={[
              { value: '', label: 'Select priority' },
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
            ]}
          />
          <FullWidthField>
            <Input
              label="Description *"
              required
              maxLength={1000}
              multiline
              rows={5}
              value={values.description}
              onChange={(event) => change('description', event.target.value)}
              placeholder="What is this resource responsible for?"
              helperText={`${values.description.length}/1000 characters`}
            />
          </FullWidthField>
          <FormActions>
            <ActionLink to={`/resources/${key}`}>Cancel</ActionLink>
            {resource.status === 'completed' && staged && (
              <Button variant="secondary" type="button" onClick={discard}>
                Discard all unsaved edits
              </Button>
            )}
            <Button
              variant="primary"
              type="submit"
              disabled={saving || (resource.status === 'completed' && !canSave)}
            >
              {saving
                ? 'Saving…'
                : resource.status === 'completed'
                  ? 'Save changes'
                  : 'Save and continue'}
            </Button>
          </FormActions>
        </FormGrid>
      </ModuleFormFrame>
    </BasicInfoFormRoot>
  )
}
