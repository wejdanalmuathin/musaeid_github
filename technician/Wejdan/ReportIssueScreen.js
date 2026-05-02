import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// Issue type options
const ISSUE_TYPES = [
  { label: "App Bug / Technical Error", value: "bug" },
  { label: "Payment / Wallet Issue", value: "payment" },
  { label: "Customer Dispute", value: "customer" },
  { label: "ID Verification", value: "verification" },
  { label: "Other", value: "other" },
];

export default function ReportIssueScreen({ goBack }) {
  const [issueType, setIssueType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topBar}>
        <Pressable onPress={goBack} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#1E1D74" />
        </Pressable>
        <Text style={styles.headerTitle}>Report an Issue</Text>
        <View style={styles.iconButton}>
          <Ionicons name="help-outline" size={24} color="#999" />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.title}>How can we help?</Text>
        <Text style={styles.subtitle}>
          Technician Support: Please provide details about the problem you encountered in the field.
        </Text>

        {/* Issue Category */}
        <Text style={styles.label}>Issue Category</Text>
        <Pressable
          style={styles.dropdownContainer}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Text style={[styles.dropdownText, !issueType && { color: "#999" }]}>
            {issueType ? issueType : "Select issue type"}
          </Text>
          <Ionicons
            name={dropdownOpen ? "chevron-up" : "chevron-down"}
            size={20}
            color="#777"
          />
        </Pressable>
        {dropdownOpen && (
          <FlatList
            data={ISSUE_TYPES}
            keyExtractor={(item) => item.value}
            style={styles.dropdownList}
            renderItem={({ item }) => (
              <Pressable
                style={styles.dropdownItem}
                onPress={() => {
                  setIssueType(item.label);
                  setDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item.label}</Text>
              </Pressable>
            )}
          />
        )}

        {/* Request ID */}
        <Text style={styles.label}>Request ID (Optional)</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="tag" size={20} color="#999" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="#MS-99210"
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>

        {/* Description */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          placeholder="Explain what happened..."
          style={styles.textarea}
          placeholderTextColor="#999"
          multiline
        />

        {/* Upload Screenshots */}
        <Text style={styles.label}>Upload Screenshots (Max 3)</Text>
        <View style={styles.screenshotRow}>
          {/* First card shows image */}
          <View style={styles.screenshotCard}>
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4KJq78LDmZcP1xFOKjiealTMPKcOcGiWN8N5EF_aUPMSLnnkCdoqG2refyPvQocYwyPtXpZvjVkXP7PXoOL0V-5F-BYZsC5GVEL2FLIVGIRPD7WhmGMv2GWo_bRR1VJ3SSOOSxgMKF7t4cFvu6B1ZgqlelZpTCmIix9AIAxxR_bd8hZt9mNIw12I72kiuPVCHu78RykShYZsbizFFJ-dLgDZ4BGYud1sTF9UY7oEBLf26kzNvQT-n7CQL3iSNO8MrSwRr0w5Yn0Y" }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
            <Pressable style={styles.removeButton}>
              <Ionicons name="close" size={14} color="#fff" />
            </Pressable>
          </View>

          {/* Add new screenshot */}
          <Pressable style={styles.addScreenshot}>
            <Ionicons name="add" size={24} color="#999" />
            <Text style={styles.addText}>Add</Text>
          </Pressable>

          {/* Placeholder screenshot */}
          <View style={styles.placeholderScreenshot}>
            <Ionicons name="image" size={24} color="#ccc" />
          </View>
        </View>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={20} color="#1E1D74" />
          <Text style={styles.infoText}>
            Our support team in Riyadh will review your report within 24 hours. You will receive a notification in the "Alerts" tab once resolved.
          </Text>
        </View>

        {/* Submit */}
        <Pressable style={styles.button}>
          <Ionicons name="send" size={20} color="#fff" />
          <Text style={styles.buttonText}>Submit Report</Text>
        </Pressable>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLogo}>
            <View style={styles.dotPrimary}></View>
            <View style={styles.dotOrange}></View>
            <Text style={styles.footerBrand}>Musaeid</Text>
          </View>
          <Text style={styles.footerSub}>Saudi Technical Support Network</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F6F6" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  iconButton: { width: 40, alignItems: "center" },
  headerTitle: { flex: 1, textAlign: "center", fontSize: 18, fontWeight: "bold", color: "#1E1D74" },

  title: { fontSize: 22, fontWeight: "bold", marginBottom: 4, color: "#1E1D74" },
  subtitle: { fontSize: 14, color: "#777", marginBottom: 16 },

  label: { fontSize: 12, fontWeight: "600", color: "#555", marginBottom: 6 },

  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  dropdownText: { fontSize: 14, color: "#000" },
  dropdownList: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  dropdownItem: { padding: 12 },
  dropdownItemText: { fontSize: 14 },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  input: { flex: 1, fontSize: 14, color: "#000" },

  textarea: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
    textAlignVertical: "top",
    color: "#000",
  },

  screenshotRow: { flexDirection: "row", gap: 8, marginBottom: 16 },
  screenshotCard: {
    width: 80,
    height: 80,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#eee",
    position: "relative",
  },
  removeButton: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#f00",
    borderRadius: 12,
    padding: 2,
  },
  addScreenshot: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  addText: { fontSize: 10, color: "#777", marginTop: 2 },
  placeholderScreenshot: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    borderWidth: 1,
    borderColor: "#1E1D74",
    backgroundColor: "#E8E9FF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  infoText: { fontSize: 12, color: "#1E1D74", flex: 1 },

  button: {
    flexDirection: "row",
    backgroundColor: "#1E1D74",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },

  footer: { alignItems: "center", marginBottom: 20 },
  footerLogo: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 2 },
  dotPrimary: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#1E1D74" },
  dotOrange: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#ec5b13" },
  footerBrand: { fontSize: 12, fontWeight: "bold", color: "#1E1D74", textTransform: "uppercase" },
  footerSub: { fontSize: 10, color: "#555" },
});
