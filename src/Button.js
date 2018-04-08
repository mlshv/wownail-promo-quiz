import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 24px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: rgba(245, 245, 245, 1);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.13);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: none;
  }

  ${({ primary }) =>
    primary &&
    `
  background-image: linear-gradient(-57deg, rgba(105, 143, 153, 1) 0%, rgba(112, 175, 206, 1) 100%);
  color: #fff;
  `};

  @media (min-width: 575px) {
    padding: 12px 32px;
    font-size: 18px;
  }

  ${({ danger }) =>
    danger &&
    `
  color: #fff;
  background-color: rgba(225, 18, 136, 1);
  box-shadow: 0px 8px 20px 0px rgba(225, 18, 136, 0.32);
  `};
`
