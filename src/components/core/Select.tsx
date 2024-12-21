import React from 'react';
import MuiSelect, { SelectProps as MuiSelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SelectOption from '../../models/SelectOption';

type SelectProps = MuiSelectProps & {
  id: string;
  label?: string;
  options?: SelectOption[];
};

const Select: React.FC<SelectProps> = ({ id, label, options, ...rest }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <MuiSelect id={id} labelId={`${id}-label`} label={label} {...rest}>
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
