import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRef, useState } from "react";
import { Animated, type NativeScrollEvent, type NativeSyntheticEvent, TouchableOpacity, View } from "react-native";

import CategoryFilter from "@/components/CategoryFilter";
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
  const fabOpacity = useRef(new Animated.Value(1)).current;

  const { listings } = useListings();

  const filteredListings = listings.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.type === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    Animated.timing(fabOpacity, {
      toValue: offsetY > 80 ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Header />
      <CategoryFilter activeCategory={activeCategory} onSelect={setActiveCategory} />
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <ListingsFeed listings={filteredListings} navigation={navigation} onScroll={onScroll} />

      <Animated.View style={[styles.fab, { opacity: fabOpacity }]}>
        <TouchableOpacity
          style={styles.fabButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("PostListing")}
        >
          <Ionicons name="add" size={26} color="#FFFFFF" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
