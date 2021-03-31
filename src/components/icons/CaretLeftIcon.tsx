import React from "react";
import { Icon } from "@iconify/react";
import roundArrowBackIos from "@iconify/icons-ic/round-arrow-back-ios";
import { useTheme } from "styled-components";

interface Props {
  size?: "medium" | "big";
}

const CaretLeftIcon: React.FC<Props> = ({ size = "medium" }) => {
  const { black } = useTheme() as any;

  const sizes = {
    medium: {
      width: 30,
      height: 30,
    },
    big: {
      width: 35,
      height: 35,
    },
  };

  const { width, height } = sizes[size];

  return (
    <Icon icon={roundArrowBackIos} style={{ color: black, width, height }} />
  );
};

export default CaretLeftIcon;
