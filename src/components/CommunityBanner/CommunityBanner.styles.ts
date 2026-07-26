import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
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

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFE7CC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  icon: {
    fontSize: 22,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#222",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },

  arrow: {
    fontSize: 24,
    color: "#777",
    fontWeight: "700",
  },
});
