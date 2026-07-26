import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 18,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 20,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#E63946",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  avatarText: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  name: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: "#888",
  },
});
