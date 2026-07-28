import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E63946",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  avatarText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },

  email: {
    fontSize: 13,
    color: "#888",
  },
});
