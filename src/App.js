import { Component } from 'inferno'
import coverStart from 'resources/covers/start.jpg'
import { RootContainer } from './RootContainer'
import { Header } from './Header'
import { Quiz } from './Quiz'
import { LeadCard } from './LeadCard'
import { CallToActionScreen } from './CallToActionScreen'
import { Button } from './Button'
import { InstaIcon } from './icons'
import { results } from './questions'

const stages = {
  START: 0,
  QUIZ: 1,
  LEAD: 2,
  RESULT: 3
}

export class App extends Component {
  state = {
    stage: stages.START,
    quizResult: ''
  }

  handleNext = () => {
    this.setState(prevState => ({ stage: prevState.stage + 1 }))
  }

  handleQuizResult = result => {
    this.setState(prevState => ({
      stage: prevState.stage + 1,
      quizResult: result
    }))
  }

  render() {
    const { stage, quizResult } = this.state

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
            cover={coverStart}
            title="Кто ты из сериала Секс в Большом городе?"
            text={`Пройди тест и узнай, на кого из сериал Секс в Большом Городе ты похожа больше всего.`}
          />
        )}

        {stage === stages.QUIZ && <Quiz onResult={this.handleQuizResult} />}

        {stage === stages.LEAD && <LeadCard onNext={this.handleNext} />}

        {stage === stages.RESULT && (
          <CallToActionScreen
            action={
              <Button
                primary
                icon={<InstaIcon />}
                link
                href="https://instagram.com/mlshv_vidit"
                target="_blank"
              >
                Подписаться
              </Button>
            }
            cover={results[quizResult].cover}
            title={`Ты ${quizResult}!`}
            text={results[quizResult].text}
          />
        )}
      </RootContainer>
    )
  }
}
