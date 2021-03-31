import {
  TextArea,
  TextField,
  TextFieldErrorMessage,
  TextFieldGroup,
  TextFieldIcon,
} from "./Form";
import { useField } from "formik";
import React, { ChangeEvent, InputHTMLAttributes } from "react";
import TextFieldSuggestionsList from "./TextFieldSuggestionsList";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: React.ReactNode;
  suggestions?: string[];
  noMarginBottom?: boolean;
  onSelectSuggestion?: (suggestion: string) => void;
};

const InputField: React.FC<Props> = ({ size: _, ...props }) => {
  const [field, { error }, helpers] = useField(props);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e as any);
    field.onChange(e);
  };

  const handleSelect = (sugg: string) => {
    if (props.onSelectSuggestion) {
      props.onSelectSuggestion(sugg);
    }

    helpers.setValue(sugg);
  };

  return (
    <TextFieldGroup noMarginBottom={props.noMarginBottom} isInvalid={!!error}>
      {props.icon && <TextFieldIcon>{props.icon}</TextFieldIcon>}
      {props.type === "textarea" ? (
        <TextArea
          {...(field as any)}
          {...props}
          onChange={handleChange}
          id={props.name}
          spaceLeft={!!props.icon}
        />
      ) : (
        <TextField
          {...field}
          {...props}
          onChange={handleChange}
          id={props.name}
          type={props.type || "text"}
          spaceLeft={!!props.icon}
        />
      )}
      <TextFieldErrorMessage content={error} />
      <TextFieldSuggestionsList
        suggestions={props.suggestions}
        onSelect={handleSelect}
      />
    </TextFieldGroup>
  );
};

export default InputField;
