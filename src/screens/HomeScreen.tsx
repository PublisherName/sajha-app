import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import ListingCard from "../components/ListingCard";
import { useListings } from "../context/ListingsContext";
import type { ListingCategory, RootStackParamList } from "../types";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  header: {
    backgroundColor: "#E63946",
    paddingTop: 38,
    paddingHorizontal: 18,
    paddingBottom: 18,
  },

  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 14,
    color: "#FFE5E8",
    marginTop: 4,
  },

  chipRow: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 8,
  },

  chip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },

  activeChip: {
    backgroundColor: "#E63946",
  },

  chipText: {
    color: "#555",
    fontWeight: "500",
  },

  activeChipText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  searchBox: {
    paddingHorizontal: 14,
    marginBottom: 10,
  },

  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    outlineWidth: 1,
    outlineColor: "#F5A1A8",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  verifyCard: {
    backgroundColor: "#FFF4E5",
    marginHorizontal: 14,
    marginBottom: 14,
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F5D7A1",
  },

  verifyIconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFE7CC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  verifyIcon: {
    fontSize: 22,
  },

  verifyContent: {
    flex: 1,
  },

  verifyTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#222",
    marginBottom: 4,
  },

  verifySubtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },

  verifyArrow: {
    fontSize: 24,
    color: "#777",
    fontWeight: "700",
  },

  list: {
    paddingHorizontal: 14,
    paddingBottom: 100,
  },
});
