import React from "react";
import { Box, Flex } from "ticeboxes";
import { TextFieldSuggestion } from "./Form";

interface Props {
  suggestions?: string[];
  onSelect?: (suggestion: string) => void;
}

const TextFieldSuggestionsList: React.FC<Props> = ({
  suggestions,
  onSelect,
}) => {
  const handleSelect = (sugg: string) => {
    if (onSelect) {
      onSelect(sugg);
    }
  };

  return (
    <Box mt="2" style={{ position: "absolute", width: "100%", zIndex: 1 }}>
      <Flex>
        <Box style={{ width: 30 }}></Box>
        <Box w-100>
          {suggestions
            ? suggestions.map((sugg) => (
                <Box mb="2">
                  <TextFieldSuggestion onClick={() => handleSelect(sugg)}>
                    {sugg}
                  </TextFieldSuggestion>
                </Box>
              ))
            : null}
        </Box>
      </Flex>
    </Box>
  );
};

export default TextFieldSuggestionsList;
