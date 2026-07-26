import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 18,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#222",
    marginTop: 20,
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    fontSize: 14,
    outlineWidth: 1,
    outlineColor: "#F5A1A8",
  },

  textArea: {
    minHeight: 120,
    textAlignVertical: "top",
  },

  saveButton: {
    backgroundColor: "#E63946",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 24,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  cancelText: {
    textAlign: "center",
    color: "#777",
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 40,
  },
});
