import React from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material';

type ToggleOption = {
  value: string;
  label: string;
};

type ToggleGroupProps = {
  value: string;
  options: ToggleOption[];
  onChange: (newValue: string) => void;
  exclusive?: boolean;
} & Omit<ToggleButtonGroupProps, 'value' | 'onChange'>;

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  value,
  options,
  onChange,
  exclusive = true,
  ...rest
}) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive={exclusive}
      onChange={(_, newValue) => {
        if (newValue) onChange(newValue);
      }}
      {...rest}
    >
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          value={option.value}
          sx={{
            textTransform: 'none',
            background: '#fff',
            '&.Mui-selected': {
              backgroundColor: 'primary.main',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            },
          }}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleGroup;
