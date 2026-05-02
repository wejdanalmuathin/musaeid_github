import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SafetyGuidelinesScreen({ goBack }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#1E1D74" />
        </Pressable>

        <Text style={styles.headerTitle}>Safety & Guidelines</Text>

        <View style={{ width: 40 }} /> {/* Placeholder to center title */}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Standard Procedures</Text>
          <Text style={styles.heroSub}>
            Essential protocols to ensure safety and excellence on every job site.
          </Text>
        </View>

        {/* Guidelines Cards */}
        <View style={styles.cardsContainer}>
          {[
            {
              icon: "✔️",
              label: "Required Step",
              title: "Pre-entry Safety Checklist",
              desc: "Mandatory safety assessment and gear verification before entering any client premises.",
              btnText: "View Checklist",
              btnColor: "#1E1D74",
              btnTextColor: "#fff",
            },
            {
              icon: "🤝",
              label: "Conduct",
              title: "Professional Behavior",
              desc: "Etiquette guidelines for interacting with clients, homeowners, and maintaining work site decorum.",
              btnText: "Read Policy",
              btnColor: "#E0E0FF",
              btnTextColor: "#1E1D74",
            },
            {
              icon: "⚠️",
              label: "High Priority",
              title: "Risky Situations",
              desc: "How to identify and report hazardous environments or unsafe working conditions immediately.",
              btnText: "Incident Protocol",
              btnColor: "#FFF2E0",
              btnTextColor: "#D97706",
            },
            {
              icon: "🛡️",
              label: "Compliance",
              title: "Data Privacy",
              desc: "Strict protocols for handling client information and digital access during service visits.",
              btnText: "Learn More",
              btnColor: "#E0E0FF",
              btnTextColor: "#1E1D74",
            },
            {
              icon: "📅",
              label: "Operations",
              title: "Cancellation Policy",
              desc: "Rules regarding last-minute job cancellations, no-shows, and rescheduling notifications.",
              btnText: "Policy Details",
              btnColor: "#E0E0FF",
              btnTextColor: "#1E1D74",
            },
          ].map((card, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardText}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardIcon}>{card.icon}</Text>
                  <Text style={styles.cardLabel}>{card.label}</Text>
                </View>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardDesc}>{card.desc}</Text>
                <Pressable
                  style={[
                    styles.cardButton,
                    { backgroundColor: card.btnColor },
                  ]}
                >
                  <Text
                    style={[
                      styles.cardButtonText,
                      { color: card.btnTextColor },
                    ]}
                  >
                    {card.btnText}
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F6F6" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  iconButton: { width: 40, alignItems: "center" },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  hero: { padding: 16, backgroundColor: "#fff" },
  heroTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1E1D74",
  },
  heroSub: { fontSize: 12, color: "#777" },
  cardsContainer: { padding: 16, gap: 12 },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 12,
  },
  cardText: { gap: 6 },
  cardHeader: { flexDirection: "row", alignItems: "center", gap: 6 },
  cardIcon: { fontSize: 18 },
  cardLabel: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#1E1D74",
  },
  cardTitle: { fontSize: 14, fontWeight: "bold", color: "#1E1D74" },
  cardDesc: { fontSize: 12, color: "#555" },
  cardButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  cardButtonText: { fontWeight: "bold", fontSize: 12 },
});
