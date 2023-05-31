import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
  width: 100%;
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};
  .active {
    color: #b8ff06;
  }
`

export const Logo = styled.img``

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #ffff;
`
