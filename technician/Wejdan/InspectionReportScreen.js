import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  Alert,
  Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function InspectionReportScreen({ goBack }) {
  const [problem, setProblem] = useState("");
  const [fix, setFix] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [images, setImages] = useState([]);
  const [sent, setSent] = useState(false);

  // 🎬 Animation
  const fadeAnim = useState(new Animated.Value(0))[0];
  const translateY = useState(new Animated.Value(10))[0];

  // 📸 Pick Image
  const pickImage = async () => {
    if (images.length >= 4 || sent) return;

    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission required", "Allow access to gallery");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  // 📤 Send Report
  const handleSend = () => {
    if (sent) return;

    setSent(true);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={goBack}>
          <MaterialIcons name="arrow-back" size={24} color="#1e1d72" />
        </Pressable>
        <Text style={styles.headerTitle}>Inspection Report</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 140 }}>
        
        <Text style={styles.title}>Repair Details</Text>
        <Text style={styles.subtitle}>
          Provide accurate information for the customer to review.
        </Text>

        {/* PROBLEM */}
        <Text style={styles.label}>Problem Found</Text>
        <TextInput
          style={[styles.textarea, sent && styles.disabledInput]}
          editable={!sent}
          placeholder="Describe the issues identified..."
          multiline
          value={problem}
          onChangeText={setProblem}
        />

        {/* FIX */}
        <Text style={styles.label}>Suggested Fix</Text>
        <TextInput
          style={[styles.textarea, sent && styles.disabledInput]}
          editable={!sent}
          placeholder="Detail the recommended repair steps..."
          multiline
          value={fix}
          onChangeText={setFix}
        />

        {/* PRICE + DURATION */}
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Repair Price (SAR)</Text>
            <TextInput
              style={[styles.input, sent && styles.disabledInput]}
              editable={!sent}
              placeholder="0.00"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Est. Duration</Text>
            <TextInput
              style={[styles.input, sent && styles.disabledInput]}
              editable={!sent}
              placeholder="e.g. 2 hrs"
              value={duration}
              onChangeText={setDuration}
            />
          </View>
        </View>

        {/* PHOTOS */}
        <Text style={styles.label}>Evidence Photos</Text>

        <View style={styles.photoRow}>
          {/* CAMERA */}
          {!sent && images.length < 4 && (
            <Pressable style={styles.addPhoto} onPress={pickImage}>
              <MaterialIcons name="add-a-photo" size={24} color="#1e1d72" />
            </Pressable>
          )}

          {/* IMAGES */}
          {images.map((img, index) => (
            <Image key={index} source={{ uri: img }} style={styles.imagePreview} />
          ))}
        </View>

      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>

        {/* ✅ Animated Success Message */}
        {sent && (
          <Animated.Text
            style={[
              styles.successMsg,
              {
                opacity: fadeAnim,
                transform: [{ translateY }],
              },
            ]}
          >
            Sent successfully ✅
          </Animated.Text>
        )}

        {/* BUTTON */}
        <Pressable
          style={[
            styles.sendBtn,
            sent && styles.sendBtnDisabled
          ]}
          onPress={handleSend}
          disabled={sent}
        >
          <Text style={styles.sendText}>
            {sent ? "Sent" : "Send inspection report to customer"}
          </Text>

          {!sent && (
            <MaterialIcons name="send" size={18} color="#fff" />
          )}
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f6f8" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    gap: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1d72",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 10,
  },

  textarea: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    minHeight: 100,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
  },

  disabledInput: {
    backgroundColor: "#e5e7eb",
    color: "#777",
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  photoRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    flexWrap: "wrap",
  },

  addPhoto: {
    width: 70,
    height: 70,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },

  imagePreview: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
  },

  successMsg: {
    color: "#16a34a",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },

  sendBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1e1d72",
    padding: 16,
    borderRadius: 12,
  },

  sendBtnDisabled: {
    backgroundColor: "#9ca3af",
  },

  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
