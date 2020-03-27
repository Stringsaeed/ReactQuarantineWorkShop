import React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

export const FormInput = ({
  label,
  caption,
  error,
  placeholder,
  required,
  min,
  max,
  onBlur,
  onChange,
  autoFocus,
  type,
}) => {
  return (
    <FormControl
      label={() => label}
      caption={() => caption}
      error={() => error}
    >
      <Input
        {...{
          min,
          max,
          onBlur,
          onChange,
          autoFocus,
          placeholder,
          required,
          type,
        }}
      />
    </FormControl>
  );
};
