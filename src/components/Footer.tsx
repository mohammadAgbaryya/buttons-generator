import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        padding: 2,
        color: '#888',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body1">
        © {currentYear} - All rights reserved!
      </Typography>
    </Box>
  );
};

export default Footer;
