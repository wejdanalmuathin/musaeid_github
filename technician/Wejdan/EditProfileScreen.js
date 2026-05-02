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
import { Ionicons } from "@expo/vector-icons";

export default function EditProfileScreen({ goBack, userData, setUserData }) {
  const [draftData, setDraftData] = useState(userData);
  const [showSkillPicker, setShowSkillPicker] = useState(false);

  const availableSkills = [
    "Plumbing",
    "Electrical",
    "Carpentry",
    "Painting",
    "Cleaning",
    "AC Repair",
  ];

  const toggleService = (area) => {
    setDraftData((prev) => ({
      ...prev,
      serviceAreas: {
        ...prev.serviceAreas,
        [area]: !prev.serviceAreas[area],
      },
    }));
  };

  return (
    <View style={styles.container}>
      {/* Top App Bar */}
      <View style={styles.topAppBar}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1E1D72" />
        </Pressable>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profilePhotoWrapper}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO59pCsKHl1dTzJzUJrQH9DBRkXPVviO4yxN8GUGG_Jn9f4hX406xwq4PGbQboXTVV_sLfSnHe-Ky3shBjaRcHoI4Yx4AU-4wBvDj-jf2fuuM_C99Zc2ERFT9QIhVKkvDeBWtWlV7f7FTWbUkyIA9PmtTWY9-lgDmcN5ytlIgT24uzVtaO7072SShorC6Gcr3cPCmObVLIHzSzr2wm92zD87yDoohnPiITgb2MATBAz64nzz41lWt5KHhVi-A6dwMG3BFx3w5G20Q",
              }}
              style={styles.profilePhoto}
            />
            <Pressable style={styles.cameraIcon}>
              <Ionicons name="camera" size={18} color="#fff" />
            </Pressable>
          </View>
          <Pressable>
            <Text style={styles.changePhotoText}>Change photo</Text>
          </Pressable>
        </View>

        {/* Basic Info */}
        <View style={styles.section}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={draftData.fullName}
            onChangeText={(text) =>
              setDraftData((prev) => ({ ...prev, fullName: text }))
            }
          />

          <Text style={styles.label}>Phone Number (Read-only)</Text>
          <View style={[styles.input, styles.readOnlyInput, styles.centeredBox]}>
            <Text style={styles.grayText}>{draftData.phone}</Text>
          </View>

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={draftData.email}
            onChangeText={(text) =>
              setDraftData((prev) => ({ ...prev, email: text }))
            }
            keyboardType="email-address"
          />
        </View>

        {/* Professional Details */}
        <View style={styles.section}>
          <Text style={[styles.label, { fontSize: 14, color: "#555" }]}>
            Professional Details
          </Text>

          {/* Secondary Skills */}
          <Text style={styles.label}>Secondary Skills</Text>
          <View style={styles.skillsContainer}>
            {draftData.skills.map((skill) => (
              <Pressable
                key={skill}
                style={styles.skillChip}
                onPress={() =>
                  setDraftData((prev) => ({
                    ...prev,
                    skills: prev.skills.filter((s) => s !== skill),
                  }))
                }
              >
                <Text style={styles.skillText}>{skill} ✕</Text>
              </Pressable>
            ))}

            <Pressable
              style={styles.addSkillButton}
              onPress={() => setShowSkillPicker(!showSkillPicker)}
            >
              <Text style={styles.addSkillText}>+ Add Skill</Text>
            </Pressable>
          </View>

          {showSkillPicker && (
            <View style={styles.skillPicker}>
              {availableSkills
                .filter((s) => !draftData.skills.includes(s))
                .map((skill) => (
                  <Pressable
                    key={skill}
                    style={styles.skillOption}
                    onPress={() => {
                      setDraftData((prev) => ({
                        ...prev,
                        skills: [...prev.skills, skill],
                      }));
                      setShowSkillPicker(false);
                    }}
                  >
                    <Text>{skill}</Text>
                  </Pressable>
                ))}
            </View>
          )}

          {/* Years */}
          <Text style={styles.label}>Years of Experience</Text>
          <View style={styles.yearsBox}>
            <Text style={styles.yearsText}>{draftData.years}</Text>
            <View style={styles.yearsArrows}>
              <Pressable
                onPress={() =>
                  setDraftData((prev) => ({
                    ...prev,
                    years: prev.years + 1,
                  }))
                }
                style={styles.arrowButton}
              >
                <Ionicons name="caret-up-outline" size={20} color="#1E1D72" />
              </Pressable>
              <Pressable
                onPress={() =>
                  setDraftData((prev) => ({
                    ...prev,
                    years: prev.years > 0 ? prev.years - 1 : 0,
                  }))
                }
                style={styles.arrowButton}
              >
                <Ionicons name="caret-down-outline" size={20} color="#1E1D72" />
              </Pressable>
            </View>
          </View>

          <Text style={styles.label}>Professional Bio</Text>
          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: "top" }]}
            multiline
            value={draftData.bio}
            onChangeText={(text) =>
              setDraftData((prev) => ({ ...prev, bio: text }))
            }
          />
        </View>

        {/* Service Areas */}
        <View style={styles.section}>
          <Text style={styles.label}>Service Areas</Text>
          <View style={styles.serviceAreas}>
            {Object.keys(draftData.serviceAreas).map((area) => (
              <Pressable
                key={area}
                onPress={() => toggleService(area)}
                style={[
                  styles.serviceButton,
                  draftData.serviceAreas[area] && styles.serviceActive,
                ]}
              >
                <Text
                  style={[
                    styles.serviceText,
                    draftData.serviceAreas[area] &&
                      styles.serviceTextActive,
                  ]}
                >
                  {area} {draftData.serviceAreas[area] ? "✔" : ""}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Save Button */}
      <View style={styles.bottomButtonWrapper}>
        <Pressable
          style={styles.bottomButton}
          onPress={() => {
            setUserData(draftData);
            goBack();
          }}
        >
          <Text style={styles.bottomButtonText}>Save changes</Text>
        </Pressable>
      </View>
    </View>
  );
}

