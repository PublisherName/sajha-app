import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
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
});
