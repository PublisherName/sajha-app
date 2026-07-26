import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { View } from "react-native";

import CategoryFilter from "@/components/CategoryFilter";
import CommunityBanner from "@/components/CommunityBanner";
import Header from "@/components/Header";
import ListingsFeed from "@/components/ListingsFeed";
import SearchBar from "@/components/SearchBar";
import { useListings } from "@/context/ListingsContext";
import type { ListingCategory, RootStackParamList } from "@/types";

import { styles } from "./HomeScreen.styles";

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeCategory, setActiveCategory] = useState<ListingCategory | "all">("all");
  const [searchText, setSearchText] = useState("");

  const { listings } = useListings();

  const filteredListings = listings.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.type === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <Header />
      <CategoryFilter activeCategory={activeCategory} onSelect={setActiveCategory} />
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <CommunityBanner />
      <ListingsFeed listings={filteredListings} navigation={navigation} />
    </View>
  );
}
