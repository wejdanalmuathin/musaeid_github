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

export default function LevelUpgradeScreen({ goBack }) {
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const pickImage = async () => {
    if (submitted) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const deleteImage = () => {
    if (submitted) return;
    setImage(null);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#1E1D74" />
        </Pressable>
        <Text style={styles.headerTitle}>Upgrade Level</Text>
      </View>

      {/* CONTENT */}
      <View style={{ flex: 1, position: "relative" }}>
        
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>
          
          {/* PROGRESS */}
          <View style={{ marginBottom: 20 }}>
            <View style={styles.progressHeader}>
              <View>
                <Text style={styles.progressTitle}>Application Progress</Text>
                <Text style={styles.progressSubtitle}>
                  Complete all fields to submit for review
                </Text>
              </View>
              <Text style={styles.progressPercent}>75% Complete</Text>
            </View>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: "75%" }]} />
            </View>
          </View>

          {/* INFO */}
          <Text style={styles.sectionTitle}>Request Promotion</Text>
          <Text style={styles.sectionText}>
            Elevate your professional status to Level 2 or 3.
          </Text>

          {/* TARGET LEVEL */}
          <Text style={styles.label}>Target Level</Text>
          <View style={styles.selectBox}>
            <Text>Level 3 (Expert - +30%)</Text>
            <MaterialIcons name="expand-more" size={20} />
          </View>

          {/* YEARS */}
          <Text style={styles.label}>Years of Experience</Text>
          <TextInput
            style={styles.input}
            editable={!submitted}
            placeholder="e.g. 5"
          />

          {/* IMAGE PICKER */}
          <Text style={styles.label}>New Certifications</Text>

          {!image && (
            <Pressable
              style={[
                styles.uploadBox,
                submitted && { opacity: 0.5 },
              ]}
              onPress={!submitted ? pickImage : null}
            >
              <MaterialIcons name="cloud-upload" size={32} color="#777" />
              <Text style={styles.uploadText}>Upload Image</Text>
            </Pressable>
          )}

          {image && (
            <View style={{ alignItems: "center" }}>
              <Image source={{ uri: image }} style={styles.preview} />

              {!submitted && (
                <Pressable style={styles.deleteBtn} onPress={deleteImage}>
                  <MaterialIcons name="delete" size={18} color="red" />
                  <Text style={styles.deleteText}>Delete</Text>
                </Pressable>
              )}
            </View>
          )}

          {/* BIO */}
          <Text style={styles.label}>Professional Bio</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            editable={!submitted}
            multiline
          />
        </ScrollView>

        {/* OVERLAY (blocks form only) */}
        {submitted && <View style={styles.overlay} />}

        {/* FIXED BUTTON */}
        <View style={styles.footer}>
          <Pressable
            style={[
              styles.submitButton,
              submitted && styles.successButton,
            ]}
            onPress={handleSubmit}
            disabled={submitted}
          >
            <Text style={styles.submitText}>
              {submitted
                ? "Submitted Successfully ✓"
                : "Submit Upgrade Request"}
            </Text>

            {!submitted && (
              <MaterialIcons name="rocket-launch" size={20} color="#fff" />
            )}
          </Pressable>
        </View>

      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F6F6" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },

  backButton: { padding: 8 },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1E1D74",
    fontSize: 18,
    marginRight: 32,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  progressTitle: { fontWeight: "bold", color: "#1E1D74" },
  progressSubtitle: { fontSize: 12, color: "#555" },

  progressPercent: { fontWeight: "bold", color: "#1E1D74" },

  progressBarBackground: {
    height: 8,
    backgroundColor: "#ccc",
    borderRadius: 8,
    marginTop: 4,
  },

  progressBarFill: {
    height: 8,
    backgroundColor: "#1E1D74",
    borderRadius: 8,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E1D74",
  },

  sectionText: { color: "#555", marginBottom: 10 },

  label: {
    fontWeight: "bold",
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
  },

  selectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
  },

  uploadBox: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },

  uploadText: { fontSize: 12, color: "#555" },

  preview: {
    width: 120,
    height: 120,
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

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
  },

  submitButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1D74",
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },

  successButton: {
    backgroundColor: "#16a34a",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  submitText: {
    color: "#fff",
    fontWeight: "bold",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 80,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
});
