import React from 'react';
import MuiTextField from '@mui/material/TextField';

type InputProps = {
  id: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  error?: string;
};

const TextField: React.FC<InputProps> = ({ id, value, placeholder, onChange, error }) => {
  return (
    <MuiTextField
      id={id}
      label={placeholder}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={!!error}
      helperText={error}
      fullWidth
    />
  );
};

export default TextField;
