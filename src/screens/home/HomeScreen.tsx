import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import ListingCard from "@/components/ListingCard";
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

  const categories: { label: string; value: ListingCategory | "all" }[] = [
    { label: "All", value: "all" },
    { label: "Jobs", value: "job" },
    { label: "Rooms", value: "room" },
    { label: "Market", value: "market" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Sajha</Text>
        <Text style={styles.subtitle}>UK Nepali Community Hub</Text>
      </View>

      <View style={styles.chipRow}>
        {categories.map((category) => {
          const isActive = activeCategory === category.value;
          return (
            <TouchableOpacity
              key={category.value}
              onPress={() => setActiveCategory(category.value)}
              style={[styles.chip, isActive && styles.activeChip]}
            >
              <Text style={[styles.chipText, isActive && styles.activeChipText]}>{category.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search jobs, rooms, market..."
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity style={styles.verifyCard}>
        <View style={styles.verifyIconContainer}>
          <Text style={styles.verifyIcon}>🛡️</Text>
        </View>

        <View style={styles.verifyContent}>
          <Text style={styles.verifyTitle}>Join the community</Text>
          <Text style={styles.verifySubtitle}>Verify your phone to message landlords, post jobs and chat.</Text>
        </View>

        <Text style={styles.verifyArrow}>→</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListingCard item={item} onPress={() => navigation.navigate("ListingDetail", { item })} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
