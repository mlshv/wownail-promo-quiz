import styled from 'styled-components'
import logo from 'resources/logo.png'

const HeaderStyled = styled.div`
  padding: 24px 16px 16px 16px;

  @media (min-width: 575px) {
    padding: 32px;
  }
`

const Logo = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
`

export const Header = () => (
  <HeaderStyled>
    <Logo src={logo} />
  </HeaderStyled>
)
