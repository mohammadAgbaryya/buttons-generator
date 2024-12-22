import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GenerateButton from './GenerateButton';
import inputsConfigs from '../configs/inputsConfigs';
import useButtonGenerator from '../hooks/useButtonGenerator';
import InputFields from './InputFields';
import GeneratedArea from './GeneratedArea';
import Mode from '../models/Mode';
import ToggleGroup from './core/ToggleGroup';

const ButtonGenerator: React.FC = () => {
  const {
    mode,
    values,
    errors,
    isLoading,
    generatedHTML,
    setMode,
    handleInputChange,
    generate,
  } = useButtonGenerator(inputsConfigs);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        pt: 4,
        pb: 1,
        px: 4,
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
              { value: Mode.BASIC, label: 'Basic Generator' },
              { value: Mode.THEME, label: 'Theme Generator' },
            ]}
            onChange={(newValue) => setMode(newValue as Mode)}
          />

          {/* Input Fields */}
          <InputFields
            formValues={values}
            errors={errors}
            handleInputChange={handleInputChange}
            mode={mode}
          />

          {/* Generate Button */}
          <GenerateButton loading={isLoading} onClick={generate} />
        </Box>
      </Grid>

      {/* Right Column: Generated Area */}
      <Grid size={{ xs: 12, md: 7 }}>
        <GeneratedArea loading={isLoading} generatedHTML={generatedHTML} />
      </Grid>
    </Grid>
  );
};

export default ButtonGenerator;
