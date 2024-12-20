import React, { useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GenerateButton from './GenerateButton';
import inputsConfigs from '../configs/inputsConfigs';
import { generateStyledButton } from '../utils/openai';
import useDynamicForm from '../hooks/useDynamicForm';
import InputFields from './InputFields';
import GeneratedArea from './GeneratedArea';
import Mode from '../models/Mode';
import ToggleGroup from './core/ToggleGroup';

const ButtonGenerator: React.FC = () => {
  const [mode, setMode] = useState<Mode>(Mode.SIMPLE);
  const { formValues, errors, handleInputChange, validateForm } = useDynamicForm(
    inputsConfigs[mode]
  );
  const [loading, setLoading] = React.useState(false);
  const [generatedHTML, setGeneratedHTML] = React.useState<string | null>(null);

  const generateButton = async (): Promise<void> => {
    if (!validateForm()) return;

    setLoading(true);

    const prompt = inputsConfigs[mode]
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
    <Grid
      container
      spacing={4}
      sx={{
        padding: 4,
        flexGrow: 1,
      }}
    >
      {/* Left Column: Mode Selector, Input Fields, Generate Button */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Mode Selector */}
          <ToggleGroup
            value={mode}
            options={[
              { value: Mode.SIMPLE, label: 'Simple Generator' },
              { value: Mode.ADVANCED, label: 'Advanced Generator' },
            ]}
            onChange={(newValue) => setMode(newValue as Mode)}
          />

          {/* Input Fields */}
          <InputFields
            formValues={formValues}
            errors={errors}
            handleInputChange={handleInputChange}
            mode={mode}
          />

          {/* Generate Button */}
          <GenerateButton loading={loading} onClick={generateButton} />
        </Box>
      </Grid>

      {/* Right Column: Generated Area */}
      <Grid size={{ xs: 12, md: 7 }}>
        <GeneratedArea loading={loading} generatedHTML={generatedHTML} />
      </Grid>
    </Grid>
  );
};

export default ButtonGenerator;
