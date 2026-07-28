import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 14,
    backgroundColor: "#E63946",
  },

  backButton: {
    padding: 6,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginLeft: 12,
  },

  headerSpacer: {
    width: 34,
  },

  content: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 8,
  },

  section: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    overflow: "hidden",
  },

  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },

  settingIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#FFF4E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  settingContent: {
    flex: 1,
  },

  settingLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },

  settingValue: {
    fontSize: 13,
    color: "#888",
    marginTop: 1,
  },

  settingDescription: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },

  bottomSpacer: {
    height: 40,
  },
});
