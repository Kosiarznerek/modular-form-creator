import { apiBaseUrl } from './apiBaseUrl'

export async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${apiBaseUrl}/api${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options?.headers },
  })
  const body = (await response.json().catch(() => null)) as { message?: string } | null
  if (!response.ok) {
    throw new Error(body?.message || `Request failed (${response.status})`)
  }
  return body as T
}
