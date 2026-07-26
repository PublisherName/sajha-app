import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EEEEEE",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  type: {
    fontSize: 11,
    fontWeight: "700",
    color: "#E63946",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
  },

  location: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    color: "#444",
    marginBottom: 8,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },

  time: {
    fontSize: 11,
    color: "#999",
  },
});
