import { ActionLink } from '../../../shared/components/ActionLink/ActionLink'
import { Notice } from '../../../shared/components/Notice/Notice'
import { PageHeading } from '../../../shared/components/PageHeading/PageHeading'
import { formatDate } from '../../../shared/formatting/formatDate'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { ResourceLoad } from '../../components/ResourceLoad/ResourceLoad'
import { StatusTag } from '../../components/StatusTag/StatusTag'
import { useCompletedEditBuffer } from '../../hooks/useCompletedEditBuffer'
import { useResource } from '../../hooks/useResource'
import { Detail } from '../../components/Detail/Detail'
import { DetailsSection } from '../../components/DetailsSection/DetailsSection'
import {
  DateValue,
  DetailsGrid,
  Identity,
  IdentityItem,
  IdentityPrimary,
  ResourceId,
  ResourceName,
  SummaryLabel,
} from './ResourceDetailsPage.styles'

export function ResourceDetailsPage() {
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

  const resourceEdits = edits[String(resource.resourceId)]
  const current = resourceEdits ? { ...resource, ...resourceEdits } : resource

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Resource register', to: '/resources' },
          { label: resource.name, to: `/resources/${resource.resourceId}` },
          { label: 'Details' },
        ]}
      />
      <PageHeading
        eyebrow={`RESOURCE ${String(resource.resourceId).padStart(4, '0')} / SUMMARY`}
        title="Resource details"
        description="A complete view of resource and project information."
        action={
          <ActionLink to={`/resources/${resource.resourceId}`}>
            Back to overview
          </ActionLink>
        }
      />
      {resourceEdits && (
        <Notice kind="success">
          Showing unsaved session edits. Submit either module to save all staged changes.
        </Notice>
      )}
      <Identity>
        <IdentityPrimary>
          <SummaryLabel>RESOURCE</SummaryLabel>
          <ResourceName>{current.name}</ResourceName>
          <ResourceId>RES-{String(current.resourceId).padStart(4, '0')}</ResourceId>
        </IdentityPrimary>
        <IdentityItem>
          <SummaryLabel>STATUS</SummaryLabel>
          <StatusTag status={current.status} />
        </IdentityItem>
        <IdentityItem>
          <SummaryLabel>CREATED</SummaryLabel>
          <DateValue>{formatDate(current.createdAt)}</DateValue>
        </IdentityItem>
      </Identity>
      <DetailsGrid>
        <DetailsSection
          title="Basic Info"
          href={`/resources/${resource.resourceId}/basic-info`}
        >
          <Detail label="Resource name" value={current.basicInfo.resourceName} />
          <Detail label="Owner" value={current.basicInfo.owner} />
          <Detail label="Email" value={current.basicInfo.email} />
          <Detail
            label="Priority"
            value={
              current.basicInfo.priority
                ? `${current.basicInfo.priority[0].toUpperCase()}${current.basicInfo.priority.slice(1)}`
                : ''
            }
          />
          <Detail label="Description" value={current.basicInfo.description} wide />
        </DetailsSection>
        <DetailsSection
          title="Project Details"
          href={`/resources/${resource.resourceId}/project-details`}
        >
          <Detail label="Project name" value={current.projectDetails.projectName} />
          <Detail label="Budget" value={current.projectDetails.budget} />
          <Detail
            label="Category"
            value={
              current.projectDetails.category
                ? `${current.projectDetails.category[0].toUpperCase()}${current.projectDetails.category.slice(1)}`
                : ''
            }
          />
          <Detail label="Team" value={current.projectDetails.options.join(', ')} wide />
        </DetailsSection>
      </DetailsGrid>
    </>
  )
}
