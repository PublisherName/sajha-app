import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  box: {
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 12,
  },

  placeholderText: {
    color: "#E63946",
    fontWeight: "800",
    fontSize: 14,
  },

  preview: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