/* ===== YOUR ORIGINAL STYLES UNCHANGED ===== */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F8" },
  topAppBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#F6F6F8",
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  backButton: {},
  headerTitle: { fontSize: 18, fontWeight: "bold", flex: 1, textAlign: "center" },
  profileSection: { alignItems: "center", paddingVertical: 24 },
  profilePhotoWrapper: { position: "relative" },
  profilePhoto: { width: 128, height: 128, borderRadius: 64 },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#1E1D72",
    borderRadius: 20,
    padding: 6,
  },
  changePhotoText: { marginTop: 8, color: "#1E1D72", fontWeight: "bold" },
  section: { paddingHorizontal: 16, marginBottom: 16 },
  label: { fontSize: 12, fontWeight: "bold", marginBottom: 4 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    height: 48,
    fontSize: 14,
    marginBottom: 12,
  },
  readOnlyInput: { backgroundColor: "#eee", borderColor: "#ccc" },
  centeredBox: { justifyContent: "center" },
  grayText: { color: "#777", fontSize: 14 },
  smallGrayLabel: { fontSize: 12, color: "#777", marginBottom: 4 },
  skillsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 12 },
  skillChip: {
    backgroundColor: "#DDE0FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  skillText: { color: "#1E1D72", fontWeight: "bold" },
  addSkillButton: {
    borderWidth: 1,
    borderColor: "#1E1D72",
    borderStyle: "dashed",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addSkillText: { color: "#1E1D72", fontWeight: "bold" },
  skillPicker: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
  },
  skillOption: { paddingVertical: 8 },
  yearsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 12,
  },
  yearsText: { fontSize: 16, fontWeight: "bold" },
  yearsArrows: { flexDirection: "column", marginLeft: 12 },
  arrowButton: { paddingVertical: 2 },
  serviceAreas: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 },
  serviceButton: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  serviceActive: { backgroundColor: "#1E1D72" },
  serviceText: { color: "#777", fontWeight: "bold" },
  serviceTextActive: { color: "#fff" },
  bottomButtonWrapper: { padding: 16 },
  bottomButton: { backgroundColor: "#1E1D72", paddingVertical: 16, borderRadius: 16, alignItems: "center" },
  bottomButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
