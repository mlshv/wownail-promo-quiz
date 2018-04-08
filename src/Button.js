import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: rgba(245, 245, 245, 1);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.13);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: none;
  }

  @media (min-width: 575px) {
    padding: 12px 32px;
    font-size: 18px;
  }

  ${({ primary }) =>
    primary &&
    `
  color: #fff;
  background-color: rgba(225, 18, 136, 1);
  box-shadow: 0px 8px 20px 0px rgba(225, 18, 136, 0.32);
  `};

  ${({ hasIcon }) =>
    hasIcon &&
    `
  padding-left: 18px;
  @media (min-width: 575px) {
    padding-left: 18px;
  }
  `};

  ${({ inversed }) =>
    inversed &&
    `
  background-image: linear-gradient(-57deg, rgba(105, 143, 153, 1) 0%, rgba(112, 175, 206, 1) 100%);
  color: #fff;
  `};
`

export const Button = ({ children, icon, ...rest }) => (
  <ButtonStyled hasIcon={!!icon} {...rest}>
    {icon && icon} {children}
  </ButtonStyled>
)
