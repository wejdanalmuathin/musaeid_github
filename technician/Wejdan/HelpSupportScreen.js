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

import ContactSupportScreen from "./ContactSupportScreen";
import TechnicianSupportScreen from "./TechnicianSupportScreen";
import ReportIssueScreen from "./ReportIssueScreen"; 
import SafetyGuidelinesScreen from "./SafetyGuidelinesScreen";
import DisputesPaymentsScreen from "./DisputesPaymentsScreen";

export default function HelpSupportScreen({ goBack }) {
  const [screen, setScreen] = useState("Help");

  const anim = useRef(new Animated.Value(0)).current;

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

  const navigate = (screenName) => setScreen(screenName);

  // 🔥 NAVIGATION SWITCH
  if (screen === "ContactSupport") {
    return <ContactSupportScreen goBack={() => setScreen("Help")} />;
  }

  if (screen === "TechnicianSupport") {
    return <TechnicianSupportScreen goBack={() => setScreen("Help")} />;
  }

  if (screen === "ReportIssue") {
    return <ReportIssueScreen goBack={() => setScreen("Help")} />;
  }
  if (screen === "Safety") {
  return <SafetyGuidelinesScreen goBack={() => setScreen("Help")} />;
}
if (screen === "DisputesPayments") {
  return <DisputesPaymentsScreen goBack={() => setScreen("Help")} />;
}

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Pressable onPress={goBack} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#1E1D74" />
        </Pressable>

        <Text style={styles.headerTitle}>Help & Support Hub</Text>

        <Pressable style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={22} color="#1E1D74" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>How can we help you today?</Text>

          {/* 🔥 Animated Search Box */}
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
              placeholder="Search for help, FAQs, or issues"
              style={styles.searchInput}
              placeholderTextColor="#999"
              underlineColorAndroid="transparent"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Animated.View>
        </View>

        {/* Menu List */}
        <View style={styles.menuContainer}>
          {/* ✅ Contact Support */}
          <Pressable style={styles.card} onPress={() => navigate("ContactSupport")}>
            <View style={styles.cardLeft}>
              <View style={styles.iconBox}>
                <MaterialIcons name="phone-in-talk" size={22} color="#fff" />
              </View>
              <View>
                <Text style={styles.cardTitle}>Contact Support</Text>
                <Text style={styles.cardSub}>+966 800 124 XXXX</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#aaa" />
          </Pressable>

          {/* FAQs */}
          <Pressable style={styles.card} onPress={() => navigate("TechnicianSupport")}>
            <View style={styles.cardLeft}>
              <View style={styles.iconBox}>
                <MaterialIcons name="quiz" size={22} color="#fff" />
              </View>
              <View>
                <Text style={styles.cardTitle}>FAQs</Text>
                <Text style={styles.cardSub}>Common technician questions</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#aaa" />
          </Pressable>

          {/* Report an Issue */}
          <Pressable style={styles.card} onPress={() => navigate("ReportIssue")}>
            <View style={styles.cardLeft}>
              <View style={styles.iconBox}>
                <MaterialIcons name="report-problem" size={22} color="#fff" />
              </View>
              <View>
                <Text style={styles.cardTitle}>Report an Issue</Text>
                <Text style={styles.cardSub}>Send details and screenshots</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#aaa" />
          </Pressable>

{/* Safety */}
<Pressable style={styles.card} onPress={() => navigate("Safety")}>
  <View style={styles.cardLeft}>
    <View style={styles.iconBox}>
      <MaterialIcons name="gavel" size={22} color="#fff" />
    </View>
    <View>
      <Text style={styles.cardTitle}>Safety & Guidelines</Text>
      <Text style={styles.cardSub}>Workplace rules and safety</Text>
    </View>
  </View>
  <Ionicons name="chevron-forward" size={20} color="#aaa" />
</Pressable>

{/* Payments */}
<Pressable
  style={styles.card}
  onPress={() => navigate("DisputesPayments")}
>
  <View style={styles.cardLeft}>
    <View style={styles.iconBox}>
      <MaterialIcons name="account-balance-wallet" size={22} color="#fff" />
    </View>
    <View>
      <Text style={styles.cardTitle}>Disputes & Payments Help</Text>
      <Text style={styles.cardSub}>Payment status and disputes</Text>
    </View>
  </View>
  <Ionicons name="chevron-forward" size={20} color="#aaa" />
</Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Support available in English and Arabic</Text>
          <Text style={styles.version}>v2.4.0 (Riyadh Hub)</Text>
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
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
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
    color: "#1E1D74",
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
  menuContainer: {
    padding: 16,
    gap: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#eee",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#1E1D74",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  cardSub: {
    fontSize: 12,
    color: "#777",
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: "#aaa",
  },
  version: {
    fontSize: 10,
    color: "#aaa",
    marginTop: 4,
    letterSpacing: 2,
  },
});
