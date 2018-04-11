import styled from 'styled-components'
import { Base, CardWrap, SubCardWrap, SubCard } from 'layout'

const Card = styled.div`
  max-width: 575px;
  margin: 0 auto;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.14);
  background-color: #333;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  @media (min-width: 575px) {
    padding: 24px 24px 48px 24px;
  }
`

const Title = styled.h1`
  margin: 64px 0;
  font-size: 21px;
  font-weight: 800;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 575px) {
    margin: 128px 0;
    font-size: 26px;
    font-weight: 600;
  }
`

const ActionWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: -11px;
  width: 100%;
  text-align: center;
`

const Text = styled.p`
  padding: 16px 12px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(71, 76, 83, 1);
  text-align: center;

  @media (min-width: 575px) {
    padding: 24px 18px;
  }
`

export const CallToActionScreen = ({ title, cover, action, text }) => (
  <Base>
    <CardWrap>
      <Card background={cover}>
        <Title>{title}</Title>
      </Card>
      <ActionWrap>{action}</ActionWrap>
    </CardWrap>
    <SubCardWrap>
      <SubCard>
        <Text>{text}</Text>
      </SubCard>
    </SubCardWrap>
  </Base>
)
