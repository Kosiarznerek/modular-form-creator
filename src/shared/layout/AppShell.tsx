import { Outlet } from 'react-router-dom'
import {
  AppFooter,
  AppFrame,
  Brand,
  BrandMark,
  BrandName,
  ConnectionAddress,
  ConnectionDot,
  MainContent,
  NavGlyph,
  NavItem,
  Sidebar,
  SidebarFooter,
  SidebarLabel,
  Topbar,
  TopbarCrumb,
  TopbarMark,
  Workspace,
} from './AppShell.styles'

export function AppShell() {
  return (
    <AppFrame>
      <Sidebar>
        <Brand to="/resources" aria-label="Resource Studio home">
          <BrandMark>R</BrandMark>
          <BrandName>
            Northstar<span>RESOURCE STUDIO</span>
          </BrandName>
        </Brand>
        <SidebarLabel>WORKSPACE</SidebarLabel>
        <NavItem to="/resources" end>
          <NavGlyph aria-hidden="true">01</NavGlyph>
          Resource register
        </NavItem>
        <SidebarFooter>
          <ConnectionDot />
          <span>API connection</span>
          <ConnectionAddress>localhost:5001</ConnectionAddress>
        </SidebarFooter>
      </Sidebar>
      <Workspace>
        <Topbar>
          <TopbarCrumb>
            OPERATIONS <span>/</span> RESOURCES
          </TopbarCrumb>
          <TopbarMark>NS</TopbarMark>
        </Topbar>
        <MainContent>
          <Outlet />
        </MainContent>
        <AppFooter>
          <span>Northstar Operations</span>
          <span>Resource management</span>
        </AppFooter>
      </Workspace>
    </AppFrame>
  )
}
