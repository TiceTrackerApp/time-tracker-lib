import React from "react";
import { Icon } from "@iconify/react";
import androidFilled from "@iconify/icons-ant-design/android-filled";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";

interface Props {
  href?: string;
  comingSoon?: boolean;
}

const AndroidIcon: React.FC<Props> = ({ href, comingSoon }) => {
  const theme = useTheme() as Theme;

  const icon = () => (
    <Icon
      icon={androidFilled}
      style={{
        color: comingSoon ? theme.lightGrey : theme.red,
        height: 90,
        width: 90,
      }}
    />
  );

  if (href && !comingSoon) return <a href={href}>{icon()}</a>;

  return icon();
};

export default AndroidIcon;
