import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <SmartButtonIcon sx={{ fontSize: 64, color: '#74b9ff' }} />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Spicy Rice' }}>
          BUTTONS GENERATOR
        </Typography>
        <Typography variant="h5" color="inherit" sx={{ marginRight: 2 }}>
          Hey there, welcome!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
