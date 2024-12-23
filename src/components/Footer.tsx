import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
        © {currentYear} - Mohammad Agbaryya
      </Typography>
    </Box>
  );
};

export default Footer;
