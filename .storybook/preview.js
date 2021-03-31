import React from "react";
import { addDecorator } from "@storybook/react";
import ThemeWrapper from "../src/components/ThemeWrapper";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator((storyFn) => <ThemeWrapper>{storyFn()}</ThemeWrapper>);
