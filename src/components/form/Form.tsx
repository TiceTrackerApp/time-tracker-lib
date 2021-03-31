import React from "react";
import styled, { css } from "styled-components";
import ErrorIcon from "@material-ui/icons/Error";

interface ErrorProps {
  error?: boolean;
}

type TextFieldProps = ErrorProps & { spaceLeft?: boolean };

export const Label = styled.label<ErrorProps>`
  background-color: ${({ error }) => (error ? "#fad7d4" : "transparent")};
  margin: 0;
`;

interface TextFieldGroupProps {
  isInvalid?: boolean;
  noMarginBottom?: boolean;
}

export const TextFieldGroup = styled.div<TextFieldGroupProps>`
  margin-bottom: ${({ isInvalid, noMarginBottom }) =>
    noMarginBottom ? 0 : isInvalid ? 40 : 20}px;
  transition: margin-bottom 200ms ease-in-out;
  position: relative;
`;

const TextFieldStyles = css<TextFieldProps>`
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding-left: ${({ spaceLeft }) =>
    spaceLeft ? "50px!important" : "inherit"};
  width: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  color: ${({ theme }) => theme.grey};
  border: none;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea<TextFieldProps>`
  ${TextFieldStyles}
`;

export const TextField = styled.input<TextFieldProps>`
  ${TextFieldStyles}
`;

export const TextFieldSuggestion = styled.div<TextFieldProps>`
  ${TextFieldStyles}
  padding: 8px 20px !important;
  cursor: pointer;
`;

export const TextFieldIcon = styled.div`
  position: absolute;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TextFieldErrorMessageProps {
  appear?: boolean;
}

const ErrorStyles = css`
  color: ${({ theme }) => theme.red};
  font-size: 15px;
`;

const StyledErrorMessage = styled.div`
  ${ErrorStyles}
`;

const StyledTextFieldErrorMessage = styled.div<TextFieldErrorMessageProps>`
  ${ErrorStyles}
  position: absolute;
  opacity: ${({ appear }) => (appear ? 1 : 0)};
  bottom: ${({ appear }) => (appear ? -30 : -12)}px;
  transition: opacity 50ms ease-in, bottom 100ms ease-out;
`;

export const ErrorMessage: React.FC<Props> = ({ content }) =>
  content ? (
    <StyledErrorMessage>
      <StyledErrorIcon />
      {content}
    </StyledErrorMessage>
  ) : null;

const StyledErrorIcon = styled(ErrorIcon)`
  height: 20px !important;
  position: relative;
  bottom: 1px;
`;

interface Props {
  content?: string;
}

export const TextFieldErrorMessage: React.FC<Props> = ({ content }) => (
  <StyledTextFieldErrorMessage appear={!!content}>
    <StyledErrorIcon />
    {content}
  </StyledTextFieldErrorMessage>
);

export type TransparentInputFontType = "bold" | "light";

interface TransparentInputProps {
  font?: TransparentInputFontType;
}

const TransparentStyles = css<TransparentInputProps>`
  font-size: 16px;
  padding: 5px;
  background-color: transparent;
  ${({ font }) =>
    font === "bold" &&
    `
  font-family: Alata, sans-serif;
  `}

  ${({ font, theme }) =>
    font === "light" &&
    `
  color: ${theme.grey};
  `}
`;

export const TransparentSpan = styled.span<TransparentInputProps>`
  ${TransparentStyles}
  position: absolute;
  top: -9999px;
`;

export const TransparentInput = styled.input<TransparentInputProps>`
  ${TransparentStyles}
  outline: none;
  border: 1px solid ${({ theme }) => theme.backgroundDark};
  border-radius: 5px;
`;
