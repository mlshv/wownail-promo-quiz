import { Component } from 'inferno'
import { Base, CardWrap } from 'layout'
import styled from 'styled-components'
import { Button } from './Button'
import { Center } from './Center'
import { XsExcept } from './responsive'
import { AnswerSelect } from './AnswerSelect'


const Card = styled.div`
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
    answers: [],
    isSelected: false
  }

  handleAnswer = score => {
    const { answers, page } = this.state

    this.setState(
      {
        answers: [...answers.slice(0, page), score, ...answers.slice(page + 1)],
        isSelected: true
      },
      () => console.log(this.state)
    )
  }

  handleNext = () => {
    const { page, answers } = this.state
    const { onResult, questions } = this.props

    if (answers[page]) {
      if (questions.length === page + 1) {
        const counts = answers.reduce(
          (accumulator, answer) => ({
            ...accumulator,
            [answer]: (accumulator[answer] || 0) + 1
          }),
          {}
        )

        const result = Object.keys(counts).reduce(
          (currentMax, answer) => {
            if (counts[answer] > currentMax.count) {
              return { count: counts[answer], answer }
            } else {
              return currentMax
            }
          },
          { count: null }
        )

        onResult(result.answer)
      } else {
        this.setState({
          page: page + 1,
          isSelected: false
        })
      }
    }
  }

  render() {
    const { page, isSelected } = this.state
    const { questions } = this.props

    return (
      <Base>
        <CardWrap>
          <Card>
            <PageIndicator>
              {page + 1}/{questions.length}
            </PageIndicator>
            <QuestionText>{questions[page].text}</QuestionText>
            <XsExcept>
              <Center>
                <Button onClick={this.handleNext}>Дальше</Button>
              </Center>
            </XsExcept>
          </Card>
        </CardWrap>
        <AnswerSelect
          answers={questions[page].answers}
          onAnswer={this.handleAnswer}
          onNext={this.handleNext}
          isSelected={isSelected}
        />
      </Base>
    )
  }
}
