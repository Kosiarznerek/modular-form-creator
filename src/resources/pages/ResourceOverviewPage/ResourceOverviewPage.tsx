import { useState } from 'react'
import { Button } from '../../../design-system/components/Button'
import { ActionLink } from '../../../shared/components/ActionLink/ActionLink'
import { Notice } from '../../../shared/components/Notice/Notice'
import { PageHeading } from '../../../shared/components/PageHeading/PageHeading'
import { errorMessage } from '../../../shared/errors/errorMessage'
import { formatDate } from '../../../shared/formatting/formatDate'
import { provisionResource } from '../../api/provisionResource'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { ModuleRow } from '../../components/ModuleRow/ModuleRow'
import { ResourceLoad } from '../../components/ResourceLoad/ResourceLoad'
import { StatusTag } from '../../components/StatusTag/StatusTag'
import { useCompletedEditBuffer } from '../../hooks/useCompletedEditBuffer'
import { useResource } from '../../hooks/useResource'
import { isBasicInfoComplete } from '../../rules/isBasicInfoComplete'
import { isProjectDetailsComplete } from '../../rules/isProjectDetailsComplete'
import { ResourceOverviewRoot } from './ResourceOverviewPage.styles'

export function ResourceOverviewPage() {
  const { resource, setResource, loading, error } = useResource()
  const { edits } = useCompletedEditBuffer()
  const [actionError, setActionError] = useState('')
  const [provisioning, setProvisioning] = useState(false)

  if (loading || error || !resource) {
    return (
      <ResourceLoad
        loading={loading}
        error={error || (!loading ? 'Resource not found.' : '')}
      />
    )
  }

  const basicComplete = isBasicInfoComplete(resource.basicInfo)
  const projectComplete = isProjectDetailsComplete(resource.projectDetails)
  const readyToComplete = basicComplete && projectComplete
  const hasBufferedChanges = Boolean(edits[String(resource.resourceId)])
  const resourceId = String(resource.resourceId)

  async function provision() {
    setProvisioning(true)
    setActionError('')
    try {
      setResource(await provisionResource(resourceId))
    } catch (reason) {
      setActionError(errorMessage(reason))
    } finally {
      setProvisioning(false)
    }
  }

  return (
    <ResourceOverviewRoot>
      <Breadcrumbs
        items={[
          { label: 'Resource register', to: '/resources' },
          { label: resource.name },
        ]}
      />
      <PageHeading
        eyebrow={`RESOURCE ${String(resource.resourceId).padStart(4, '0')}`}
        title={resource.name}
        description="Overview and module completion."
        action={
          <ActionLink to={`/resources/${resource.resourceId}/details`}>
            View details
          </ActionLink>
        }
      />
      {hasBufferedChanges && (
        <Notice kind="success">
          Unsaved edits are held in this session. Submit a module form to persist them.
        </Notice>
      )}
      {actionError && <Notice>{actionError}</Notice>}
      <section className="overview-summary">
        <div>
          <span className="summary-label">CURRENT STATUS</span>
          <StatusTag status={resource.status} />
        </div>
        <div>
          <span className="summary-label">CREATED</span>
          <strong>{formatDate(resource.createdAt)}</strong>
        </div>
        <div>
          <span className="summary-label">MODULES COMPLETE</span>
          <strong>
            {Number(basicComplete) + Number(projectComplete)}{' '}
            <span className="summary-muted">/ 2</span>
          </strong>
        </div>
      </section>

      <div className="section-heading">
        <div>
          <div className="eyebrow">WORKFLOW</div>
          <h2>Resource modules</h2>
        </div>
        <span className="section-caption">Complete both to provision</span>
      </div>
      <div className="module-list">
        <ModuleRow
          number="01"
          title="Basic Info"
          description="Ownership, contact, and resource priority."
          complete={basicComplete}
          href={`/resources/${resource.resourceId}/basic-info`}
        />
        <ModuleRow
          number="02"
          title="Project Details"
          description="Project scope, budget, category, and team."
          complete={projectComplete}
          href={`/resources/${resource.resourceId}/project-details`}
          locked={resource.status === 'draft' && !basicComplete}
        />
      </div>

      <section className={`provision-panel${readyToComplete ? ' is-ready' : ''}`}>
        <div className="provision-copy">
          <span className="eyebrow">FINAL STEP</span>
          <h2>
            {resource.status === 'completed'
              ? 'Resource completed'
              : readyToComplete
                ? 'Ready to provision'
                : 'Complete the required modules'}
          </h2>
          <p>
            {resource.status === 'completed'
              ? 'This resource has reached completed status.'
              : 'Provisioning locks the workflow at completed status.'}
          </p>
        </div>
        {resource.status === 'completed' ? (
          <span className="completed-stamp">COMPLETED</span>
        ) : (
          <Button
            variant="primary"
            disabled={!readyToComplete || provisioning}
            onClick={() => void provision()}
          >
            {provisioning ? 'Provisioning…' : 'Provision resource'}
          </Button>
        )}
      </section>
    </ResourceOverviewRoot>
  )
}
