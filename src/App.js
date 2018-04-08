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
  RESULT: 3
}

export class App extends Component {
  state = {
    stage: stages.START
  }

  handleNext = () => {
    this.setState(prevState => ({ stage: prevState.stage + 1 }))
  }

  handleQuizResult = (result) => {
    this.setState(prevState => ({ stage: prevState.stage + 1 }))
  }

  render() {
    const { stage } = this.state

    return (
      <RootContainer>
        <Header />

        {stage === stages.START && (
          <CallToActionScreen
            action={
              <Button primary onClick={this.handleNext}>
                Начать!
              </Button>
            }
            cover={miranda}
            title="Кто ты из сериала Секс в Большом городе?"
            text={`Пройди тест и узнай, на кого из сериал Секс в Большом Городе ты похожа больше всего.`}
          />
        )}

        {stage === stages.QUIZ && <Quiz onResult={this.handleQuizResult} />}

        {stage === stages.LEAD && <LeadCard />}

        {stage === stages.RESULT && (
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
      </RootContainer>
    )
  }
}
