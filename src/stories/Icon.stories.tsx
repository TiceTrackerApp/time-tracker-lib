import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Box } from "ticeboxes";
import FolderIcon from "../components/icons/FolderIcon";
import BinIcon from "../components/icons/BinIcon";
import CaretLeftIcon from "../components/icons/CaretLeftIcon";

export default {
  title: "General/Icons",
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/jRAVbn87Ogv1QSt0yFQzdh/TimeTrackerApp?node-id=60%3A1773",
    },
  },
};

export const All: Story = () => (
  <>
    <Box>
      <FolderIcon size="big" />
    </Box>
    <Box>
      <CaretLeftIcon />
    </Box>
    <Box>
      <FolderIcon />
    </Box>
    <Box>
      <BinIcon />
    </Box>
  </>
);
