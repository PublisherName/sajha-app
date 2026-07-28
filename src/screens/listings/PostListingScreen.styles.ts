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

  content: {
    flex: 1,
    padding: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    marginTop: 12,
  },

  categoryRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },

  categoryChip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  activeCategoryChip: {
    backgroundColor: "#E63946",
    borderColor: "#E63946",
  },

  categoryText: {
    color: "#555",
    fontWeight: "700",
    fontSize: 12,
  },

  activeCategoryText: {
    color: "#FFFFFF",
  },

  submitButton: {
    backgroundColor: "#E63946",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 24,
  },

  submitText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  cancelText: {
    textAlign: "center",
    color: "#777",
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 40,
  },
});
