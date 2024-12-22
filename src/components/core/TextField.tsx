import React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';

type TextFieldProps = MuiTextFieldProps & {
  id: string;
};

const TextField: React.FC<TextFieldProps> = ({ id, placeholder, ...rest }) => {
  return (
    <MuiTextField
      id={id}
      label={placeholder}
      variant="outlined"
      fullWidth
      {...rest}
    />
  );
};

export default TextField;
