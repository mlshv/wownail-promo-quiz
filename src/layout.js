import styled from 'styled-components'

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: 575px) {
    margin-bottom: 48px;
  }
`

export const CardWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
`


export const SubCardWrap = styled.div`
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

export const SubCard = styled.div`
  position: relative;
  top: -16px;
  z-index: 0;
  padding-top: 24px;
  background: #fff;
`
