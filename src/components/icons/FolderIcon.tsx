import React from "react";
import { useTheme } from "styled-components";
import { Icon } from "@iconify/react";
import folderIcon from "@iconify/icons-mdi-light/folder";

interface Props {
  size?: "small" | "medium" | "big";
}

const FolderIcon: React.FC<Props> = ({ size = "small" }) => {
  const sizes = {
    small: {
      width: 25,
      height: 25,
    },
    medium: {
      width: 50,
      height: 50,
    },
    big: {
      width: 100,
      height: 100,
    },
  };

  const { black } = useTheme() as any;
  const { width, height } = sizes[size];

  return <Icon icon={folderIcon} style={{ height, width, color: black }} />;
};

export default FolderIcon;
