import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

import ListingCard from "@/components/ListingCard";
import type { Listing, RootStackParamList } from "@/types";

import { styles } from "./ListingsFeed.styles";

interface ListingsFeedProps {
  listings: Listing[];
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function ListingsFeed({ listings, navigation }: ListingsFeedProps) {
  return (
    <FlatList
      data={listings}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListingCard item={item} onPress={() => navigation.navigate("ListingDetail", { item })} />
      )}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
}
