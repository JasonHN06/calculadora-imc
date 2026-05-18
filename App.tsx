import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { IMCProvider } from "./providers/IMCProvider";
import IMCFormulario from "./components/IMCFormulario";
import IMCResultado from "./components/IMCResultado";

export default function App() {
  return (
    <IMCProvider>
      <View style={styles.container}>
        <IMCFormulario />
        <IMCResultado />
      </View>
    </IMCProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
