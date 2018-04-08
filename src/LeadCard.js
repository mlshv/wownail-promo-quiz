import { Component } from 'inferno'
import styled from 'styled-components'
import { Button } from './Button'
import dama from 'resources/dama.png'

const LeadCardWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
`

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
  margin-bottom: 24px;
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

export class LeadCard extends Component {
  render() {
    return (
      <LeadCardWrap>
        <LeadCardStyled>
          <Title>Последний шаг</Title>
          <Label>Email</Label>
          <Input />
          <PrivacyNotice>
            *Нажимая на кнопку ниже, Вы даете свое согласие на обработку
            персональных данных
          </PrivacyNotice>
          <Button danger>Результат</Button>
          <Cover src={dama} />
        </LeadCardStyled>
      </LeadCardWrap>
    )
  }
}
