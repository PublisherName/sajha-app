import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  profileSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#E63946",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },

  handle: {
    fontSize: 14,
    color: "#888",
  },

  menuSection: {
    flex: 1,
    paddingTop: 12,
  },

  menuContent: {
    flexGrow: 1,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 14,
  },

  menuItemActive: {
    backgroundColor: "#FFF0F0",
  },

  menuLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },

  menuLabelActive: {
    fontWeight: "700",
    color: "#E63946",
  },

  bottomSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },

  postButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E63946",
    paddingVertical: 14,
    borderRadius: 30,
    gap: 8,
    marginBottom: 20,
  },

  postButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  bottomMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 4,
    gap: 12,
  },

  bottomMenuLabel: {
    fontSize: 15,
    color: "#666",
  },
});
