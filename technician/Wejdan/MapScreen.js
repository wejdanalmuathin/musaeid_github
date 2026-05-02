import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function MapScreen({ goBack }) {
  const [arrived, setArrived] = useState(false);

  return (
    <View style={styles.container}>
      
      {/* MAP */}
      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnm2c8SRbJqfQyi8RNb9Ep095SqUbkQu7lZYMXI0E69h3bTazK99H6x5nhFG1ggwLeoEpXtjCoMIQY4oXBU_t9HKAbxTsoiShy0SGiHqWPSR9NmSVpQpwYdwo42nvAvAHU3ErSZUeAEKjxy8-hnWHeQY7hcS5NUHMLGH1h6pRUNRiyB992dvFwbwFxhvCxmfL3GOiaO-kPMm0I80nTQ6cobiZi-kvqTQ4N_h0-oM8BIh-HVFlOYL4VLxHFxU8lVsFjOR3Q0XUuy_0",
        }}
        style={styles.map}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={goBack}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </Pressable>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.smallText}>Navigating to Al Olaya</Text>
            <Text style={styles.title}>Job Arrival</Text>
          </View>

          <View style={{ width: 24 }} />
        </View>

        {/* ARRIVED BUTTON */}
        <View style={styles.topButton}>
          <Pressable
            style={[
              styles.arrivedBtn,
              arrived && { backgroundColor: "#16a34a" } // ✅ turns green
            ]}
            onPress={() => setArrived(true)}
            disabled={arrived} // ✅ prevents spam
          >
            <MaterialIcons
              name={arrived ? "check-circle" : "check-circle-outline"}
              size={20}
              color="#fff"
            />
            <Text style={styles.arrivedText}>
              {arrived ? "Arrived ✓" : "Mark as Arrived"}
            </Text>
          </Pressable>
        </View>

        {/* RIGHT CONTROLS */}
        <View style={styles.rightControls}>
          <Pressable style={styles.circleBtn}>
            <MaterialIcons name="search" size={20} color="#555" />
          </Pressable>

          <Pressable style={styles.circleBtn}>
            <MaterialIcons name="mic" size={20} color="#555" />
          </Pressable>
        </View>

        {/* BOTTOM CONTROLS */}
        <View style={styles.bottomControls}>
          <Pressable style={styles.circleBtn}>
            <MaterialIcons name="explore" size={20} color="#1E1D74" />
          </Pressable>

          <View style={styles.zoomBox}>
            <Pressable style={styles.zoomBtn}>
              <MaterialIcons name="add" size={20} />
            </Pressable>
            <Pressable style={styles.zoomBtn}>
              <MaterialIcons name="remove" size={20} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      {/* BOTTOM CARD */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />

        <View style={styles.row}>
          <View>
            <Text style={styles.time}>
              {arrived ? "Arrived" : "12 min"}
            </Text>
            <Text style={styles.sub}>
              {arrived ? "You reached the location" : "4.5 km • 10:42 AM"}
            </Text>
          </View>

          <View style={styles.actions}>
            <Pressable style={styles.iconBtn}>
              <MaterialIcons name="call" size={20} />
            </Pressable>

            <Pressable style={styles.exitBtn} onPress={goBack}>
              <Text style={{ color: "red", fontWeight: "bold" }}>Exit</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.userRow}>
          <View style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>Ahmad Al-Saud</Text>
            <Text style={{ color: "#777", fontSize: 12 }}>
              AC Repair • Al Olaya
            </Text>
          </View>
          <MaterialIcons name="more-vert" size={20} color="#777" />
        </View>
      </View>
    </View>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.9)",
  },

  smallText: { fontSize: 10, color: "#777" },
  title: { fontWeight: "bold", fontSize: 16 },

  topButton: { alignItems: "center", marginTop: 10 },

  arrivedBtn: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: "#1E1D74",
    padding: 12,
    borderRadius: 12,
  },

  arrivedText: { color: "#fff", fontWeight: "bold" },

  rightControls: {
    position: "absolute",
    right: 10,
    top: 120,
    gap: 10,
  },

  bottomControls: {
    position: "absolute",
    right: 10,
    bottom: 180,
    gap: 10,
  },

  circleBtn: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  zoomBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },

  zoomBtn: {
    padding: 10,
    alignItems: "center",
  },

  bottomSheet: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  time: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#10b981",
  },

  sub: { color: "#777", fontSize: 12 },

  actions: { flexDirection: "row", gap: 10 },

  iconBtn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 20,
  },

  exitBtn: {
    paddingHorizontal: 16,
    justifyContent: "center",
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    gap: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
});
