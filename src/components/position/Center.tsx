import React from "react";
import { Box, Flex } from "ticeboxes";

interface Props {}

const Center: React.FC<Props> = ({ children }) => {
  return (
    <Flex
      style={{ height: "100vh" }}
      align-items="center"
      justify-content="center"
    >
      <Box mb="5" w-100>
        {children}
      </Box>
    </Flex>
  );
};

export default Center;
