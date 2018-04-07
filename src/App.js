import { version, Component } from 'inferno'
import { RootContainer } from './RootContainer'
import { Header } from './Header'
import { Quiz } from './Quiz'

export const App = () => (
  <RootContainer>
    <Header />
    <Quiz />
  </RootContainer>
)
