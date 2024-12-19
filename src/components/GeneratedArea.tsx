import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';

type GeneratedAreaProps = {
  loading: boolean;
  generatedHTML: string | null;
};

const GeneratedArea: React.FC<GeneratedAreaProps> = ({ loading, generatedHTML }) => {
  const placeholderStyles = {
    padding: 2,
    border: '1px solid #ccc',
    borderRadius: 5,
    minHeight: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box
      sx={{
        marginTop: 3,
        width: '100%',
        textAlign: 'center',
      }}
    >
      {loading ? (
        <Skeleton variant="rectangular" sx={placeholderStyles} />
      ) : generatedHTML ? (
        <Box dangerouslySetInnerHTML={{ __html: generatedHTML }} sx={placeholderStyles} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            ...placeholderStyles,
            color: '#888',
          }}
        >
          Your generated button will appear here!
        </Typography>
      )}
    </Box>
  );
};

export default GeneratedArea;
