import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function InspectionWarningScreen({ goBack, goToFeatures }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspection Acceptance Warning</Text>

      <Text style={styles.text}>
        By accepting an inspection request, you must be prepared that the
        customer may ask you to continue with the repair.
      </Text>

      <Pressable style={styles.primaryBtn} onPress={goToFeatures}>
        <Text style={styles.primaryText}>Continue to accept</Text>
      </Pressable>

      <Pressable onPress={goBack}>
        <Text style={styles.cancel}>Cancel and go back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#555",
    marginBottom: 20,
  },
  primaryBtn: {
    backgroundColor: "#1E1D74",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancel: {
    marginTop: 15,
    textAlign: "center",
    color: "#777",
  },
});
