import { Component } from 'inferno'
import styled from 'styled-components'
import { Button } from './Button'
import { XsExcept } from './responsive'
import { AnswerSelect } from './AnswerSelect'
import { questions } from './questions'

const QuizStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const QuestionCardWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
`

const QuestionCard = styled.div`
  max-width: 575px;
  margin: 0 auto;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.14);
  background-image: linear-gradient(
    -57deg,
    rgba(105, 143, 153, 1) 0%,
    rgba(112, 175, 206, 1) 100%
  );

  @media (min-width: 575px) {
    padding: 24px 24px 48px 24px;
  }
`

const PageIndicator = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: rgba(91, 143, 169, 1);

  @media (min-width: 575px) {
    font-size: 28px;
    font-weight: 600;
  }
`

const QuestionText = styled.h1`
  font-size: 18px;
  margin: 32px 0;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  text-align: center;

  @media (min-width: 575px) {
    font-size: 26px;
    font-weight: 600;
  }
`

export class Quiz extends Component {
  state = {
    page: 0,
    answers: []
  }

  handleAnswer = (score) => {
    const { answers, page } = this.state
    console.log(score)

    this.setState(
      {
        answers: [...answers.slice(0, page), score, ...answers.slice(page + 1)]
      },
      () => console.log(this.state)
    )
  }

  handleNext = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  render() {
    const { page } = this.state

    return (
      <QuizStyled>
        <QuestionCardWrap>
          <QuestionCard>
            <PageIndicator>{page + 1}/{questions.length}</PageIndicator>
            <QuestionText>
              {questions[page].text}
            </QuestionText>
            <XsExcept>
              <Button onClick={this.handleNext}>Дальше</Button>
            </XsExcept>
          </QuestionCard>
        </QuestionCardWrap>
        <AnswerSelect
          answers={questions[page].answers}
          onAnswer={this.handleAnswer}
          onNext={this.handleNext}
        />
      </QuizStyled>
    )
  }
}
