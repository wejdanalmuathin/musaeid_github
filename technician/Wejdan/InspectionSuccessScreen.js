import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function InspectionSuccessScreen({ goToInspection, goToReport }) {
  return (
    <View style={styles.container}>
      
      {/* CENTER CONTENT */}
      <View style={styles.content}>
        
        {/* ICON */}
        <View style={styles.iconCircle}>
          <MaterialIcons name="check" size={60} color="#1E1D74" />
        </View>

        {/* TITLE */}
        <Text style={styles.title}>
          Inspection Completed Successfully
        </Text>

        {/* SUBTEXT */}
        <Text style={styles.subtitle}>
          Please proceed to complete the report and finalize the request.
        </Text>
      </View>

      {/* BOTTOM AREA */}
      <View style={styles.footer}>
        
        {/* WRITE REPORT BUTTON */}
        <Pressable style={styles.primaryBtn} onPress={goToReport}>
          <Text style={styles.primaryText}>Write Inspection Report</Text>
        </Pressable>

        {/* SMALL TEXT */}
        <Text style={styles.footerNote}>
          Saudi Arabian Context (SAR)
        </Text>

        {/* BACK BUTTON (optional but useful) */}
        <Pressable onPress={goToInspection}>
          <Text style={styles.backText}>← Back to Inspection</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  iconCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#1E1D7420",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E1D74",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    maxWidth: 260,
  },

  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  primaryBtn: {
    backgroundColor: "#1E1D74",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  primaryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  footerNote: {
    textAlign: "center",
    fontSize: 10,
    color: "#aaa",
    marginTop: 12,
    marginBottom: 10,
  },

  backText: {
    textAlign: "center",
    color: "#1E1D74",
    fontWeight: "bold",
  },
});
