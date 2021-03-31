import React from "react";
import { H1 } from "./Typography";
import { Box, Flex } from "ticeboxes";
import StopwatchButton from "./StopwatchButton";

interface Props {
  onClick?: () => void;
}

const Logo: React.FC<Props> = ({ onClick }) => {
  return (
    <Box text-center d-md-flex align-items-md-end justify-content-md-center>
      <Flex mb="3" mb-md="0" mr-md="4" justify-content="center">
        <StopwatchButton onClick={onClick} />
      </Flex>
      <H1 display>Time Tracker App</H1>
    </Box>
  );
};

export default Logo;
