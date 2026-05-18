import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { IMCContextValues } from "../context/IMCContext";

export default function IMCResultado() {
  const { imc, categoria } = useContext(IMCContextValues);

  return (
    <View style={styles.container}>
      <Text style={styles.resultado}>IMC: {imc.toFixed(2)}</Text>
      <Text style={styles.categoria}>Categoría: {categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    gap: 10,
  },
  resultado: {
    fontSize: 30,
    fontWeight: "bold",
  },
  categoria: {
    fontSize: 24,
  },
});
