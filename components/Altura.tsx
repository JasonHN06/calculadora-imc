import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import { IMCContextValues } from "../context/IMCContext";

export default function Altura() {
  const { altura, aumentarAltura, disminuirAltura } =
    useContext(IMCContextValues);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Altura: {altura.toFixed(2)} M</Text>
      <View style={styles.botones}>
        <Button title="+1 CM" onPress={aumentarAltura} />
        <Button title="-1 CM" onPress={disminuirAltura} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
