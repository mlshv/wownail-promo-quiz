import { Component } from 'inferno'
import { RootContainer } from './RootContainer'
import { Header } from './Header'
import { Quiz } from './Quiz'
import { LeadCard } from './LeadCard';

export class App extends Component {
  state = {
    quizStarted: false,
  }

  render() {
    const { quizStarted } = this.state

    return (
      <RootContainer>
        <Header />
        {quizStarted ? <Quiz /> : <LeadCard />}

      </RootContainer>
    )
  }
}
