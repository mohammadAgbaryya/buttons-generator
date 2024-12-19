import React from 'react';
import inputsConfigs from '../configs/inputsConfigs';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';

type InputFieldsProps = {
  formValues: Record<string, string>;
  errors: Record<string, string>;
  handleInputChange: (id: string, value: string) => void;
};

const InputFields: React.FC<InputFieldsProps> = ({ formValues, errors, handleInputChange }) => {
  return (
    <>
      {inputsConfigs.map((input) => (
        <Box key={input.id} sx={{ width: '100%' }}>
          <TextField
            variant="outlined"
            id={input.id}
            value={formValues[input.id] || ''}
            label={input.placeholder}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            error={!!errors[input.id]}
            helperText={errors[input.id]}
            fullWidth
          />
        </Box>
      ))}
    </>
  );
};

export default InputFields;
