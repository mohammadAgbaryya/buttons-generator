import React from 'react';
import { Box, Typography } from '@mui/material';
import GenerateButton from './GenerateButton';
import inputsConfigs from '../configs/inputsConfigs';
import { generateStyledButton } from '../utils/openai';
import useDynamicForm from '../hooks/useDynamicForm';
import InputFields from './InputFields';
import GeneratedArea from './GeneratedArea';

const ButtonGenerator: React.FC = () => {
  const { formValues, errors, handleInputChange, validateForm } = useDynamicForm(inputsConfigs);
  const [loading, setLoading] = React.useState(false);
  const [generatedHTML, setGeneratedHTML] = React.useState<string | null>(null);

  const generateButton = async (): Promise<void> => {
    if (!validateForm()) return;

    setLoading(true);

    const prompt = inputsConfigs
      .map((input) => `${input.name}: ${formValues[input.id]}`)
      .join('\n');

    try {
      const response = await generateStyledButton(prompt);
      setGeneratedHTML(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: 3,
        maxWidth: 600,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: '#888',
        }}
      >
        Fill & Generate
      </Typography>

      {/* Input Fields */}
      <InputFields formValues={formValues} errors={errors} handleInputChange={handleInputChange} />

      {/* Generate Button */}
      <GenerateButton loading={loading} onClick={generateButton} />

      {/* Generated Area */}
      <GeneratedArea loading={loading} generatedHTML={generatedHTML} />
    </Box>
  );
};

export default ButtonGenerator;
