import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Box } from "ticeboxes";
import StopwatchButton from "../components/StopwatchButton";

export default {
  title: "General/StopwatchButton",
  component: StopwatchButton,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/jRAVbn87Ogv1QSt0yFQzdh/TimeTrackerApp?node-id=47%3A25",
    },
  },
};

export const Big: Story = () => (
  <>
    <Box mb="3">
      <StopwatchButton />
    </Box>
    <Box mb="3">
      <StopwatchButton playing />
    </Box>
    <Box mb="3">
      <StopwatchButton loading />
    </Box>
  </>
);

export const Small: Story = () => (
  <>
    <Box mb="3">
      <StopwatchButton size="small" />
    </Box>
    <Box mb="3">
      <StopwatchButton size="small" playing />
    </Box>
    <Box mb="3">
      <StopwatchButton size="small" loading />
    </Box>
  </>
);
