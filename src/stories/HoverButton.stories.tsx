import React from "react";
import { HoverButton } from "../components/HoverButton";
import { Box } from "ticeboxes";

export default {
  title: "General/HoverButton",
  component: HoverButton,
};

export const Example = () => (
  <Box>
    <HoverButton onClick={() => console.log("hi")}>Example</HoverButton>
  </Box>
);
