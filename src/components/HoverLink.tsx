import { Link } from "react-router-dom";
import styled from "styled-components";

export const HoverLink = styled(Link)`
  padding: 3px 5px;
  border-radius: 3px;
  color: ${({ theme }) => theme.grey};
  display: flex;
  align-items: center;
  transition: background-color 150ms ease-out;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.grey};
    background-color: ${({ theme }) => theme.backgroundDark};
  }
`;

export const HoverIconLink = styled(Link)`
  border-radius: 50%;
  padding: 4px 5px 7px 5px;
  background-color: transparent;
  transition: background-color 150ms ease-out;
  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.backgroundDark};
  }
`;
