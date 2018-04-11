import { Component } from 'inferno'
import styled from 'styled-components'
import { postEmail } from 'api'
import { CardWrap } from 'layout'
import { Button } from './Button'
import dama from 'resources/dama.png'

const LeadCardStyled = styled.div`
  position: relative;
  max-width: 575px;
  margin: 0 auto;
  padding: 24px 16px 116px 16px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.14);
  background: #fff;

  @media (min-width: 575px) {
    padding: 48px 0 48px 48px;
  }
`

const Title = styled.h1`
  margin-bottom: 48px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(41, 51, 64, 1);
`

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(222, 222, 222, 1);
`

const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid rgba(222, 222, 222, 1);
  outline: none;
  font-size: 18px;
  font-weight: 500;
  color: rgba(74, 74, 74, 1);

  &:focus {
    border-bottom: 1px solid #555;
  }
`

const Error = styled.p`
  margin: 6px 0;
  margin-bottom: 24px;
  font-size: 12px;
  color: rgba(225, 18, 136, 1);

  @media (min-width: 575px) {
    font-size: 14px;
  }
`

const PrivacyNotice = styled.p`
  margin-bottom: 48px;
  width: 170px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(222, 222, 222, 1);

  @media (min-width: 575px) {
    width: 232px;
    font-size: 14px;
  }
`

const Cover = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 250px;
  border-bottom-right-radius: 4px;

  @media (min-width: 575px) {
    height: 430px;
  }
`

const isEmailValid = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export class LeadCard extends Component {
  state = {
    email: '',
    validationError: ''
  }

  handleSubmit = () => {
    if (isEmailValid(this.state.email)) {
      this.setState({ validationError: '' })
      postEmail(this.state.email)
      this.props.onNext()
    } else {
      this.setState({ validationError: 'Введите корректный email' })
    }
  }

  handleChange = e => this.setState({ email: e.target.value })

  handleKeyPress = e => e.key === 'Enter' && this.handleSubmit()

  render() {
    const { email, validationError } = this.state

    return (
      <CardWrap>
        <LeadCardStyled>
          <Title>Последний шаг</Title>
          <Label>Email</Label>
          <Input onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={email} />
          {validationError && <Error>{validationError}</Error>}
          <PrivacyNotice>
            *Нажимая на кнопку ниже, Вы даете свое согласие на обработку
            персональных данных
          </PrivacyNotice>
          <Button primary onClick={this.handleSubmit}>
            Результат
          </Button>
          <Cover src={dama} />
        </LeadCardStyled>
      </CardWrap>
    )
  }
}
