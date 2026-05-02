import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ContactSupportScreen({ goBack }) {
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </Pressable>

        <Text style={styles.headerTitle}>Contact Support</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        
        {/* INTRO */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>
            We are here to help you.
          </Text>
          <Text style={styles.subtitle}>
            Get in touch with our team for technical assistance or general inquiries.
          </Text>
        </View>

        {/* CARD 1 */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <MaterialIcons name="call" size={20} color="#1E1D74" />
              </View>

              <View>
                <Text style={styles.cardTitle}>Call Support</Text>
                <Text style={styles.cardSub}>+966 5X XXX XXXX</Text>
              </View>
            </View>

            <Pressable style={styles.button}>
              <Ionicons name="call" size={16} color="#fff" />
              <Text style={styles.buttonText}>Call now</Text>
            </Pressable>
          </View>

          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD79uPGimTipKAWETnJyJp5SRRG-abW9_I3K1XffEmBVIKjdDE5M91PbtHhfz6S-VeQGTlY1u5oQAES6hVVoz5sVW-wwJ3tJnDVcDTRuxLjQmdkq9KvmbNTWb2uB4eq6P1WJo2jKgbWUBWjjQukoBmrJ2kRfhyNReuwZDHYMpTFK1PdIbmn3BG7OT1-aOqmOFcaq7j6O2lln-7JZzyJ4SK5Iq6Dm7gR_muo7_CjLReqpschTSZMzyGmPCjBum570_cI8F8X1cq_ZZo",
            }}
            style={styles.image}
          />
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <MaterialIcons name="mail" size={20} color="#1E1D74" />
              </View>

              <View>
                <Text style={styles.cardTitle}>Email Support</Text>
                <Text style={styles.cardSub}>support@musaeid.app</Text>
              </View>
            </View>

            <Pressable style={styles.button}>
              <Ionicons name="send" size={16} color="#fff" />
              <Text style={styles.buttonText}>Send email</Text>
            </Pressable>
          </View>

          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSqVhTuSAhJRKpOTBxagdx31-pV4lNYFJWgRed_0GG565Ej2vDHlRSE73GygAA6Qi54wjJB1s-z4-QBzY0dz7Pb-YDjd77rgTmhfoP0FwXgnf_8cP4AXCHxblwp8gsnEn2WViYyNpq0-IkMOrzw5dpfl9yAwe6j6q8XDjigCIlaqvR3XZ2Tx6iGDUhmu1yhdxEO1exyHz5pjbQf1V8zp5MMT8RDHkhT8-cXLC0Lp66GMX3bgKRgGpFfOdX0rTMc2lJK9bWp2FlT9s",
            }}
            style={styles.image}
          />
        </View>

        {/* CARD 3 */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <MaterialIcons name="forum" size={20} color="#1E1D74" />
              </View>

              <View>
                <Text style={styles.cardTitle}>In-app Messaging</Text>
                <Text style={styles.cardSub}>Chat live with a technician</Text>
              </View>
            </View>

            <Pressable style={styles.button}>
              <Ionicons name="chatbubble" size={16} color="#fff" />
              <Text style={styles.buttonText}>Open chat</Text>
            </Pressable>
          </View>

          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8XhduPC8ZCNn5YXKg4vyOyksRhg93FJfyQtdxjgtHvQcyuH6uPpoXC4SPg6T204BqR02tZevp_E8TI6TvcxIyZ0ESlcoMTtAKIGKbBW_YCIYJq40LYKjzT5kGZMikujxt3Ty0zZ9fUVmns8nsNmFMGkMdUpsVoZ_rRWS7RxV2BK-i8O1TPpP6RSKcXwo9Ohgz5HSceQCx8ya_3Ckokfr_Z5Sa0pkFBh3pknARFuaLJGK7B73NrW8GrYw6w07jPmksht8IZ5cc_8c",
            }}
            style={styles.image}
          />
        </View>

        {/* FAQ */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Looking for quick answers?
          </Text>
          <Text style={styles.link}>
            Browse Help Center
          </Text>
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
    padding: 16,
    backgroundColor: "#fff",
  },

  backBtn: { marginRight: 10 },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#777",
    marginTop: 6,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardContent: { flex: 1 },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },

  iconBox: {
    backgroundColor: "#E8E8FF",
    padding: 8,
    borderRadius: 10,
  },

  cardTitle: { fontWeight: "bold", fontSize: 16 },

  cardSub: { color: "#777", fontSize: 12 },

  button: {
    flexDirection: "row",
    backgroundColor: "#1E1D74",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
  },

  buttonText: { color: "#fff", fontWeight: "bold" },

  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginLeft: 10,
  },

  footer: {
    alignItems: "center",
    marginTop: 20,
  },

  footerText: {
    color: "#777",
  },

  link: {
    color: "#1E1D74",
    fontWeight: "bold",
    marginTop: 6,
  },
});
