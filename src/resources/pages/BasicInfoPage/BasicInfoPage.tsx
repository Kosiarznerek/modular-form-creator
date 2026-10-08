import { PageHeading } from '../../../shared/components/PageHeading/PageHeading'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { BasicInfoForm } from '../../components/BasicInfoForm/BasicInfoForm'
import { ResourceLoad } from '../../components/ResourceLoad/ResourceLoad'
import { useCompletedEditBuffer } from '../../hooks/useCompletedEditBuffer'
import { useResource } from '../../hooks/useResource'
import { BasicInfoPageRoot } from './BasicInfoPage.styles'

export function BasicInfoPage() {
  const { resource, loading, error } = useResource()
  const { edits } = useCompletedEditBuffer()
  if (loading || error || !resource) {
    return (
      <ResourceLoad
        loading={loading}
        error={error || (!loading ? 'Resource not found.' : '')}
      />
    )
  }
  const staged = edits[String(resource.resourceId)]
  const initialValues =
    resource.status === 'completed' && staged ? staged.basicInfo : resource.basicInfo
  return (
    <BasicInfoPageRoot>
      <Breadcrumbs
        items={[
          { label: 'Resource register', to: '/resources' },
          { label: resource.name, to: `/resources/${resource.resourceId}` },
          { label: 'Basic Info' },
        ]}
      />
      <PageHeading
        eyebrow="MODULE 01 / RESOURCE PROFILE"
        title="Basic Info"
        description="Add the owner and operating context for this resource."
      />
      <BasicInfoForm
        key={resource._id ?? resource.resourceId}
        resource={resource}
        initialValues={initialValues}
      />
    </BasicInfoPageRoot>
  )
}
