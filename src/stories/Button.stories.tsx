import React from "react";
import { Box } from "ticeboxes";
import Button from "../components/Button";
import { withDesign } from "storybook-addon-designs";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "General/Button",
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/jRAVbn87Ogv1QSt0yFQzdh/TimeTrackerApp?node-id=60%3A474",
    },
  },
};

export const All: Story = () => (
  <>
    <Box mb="4">
      <Button>Primary</Button>
    </Box>
    <Box mb="4">
      <Button secondary>Secondary</Button>
    </Box>
    <Box mb="4">
      <Button transparent>Transparent</Button>
    </Box>
    <Box mb="4">
      <Button small>Small</Button>
    </Box>
    <Box mb="4">
      <Button secondary small>
        Small
      </Button>
    </Box>
    <Box mb="4">
      <Button transparent small>
        Small
      </Button>
    </Box>
    <Box mb="4">
      <Button transparent disabled>
        Transparent disabled
      </Button>
    </Box>

    <Box mb="4">
      <Button transparent small disabled>
        Transparent disabled small
      </Button>
    </Box>
  </>
);
