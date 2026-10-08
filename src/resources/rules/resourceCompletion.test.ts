import { describe, expect, it } from 'vitest'
import { isBasicInfoComplete } from './isBasicInfoComplete'
import { isProjectDetailsComplete } from './isProjectDetailsComplete'

describe('resource module completion', () => {
  it('requires every Basic Info field to contain non-whitespace text', () => {
    const basicInfo = {
      resourceName: 'Resource',
      owner: 'Owner',
      email: 'owner@example.com',
      description: 'Description',
      priority: 'high',
    }

    expect(isBasicInfoComplete(basicInfo)).toBe(true)
    expect(isBasicInfoComplete({ ...basicInfo, owner: '  ' })).toBe(false)
  })

  it('requires project details and at least one team member', () => {
    const projectDetails = {
      projectName: 'Project',
      budget: '100',
      category: 'internal',
      options: ['FE devs'],
    }

    expect(isProjectDetailsComplete(projectDetails)).toBe(true)
    expect(isProjectDetailsComplete({ ...projectDetails, budget: ' ' })).toBe(false)
    expect(isProjectDetailsComplete({ ...projectDetails, options: [] })).toBe(false)
  })
})
