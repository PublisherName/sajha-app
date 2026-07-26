import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import ListingCard from "@/components/ListingCard";
import { useListings } from "@/context/ListingsContext";
import type { RootStackParamList } from "@/types";

import { styles } from "./MyListingsScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "MyListings">;

export default function MyListingsScreen({ navigation }: Props) {
  const { listings, deleteListing } = useListings();
  const myListings = listings.filter((item) => item.isMine);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Listings</Text>
      <Text style={styles.subtitle}>Listings you have posted on Sajha.</Text>

      <FlatList
        data={myListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listingWrapper}>
            <ListingCard item={item} onPress={() => navigation.navigate("ListingDetail", { item })} />

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("EditListing", { item })}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteListing(item.id)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>No listings yet</Text>
            <Text style={styles.emptyText}>Tap the + button to post your first listing.</Text>
          </View>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
