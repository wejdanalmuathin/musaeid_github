import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function DocumentsScreen({ goBack }) {
  const [image, setImage] = useState(null);
  const [sent, setSent] = useState(false);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission Required", "Allow access to gallery");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setSent(false);
    }
  };

  const clearImage = () => {
    setImage(null);
    setSent(false);
  };

  const sendToAdmin = () => {
    if (!image) return;

    // 🔥 FIX: trigger alert FIRST (before state update)
    Alert.alert("Success", "Your Document is Sent Successfully!");

    setSent(true);
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={goBack}>
          <MaterialIcons name="arrow-back" size={24} color="#1E1D74" />
        </Pressable>
        <Text style={styles.headerTitle}>Documents & Verification</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* STATUS CARD */}
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Account Status</Text>
          <Text style={styles.statusTitle}>Status: Verified</Text>
          <Text style={styles.statusSub}>Since Oct 24, 2023</Text>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.progressText}>100% Complete</Text>
        </View>

        {/* UPLOAD SECTION */}
        <View style={styles.uploadSection}>
          <Text style={styles.sectionTitle}>Upload Document</Text>

          <View style={styles.imageBox}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Text style={{ color: "#999" }}>No image selected</Text>
            )}
          </View>

          <View style={styles.buttonRow}>
            <Pressable style={styles.pickBtn} onPress={pickImage}>
              <Text style={styles.btnText}>Pick Image</Text>
            </Pressable>

            {image && (
              <Pressable style={styles.clearBtn} onPress={clearImage}>
                <Text style={styles.clearText}>Clear</Text>
              </Pressable>
            )}
          </View>

          {/* SEND BUTTON */}
          {image && !sent && (
            <Pressable style={styles.sendBtn} onPress={sendToAdmin}>
              <Text style={styles.sendText}>Send to Admin</Text>
            </Pressable>
          )}

          {/* OPTIONAL: small status text after sending */}
          {sent && (
            <Text style={styles.sentText}>✔ Sent to admin for review</Text>
          )}
        </View>

        {/* DOCUMENT LIST */}
        <Text style={styles.sectionTitle}>Identity Verification</Text>

        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPF_JlU_6TWzEggIbHXt8lasWejmoFrJniFXKpwL4S7Ebo-y_HK0vHUCtPrOPkLnB__gLylFriFfXb6P-Ke4i7WcR4rVSpJa2fCkFqU-EljsvNvYeT2B3jsp9_rtOuGdhKLTCVu29LTzIaUHZXUYOvYdXJ4hItW2ogd1bc1QJuefGDCCYB2a0fQ4dGpwkGb9tALXmSZhtQ5FkiUmGv6Q-MXKGAi1jpMc-6jLSmbDD9mQB-aZa09QP97_7li1L4oMIROUZ3LEEF-lyY",
              }}
              style={styles.docImage}
            />
            <View>
              <Text style={styles.cardTitle}>National ID / Iqama</Text>
              <Text style={styles.cardSub}>
                Verified • Expires Dec 2025
              </Text>
            </View>
          </View>
          <MaterialIcons name="visibility" size={22} color="#1E1D74" />
        </View>

        <Text style={styles.sectionTitle}>Professional Credentials</Text>

        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZhIIXN_Nqh-AExS-CyRLIvI90bkrIQke9XhUZixZ4tCjuwZQpdI-nTDftq6XpkDK5v-XgZYVG9xJciFVaJnitA7b8uqHSi8-lANDizm566rKMy_gWxmEk2HJqNX_inmAZtNfkIh55DIoEMWdbos2HrKlevKrHq1yjHQiGcXDQBUjUdJHG9OBJm2_IEuhD-8vuUIo2pzhrko9Ry2uRzoKbDtOw9NKeou3V6MzgtTSDaJPbWwoypILYXuqT60xwh6FaejqX13G2i59J",
              }}
              style={styles.docImage}
            />
            <View>
              <Text style={styles.cardTitle}>Professional Certificate</Text>
              <Text style={styles.cardSub}>
                Verified • Issued Sep 2023
              </Text>
            </View>
          </View>
          <MaterialIcons name="visibility" size={22} color="#1E1D74" />
        </View>

        <Text style={styles.sectionTitle}>Work History</Text>

        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <View style={styles.placeholderIcon}>
              <MaterialIcons name="description" size={28} color="#2563eb" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Resume_Abdullah.pdf</Text>
              <Text style={styles.cardSub}>Verified</Text>
            </View>
          </View>
          <MaterialIcons name="download" size={22} color="#1E1D74" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F6F6" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 16,
    backgroundColor: "#fff",
  },

  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#1E1D74" },

  statusCard: {
    backgroundColor: "#1E1D74",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },

  statusLabel: { color: "#ccc", fontSize: 12 },
  statusTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  statusSub: { color: "#ccc", fontSize: 12, marginBottom: 10 },

  progressBar: {
    height: 6,
    backgroundColor: "#444",
    borderRadius: 4,
    marginTop: 10,
  },

  progressFill: {
    width: "100%",
    height: "100%",
    backgroundColor: "#10b981",
  },

  progressText: { color: "#fff", fontSize: 12, marginTop: 6 },

  uploadSection: { marginBottom: 20 },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },

  imageBox: {
    height: 180,
    backgroundColor: "#eee",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  image: { width: "100%", height: "100%", borderRadius: 12 },

  buttonRow: { flexDirection: "row", gap: 10 },

  pickBtn: {
    backgroundColor: "#1E1D74",
    padding: 10,
    borderRadius: 8,
  },

  btnText: { color: "#fff" },

  clearBtn: {
    backgroundColor: "#fee2e2",
    padding: 10,
    borderRadius: 8,
  },

  clearText: { color: "#dc2626" },

  sendBtn: {
    marginTop: 10,
    backgroundColor: "#10b981",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  sendText: { color: "#fff", fontWeight: "bold" },

  sentText: {
    marginTop: 8,
    color: "#10b981",
    fontWeight: "bold",
    textAlign: "center",
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  cardLeft: { flexDirection: "row", gap: 10, alignItems: "center" },

  docImage: { width: 60, height: 60, borderRadius: 8 },

  placeholderIcon: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#e0e7ff",
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitle: { fontWeight: "bold", color: "#1E1D74" },
  cardSub: { fontSize: 12, color: "#777" },
});
