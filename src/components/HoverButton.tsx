import styled from "styled-components";

export const HoverIconButton = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: transparent;
  transition: background-color 150ms ease-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.backgroundDark};
  }
  svg {
    color: ${({ theme }) => theme.grey};
  }
`;

export const HoverButton = styled.button`
  padding: 3px 5px;
  border-radius: 3px;
  color: ${({ theme }) => theme.grey};
  border: none;
  outline: none;
  background-color: transparent;
  transition: background-color 150ms ease-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.backgroundDark};
  }
`;
