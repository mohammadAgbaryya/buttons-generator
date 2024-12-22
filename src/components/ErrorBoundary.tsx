import React, { Component, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error Boundary Caught an Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            backgroundColor: 'white',
            gap: 2,
          }}
        >
          {/* Error Icon */}
          <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />

          {/* Error Title */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: 'error.main', mb: 1 }}
          >
            Something went wrong!
          </Typography>

          {/* Error Message */}
          <Typography variant="body1" sx={{ color: 'error.main', mb: 2 }}>
            {this.state.error?.message || 'An unexpected error has occurred.'}
          </Typography>

          {/* Refresh Button */}
          <Button
            variant="contained"
            color="error"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
