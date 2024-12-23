import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';

type ToggleOption = {
  value: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
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
      {options.map(({ value, label, icon }) => (
        <ToggleButton
          key={value}
          value={value}
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
          {icon} {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleGroup;
