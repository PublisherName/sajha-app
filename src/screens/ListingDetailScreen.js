import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ListingDetailScreen({ route, navigation }) {
  const { item } = route.params;

  const openWhatsApp = () => {
    const message = `Hi, I saw your listing on Sajha: ${item.title}`;
    const phoneNumber = item.phoneNumber || "447000000000"; // replace later with poster phone number

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>No Image Available</Text>
        </View>
      )}

      <Text style={styles.type}>{item.type.toUpperCase()}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.time}>Posted {item.postedAt}</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{item.description}</Text>

      <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
        <Text style={styles.whatsappText}>Contact on WhatsApp</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#F7F7F7",
  },

  back: {
    fontSize: 15,
    color: "#E63946",
    fontWeight: "700",
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 18,
  },

  imagePlaceholder: {
    height: 170,
    backgroundColor: "#FFE5E8",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  imageText: {
    color: "#E63946",
    fontWeight: "700",
  },

  type: {
    color: "#E63946",
    fontWeight: "800",
    fontSize: 12,
    marginBottom: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
    marginBottom: 8,
  },

  price: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111",
    marginBottom: 8,
  },

  location: {
    fontSize: 15,
    color: "#555",
    marginBottom: 4,
  },

  time: {
    fontSize: 13,
    color: "#999",
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },

  whatsappButton: {
    marginTop: 28,
    marginBottom: 40,
    backgroundColor: "#25D366",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  whatsappText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
