import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const AppFrame = styled.div`
  min-height: 100vh;
  display: flex;
  background: #f1f4ef;

  @media (max-width: 760px) {
    display: block;
  }
`

export const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  display: flex;
  flex: 0 0 242px;
  flex-direction: column;
  height: 100vh;
  padding: 30px 18px 20px;
  color: #e9f0e9;
  background: ${({ theme }) => theme.colors.inkStrong};

  @media (max-width: 1000px) {
    flex-basis: 205px;
  }

  @media (max-width: 760px) {
    position: static;
    width: 100%;
    height: auto;
    min-height: 64px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 11px 18px;
  }

  @media (max-width: 500px) {
    padding-right: 13px;
    padding-left: 13px;
  }
`

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 9px;

  @media (max-width: 760px) {
    padding: 0;
  }
`

export const BrandMark = styled.span`
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 10px 10px 10px 3px;
  color: ${({ theme }) => theme.colors.inkStrong};
  background: #c9e49b;
  font: 700 20px/1 ${({ theme }) => theme.typography.heading};

  @media (max-width: 760px) {
    width: 34px;
    height: 34px;
  }
`

export const BrandName = styled.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font: 600 16px/1.1 ${({ theme }) => theme.typography.heading};

  span {
    color: #9aafa4;
    font: 600 9px/1 ${({ theme }) => theme.typography.body};
    letter-spacing: 1.25px;
  }

  @media (max-width: 500px) {
    font-size: 14px;

    span {
      font-size: 8px;
    }
  }
`

export const SidebarLabel = styled.div`
  margin: 48px 10px 12px;
  color: #93a89c;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;

  @media (max-width: 760px) {
    display: none;
  }
`

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 0 11px;
  border-radius: 6px;
  color: #c4d1c8;
  font-weight: 600;
  transition:
    background 140ms ease,
    color 140ms ease;

  &:hover,
  &.active {
    color: #fff;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    box-shadow: inset 3px 0 #c9e49b;
  }

  @media (max-width: 760px) {
    min-height: 38px;
    padding: 0 10px;
    font-size: 12px;
  }

  @media (max-width: 500px) {
    max-width: 132px;
    font-size: 11px;
  }
`

export const NavGlyph = styled.span`
  color: #c9e49b;
  font: 600 10px/1 ${({ theme }) => theme.typography.heading};

  @media (max-width: 760px) {
    display: none;
  }
`

export const SidebarFooter = styled.div`
  display: grid;
  grid-template-columns: 8px 1fr;
  align-items: center;
  gap: 4px 9px;
  margin-top: auto;
  padding: 15px 10px 3px;
  border-top: 1px solid rgb(230 241 232 / 15%);
  color: #bfd0c3;
  font-size: 12px;

  @media (max-width: 760px) {
    display: none;
  }
`

export const ConnectionDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c9e49b;
  box-shadow: 0 0 0 3px rgb(201 228 155 / 12%);
`

export const ConnectionAddress = styled.span`
  grid-column: 2;
  color: #8fa69a;
  font-size: 11px;
`

export const Workspace = styled.div`
  min-width: 0;
  flex: 1;
`

export const Topbar = styled.header`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  border-bottom: 1px solid #e2e7e1;
  background: rgb(255 255 255 / 64%);

  @media (max-width: 1000px) {
    padding: 0 30px;
  }

  @media (max-width: 760px) {
    height: 45px;
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    padding-right: 14px;
    padding-left: 14px;
  }
`

export const TopbarCrumb = styled.div`
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.35px;

  span {
    padding: 0 8px;
    color: #b0bbb3;
  }

  @media (max-width: 500px) {
    font-size: 9px;
  }
`

export const TopbarMark = styled.span`
  display: grid;
  width: 31px;
  height: 31px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  font: 600 10px ${({ theme }) => theme.typography.heading};

  @media (max-width: 760px) {
    width: 26px;
    height: 26px;
  }
`

export const MainContent = styled.main`
  width: min(1160px, 100%);
  min-height: calc(100vh - 113.5px);
  margin: 0 auto;
  padding: 42px 48px 54px;

  @media (max-width: 1000px) {
    padding: 34px 30px 45px;
  }

  @media (max-width: 760px) {
    min-height: calc(100svh - 153.5px);
    padding: 30px 20px 40px;
  }

  @media (max-width: 500px) {
    min-height: calc(100svh - 152px);
    padding: 24px 14px 32px;
  }
`

export const AppFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 15px 48px 18px;
  color: #8a968f;
  font-size: 11px;

  @media (max-width: 1000px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  @media (max-width: 760px) {
    padding: 12px 20px 16px;
  }

  @media (max-width: 500px) {
    padding-right: 14px;
    padding-left: 14px;
    font-size: 10px;
  }
`
