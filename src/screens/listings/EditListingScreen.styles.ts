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

  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#E63946",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },

  categoryBadgeText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
  },

  errorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
  },

  errorText: {
    color: "#E63946",
    fontSize: 13,
  },

  saveButton: {
    backgroundColor: "#E63946",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 24,
  },

  saveText: {
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
