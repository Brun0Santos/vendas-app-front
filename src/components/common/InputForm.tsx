import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChanges?: (value: any) => void;
  label: string;
  placeholder?: string;
}

function InputForm({ onChanges, label, placeholder, ...props }: InputProps & TextFieldProps) {
  return (
    <TextField
      id="fullWidth"
      variant="outlined"
      type="text"
      label={label}
      placeholder={placeholder}
      onChange={(e) => {
        if (onChanges) {
          onChanges(e.target.value);
        }
      }}
      size="small"
      {...props}
    />
  );
}

export default InputForm;
