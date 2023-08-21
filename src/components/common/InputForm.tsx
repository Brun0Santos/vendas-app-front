import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

import { formatReal } from '@/utils/parserValues';

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChanges?: (value: any) => void;
  label: string;
  placeholder?: string;
  isParser?: boolean;
}

function InputForm({
  onChanges,
  label,
  placeholder,
  isParser,
  ...props
}: InputProps & TextFieldProps) {
  const isParserInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;

    if (value && isParser) {
      value = formatReal(value);
    }
    if (onChanges) {
      onChanges(value);
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
