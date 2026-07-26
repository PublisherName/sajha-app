import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Text, View } from "react-native";

import ListingCard from "@/components/ListingCard";
import { useListings } from "@/context/ListingsContext";
import type { RootStackParamList } from "@/types";

import { styles } from "./SavedScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Saved">;

export default function SavedScreen({ navigation }: Props) {
  const { listings, savedListingIds } = useListings();
  const savedListings = listings.filter((item) => savedListingIds.includes(item.id));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Listings</Text>
      <Text style={styles.subtitle}>Your saved jobs, rooms, and marketplace items.</Text>

      <FlatList
        data={savedListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListingCard item={item} onPress={() => navigation.navigate("ListingDetail", { item })} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>No saved listings yet</Text>
            <Text style={styles.emptyText}>Tap the heart icon on any listing to save it here.</Text>
          </View>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
