import { Ionicons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, View } from "react-native";

import ListingsFeed from "@/components/ListingsFeed";
import SearchBar from "@/components/SearchBar";
import { useListings } from "@/context/ListingsContext";
import type { ListingCategory, RootStackParamList } from "@/types";

import { styles } from "./CategoryScreen.styles";

const categoryIcons: Record<ListingCategory, keyof typeof Ionicons.glyphMap> = {
  job: "briefcase-outline",
  room: "home-outline",
  market: "pricetag-outline",
};

const categoryColors: Record<ListingCategory, string> = {
  job: "#E63946",
  room: "#2A9D8F",
  market: "#E9C46A",
};

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
      <View style={[styles.hero, { backgroundColor: categoryColors[category] }]}>
        <View style={styles.heroIcon}>
          <Ionicons name={categoryIcons[category]} size={28} color="#FFFFFF" />
        </View>
        <Text style={styles.heroTitle}>{title}</Text>
        {subtitle ? <Text style={styles.heroSubtitle}>{subtitle}</Text> : null}
      </View>

      <View style={styles.searchSection}>
        <SearchBar value={searchText} onChangeText={setSearchText} placeholder={`Search ${title.toLowerCase()}...`} />
      </View>

      <ListingsFeed listings={filteredListings} navigation={navigation} />
    </View>
  );
}
