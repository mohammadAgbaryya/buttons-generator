import React from 'react';
import inputsConfigs from '../configs/inputsConfigs';
import Box from '@mui/system/Box';
import Mode from '../models/Mode';

type InputFieldsProps = {
  formValues: Record<string, string>;
  errors: Record<string, string>;
  handleInputChange: (id: string, value: string) => void;
  mode: Mode;
};

const InputFields: React.FC<InputFieldsProps> = ({
  formValues,
  errors,
  handleInputChange,
  mode,
}) => {
  return inputsConfigs[mode].map(({ id, Component, props }) => (
    <Box key={id} sx={{ width: '100%' }}>
      <Component
        id={id}
        value={formValues[id]}
        onChange={(e) => handleInputChange(id, e.target.value as string)}
        error={!!errors[id]}
        helperText={errors[id]}
        {...props}
      />
    </Box>
  ));
};

export default InputFields;
