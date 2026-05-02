import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function BankCardsScreen({ goBack }) {
  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <Pressable style={styles.navButton} onPress={goBack}>
          <MaterialIcons name="arrow-back" size={24} color="#1E1D74" />
        </Pressable>
        <Text style={styles.navTitle}>My Wallet</Text>
        <Pressable style={styles.navButton}>
          <MaterialIcons name="help-outline" size={24} color="#1E1D74" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Wallet */}
        <View style={styles.section}>
          
          {/* Fake Gradient Wallet Card */}
          <View style={styles.walletCard}>
            <View style={styles.gradientBase} />
            <View style={styles.gradientOverlay} />

            <Text style={styles.walletTitle}>Wallet</Text>

            <View style={styles.walletRow}>
              <MaterialIcons name="payments" size={22} color="#fff" />
              <Text style={styles.walletLabel}>Total Earned</Text>
            </View>

            <Text style={styles.walletAmount}>SAR 4,250.00</Text>
          </View>

          {/* Pending */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialIcons name="schedule" size={20} color="#1E1D74" />
              <Text style={styles.cardLabel}>Pending</Text>
            </View>
            <Text style={styles.cardValue}>SAR 850.00</Text>
          </View>

        </View>

        {/* Earnings History */}
        <View style={styles.section}>
          <View style={styles.historyHeader}>
            <Text style={styles.sectionTitle}>Earnings History</Text>
            <Pressable>
              <Text style={styles.viewAll}>View All</Text>
            </Pressable>
          </View>

          <View style={styles.historyItem}>
            <View style={styles.historyLeft}>
              <View style={styles.iconCircle}>
                <MaterialIcons name="call-received" size={20} color="#16a34a" />
              </View>
              <View>
                <Text style={styles.historyTitle}>Withdrawal</Text>
                <Text style={styles.historyDate}>Oct 24, 2023</Text>
              </View>
            </View>
            <View style={styles.historyRight}>
              <Text style={styles.historyAmount}>SAR 1,200.00</Text>
              <Text style={styles.historyStatus}>Success</Text>
            </View>
          </View>

          <View style={styles.historyItem}>
            <View style={styles.historyLeft}>
              <View style={styles.iconCircle}>
                <MaterialIcons name="call-received" size={20} color="#16a34a" />
              </View>
              <View>
                <Text style={styles.historyTitle}>Withdrawal</Text>
                <Text style={styles.historyDate}>Oct 17, 2023</Text>
              </View>
            </View>
            <View style={styles.historyRight}>
              <Text style={styles.historyAmount}>SAR 950.00</Text>
              <Text style={styles.historyStatus}>Success</Text>
            </View>
          </View>

          <View style={styles.historyItem}>
            <View style={styles.historyLeft}>
              <View style={styles.iconCirclePending}>
                <MaterialIcons name="schedule" size={20} color="#1E1D74" />
              </View>
              <View>
                <Text style={styles.historyTitle}>Weekly Payout</Text>
                <Text style={styles.historyDate}>Today, 09:41 AM</Text>
              </View>
            </View>
            <View style={styles.historyRight}>
              <Text style={[styles.historyAmount, { color: "#1E1D74" }]}>
                SAR 850.00
              </Text>
              <Text style={[styles.historyStatus, { color: "#1E1D74" }]}>
                Processing
              </Text>
            </View>
          </View>
        </View>

        {/* Info Banner */}
        <View style={styles.infoBanner}>
          <MaterialIcons name="info" size={20} color="#1E1D74" />
          <Text style={styles.infoText}>
            Payouts are processed every Monday. It may take 1-3 business days to appear in your bank account depending on your provider.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F6F6" },

  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#F8F6F6",
    borderBottomWidth: 1,
    borderBottomColor: "#C7C6E3",
  },

  navButton: { padding: 6 },

  navTitle: { fontSize: 18, fontWeight: "bold", color: "#1E1D74" },

  scrollContent: { padding: 12 },

  section: { marginBottom: 20 },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },

  /* Wallet Card */
  walletCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    overflow: "hidden",
    backgroundColor: "#1E1D74",
  },

  gradientBase: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1E1D74",
  },

  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#4F46E5",
    opacity: 0.6,
  },

  walletTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },

  walletRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },

  walletLabel: {
    color: "#E0E7FF",
    fontSize: 13,
  },

  walletAmount: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  /* Pending card */
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },

  cardLabel: { fontSize: 12, color: "#777" },

  cardValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E1D74",
  },

  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  viewAll: { color: "#1E1D74", fontSize: 12, fontWeight: "bold" },

  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  historyLeft: { flexDirection: "row", alignItems: "center", gap: 10 },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  iconCirclePending: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#DDE0FF",
    alignItems: "center",
    justifyContent: "center",
  },

  historyTitle: { fontWeight: "bold", color: "#1E1D74" },

  historyDate: { fontSize: 12, color: "#777" },

  historyRight: { alignItems: "flex-end" },

  historyAmount: { fontWeight: "bold", color: "#16a34a" },

  historyStatus: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#16a34a",
  },

  infoBanner: {
    flexDirection: "row",
    backgroundColor: "#DDE0FF",
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },

  infoText: { fontSize: 12, color: "#1E1D74", flex: 1 },
});
