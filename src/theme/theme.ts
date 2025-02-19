import { createTheme } from "@shopify/restyle";

// Cores principais que representam energia solar e sustentabilidade
const palette = {
  // Cores principais
  sunYellow: "#FFD700", // Cor do sol, energia
  leafGreen: "#4CAF50", // Sustentabilidade
  skyBlue: "#2196F3", // Tecnologia, confiança

  // Tons neutros
  white: "#FFFFFF",
  black: "#000000",
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",

  // Cores de feedback
  success: "#4CAF50",
  error: "#F44336",
  warning: "#FFC107",
  info: "#2196F3",
};

// Definição do tema
const theme = createTheme({
  colors: {
    // Cores de background
    mainBackground: palette.white,
    secondaryBackground: palette.gray50,

    // Cores de texto
    mainText: palette.gray900,
    secondaryText: palette.gray600,

    // Cores de ação
    primary: palette.sunYellow,
    secondary: palette.leafGreen,
    accent: palette.skyBlue,

    // Cores de feedback
    success: palette.success,
    error: palette.error,
    warning: palette.warning,
    info: palette.info,

    // Cores de card e elementos
    cardBackground: palette.white,
    cardBorder: palette.gray200,
    divider: palette.gray200,
  },
  spacing: {
    s2: 2,
    s4: 4,
    s6: 6,
    s8: 8,
    s12: 12,
    s15: 15,
    s16: 16,
    s20: 20,
    s24: 24,
    s26: 26,
    s32: 32,
    s40: 40,
    s48: 48,
    s50: 50,
    s56: 56,
  },
  borderRadii: {
    s2: 2,
    s4: 4,
    s6: 6,
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  textVariants: {
    defaults: {
      color: "mainText",
      fontSize: 16,
    },
    header: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 34,
      lineHeight: 42.5,
      color: "mainText",
    },
    subheader: {
      fontFamily: "System",
      fontWeight: "600",
      fontSize: 28,
      lineHeight: 36,
      color: "mainText",
    },
    body: {
      fontFamily: "System",
      fontSize: 16,
      lineHeight: 24,
      color: "mainText",
    },
    label: {
      fontFamily: "System",
      fontSize: 14,
      lineHeight: 18,
      color: "secondaryText",
    },
    button: {
      fontFamily: "System",
      fontSize: 16,
      fontWeight: "600",
      color: "white",
    },
  },

  // Definições para cards
  cardVariants: {
    defaults: {
      backgroundColor: "cardBackground",
      borderRadius: "m",
      padding: "m",
      borderWidth: 1,
      borderColor: "cardBorder",
    },
    elevated: {
      backgroundColor: "cardBackground",
      borderRadius: "m",
      padding: "m",
      shadowColor: "black",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 2,
    },
  },

  // Definições para botões
  buttonVariants: {
    defaults: {
      borderRadius: "m",
      padding: "m",
    },
    primary: {
      backgroundColor: "primary",
    },
    secondary: {
      backgroundColor: "secondary",
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "primary",
    },
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
export type gap = keyof Theme["spacing"];

export default theme;
