import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2980b9',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Itim, serif;',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            backgroundColor: 'white',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: 'white',
        },
      },
    },
  },
});

export default customTheme;
