import styled, { css } from "styled-components";

const BaseButtonStyles = css`
  transition: transform 150ms ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Alata, sans-serif;
  padding: 10px 32px;
  border: none;
  outline: none;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const TransparentButtonStyles = css<ButtonProps>`
  ${BaseButtonStyles}
  background-color: transparent;
  ${({ disabled, theme }) => (disabled ? `color: ${theme.lightGrey};` : null)};
`;

export const ButtonStyles = css`
  ${BaseButtonStyles}
  background-color: ${({ theme }) => theme.red};
  color: white;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const SecondaryButtonStyles = css`
  ${BaseButtonStyles}
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: transparent;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
`;

const SmallButtonStyles = css`
  font-size: 14px;
  padding: 7px 10px;
`;

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  transparent?: boolean;
  small?: boolean;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  ${({ secondary, transparent }) => {
    if (secondary) return SecondaryButtonStyles;
    if (transparent) return TransparentButtonStyles;
    return ButtonStyles;
  }};

  ${({ small }) => (small ? SmallButtonStyles : null)}
`;

export default Button;
