import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

type GenerateButtonProps = {
  loading: boolean;
  onClick: () => void;
  disabled?: boolean;
};

const GenerateButtonProps: React.FC<GenerateButtonProps> = ({ loading, onClick, disabled }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled || loading}
      startIcon={
        loading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <SettingsSuggestIcon style={{ fontSize: 28 }} />
        )
      }
      sx={{ padding: 1, fontSize: 24 }}
      fullWidth
    >
      {loading ? 'Generating...' : 'Generate'}
    </Button>
  );
};

export default GenerateButtonProps;
