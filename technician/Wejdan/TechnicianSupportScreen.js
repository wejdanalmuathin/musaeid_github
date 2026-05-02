import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function TechnicianSupportScreen({ goBack }) {
  const anim = useRef(new Animated.Value(0)).current;
  const [search, setSearch] = useState("");

  const handleFocus = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const FAQItem = ({ icon, title, content }) => {
    const [open, setOpen] = useState(false);
    return (
      <View style={styles.card}>
        <Pressable style={styles.cardHeader} onPress={() => setOpen(!open)}>
          <View style={styles.row}>
            <MaterialIcons name={icon} size={20} color="#1E1D74" />
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
          <MaterialIcons
            name="expand-more"
            size={20}
            color="#999"
            style={{ transform: [{ rotate: open ? "180deg" : "0deg" }] }}
          />
        </Pressable>
        {open && <Text style={styles.cardContent}>{content}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Pressable onPress={goBack} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#1E1D74" />
        </Pressable>
        <Text style={styles.headerTitle}>Technician Support</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>How can we help?</Text>

          <Animated.View
            style={[
              styles.searchBox,
              {
                borderColor: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#F1F1F1", "#1E1D74"],
                }),
                shadowOpacity: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.25],
                }),
                elevation: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 6],
                }),
              },
            ]}
          >
            <Ionicons name="search" size={20} color="#999" />
            <TextInput
              placeholder="Search for topics..."
              style={styles.searchInput}
              placeholderTextColor="#999"
              underlineColorAndroid="transparent"
              value={search}
              onChangeText={setSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Animated.View>
        </View>

        {/* ONBOARDING & OPERATIONS */}
        <Text style={styles.sectionTitle}>ONBOARDING & OPERATIONS</Text>
        <View style={styles.list}>
          <FAQItem
            icon="verified-user"
            title="How do I get verified?"
            content="Upload ID, certifications, and profile photo. Reviewed in 24-48h."
          />
          <FAQItem
            icon="assignment-turned-in"
            title="How do I accept/decline requests?"
            content="Requests appear in Jobs tab. You have 3 minutes to respond."
          />
          <FAQItem
            icon="checklist"
            title="What to do before inspection?"
            content="Ensure tools are ready and confirm customer availability."
          />
          <FAQItem
            icon="directions-car"
            title="How to set 'On the way'?"
            content="Swipe Start Trip in job details to notify customer."
          />
        </View>

        {/* REPORTS & PAYMENTS */}
        <Text style={styles.sectionTitle}>REPORTS & PAYMENTS</Text>
        <View style={styles.list}>
          <FAQItem
            icon="description"
            title="How to send inspection report?"
            content="Fill digital form and submit with photos."
          />
          <FAQItem
            icon="handyman"
            title="What if customer proceeds after inspection?"
            content="Start repair or schedule follow-up."
          />
          <FAQItem
            icon="payments"
            title="How to confirm cash payment?"
            content="Enter amount and confirm receipt."
          />
          <FAQItem
            icon="account-balance-wallet"
            title="When are payouts?"
            content="Processed weekly every Sunday."
          />
          <FAQItem
            icon="upgrade"
            title="How to request upgrade?"
            content="Maintain 4.8+ rating and 50+ jobs."
          />
        </View>

        {/* Contact / Chat Support */}
        <View style={styles.contact}>
          <View style={styles.circle}>
            <MaterialIcons name="support-agent" size={30} color="#1E1D74" />
          </View>
          <Text style={styles.contactTitle}>Still need help?</Text>
          <Text style={styles.contactDesc}>
            Our Saudi-based support team is available 24/7.
          </Text>
          <Pressable style={styles.button}>
            <Ionicons name="chatbubble" size={18} color="#fff" />
            <Text style={styles.buttonText}>Chat with Support</Text>
          </Pressable>
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

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  iconButton: {
    width: 40,
    alignItems: "center",
  },

  hero: {
    padding: 16,
    backgroundColor: "#fff",
  },

  heroTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    outlineStyle: "none",
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1E1D74",
    marginTop: 20,
    marginLeft: 16,
  },

  list: {
    paddingHorizontal: 12,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 10,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  cardTitle: {
    fontSize: 13,
    fontWeight: "600",
  },

  cardContent: {
    padding: 12,
    fontSize: 13,
    color: "#666",
  },

  contact: {
    padding: 20,
    alignItems: "center",
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#EEEFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  contactTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  contactDesc: {
    color: "#777",
    textAlign: "center",
    marginVertical: 10,
  },

  button: {
    flexDirection: "row",
    backgroundColor: "#1E1D74",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    gap: 6,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
