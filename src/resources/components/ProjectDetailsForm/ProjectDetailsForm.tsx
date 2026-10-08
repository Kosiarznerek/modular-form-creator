import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../design-system/components/Button'
import { CheckboxGroup } from '../../../design-system/components/CheckboxGroup'
import { Input } from '../../../design-system/components/Input'
import { Select } from '../../../design-system/components/Select'
import { Notice } from '../../../shared/components/Notice/Notice'
import { ActionLink } from '../../../shared/components/ActionLink/ActionLink'
import { errorMessage } from '../../../shared/errors/errorMessage'
import { replaceResource } from '../../api/replaceResource'
import { updateProjectDetails } from '../../api/updateProjectDetails'
import { ModuleFormFrame } from '../ModuleFormFrame/ModuleFormFrame'
import { useCompletedEditBuffer } from '../../hooks/useCompletedEditBuffer'
import { toResourcePayload } from '../../mappers/toResourcePayload'
import type { ProjectDetailsFormProps } from './ProjectDetailsForm.types'
import {
  FormActions,
  FormGrid,
  FullWidthField,
  FullWidthFieldSet,
} from '../FormFields.styles'
import { ProjectDetailsFormRoot } from './ProjectDetailsForm.styles'

const teamOptions = ['FE devs', 'BE devs', 'Designer', 'Data Eng', 'Product Owner']

export function ProjectDetailsForm({ resource, initialValues }: ProjectDetailsFormProps) {
  const navigate = useNavigate()
  const { edits, stage, clear } = useCompletedEditBuffer()
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const key = String(resource.resourceId)
  const staged = edits[key]
  const changed = JSON.stringify(values) !== JSON.stringify(resource.projectDetails)
  const canSave = changed || Boolean(staged)

  function change<K extends keyof ProjectDetailsFormProps['initialValues']>(
    field: K,
    value: ProjectDetailsFormProps['initialValues'][K],
  ) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (resource.status === 'completed') {
      stage(key, { ...(staged ?? toResourcePayload(resource)), projectDetails: next })
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setError('')
    const cleanValues = {
      ...values,
      projectName: values.projectName.trim(),
      budget: values.budget.trim(),
    }
    try {
      if (resource.status === 'completed') {
        await replaceResource(key, {
          ...(staged ?? toResourcePayload(resource)),
          projectDetails: cleanValues,
        })
        clear(key)
      } else {
        await updateProjectDetails(key, cleanValues)
      }
      navigate(`/resources/${key}`)
    } catch (reason) {
      setError(errorMessage(reason))
    } finally {
      setSaving(false)
    }
  }

  function discard() {
    clear(key)
    setValues(resource.projectDetails)
  }

  return (
    <ProjectDetailsFormRoot>
      <ModuleFormFrame resource={resource} module="Project Details" step="02 / 02">
        {error && <Notice>{error}</Notice>}
        {resource.status === 'completed' && staged && (
          <Notice kind="success">
            Changes are staged in memory and are not saved yet.
          </Notice>
        )}
        <FormGrid onSubmit={(event) => void submit(event)}>
          <FullWidthField>
            <Input
              label="Project name *"
              required
              maxLength={255}
              pattern="[A-Za-z0-9\- ]+"
              title="Use letters, numbers, spaces, and hyphens."
              value={values.projectName}
              onChange={(event) => change('projectName', event.target.value)}
              placeholder="Project name"
            />
          </FullWidthField>
          <Input
            label="Budget *"
            required
            inputMode="numeric"
            pattern="[0-9]+"
            value={values.budget}
            onChange={(event) => change('budget', event.target.value)}
            placeholder="0"
          />
          <Select
            label="Category *"
            required
            value={values.category}
            onChange={(event) => change('category', event.target.value)}
            options={[
              { value: '', label: 'Select category' },
              { value: 'internal', label: 'Internal' },
              { value: 'external', label: 'External' },
              { value: 'vendor', label: 'Vendor' },
            ]}
          />
          <FullWidthFieldSet>
            <CheckboxGroup
              label="Team members *"
              options={teamOptions}
              value={values.options}
              onChange={(options) => change('options', options)}
              helper={
                values.options.length === 0
                  ? 'Select at least one team member.'
                  : undefined
              }
            />
          </FullWidthFieldSet>
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
              disabled={
                saving ||
                values.options.length === 0 ||
                (resource.status === 'completed' && !canSave)
              }
            >
              {saving
                ? 'Saving…'
                : resource.status === 'completed'
                  ? 'Save changes'
                  : 'Save project details'}
            </Button>
          </FormActions>
        </FormGrid>
      </ModuleFormFrame>
    </ProjectDetailsFormRoot>
  )
}
