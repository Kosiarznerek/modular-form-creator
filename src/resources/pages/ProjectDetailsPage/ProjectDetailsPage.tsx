import { ActionLink } from '../../../shared/components/ActionLink/ActionLink'
import { PageHeading } from '../../../shared/components/PageHeading/PageHeading'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { ProjectDetailsForm } from '../../components/ProjectDetailsForm/ProjectDetailsForm'
import { ResourceLoad } from '../../components/ResourceLoad/ResourceLoad'
import { useCompletedEditBuffer } from '../../hooks/useCompletedEditBuffer'
import { useResource } from '../../hooks/useResource'
import { isBasicInfoComplete } from '../../rules/isBasicInfoComplete'
import {
  LockedDescription,
  LockedNumber,
  LockedPanel,
  LockedTitle,
} from './ProjectDetailsPage.styles'

export function ProjectDetailsPage() {
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
  if (resource.status === 'draft' && !isBasicInfoComplete(resource.basicInfo)) {
    return (
      <>
        <Breadcrumbs
          items={[
            { label: 'Resource register', to: '/resources' },
            { label: resource.name, to: `/resources/${resource.resourceId}` },
            { label: 'Project Details' },
          ]}
        />
        <PageHeading
          eyebrow="MODULE 02 / PROJECT SETUP"
          title="Project Details"
          description="This module is available after Basic Info is complete."
        />
        <LockedPanel>
          <LockedNumber>02</LockedNumber>
          <LockedTitle>Basic Info is still incomplete</LockedTitle>
          <LockedDescription>
            Complete and save Basic Info before adding project details.
          </LockedDescription>
          <ActionLink to={`/resources/${resource.resourceId}/basic-info`}>
            Open Basic Info
          </ActionLink>
        </LockedPanel>
      </>
    )
  }
  const staged = edits[String(resource.resourceId)]
  const initialValues =
    resource.status === 'completed' && staged
      ? staged.projectDetails
      : resource.projectDetails
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Resource register', to: '/resources' },
          { label: resource.name, to: `/resources/${resource.resourceId}` },
          { label: 'Project Details' },
        ]}
      />
      <PageHeading
        eyebrow="MODULE 02 / PROJECT SETUP"
        title="Project Details"
        description="Set the project scope, budget, category, and delivery team."
      />
      <ProjectDetailsForm
        key={resource._id ?? resource.resourceId}
        resource={resource}
        initialValues={initialValues}
      />
    </>
  )
}
