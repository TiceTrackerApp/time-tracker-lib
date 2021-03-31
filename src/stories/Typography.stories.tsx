import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { H1, P } from "../components/Typography";
import { Box } from "ticeboxes";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "General/Typography",
  component: H1,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/jRAVbn87Ogv1QSt0yFQzdh/TimeTrackerApp?node-id=60%3A481",
    },
  },
} as Meta;

export const Typography: Story = () => (
  <Box>
    <Box mb="4">
      <H1 display>Display 1</H1>
    </Box>
    <Box mb="4">
      <H1>Heading 1</H1>
    </Box>

    <Box mb="4">
      <P>Paragraph</P>
    </Box>

    <Box mb="4">
      <P cursive>Paragraph cursive</P>
    </Box>

    <Box mb="4">
      <P grey>Input placeholder</P>
    </Box>
  </Box>
);
