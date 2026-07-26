import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useListings } from "../context/ListingsContext";
import type { Listing } from "../types";

interface ListingCardProps {
  item: Listing;
  onPress: () => void;
}

export default function ListingCard({ item, onPress }: ListingCardProps) {
  const { toggleSaveListing, isListingSaved } = useListings();
  const saved = isListingSaved(item.id);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {item.image && <Image source={{ uri: item.image }} style={styles.image} />}

      <View style={styles.row}>
        <Text style={styles.type}>{item.type.toUpperCase()}</Text>

        <TouchableOpacity
          onPress={(event) => {
            event.stopPropagation();
            toggleSaveListing(item.id);
          }}
        >
          <Ionicons name={saved ? "heart" : "heart-outline"} size={22} color={saved ? "#E63946" : "#999"} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.footerRow}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.time}>{item.postedAt}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EEEEEE",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  type: {
    fontSize: 11,
    fontWeight: "700",
    color: "#E63946",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
  },

  location: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    color: "#444",
    marginBottom: 8,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },

  time: {
    fontSize: 11,
    color: "#999",
  },
});
