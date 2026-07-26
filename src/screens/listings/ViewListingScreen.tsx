import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";

import type { RootStackParamList } from "@/types";

import { styles } from "./ViewListingScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "ListingDetail">;

export default function ListingDetailScreen({ route, navigation }: Props) {
  const { item } = route.params;

  const openWhatsApp = () => {
    const message = `Hi, I saw your listing on Sajha: ${item.title}`;
    const phoneNumber = item.phoneNumber || "447000000000";
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
