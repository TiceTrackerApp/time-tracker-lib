import React from "react";
import { Icon } from "@iconify/react";
import appleFilled from "@iconify/icons-ant-design/apple-filled";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";

interface Props {
  href?: string;
  comingSoon?: boolean;
}

const AppleIcon: React.FC<Props> = ({ href, comingSoon }) => {
  const theme = useTheme() as Theme;

  const icon = () => (
    <Icon
      icon={appleFilled}
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

export default AppleIcon;
