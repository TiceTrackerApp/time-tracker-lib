import React from "react";
import { Box } from "ticeboxes";
import Card from "../components/Card";
import { P } from "../components/Typography";

export default {
  title: "General/Card",
  component: Card,
};

export const Main = () => (
  <Card>
    <Box p="3">
      <P>Hi there</P>
    </Box>
  </Card>
);
