import React from "react";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/global.css";

interface Props {}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
