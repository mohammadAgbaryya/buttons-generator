import React from 'react';
import ButtonGenerator from './components/ButtonGenerator';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import { ThemeProvider, CssBaseline } from '@mui/material';
import customTheme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* CssBaseline applies global resets */}
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ButtonGenerator />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
