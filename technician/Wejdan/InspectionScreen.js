import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function InspectionScreen({ goBack, goToInspectionCompleted }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={goBack}>
          <MaterialIcons name="arrow-back" size={24} color="#1E1D72" />
        </Pressable>

        <Text style={styles.headerTitle}>Job Details</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* JOB CARD */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQEHVgM8Zw57YFUvaD6DPuzpSzcmHHsUu9hGqb2dAmSJt6554zQUrDNm3kTo5H-HNU9srzOcw5figgunmlml_gCDcRzfipzrGuu_DJx5GgJdISI3nTet7RQL2cCMqW1qB1gKR6-uqPRxLZFFF_ugrEQwaIUmYVwcMxAyZ9dW_it7o3SGpeFef7D6rtrAmWeDCaeGbnqizc6xiGyeUpnZ1dplTH-ezhF0ic1Wp2idp-pD4wKpYVejOBg0VGX9wMDA86RvXblMFKl3U",
            }}
            style={styles.jobImage}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.jobTitle}>AC Maintenance - #4829</Text>

            <View style={styles.row}>
              <MaterialIcons name="location-on" size={14} color="#777" />
              <Text style={styles.smallText}>
                Villa 22, Al Olaya, Riyadh
              </Text>
            </View>

            <View style={styles.row}>
              <MaterialIcons name="schedule" size={14} color="#777" />
              <Text style={styles.smallText}>
                Scheduled: 10:30 AM Today
              </Text>
            </View>
          </View>
        </View>

        {/* PROGRESS */}
        <View style={styles.progressRow}>
          <Text style={styles.progressActive}>Arrival ✓</Text>
          <Text style={styles.progressActive}>Inspection</Text>
          <Text style={styles.progressInactive}>Complete</Text>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.sectionTitle}>Job Description</Text>
        <View style={styles.box}>
          <Text style={styles.text}>
            Full inspection of HVAC system, filter replacement, and coolant
            level check. Customer reported unusual noise during operation.
          </Text>
        </View>

        {/* CUSTOMER */}
        <Text style={styles.sectionTitle}>Information</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.iconCircle}>
              <MaterialIcons name="person" size={20} color="#1E1D72" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Customer</Text>
              <Text style={styles.value}>Ahmed Al-Saud</Text>
            </View>
            <Pressable style={styles.callBtn}>
              <MaterialIcons name="call" size={20} color="#16a34a" />
            </Pressable>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconCircle}>
              <MaterialIcons name="priority-high" size={20} color="#1E1D72" />
            </View>
            <View>
              <Text style={styles.label}>Priority</Text>
              <Text style={styles.priority}>High Priority</Text>
            </View>
          </View>
        </View>

        {/* MAP PREVIEW */}
        <View style={styles.mapBox}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnm2c8SRbJqfQyi8RNb9Ep095SqUbkQu7lZYMXI0E69h3bTazK99H6x5nhFG1ggwLeoEpXtjCoMIQY4oXBU_t9HKAbxTsoiShy0SGiHqWPSR9NmSVpQpwYdwo42nvAvAHU3ErSZUeAEKjxy8-hnWHeQY7hcS5NUHMLGH1h6pRUNRiyB992dvFwbwFxhvCxmfL3GOiaO-kPMm0I80nTQ6cobiZi-kvqTQ4N_h0-oM8BIh-HVFlOYL4VLxHFxU8lVsFjOR3Q0XUuy_0",
            }}
            style={styles.mapImage}
          />
        </View>
      </ScrollView>

      {/* BOTTOM BUTTON */}
      <View style={styles.bottom}>
        <Text style={styles.note}>
          Please proceed to write the inspection report to complete the request.
        </Text>

        <Pressable
          style={styles.completeBtn}
          onPress={goToInspectionCompleted} // ✅ ONLY CHANGE
        >
          <MaterialIcons name="check-circle" size={20} color="#fff" />
          <Text style={styles.completeText}>
            Inspection Completed Successfully
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F8" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },

  headerTitle: { fontSize: 18, fontWeight: "bold" },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 16,
    padding: 12,
    borderRadius: 12,
    gap: 10,
  },

  jobImage: { width: 90, height: 90, borderRadius: 10 },

  jobTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1E1D72",
  },

  row: { flexDirection: "row", gap: 5, alignItems: "center" },

  smallText: { fontSize: 12, color: "#777" },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },

  progressActive: { color: "#1E1D72", fontWeight: "bold" },
  progressInactive: { color: "#aaa" },

  sectionTitle: {
    marginLeft: 16,
    marginTop: 10,
    fontWeight: "bold",
    color: "#555",
  },

  box: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 12,
    borderRadius: 10,
  },

  text: { color: "#444" },

  infoCard: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 10,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 10,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEF0FF",
    justifyContent: "center",
    alignItems: "center",
  },

  label: { fontSize: 12, color: "#777" },
  value: { fontWeight: "bold" },
  priority: { color: "red", fontWeight: "bold" },

  callBtn: {
    backgroundColor: "#DCFCE7",
    padding: 10,
    borderRadius: 20,
  },

  mapBox: {
    height: 150,
    margin: 16,
    borderRadius: 12,
    overflow: "hidden",
  },

  mapImage: { width: "100%", height: "100%" },

  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
  },

  note: {
    textAlign: "center",
    color: "#777",
    marginBottom: 10,
  },

  completeBtn: {
    flexDirection: "row",
    backgroundColor: "#1E1D72",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    gap: 8,
  },

  completeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
