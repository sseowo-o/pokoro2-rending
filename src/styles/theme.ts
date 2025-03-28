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
      '@media (max-width: 1600px)': {
        fontSize: '4rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '2.5rem',
        marginBottom: '0.75rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '3.25rem',
      fontWeight: 700,
      textAlign: 'center',
      '@media (max-width: 1200px)': {
        fontSize: '2.75rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '2rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      textAlign: 'center',
      color: '#212121',
      '@media (max-width: 1200px)': {
        fontSize: '2.25rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      marginBottom: '1rem',
      fontWeight: 700,
      textAlign: 'center',
      color: '#212121',
      fontSize: '1.75rem',
      '@media (max-width: 1200px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.125rem',
      },
    },
    h5: {
      fontWeight: 600,
      color: '#212121',
      fontSize: '1.5rem',
      '@media (max-width: 1200px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '1.125rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
      color: '#333',
      lineHeight: 1.4,
      '@media (max-width: 1200px)': {
        fontSize: '1.125rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '1rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '0.875rem',
      },
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