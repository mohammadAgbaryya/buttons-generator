import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import SelectOption from '../../models/SelectOption';

type SelectProps = {
  id: string;
  placeholder?: string;
  options?: SelectOption[];
};

const Select: React.FC<SelectProps> = ({
  id,
  placeholder,
  options,
  ...rest
}) => {
  return (
    <TextField
      id={id}
      select
      label={placeholder}
      fullWidth
      variant="outlined"
      {...rest}
    >
      {options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
