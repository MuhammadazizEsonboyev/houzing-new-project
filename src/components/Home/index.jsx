import React from 'react'
import { Container, Wrapper } from './style'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <>Home</>
      </Wrapper>
      <Outlet />
    </Container>
  )
}

export default Home
