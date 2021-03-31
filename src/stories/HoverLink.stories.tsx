import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HoverLink } from "../components/HoverLink";
import { Box } from "ticeboxes";

export default {
  title: "General/HoverLink",
  component: HoverLink,
};

export const Example = () => (
  <BrowserRouter>
    <Box>
      <HoverLink to="#">Example</HoverLink>
    </Box>
  </BrowserRouter>
);
