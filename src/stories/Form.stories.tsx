import { Story } from "@storybook/react/types-6-0";
import { Form, Formik } from "formik";
import React, { FormEvent, useState } from "react";
import { withDesign } from "storybook-addon-designs";
import { Box } from "ticeboxes";
import FolderOpenIcon from "../components/icons/FolderIcon";
import InputField from "../components/form/InputField";

export default {
  title: "General/Form",
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/jRAVbn87Ogv1QSt0yFQzdh/TimeTrackerApp?node-id=60%3A482",
    },
  },
};

export const Inputs: Story = () => (
  <Formik
    onSubmit={(values) => console.log(values)}
    initialValues={{ description: "", project: "" }}
  >
    {() => (
      <Form>
        <Box mb="4">
          <InputField name="description" placeholder="Description..." />
        </Box>
        <Box>
          <InputField
            name="project"
            placeholder="Project..."
            icon={<FolderOpenIcon />}
          />
        </Box>
      </Form>
    )}
  </Formik>
);

const projects = [
  "Ticekralt Portfolio",
  "Ticekralt Freelance",
  "Rijschool Lamar",
  "House cleaning",
];

export const InputWithDropdown: Story = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSuggestions(
      projects.filter((sug) =>
        sug.match(new RegExp(e.currentTarget.value, "i"))
      )
    );
  };

  const clearSuggestions = () => setSuggestions([]);

  return (
    <Formik
      onSubmit={() => setSuggestions([])}
      initialValues={{ description: "", project: "" }}
    >
      {() => (
        <Form>
          <Box>
            <InputField
              name="project"
              placeholder="Project..."
              suggestions={suggestions}
              onSelectSuggestion={clearSuggestions}
              onChange={handleChange}
              icon={<FolderOpenIcon />}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};
