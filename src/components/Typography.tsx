import styled, { css } from "styled-components";

interface HeadingProps {
  display?: boolean;
}

interface TextProps {
  cursive?: boolean;
  grey?: boolean;
  bold?: boolean;
  strikeThru?: boolean;
}

const baseHeadingStyles = css<HeadingProps>`
  font-family: ${({ display }: any) =>
    display ? "'Open Sans', sans-serif" : "Alata, sans-serif;"};
  font-weight: ${({ display }) => (display ? 300 : 500)};
  font-size: ${({ display }) => (display ? 2.2 : 1.9)}em;

  @media (min-width: ${({ theme }) => theme.breakPointMd}px) {
    font-size: ${({ display }) => (display ? 2.5 : 2.2)}em;
  }
`;

const baseTextStyles = css<TextProps>`
  ${({ cursive }) => (cursive ? "font-style: italic;" : "")}
  ${({ bold }) => (bold ? "font-family: Alata, sans-serif;" : "")}
  ${({ strikeThru }) => (strikeThru ? "text-decoration: line-through;" : "")}
  
  color: ${({ grey, theme }: any) => (grey ? theme.grey : theme.black)};
  margin: 0;
`;

export const H1 = styled.h1<HeadingProps>`
  ${baseTextStyles}
  ${baseHeadingStyles};
`;

export const H2 = styled.h2<HeadingProps>`
  ${baseTextStyles}
  ${baseHeadingStyles};
  font-size: ${({ display }) => (display ? 2 : 1.5)}em;
  @media (min-width: ${({ theme }) => theme.breakPointMd}px) {
    font-size: ${({ display }) => (display ? 2.2 : 1.8)}em;
  }
`;

export const P = styled.p<TextProps>`
  ${baseTextStyles}
  font-weight: 300;
`;

export const Span = styled.span<TextProps>`
  ${baseTextStyles}
  font-weight: 300;
`;
