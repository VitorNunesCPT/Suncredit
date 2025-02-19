import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import theme from "./src/theme/theme";
import Text from "./src/components/Text/Text";
import Box from "./src/components/Box/Box";
import { Button } from "./src/components/Button/Button";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
      >
        <Box flex={1} padding="s12" justifyContent="center" alignItems="center">
          <Box marginBottom="s12">
            <Text preset="headingLarge" color="primary" textAlign="center">
              SunCredit
            </Text>
            <Text preset="paragraphMedium" textAlign="center">
              Energia solar acessível para todos
            </Text>
          </Box>

          <Box gap="s12">
            <Button title="Começar Agora" variant="primary" size="large" />

            <Button title="Saiba Mais" variant="outline" size="medium" />
          </Box>

          <StatusBar style="auto" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
