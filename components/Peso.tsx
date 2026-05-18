import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import { IMCContextValues } from "../context/IMCContext";

export default function Peso() {
  const { peso, aumentarPeso, disminuirPeso } = useContext(IMCContextValues);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Peso: {peso} KG</Text>
      <View style={styles.botones}>
        <Button title="+1 KG" onPress={aumentarPeso} />
        <Button title="-1 KG" onPress={disminuirPeso} />
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
