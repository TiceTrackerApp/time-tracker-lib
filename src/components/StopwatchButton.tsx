import React from "react";
import styled from "styled-components";
import { ButtonStyles } from "./Button";
import Loading from "./Loading";

interface ButtonProps {
  small?: boolean;
}

const RoundButton = styled.button<ButtonProps>`
  ${ButtonStyles}
  width: ${({ small }) => (small ? 22 : 50)}px;
  height: ${({ small }) => (small ? 22 : 50)}px;
  margin-top: ${({ small }) => (small ? 7 : 10)}px;
  border-radius: 50%;
  padding: 0;
  position: relative;
`;

const Square = styled.div<ButtonProps>`
  height: ${({ small }) => (small ? 8 : 14)}px;
  width: ${({ small }) => (small ? 8 : 14)}px;
  background-color: ${(props) => props.theme.white};
`;

const Triangle = styled.img<ButtonProps>`
  height: ${({ small }) => (small ? 8 : 16)}px;
  margin-left: ${({ small }) => (small ? 2 : 4)}px;
  transform: rotate(90deg);
`;

const Topbar = styled.span<ButtonProps>`
  position: absolute;
  top: ${({ small }) => (small ? -6 : -10)}px;
  background-color: ${({ theme }) => theme.red};
  height: ${({ small }) => (small ? 4 : 7)}px;
  width: ${({ small }) => (small ? 11 : 23)}px;
`;

const TopRightBar = styled.span<ButtonProps>`
  position: absolute;
  top: -1px;
  right: ${({ small }) => (small ? -2 : -1)}px;
  background-color: ${({ theme }) => theme.red};
  height: ${({ small }) => (small ? 4 : 7)}px;
  width: ${({ small }) => (small ? 5 : 10)}px;
  transform: rotate(45deg);
`;

interface Props {
  playing?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "submit";
  size?: "small" | "normal";
}

const StopwatchButton: React.FC<Props> = ({
  playing,
  loading,
  onClick,
  type,
  size,
}) => {
  const isSmall = size === "small";

  const showIcon = () => {
    if (loading) return <Loading size={isSmall ? "small" : "medium"} />;
    if (playing) return <Square small={isSmall} />;
    return (
      <Triangle
        small={isSmall}
        src="https://app.time-tracker-app.com/triangle.svg"
        alt="Start"
      />
    );
  };

  return (
    <RoundButton
      id="stopwatchButton"
      small={isSmall}
      type={type}
      onClick={onClick}
    >
      <Topbar small={isSmall} />
      <TopRightBar small={isSmall} />
      {showIcon()}
    </RoundButton>
  );
};

export default StopwatchButton;
