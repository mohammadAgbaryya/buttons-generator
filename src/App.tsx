import React from 'react';
import ButtonGenerator from './components/ButtonGenerator';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import { ThemeProvider, CssBaseline } from '@mui/material';
import customTheme from './theme';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background:
            'linear-gradient(180deg, rgba(225, 235, 255, 1) 0%, rgba(240, 244, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)',
        }}
      >
        <ErrorBoundary>
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
        </ErrorBoundary>
      </Box>
    </ThemeProvider>
  );
};

export default App;
