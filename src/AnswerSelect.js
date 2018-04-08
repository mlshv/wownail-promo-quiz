import { Component } from 'inferno'
import styled from 'styled-components'
import { SubCardWrap, SubCard } from 'layout'
import { Center } from './Center'
import { Button } from './Button'
import { XsOnly } from './responsive'

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

  @media (min-width: 575px) {
    font-size: 20px;
    padding: 12px 48px;
  }
`

export class AnswerSelect extends Component {
  state = {
    selected: null
  }

  componentWillReceiveProps({ isSelected }) {
    if (!isSelected) {
      this.setState({ selected: null });
    }
  }

  handleSelect = e => {
    const { onAnswer, answers } = this.props
    const selected = e.target.value

    this.setState({ selected })
    onAnswer(answers[selected].score)
  }

  render() {
    const { answers } = this.props
    const { selected } = this.state

    return (
      <SubCardWrap>
        <SubCard>
          {answers.map((answer, index) => (
            <Answer
              selected={index == selected}
              onClick={this.handleSelect}
              value={index}
            >
              {answer.text}
            </Answer>
          ))}
        </SubCard>
        <XsOnly>
          <Center>
            <Button inversed onClick={this.props.onNext}>
              Дальше
            </Button>
          </Center>
        </XsOnly>
      </SubCardWrap>
    )
  }
}
