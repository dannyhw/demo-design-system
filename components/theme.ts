export const colors = {
  // Backgrounds
  background: '#0c0c0e',
  backgroundSecondary: '#141416',
  backgroundTertiary: '#1c1c1f',
  backgroundHover: '#242428',

  // Foregrounds
  foreground: '#f0f0f2',
  foregroundSecondary: '#9a9aa0',
  foregroundTertiary: '#5e5e66',

  // Borders
  border: '#2c2c30',
  borderLight: '#1e1e22',

  // Accents
  accent: '#0070f3',
  accentHover: '#0060df',
  accentLight: 'rgba(0, 112, 243, 0.1)',

  // Status
  success: '#0070f3',
  successLight: 'rgba(0, 112, 243, 0.1)',
  warning: '#f5a623',
  warningLight: 'rgba(245, 166, 35, 0.1)',
  error: '#e00',
  errorLight: 'rgba(238, 0, 0, 0.1)',

  // Specific
  white: '#f0f0f2',
  black: '#0c0c0e',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const radius = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  full: 9999,
};

export const typography = {
  fontFamily: {
    regular: undefined, // Uses system default
    medium: undefined,
    semibold: undefined,
    bold: undefined,
  },
  fontSize: {
    xs: 11,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    display: 48,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 5,
  },
};

const theme = {
  colors,
  spacing,
  radius,
  typography,
  shadows,
};

export default theme;
