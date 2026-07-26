import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useListings } from "@/context/ListingsContext";
import type { Listing } from "@/types";

import { styles } from "./ListingCard.styles";

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
