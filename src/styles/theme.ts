import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    mainTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    mainTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    mainTitle: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    h1: {
      fontSize: '5rem',
      marginBottom: '1rem',
      lineHeight: 1.2,
      fontWeight: 600,
    },
    h2: {
      fontSize: '3.25rem',
      fontWeight: 700,
      textAlign: 'center',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      textAlign: 'center',
      color: '#212121',
    },
    h4: {
      marginBottom: '1rem',
      fontWeight: 700,
      textAlign: 'center',
      color: '#212121',
    },
    h5: {
      fontWeight: 600,
      color: '#212121',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
      color: '#333',
      lineHeight: 1.4,
    },
  },
  palette: {
    primary: {
      main: '#FF6B6B',
    },
    secondary: {
      main: '#FFB347',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFAE1',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          mainTitle: 'h1',
        },
      },
      styleOverrides: {
        root: {
          wordBreak: 'keep-all',
          wordWrap: 'break-word',
        },
      },
    },
  },
});

export default theme; 