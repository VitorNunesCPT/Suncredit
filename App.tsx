import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/modules/auth/contexts/AuthContext";
import { Routes } from "./src/routes";
import theme from "./src/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <SafeAreaView
            style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
          >
            <Routes />
            <StatusBar style="auto" />
          </SafeAreaView>
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
