import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { IMCContextValues } from "../context/IMCContext";
import Peso from "./Peso";
import Altura from "./Altura";

export default function IMCFormulario() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <Peso />
      <Altura />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 25,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
