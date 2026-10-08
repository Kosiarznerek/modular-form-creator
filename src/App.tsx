import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './shared/layout/AppShell'
import { BasicInfoPage } from './resources/pages/BasicInfoPage/BasicInfoPage'
import { ProjectDetailsPage } from './resources/pages/ProjectDetailsPage/ProjectDetailsPage'
import { ResourceDetailsPage } from './resources/pages/ResourceDetailsPage/ResourceDetailsPage'
import { ResourceOverviewPage } from './resources/pages/ResourceOverviewPage/ResourceOverviewPage'
import { ResourcesPage } from './resources/pages/ResourcesPage/ResourcesPage'
import { CompletedEditBufferProvider } from './resources/state/CompletedEditBufferProvider'
import { AppGlobalStyles } from './shared/styles/AppGlobalStyles.styles'

export default function App() {
  return (
    <BrowserRouter>
      <AppGlobalStyles />
      <CompletedEditBufferProvider>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Navigate to="/resources" replace />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:resourceId" element={<ResourceOverviewPage />} />
            <Route
              path="/resources/:resourceId/details"
              element={<ResourceDetailsPage />}
            />
            <Route path="/resources/:resourceId/basic-info" element={<BasicInfoPage />} />
            <Route
              path="/resources/:resourceId/project-details"
              element={<ProjectDetailsPage />}
            />
            <Route path="*" element={<Navigate to="/resources" replace />} />
          </Route>
        </Routes>
      </CompletedEditBufferProvider>
    </BrowserRouter>
  )
}
