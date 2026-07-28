import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 14,
    backgroundColor: "#E63946",
  },

  backButton: {
    padding: 6,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginLeft: 12,
  },

  headerSpacer: {
    width: 34,
  },

  list: {
    padding: 14,
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
