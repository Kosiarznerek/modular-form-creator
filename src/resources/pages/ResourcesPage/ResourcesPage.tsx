import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Notice } from '../../../shared/components/Notice/Notice'
import { PageHeading } from '../../../shared/components/PageHeading/PageHeading'
import { Button } from '../../../design-system/components/Button'
import { Input } from '../../../design-system/components/Input'
import { Select } from '../../../design-system/components/Select'
import { errorMessage } from '../../../shared/errors/errorMessage'
import { formatDate } from '../../../shared/formatting/formatDate'
import { createResource } from '../../api/createResource'
import { deleteResource } from '../../api/deleteResource'
import { listResources } from '../../api/listResources'
import { ModuleProgress } from '../../components/ModuleProgress/ModuleProgress'
import { StatusTag } from '../../components/StatusTag/StatusTag'
import { useCompletedEditBuffer } from '../../hooks/useCompletedEditBuffer'
import type { Resource } from '../../types/Resource'
import { ResourcesPageRoot } from './ResourcesPage.styles'

export function ResourcesPage() {
  const navigate = useNavigate()
  const { clear } = useCompletedEditBuffer()
  const [resources, setResources] = useState<Resource[]>([])
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 1,
  })
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [reload, setReload] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [creating, setCreating] = useState(false)
  const [savingCreation, setSavingCreation] = useState(false)
  const creationInFlight = useRef(false)
  const [resourceName, setResourceName] = useState('')
  const [createError, setCreateError] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    const timer = window.setTimeout(
      () => {
        setLoading(true)
        setError('')
        listResources({
          page,
          pageSize: 10,
          status: status || undefined,
          name: query.trim() || undefined,
        })
          .then((result) => {
            if (!active) {
              return
            }
            setResources(result.items)
            setPagination(result.pagination)
          })
          .catch((reason: unknown) => {
            if (active) {
              setError(errorMessage(reason))
            }
          })
          .finally(() => {
            if (active) {
              setLoading(false)
            }
          })
      },
      query ? 220 : 0,
    )
    return () => {
      active = false
      window.clearTimeout(timer)
    }
  }, [page, query, reload, status])

  async function handleCreateResource(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (creationInFlight.current) {
      return
    }
    creationInFlight.current = true
    setSavingCreation(true)
    setCreateError('')
    try {
      const created = await createResource(resourceName.trim())
      clear(String(created.resourceId))
      navigate(`/resources/${created.resourceId}`)
    } catch (reason) {
      setCreateError(errorMessage(reason))
    } finally {
      creationInFlight.current = false
      setSavingCreation(false)
    }
  }

  async function handleDeleteResource(resource: Resource) {
    if (!window.confirm(`Delete “${resource.name}”? This cannot be undone.`)) {
      return
    }
    const id = String(resource.resourceId)
    setDeletingId(id)
    try {
      await deleteResource(id)
      clear(id)
      if (page > 1 && resources.length === 1) {
        setPage((value) => value - 1)
      } else {
        setReload((value) => value + 1)
      }
    } catch (reason) {
      setError(errorMessage(reason))
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <ResourcesPageRoot>
      <PageHeading
        eyebrow="RESOURCE MANAGEMENT / REGISTER"
        title="Resource register"
        description="A clear view of work in progress and completed resources."
        action={
          <Button
            variant="primary"
            onClick={() => {
              setCreating((value) => !value)
              setCreateError('')
            }}
          >
            {creating ? 'Close form' : '＋ New resource'}
          </Button>
        }
      />

      {creating && (
        <form
          className="create-panel"
          onSubmit={(event) => void handleCreateResource(event)}
        >
          <Input
            label="Resource name"
            autoFocus
            required
            maxLength={255}
            pattern="[A-Za-z0-9\- ]+"
            title="Use letters, numbers, spaces, and hyphens."
            placeholder="e.g. Customer onboarding"
            value={resourceName}
            onChange={(event) => setResourceName(event.target.value)}
          />
          {createError && <p className="field-error">{createError}</p>}
          <Button variant="primary" type="submit" disabled={savingCreation}>
            {savingCreation ? 'Creating…' : 'Create resource'}
          </Button>
        </form>
      )}

      <section className="list-toolbar" aria-label="Resource filters">
        <div className="search-field">
          <span aria-hidden="true" className="search-glyph">
            ⌕
          </span>
          <Input
            className="search-control"
            aria-label="Search resources"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setPage(1)
            }}
            placeholder="Search by resource name"
          />
        </div>
        <div className="filter-field">
          <Select
            aria-label="Filter by status"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value)
              setPage(1)
            }}
            options={[
              { value: '', label: 'All statuses' },
              { value: 'draft', label: 'Draft' },
              { value: 'completed', label: 'Completed' },
            ]}
          />
        </div>
        <span className="results-count">
          {pagination.totalItems} {pagination.totalItems === 1 ? 'resource' : 'resources'}
        </span>
      </section>

      {error && <Notice>{error}</Notice>}
      <section className="table-wrap" aria-label="Resources">
        <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Module progress</th>
              <th>Last updated</th>
              <th>Status</th>
              <th>
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource._id ?? resource.resourceId}>
                <td>
                  <Link
                    className="resource-link"
                    to={`/resources/${resource.resourceId}`}
                  >
                    <span className="resource-avatar">
                      {resource.name.slice(0, 1).toUpperCase()}
                    </span>
                    <span>
                      <strong>{resource.name}</strong>
                      <small>RES-{String(resource.resourceId).padStart(4, '0')}</small>
                    </span>
                  </Link>
                </td>
                <td>
                  <ModuleProgress resource={resource} />
                </td>
                <td className="date-cell">
                  {formatDate(resource.updatedAt ?? resource.createdAt)}
                </td>
                <td>
                  <StatusTag status={resource.status} />
                </td>
                <td className="row-actions">
                  <Link className="table-action" to={`/resources/${resource.resourceId}`}>
                    Open
                  </Link>
                  <button
                    className="table-action delete-action"
                    disabled={deletingId === String(resource.resourceId)}
                    onClick={() => void handleDeleteResource(resource)}
                  >
                    {deletingId === String(resource.resourceId) ? 'Deleting…' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
            {!loading && !error && resources.length === 0 && (
              <tr>
                <td colSpan={5} className="empty-cell">
                  <strong>
                    {query || status ? 'No matching resources' : 'No resources yet'}
                  </strong>
                  <span>
                    {query || status
                      ? 'Try a different search or status.'
                      : 'Create a resource to start your register.'}
                  </span>
                </td>
              </tr>
            )}
            {loading && (
              <tr>
                <td colSpan={5} className="loading-cell">
                  Loading resources…
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
      <div className="pagination-row">
        <span>
          Page {pagination.totalItems ? pagination.page : 0} of {pagination.totalPages}
        </span>
        <div className="pagination-actions">
          <Button
            variant="secondary"
            size="small"
            disabled={loading || page <= 1}
            onClick={() => setPage((value) => value - 1)}
          >
            Previous
          </Button>
          <Button
            variant="secondary"
            size="small"
            disabled={loading || page >= pagination.totalPages}
            onClick={() => setPage((value) => value + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </ResourcesPageRoot>
  )
}
