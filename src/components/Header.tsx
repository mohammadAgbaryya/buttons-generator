import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Face } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <Face />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BUTTONS GENERATOR
        </Typography>
        <Typography variant="body1" color="inherit" sx={{ marginRight: 2 }}>
          Hey there, welcome!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
