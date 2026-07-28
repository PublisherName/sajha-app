import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { FlatList } from "react-native";

import ListingCard from "@/components/ListingCard";
import type { Listing, RootStackParamList } from "@/types";

import { styles } from "./ListingsFeed.styles";

interface ListingsFeedProps {
  listings: Listing[];
  navigation: NativeStackNavigationProp<RootStackParamList>;
  onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export default function ListingsFeed({ listings, navigation, onScroll }: ListingsFeedProps) {
  return (
    <FlatList
      data={listings}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListingCard item={item} onPress={() => navigation.navigate("ListingDetail", { item })} />
      )}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
}
