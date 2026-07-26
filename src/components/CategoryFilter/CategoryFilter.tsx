import { Text, TouchableOpacity, View } from "react-native";

import type { ListingCategory } from "@/types";

import { styles } from "./CategoryFilter.styles";

interface CategoryFilterProps {
  activeCategory: ListingCategory | "all";
  onSelect: (category: ListingCategory | "all") => void;
}

const categories: { label: string; value: ListingCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Jobs", value: "job" },
  { label: "Rooms", value: "room" },
  { label: "Market", value: "market" },
];

export default function CategoryFilter({ activeCategory, onSelect }: CategoryFilterProps) {
  return (
    <View style={styles.row}>
      {categories.map((category) => {
        const isActive = activeCategory === category.value;
        return (
          <TouchableOpacity
            key={category.value}
            onPress={() => onSelect(category.value)}
            style={[styles.chip, isActive && styles.activeChip]}
          >
            <Text style={[styles.chipText, isActive && styles.activeChipText]}>{category.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
