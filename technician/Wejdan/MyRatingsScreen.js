import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MyRatingsScreen({ goBack }) {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      date: "Oct 12, 2023",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB3444NAdz_NLd_-3nxyZrsLw01c14yMMbcyt9kJhQJMdeQHvw1cZ1JGL202NNpa3pANI0D7mCL0Jq3Uo1C2IIn92AQL4aw4Fmt0tUURKkDIaFOMPZEtRHr4QltUA_13cH5R3ptQWyJsp0h6WvfBrRDH3JX1dYzaZ2h_vKKH1fcwlbLY5bSCZoXj6VUTaJZM2bucO2_5Os4tQ1I87v3nFgEwJIP0Fd2zWlQH6FqWko1dHgrPSrrFzas-NA_y61vfh0sNUiniEOBCcI",
      rating: 5,
      text: "Professional and very knowledgeable. He fixed the AC leak quickly and even explained how to maintain the filters to avoid future issues. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Ross",
      date: "Oct 08, 2023",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDmCDPgiVQyDdps1lW2IuwmHI3bwsGfap4foN3BKlDEDmP_afDH5xKlNj2bbOLXNyr4UHabuHuFq8-kd9poJPAqMwOBCUGISY7xBW2QbCAEBHTHAd0aIuX56EwwPm_M3B4HyTsFffXh6V3LV6E4Cteq3jAQK7RiRMIyzZB09MrY72zYU_d8XikrplQNsdreDtDHLutCzVaeZ9JuylUq_X2lDa-mPKDSKw7dnsBsTKWxsO7mCOcAFfOvwTRI3wIZa3gAUN9kByuaYaQ",
      rating: 4,
      text: "Arrived exactly on time. Very clean work and polite attitude. The only reason for 4 stars is that the spare part was a bit more expensive than I expected, but the labor was fair.",
    },
    {
      id: 3,
      name: "Ahmed Al-Farsi",
      date: "Sep 28, 2023",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAxHuaTpD0hYTN0aydBg43oOezLkjKqLtL5RXpXt0oXBBS_bsHdRpTGCSZ_B3nUHp_Ut-ESdxpaq0V3TduwU6gvOOu8Wzl0qXKxJL-sy-orYJlt9uCoqQPfFFbWV6Z9yePXgCyaZIhCKbFY2GOqmgOo0b05emjUv-baBiYLpC5_IKpKI9084FwdeBV4shisRrMU0EvCp5VUp5xwwtC2YrLaRR4X-B98i1AL_RDoeUBFEnt2-bRn5SbCMwYn9wUUCcz-wJC3KpP5Vxw",
      rating: 5,
      text: "Excellent service for my electrical panel. Very safe and efficient.",
    },
  ];

  const starBreakdown = [
    { star: 5, percent: 82 },
    { star: 4, percent: 12 },
    { star: 3, percent: 4 },
    { star: 2, percent: 1 },
    { star: 1, percent: 1 },
  ];

  const performance = [
    { title: "Quality", value: 4.9 },
    { title: "Professionalism", value: 4.7 },
    { title: "Punctuality", value: 4.8 },
    { title: "Communication", value: 4.6 },
  ];

  // Render stars for individual reviews (full only)
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i < count ? "star" : "star-outline"}
          size={16}
          color="#FFC107"
        />
      );
    }
    return <View style={{ flexDirection: "row", gap: 2 }}>{stars}</View>;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1E1D72" />
        </Pressable>
        <Text style={styles.headerTitle}>My Ratings</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Overall Rating */}
        <View style={styles.overall}>
          <Text style={styles.overallRating}>4.8</Text>
          <View style={{ flexDirection: "row", marginVertical: 4 }}>
            {/* 4 full stars + 1 half star */}
            <Ionicons name="star" size={16} color="#FFC107" />
            <Ionicons name="star" size={16} color="#FFC107" />
            <Ionicons name="star" size={16} color="#FFC107" />
            <Ionicons name="star" size={16} color="#FFC107" />
            <Ionicons name="star-half" size={16} color="#FFC107" />
          </View>
          <Text style={styles.reviewCount}>
            Based on 124 customer reviews
          </Text>
        </View>

        {/* Star Breakdown */}
        <View style={styles.breakdownContainer}>
          {starBreakdown.map((s) => (
            <View key={s.star} style={styles.breakdownRow}>
              <Text style={styles.breakdownStar}>{s.star}</Text>
              <View style={styles.breakdownBarBackground}>
                <View
                  style={[
                    styles.breakdownBarFill,
                    { width: `${s.percent}%` },
                  ]}
                />
              </View>
              <Text style={styles.breakdownPercent}>{s.percent}%</Text>
            </View>
          ))}
        </View>

        {/* Performance Breakdown */}
        <View style={styles.performanceContainer}>
          {performance.map((p) => (
            <View key={p.title} style={styles.performanceCard}>
              <Text style={styles.performanceTitle}>{p.title}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                <Text style={styles.performanceValue}>{p.value}</Text>
                <Ionicons name="star" size={16} color="#FFC107" />
              </View>
            </View>
          ))}
        </View>

        {/* Customer Reviews */}
        <View style={styles.reviews}>
          {reviews.map((r) => (
            <View key={r.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Image
                  source={{ uri: r.avatar }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
                <View style={{ marginLeft: 8, flex: 1 }}>
                  <Text style={styles.reviewName}>{r.name}</Text>
                  <Text style={styles.reviewDate}>{r.date}</Text>
                </View>
                {renderStars(r.rating)}
              </View>
              <Text style={styles.reviewText}>{r.text}</Text>
            </View>
          ))}
        </View>

        <Pressable style={styles.viewMore}>
          <Text style={styles.viewMoreText}>View More Reviews</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F8" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  backButton: { marginRight: 10 },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 32,
  },
  overall: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  overallRating: { fontSize: 48, fontWeight: "900", color: "#1E1D72" },
  reviewCount: { fontSize: 12, color: "#777" },
  breakdownContainer: { padding: 16, backgroundColor: "#fff", marginBottom: 8 },
  breakdownRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  breakdownStar: { width: 20, fontWeight: "bold" },
  breakdownBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: "#E5E5E5",
    borderRadius: 4,
    marginHorizontal: 8,
  },
  breakdownBarFill: {
    height: 8,
    backgroundColor: "#1E1D72",
    borderRadius: 4,
  },
  breakdownPercent: { width: 30, textAlign: "right", fontSize: 12 },
  performanceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  performanceCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  performanceTitle: { fontSize: 12, color: "#777", fontWeight: "bold", marginBottom: 4 },
  performanceValue: { fontSize: 18, fontWeight: "bold", color: "#1E1D72" },
  reviews: { padding: 16 },
  reviewCard: { marginBottom: 16, backgroundColor: "#fff", borderRadius: 12, padding: 12 },
  reviewHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  reviewName: { fontWeight: "bold" },
  reviewDate: { fontSize: 12, color: "#777" },
  reviewText: { fontSize: 12, color: "#333" },
  viewMore: {
    marginHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#1E1D72",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  viewMoreText: { color: "#1E1D72", fontWeight: "bold" },
});
