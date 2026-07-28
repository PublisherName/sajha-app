import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#FFF4E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },

  chevron: {
    fontSize: 18,
    color: "#CCC",
  },
});
