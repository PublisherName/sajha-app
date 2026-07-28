import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
  },

  fabButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E63946",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
  },
});
