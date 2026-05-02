import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreen({
  goToBankCards,
  goToLevelUpgrade,
  goToNotifications,
  goToMyRatings,
  goToEditProfile,
  goToHelpSupport,
  goToDocuments,
}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuACHHq83vMRyxKy-u1xgjsPjm_LAf1-jjffklVhp-73dYFQmsOixhpxA6WCek8RLASlMzpns8RedcSNZyvJr9_G3GvdW4qqM4lcLCV8qxrsPz05x_cxRO0B76himAQ5HQqVPlwKO69j_XIXCcISTz-tyBfb8xho9QE3n7ZpohKJPGwS6TSb8tRuzrP0RDaHUTEHXwUlHGz3ArDxFYAzDoVI5GTZjsnf2ldQlyI_YYRJxRMNYuyLHg2fJCpJvNkroqXQZdf2v9RYp2Q",
              }}
              style={styles.avatar}
            />
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark" size={12} color="#fff" />
            </View>
          </View>

          <Text style={styles.name}>Abdullah Ahmed</Text>
          <Text style={styles.role}>Verified Technician</Text>

          <View style={styles.contact}>
            <View style={styles.row}>
              <Ionicons name="call" size={14} color="#777" />
              <Text style={styles.info}>+966 50 123 4567</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="mail" size={14} color="#777" />
              <Text style={styles.info}>abdullah@example.com</Text>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4.9</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>152</Text>
            <Text style={styles.statLabel}>Jobs Done</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3+</Text>
            <Text style={styles.statLabel}>Years Exp.</Text>
          </View>
        </View>

        {/* Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Information</Text>
          <View style={styles.tagPrimary}>
            <MaterialIcons name="plumbing" size={16} color="#2E2A84" />
            <Text style={styles.tagPrimaryText}>Plumbing</Text>
          </View>
        </View>

        {/* Service Areas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Areas</Text>
          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <Ionicons name="location" size={14} color="#777" />
              <Text style={styles.tagText}>Dammam</Text>
            </View>
            <View style={styles.tag}>
              <Ionicons name="location" size={14} color="#777" />
              <Text style={styles.tagText}>Khobar</Text>
            </View>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          <MenuItem icon="person" text="Edit Profile" onPress={goToEditProfile} />
          <MenuItem icon="star" text="My Ratings" onPress={goToMyRatings} />
          <MenuItem
  icon="description"
  text="Documents & Verification"
  onPress={goToDocuments}
/>
          <MenuItem icon="payment" text="My Wallet" onPress={goToBankCards} />
          <MenuItem icon="notifications" text="Notification Settings" onPress={goToNotifications} />
          <MenuItem icon="trending-up" text="Level Upgrade" onPress={goToLevelUpgrade} />

          {/* ✅ FIXED */}
          <MenuItem icon="help" text="Help & Support" onPress={goToHelpSupport} />

          <Pressable style={styles.logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.nav}>
        <NavItem icon="home" label="Home" />
        <NavItem icon="briefcase" label="Jobs" />
        <NavItem icon="chatbubble" label="Messages" />
        <NavItem icon="person" label="Profile" active />
      </View>
    </View>
  );
}

/* COMPONENTS */
const MenuItem = ({ icon, text, onPress }) => (
  <Pressable style={styles.menuItem} onPress={onPress}>
    <MaterialIcons name={icon} size={22} color="#555" />
    <Text style={styles.menuText}>{text}</Text>
    <Ionicons name="chevron-forward" size={18} color="#ccc" />
  </Pressable>
);

const NavItem = ({ icon, label, active }) => (
  <Pressable style={styles.navItem}>
    <Ionicons name={icon} size={22} color={active ? "#2E2A84" : "#999"} />
    <Text style={[styles.navText, active && { color: "#2E2A84" }]}>
      {label}
    </Text>
  </Pressable>
);

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F8" },
  header: { padding: 16, alignItems: "center", backgroundColor: "#fff" },
  headerText: { fontSize: 18, fontWeight: "bold" },
  profileSection: { alignItems: "center", padding: 20 },
  avatarContainer: { position: "relative" },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  verifiedBadge: { position: "absolute", bottom: 0, right: 0, backgroundColor: "#2E2A84", borderRadius: 10, padding: 3 },
  name: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  role: { color: "#2E2A84", fontWeight: "bold", marginTop: 4 },
  contact: { marginTop: 8, alignItems: "center" },
  row: { flexDirection: "row", gap: 5, alignItems: "center" },
  info: { color: "#777", fontSize: 12 },
  statsRow: { flexDirection: "row", justifyContent: "space-around", paddingHorizontal: 10 },
  statBox: { backgroundColor: "#fff", padding: 15, borderRadius: 12, alignItems: "center", width: "30%" },
  statNumber: { color: "#2E2A84", fontSize: 18, fontWeight: "bold" },
  statLabel: { fontSize: 10, color: "#777" },
  section: { padding: 15 },
  sectionTitle: { fontSize: 11, color: "#999", fontWeight: "bold", marginBottom: 10 },
  tagPrimary: { flexDirection: "row", alignItems: "center", backgroundColor: "#E8E7FF", padding: 8, borderRadius: 20, gap: 5 },
  tagPrimaryText: { color: "#2E2A84", fontWeight: "bold" },
  tagRow: { flexDirection: "row", gap: 10 },
  tag: { flexDirection: "row", alignItems: "center", backgroundColor: "#eee", padding: 8, borderRadius: 20, gap: 5 },
  tagText: { fontSize: 12 },
  menu: { padding: 10 },
  menuItem: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 10, gap: 10 },
  menuText: { flex: 1, fontWeight: "bold" },
  logout: { backgroundColor: "#ffe5e5", padding: 15, borderRadius: 10, marginTop: 10 },
  logoutText: { color: "red", fontWeight: "bold" },
  nav: { flexDirection: "row", justifyContent: "space-around", backgroundColor: "#fff", padding: 10 },
  navItem: { alignItems: "center" },
  navText: { fontSize: 10, color: "#999" },
});
