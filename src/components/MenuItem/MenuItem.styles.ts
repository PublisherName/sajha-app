import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginHorizontal: 18,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FFF4E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  chevron: {
    fontSize: 18,
    color: "#CCC",
  },
});
