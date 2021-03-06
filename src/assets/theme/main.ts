import { createTheme } from "@material-ui/core/styles";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#ff2338',
      light: '#ff4f5f',
      dark: '#F50017',
    },
    secondary: {
      main: '#7181eb',
      light: '#4E62E7',
      dark: '#3644a1',
    },
  },
  typography: {
    h1: { fontSize: '3rem' },
    h3: { fontSize: '1.5rem', fontWeight: 500 },
    h4: { fontSize: '1.2rem', fontWeight: 500 },
    h5: { fontSize: '1.00rem', fontWeight: 500  },
    h6: { fontSize: '0.50rem' }, 
    h2: { fontSize: '2rem', fontWeight: 500 },
    body1: {
      opacity: 0.75,
      lineHeight: 1.1,
    },
    body2: {
      opacity: 0.6,
      lineHeight: 1.2,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        
      },
    },
  },
})

export default mainTheme