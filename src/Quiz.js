import styled from 'styled-components'
import { XsExcept, XsOnly } from './responsive'

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
  padding: 12px 16px;
  border-radius: 3px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.14);
  background-image: linear-gradient(
    -57deg,
    rgba(105, 143, 153, 1) 0%,
    rgba(112, 175, 206, 1) 100%
  );
`

const PageIndicator = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: rgba(91, 143, 169, 1);
`

const QuestionText = styled.h1`
  font-size: 18px;
  margin-bottom: 48px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  text-align: center;
`

const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 24px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: rgba(245, 245, 245, 1);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.13);
  transition: box-shadow .3s ease;

  &:hover {
      box-shadow: none;
  }

  ${({ primary }) =>
    primary &&
    `
  background-image: linear-gradient(-57deg, rgba(105, 143, 153, 1) 0%, rgba(112, 175, 206, 1) 100%);
  color: #fff;
  `};
`

const Answers = styled.div`
  position: relative;
  top: -16px;
  z-index: 0;
  padding-top: 24px;
  background: #fff;
`

const AnswerSelect = styled.div`
  flex-grow: 1;
  padding-bottom: 24px;
  background: #fff;
`

const Answer = styled.button`
  display: block;
  width: 100%;
  padding: 12px 24px;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #444;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: rgba(245, 245, 245, 1);
  }

  &:focus {
    background-color: rgba(245, 245, 245, 1);
  }

  ${({ selected }) =>
    selected &&
    `
  font-weight: 600;
  background-color: rgba(245, 245, 245, 1);
  `};
`

export const Quiz = () => (
  <QuizStyled>
    <QuestionCardWrap>
      <QuestionCard>
        <PageIndicator>1/11</PageIndicator>
        <QuestionText>
          1. Шопинг. Если выбирать из нижеперечисленного, от чего вам было бы
          сложнее отказаться:
        </QuestionText>
        <XsExcept>
          <Button>Дальше</Button>
        </XsExcept>
      </QuestionCard>
    </QuestionCardWrap>
    <AnswerSelect>
      <Answers>
        <Answer>От красивого нижнего белья! Настоящая женщина должна быть безупречна под одеждой</Answer>
        <Answer>От новой роскошной сумки правильной формы. Это лучшее вложение денег</Answer>
        <Answer selected>От пары новых туфель, которые может быть вам и не нужны, но так хороши</Answer>
        <Answer>От красивого платья, подчеркивающего фигуру</Answer>
      </Answers>
      <XsOnly>
        <Button primary>Дальше</Button>
      </XsOnly>
    </AnswerSelect>
  </QuizStyled>
)
