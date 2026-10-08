import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { errorMessage } from '../../shared/errors/errorMessage'
import { getResource } from '../api/getResource'
import type { Resource } from '../types/Resource'

export function useResource() {
  const { resourceId } = useParams()
  const [resource, setResource] = useState<Resource | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [revision, setRevision] = useState(0)

  useEffect(() => {
    if (!resourceId) {
      return
    }
    let active = true
    const timer = window.setTimeout(() => {
      setLoading(true)
      setError('')
      getResource(resourceId)
        .then((value) => {
          if (active) {
            setResource(value)
          }
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
    }, 0)
    return () => {
      active = false
      window.clearTimeout(timer)
    }
  }, [resourceId, revision])

  return {
    resource,
    setResource,
    loading,
    error,
    reload: () => setRevision((value) => value + 1),
  }
}
