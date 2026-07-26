import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 18,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#222",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
    marginBottom: 18,
  },

  list: {
    paddingBottom: 100,
  },

  emptyBox: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    marginTop: 10,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#222",
    marginBottom: 6,
  },

  emptyText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
