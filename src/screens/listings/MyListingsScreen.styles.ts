import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 18,
  },

  list: {
    paddingBottom: 100,
  },

  listingWrapper: {
    marginBottom: 14,
  },

  actionRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: -4,
    marginBottom: 6,
  },

  editButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E63946",
  },

  editText: {
    color: "#E63946",
    fontWeight: "800",
  },

  deleteButton: {
    flex: 1,
    backgroundColor: "#E63946",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  deleteText: {
    color: "#FFFFFF",
    fontWeight: "800",
  },
});
