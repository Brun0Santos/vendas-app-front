import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChanges?: (value: any) => void;
  label: string;
  placeholder?: string;
  functionParser?: (value: string) => string;
}

function InputForm({
  onChanges,
  label,
  placeholder,
  functionParser,
  ...props
}: InputProps & TextFieldProps) {
  const isParserInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;

    const functionParsers = (functionParser && functionParser(String(value))) || value;

    if (onChanges) {
      onChanges(functionParsers);
    }
  };

  return (
    <TextField
      id="fullWidth"
      variant="outlined"
      type="text"
      label={label}
      placeholder={placeholder}
      onChange={isParserInputChange}
      size="small"
      {...props}
    />
  );
}

export default InputForm;
