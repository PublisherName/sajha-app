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
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    marginTop: 12,
  },

  categoryRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },

  categoryChip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  activeCategoryChip: {
    backgroundColor: "#E63946",
    borderColor: "#E63946",
  },

  categoryText: {
    color: "#555",
    fontWeight: "700",
    fontSize: 12,
  },

  activeCategoryText: {
    color: "#FFFFFF",
  },

  imagePickerBox: {
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  imagePickerText: {
    color: "#E63946",
    fontWeight: "800",
  },

  imagePreview: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
    minHeight: 110,
    textAlignVertical: "top",
  },

  submitButton: {
    backgroundColor: "#E63946",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 24,
  },

  submitText: {
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
