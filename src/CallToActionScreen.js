import { Component } from 'inferno'
import styled from 'styled-components'

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const CardWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
`

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

const SubCardWrap = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding-bottom: 24px;
  background: #fff;

  @media (min-width: 575px) {
    flex-grow: unset;
    padding-bottom: 0;
  }
`

const SubCard = styled.div`
  position: relative;
  top: -16px;
  z-index: 0;
  padding-top: 24px;
  background: #fff;
`

const Text = styled.p`
  padding: 16px 12px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(71, 76, 83, 1);
  text-align: center;
`

export const CallToActionScreen = ({ title, cover, action, text }) => (
  <BaseContainer>
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
  </BaseContainer>
)
