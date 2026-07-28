import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { View } from "react-native";

import Header from "@/components/Header";
import ListingsFeed from "@/components/ListingsFeed";
import SearchBar from "@/components/SearchBar";
import { useListings } from "@/context/ListingsContext";
import type { ListingCategory, RootStackParamList } from "@/types";

import { styles } from "./CategoryScreen.styles";

interface CategoryScreenProps {
  title: string;
  subtitle?: string;
  category: ListingCategory;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function CategoryScreen({ title, subtitle, category, navigation }: CategoryScreenProps) {
  const [searchText, setSearchText] = useState("");
  const { listings } = useListings();

  const filteredListings = listings.filter((item) => {
    const matchesCategory = item.type === category;
    const matchesSearch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <Header title={title} subtitle={subtitle} />

      <View style={styles.searchSection}>
        <SearchBar value={searchText} onChangeText={setSearchText} placeholder={`Search ${title.toLowerCase()}...`} />
      </View>

      <ListingsFeed listings={filteredListings} navigation={navigation} />
    </View>
  );
}
