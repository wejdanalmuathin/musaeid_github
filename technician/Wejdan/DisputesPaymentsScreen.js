import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function DisputesPaymentsScreen({ goBack, goToBankCards }) {
  const [issueTypeOpen, setIssueTypeOpen] = useState(false);
  const [issueType, setIssueType] = useState("Unfair Rating");
  const [image, setImage] = useState(null);

  const issueOptions = [
    "Unfair Rating",
    "Payment Discrepancy",
    "Customer Misconduct",
    "Other",
  ];

  // ✅ PICK IMAGE
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // ✅ DELETE IMAGE
  const deleteImage = () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Pressable onPress={goBack} style={styles.iconButton}>
          <MaterialIcons name="arrow-back" size={24} color="#1E1D74" />
        </Pressable>

        <Text style={styles.headerTitle}>Disputes & Payments Help</Text>

        {/* ✅ FIXED WALLET BUTTON */}
        <Pressable
          style={styles.iconButton}
          onPress={() => {
            console.log("WALLET CLICKED"); // debug
            goToBankCards && goToBankCards();
          }}
        >
          <MaterialIcons
            name="account-balance-wallet"
            size={24}
            color="#1E1D74"
          />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Cards */}
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAgsWTgcRVTBh7Vaubdoplm3r66Tu5NWQvXHZ68MSxIHX-Sm7CHcBH7PTj1WjW4HFmlJhaZbta7IJucxyHLjfKLRKE0hfwhZAe79IzqVtEFFzyn1tqQYAYMM2q7xBEB_SN-69LQoMTLdn3L9ckoOqO9JZJVrxYHfvlrsaz-0zu3A5SGtLFetE9f7HNLOky6aal3XpcrdD2mjdv2DdNW5rs5ime8qhFkBq7qSYZgPPj4Vcl_jKxSfiaQZJxcQSBCXcDbmzENJJ3HUM",
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitlePrimary}>
                Payment Status Help
              </Text>
              <Text style={styles.cardDesc}>
                Understand payment differences to avoid delays.
              </Text>
            </View>
          </View>
        </View>

        {/* FORM */}
        <View style={styles.formWrapper}>
          <View style={styles.formCard}>
            <Text style={styles.label}>Request ID</Text>
            <TextInput placeholder="#REQ-82931" style={styles.input} />

            <Text style={styles.label}>Issue Type</Text>
            <Pressable
              style={styles.select}
              onPress={() => setIssueTypeOpen(!issueTypeOpen)}
            >
              <Text>{issueType}</Text>
              <MaterialIcons
                name={
                  issueTypeOpen
                    ? "keyboard-arrow-up"
                    : "keyboard-arrow-down"
                }
                size={20}
              />
            </Pressable>

            {issueTypeOpen &&
              issueOptions.map((opt) => (
                <Pressable
                  key={opt}
                  style={styles.option}
                  onPress={() => {
                    setIssueType(opt);
                    setIssueTypeOpen(false);
                  }}
                >
                  <Text>{opt}</Text>
                </Pressable>
              ))}

            <Text style={styles.label}>Description</Text>
            <TextInput
              placeholder="Explain the situation..."
              style={[styles.input, { height: 80 }]}
              multiline
            />

            {/* IMAGE PICKER */}
            <Text style={styles.label}>Upload Evidence</Text>

            {!image && (
              <Pressable style={styles.uploadBox} onPress={pickImage}>
                <MaterialIcons name="upload-file" size={36} color="#999" />
                <Text style={styles.uploadText}>
                  Tap to upload image
                </Text>
              </Pressable>
            )}

            {image && (
              <View style={{ alignItems: "center" }}>
                <Image source={{ uri: image }} style={styles.preview} />

                <Pressable style={styles.deleteBtn} onPress={deleteImage}>
                  <MaterialIcons name="delete" size={18} color="red" />
                  <Text style={styles.deleteText}>Delete</Text>
                </Pressable>
              </View>
            )}

            {/* SUBMIT */}
            <Pressable style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Open Dispute Form
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

/* STYLES (unchanged) */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F6F6" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
  },
  iconButton: { width: 40, alignItems: "center" },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  cardWrapper: { padding: 16 },
  card: {
    borderRadius: 14,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: 180 },
  cardContent: { padding: 12 },
  cardTitlePrimary: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E1D74",
  },
  cardDesc: { fontSize: 12, color: "#555" },
  formWrapper: { padding: 16 },
  formCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
  },
  select: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  uploadText: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  preview: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginTop: 10,
  },
  deleteBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 4,
  },
  deleteText: {
    color: "red",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#1E1D74",
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
