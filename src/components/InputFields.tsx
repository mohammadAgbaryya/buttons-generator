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
  return inputsConfigs[mode].map(({ id, Component, placeholder }) => (
    <Box key={id} sx={{ width: '100%' }}>
      <Component
        id={id}
        value={formValues[id] || ''}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(id, e.target.value)}
        error={!!errors[id]}
        helperText={errors[id]}
      />
    </Box>
  ));
};

export default InputFields;
