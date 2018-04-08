import styled from 'styled-components'
import background from 'resources/background.svg'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background: url(${background});
  background-size: cover;
`
