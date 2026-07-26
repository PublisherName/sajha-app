import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, View } from "react-native";

import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/ListingCard";
import ScreenTitle from "@/components/ScreenTitle";
import { useListings } from "@/context/ListingsContext";
import type { RootStackParamList } from "@/types";

import { styles } from "./SavedScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Saved">;

export default function SavedScreen({ navigation }: Props) {
  const { listings, savedListingIds } = useListings();
  const savedListings = listings.filter((item) => savedListingIds.includes(item.id));

  return (
    <View style={styles.container}>
      <ScreenTitle title="Saved Listings" subtitle="Your saved jobs, rooms, and marketplace items." />

      <FlatList
        data={savedListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListingCard item={item} onPress={() => navigation.navigate("ListingDetail", { item })} />
        )}
        ListEmptyComponent={
          <EmptyState title="No saved listings yet" text="Tap the heart icon on any listing to save it here." />
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
