import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function OrderDetailsScreen({ goBack, goToWarning }) {
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={goBack}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Order Details</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        
        {/* ORDER HEADER */}
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.badge}>New Request</Text>
            <Text style={styles.time}>2 mins ago</Text>
          </View>
          <Text style={styles.bigTitle}>Request ID: #ORD-8821</Text>
        </View>

        {/* SERVICE */}
        <View style={styles.serviceCard}>
          <MaterialIcons name="build" size={30} color="#1E1D74" />
          <View>
            <Text style={styles.serviceTitle}>Inspection & Repair</Text>
            <Text style={styles.serviceSub}>
              Plumbing • Kitchen Faucet
            </Text>
          </View>
        </View>

        {/* ISSUE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Issue</Text>
          <View style={styles.card}>
            <Text>
              The kitchen faucet is leaking constantly from the base, and
              there is low water pressure in the sprayer.
            </Text>
          </View>
        </View>

        {/* PHOTOS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Photos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRN9wbvlGclH4_a8fE7bvXVNIVL32LMMhXf6brtioQkxutvTU1Sg54l7yJPWk8rVY4vomu5HwYlTrBgMUFHyWC_y5n8rsX74n8NMnNmkXCgkkdu4ff1cTmWBRTTiVjIrYOak18SPRmOTrOOg-ArqnBUEjo1RZmwpD8nNC5r6_tTQgSFctGfiyuanZDMVcca0jv9cV98ueZ_8JAJ2PQ5BRkar0GYNOpSFzoJp-R0SAeXXG5R0IEHQAuZX1vuGMZSVWIPpycWez2Jrs",
              }}
              style={styles.photo}
            />
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU6e-Zh1UOQ9sFUw2jKD4Vnq1SkT3iC2nbYTcf2g1THgXXo40ctvdiR3Hzdr_ugJJj9VHRiGfZAPC3C1E9Ktipz6re9IhgQkqhwnswlz6SIGxOPZ7J6VZYBY-PQzzrc-au4MkMDcojLcYC2vJo1ZJzv8BtToSAKaBo15CkMxAzcwDDT5eLh3eG8AlUsrUkvn3YCvXDTG1-kekDrDV2NR8s6Dnk5ajHyPayVwtOdAI4Th7c7g9oYFoHrn4YKSS5U6JVN4DGLny3BI8",
              }}
              style={styles.photo}
            />
          </ScrollView>
        </View>

        {/* LOCATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuG9j3R0UMQj6rVU7oQSx-xSV47RrQ4QZXMwBtidfhNF8p7gHxu9HxttJbqG8PhdOLj4KeowjrG-HSszcln4E1zgwZ0zg01NK_GPgHI3Tycr603wQNI0m1DJhOV1T9GpqGCXXiqsQ-wylHYYWjDZc7yb7AsTcI54taguL2DRUOzogbZzs-Zv3On9q0DptQm7EAfd1riv0_CuqLYbLeC4wAnPfwmo98bGTboNewMbKnDuItONV-1sXBHsuogj3udxBIBeneflPl-m0",
              }}
              style={styles.map}
            />

            <View style={styles.rowBetween}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  Downtown Dubai, Area 4
                </Text>
                <Text style={{ color: "#777" }}>
                  Approx. 4.2 km away
                </Text>
              </View>
              <MaterialIcons name="directions" size={24} color="#1E1D74" />
            </View>
          </View>
        </View>

        {/* SCHEDULE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requested Schedule</Text>

          <View style={styles.schedule}>
            <View style={styles.scheduleBox}>
              <Text style={styles.scheduleLabel}>DATE</Text>
              <Text style={styles.scheduleValue}>Today, Oct 24</Text>
            </View>

            <View style={styles.scheduleBox}>
              <Text style={styles.scheduleLabel}>TIME</Text>
              <Text style={styles.scheduleValue}>02:00 - 04:00</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM BUTTONS */}
      <View style={styles.bottom}>
        
        {/* ACCEPT */}
        <Pressable style={styles.acceptBtn} onPress={goToWarning}>
          <MaterialIcons name="check-circle" size={20} color="#fff" />
          <Text style={styles.acceptText}>Accept Order</Text>
        </Pressable>

        {/* DECLINE */}
        <Pressable style={styles.declineBtn} onPress={goBack}>
          <Text style={styles.declineText}>Decline Order</Text>
        </Pressable>

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
    gap: 10,
  },

  headerTitle: { fontSize: 18, fontWeight: "bold" },

  section: { padding: 16 },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  badge: {
    backgroundColor: "#E8E7FF",
    color: "#1E1D74",
    padding: 6,
    borderRadius: 8,
    fontSize: 12,
  },

  time: { color: "#777" },

  bigTitle: { fontSize: 22, fontWeight: "bold", marginTop: 5 },

  serviceCard: {
    flexDirection: "row",
    gap: 10,
    padding: 16,
    alignItems: "center",
  },

  serviceTitle: { fontWeight: "bold", fontSize: 16 },
  serviceSub: { color: "#777" },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
  },

  photo: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 10,
  },

  map: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },

  schedule: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  scheduleBox: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginRight: 5,
  },

  scheduleLabel: { fontSize: 12, color: "#777" },
  scheduleValue: { fontWeight: "bold" },

  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 15,
    backgroundColor: "#fff",
  },

  acceptBtn: {
    backgroundColor: "#1E1D74",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 10,
  },

  acceptText: { color: "#fff", fontWeight: "bold" },

  declineBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  declineText: {
    color: "#777",
    fontWeight: "bold",
  },
});
