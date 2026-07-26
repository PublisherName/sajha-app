import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
