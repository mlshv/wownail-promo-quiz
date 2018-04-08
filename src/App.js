import { Component } from 'inferno'
import { RootContainer } from './RootContainer'
import { Header } from './Header'
import { Quiz } from './Quiz'
import { LeadCard } from './LeadCard'
import { CallToActionScreen } from './CallToActionScreen'
import { Button } from './Button'
import { InstaIcon } from './icons'
import miranda from 'resources/miranda.png'

const stages = {
  START: 0,
  QUIZ: 1,
  LEAD: 2,
  RESULT: 3,
}

export class App extends Component {
  state = {
    stage: stages.START,
  }

  render() {
    const { stage } = this.state

    return (
      <RootContainer>
        <Header />
        {quizEnded && (
          <CallToActionScreen
            action={
              <Button primary icon={<InstaIcon />}>
                Подписаться
              </Button>
            }
            cover={miranda}
            title="Ты Миранда!"
            text={`Ты целеустремленная. Не думаешь о нарядах и косметике, и тебя не
          сильно заботит, какая прическа сейчас в моде.`}
          />
        )}
        {!quizEnded && (quizStarted ? <Quiz /> : <LeadCard />)}
      </RootContainer>
    )
  }
}
