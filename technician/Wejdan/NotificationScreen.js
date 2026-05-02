import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  StyleSheet,
  Pressable,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NotificationScreen({ goBack }) {
  const [toggles, setToggles] = useState({
    newJobAlerts: true,
    customerChats: true,
    systemUpdates: false,
    payoutReports: true,
    urgentReminders: false,
  });

  const STORAGE_KEY = "notification_settings";

  // ✅ LOAD SAVED SETTINGS
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          setToggles(JSON.parse(saved));
        }
      } catch (e) {
        console.log("Error loading settings", e);
      }
    };

    loadSettings();
  }, []);

  // ✅ SAVE SETTINGS
  const saveSettings = async (newSettings) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    } catch (e) {
      console.log("Error saving settings", e);
    }
  };

  // ✅ TOGGLE + SAVE
  const toggleSwitch = (key) => {
    const updated = { ...toggles, [key]: !toggles[key] };
    setToggles(updated);
    saveSettings(updated);
  };

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2E2A84" />
        </Pressable>
        <Text style={styles.headerText}>Notification Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* PUSH NOTIFICATIONS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="notifications" size={20} color="#2E2A84" />
            <Text style={styles.sectionTitle}>Push Notifications</Text>
          </View>

          <View style={styles.card}>
            <ToggleItem
              title="New Job Alerts"
              description="Status changes, technician arrival, and completion"
              value={toggles.newJobAlerts}
              onToggle={() => toggleSwitch("newJobAlerts")}
            />

            <ToggleItem
              title="Customer Chats"
              description="Direct chats with service providers and support"
              value={toggles.customerChats}
              onToggle={() => toggleSwitch("customerChats")}
            />

            <ToggleItem
              title="System Updates & Incentives"
              description="Exclusive discounts and seasonal service deals"
              value={toggles.systemUpdates}
              onToggle={() => toggleSwitch("systemUpdates")}
            />
          </View>
        </View>

        {/* OTHER CHANNELS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="mail" size={20} color="#2E2A84" />
            <Text style={styles.sectionTitle}>Other Channels</Text>
          </View>

          <View style={styles.card}>
            <ToggleItem
              title="Payout Reports & Invoices"
              description="Invoice copies and service reports"
              value={toggles.payoutReports}
              onToggle={() => toggleSwitch("payoutReports")}
            />

            <ToggleItem
              title="Urgent Job Reminders"
              description="Urgent updates regarding active requests"
              value={toggles.urgentReminders}
              onToggle={() => toggleSwitch("urgentReminders")}
            />
          </View>
        </View>

        {/* INFO */}
        <View style={styles.infoCard}>
          <MaterialIcons name="info" size={20} color="#2E2A84" />
          <Text style={styles.infoText}>
            You can also manage system-level permissions in your device settings
            to completely silence Musaeid alerts.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const ToggleItem = ({ title, description, value, onToggle }) => (
  <View style={styles.toggleItem}>
    <View style={{ flex: 1 }}>
      <Text style={styles.toggleTitle}>{title}</Text>
      <Text style={styles.toggleDesc}>{description}</Text>
    </View>
    <Switch
      trackColor={{ false: "#ccc", true: "#2E2A84" }}
      thumbColor="#fff"
      onValueChange={onToggle}
      value={value}
    />
  </View>
);

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F8" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  backButton: { marginRight: 12 },

  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E2A84",
  },

  content: { padding: 16, paddingBottom: 32 },

  section: { marginBottom: 24 },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E2A84",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },

  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  toggleTitle: { fontWeight: "bold", fontSize: 14 },

  toggleDesc: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#E8E7FF",
    gap: 8,
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    color: "#2E2A84",
    lineHeight: 18,
  },
});
