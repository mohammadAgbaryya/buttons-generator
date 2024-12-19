import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

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
      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : undefined}
      sx={{ textTransform: 'none', padding: 2 }}
      fullWidth
    >
      {loading ? 'Loading...' : 'Generate'}
    </Button>
  );
};

export default GenerateButtonProps;
