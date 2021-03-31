import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Box } from "ticeboxes";
import Counter from "../components/Counter";

export default {
  title: "General/Counter",
  component: Counter,
  decorations: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/jRAVbn87Ogv1QSt0yFQzdh/TimeTrackerApp?node-id=47%3A25",
    },
  },
};

export const Main = () => (
  <>
    <Box>
      <Counter />
    </Box>
  </>
);

export const Running = () => (
  <>
    <Box>
      <Counter running={true} />
    </Box>
  </>
);
