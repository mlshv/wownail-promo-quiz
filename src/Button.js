import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  font-weight: 600;
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  background-color: rgba(245, 245, 245, 1);
  box-shadow: none;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.13);
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

  &:hover {
    box-shadow: 0px 8px 20px 0px rgba(225, 18, 136, 0.32);
  }
  `};

  ${({ disabled }) =>
    disabled &&
    `
    cursor: unset;
    background-color: rgba(169, 169, 169, 1);
    &:hover {
      box-shadow: unset;
    }
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

const Link = ButtonStyled.withComponent('a')

export const Button = ({ children, icon, link, width, ...rest }) =>
  link ? (
    <Link hasIcon={!!icon} {...rest}>
      {icon && icon} {children}
    </Link>
  ) : (
    <ButtonStyled hasIcon={!!icon} width={width} {...rest}>
      {icon && icon} {children}
    </ButtonStyled>
  )
