import React from "react";
import { Icon } from "@iconify/react";
import trashCan from "@iconify/icons-carbon/trash-can";
import { useTheme } from "styled-components";

interface Props {}

const BinIcon: React.FC<Props> = () => {
  const { black } = useTheme() as any;

  return (
    <Icon icon={trashCan} style={{ color: black, height: 20, width: 20 }} />
  );
};

export default BinIcon;
