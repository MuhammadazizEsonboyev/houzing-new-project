import React from 'react'
import { Container, Link, Logo, Main, Section, Wrapper } from './style'
import { Outlet, useNavigate } from 'react-router-dom'
import navbar from '../../utils/navbar'
import logoImg from '../../assets/images/logoimg.svg'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate('/home')} logo>
            <Logo src={logoImg} />
          </Section>
          <Section>
            {navbar?.map(({ title, path, id }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && 'active'}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              )
            })}
          </Section>
          <Section>
            <button>Sign In</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}

export default Navbar
