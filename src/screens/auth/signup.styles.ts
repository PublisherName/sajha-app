import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    flexGrow: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 40,
  },

  logoSection: {
    alignItems: "center",
    marginBottom: 36,
  },

  logoIcon: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: "#E63946",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  logoIconInner: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },

  appName: {
    fontSize: 32,
    fontWeight: "800",
    color: "#222",
    marginBottom: 4,
  },

  tagline: {
    fontSize: 14,
    color: "#888",
  },

  formSection: {
    gap: 4,
  },

  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF0F0",
    padding: 12,
    borderRadius: 10,
    gap: 8,
    marginBottom: 8,
  },

  errorText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#E63946",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    marginTop: 8,
  },

  input: {
    backgroundColor: "#F7F7F7",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#222",
  },

  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 12,
  },

  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#222",
  },

  eyeButton: {
    paddingRight: 14,
  },

  signupButton: {
    backgroundColor: "#E63946",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },

  signupButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#EEE",
  },

  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: "600",
    color: "#AAA",
  },

  loginLink: {
    alignItems: "center",
    paddingVertical: 12,
  },

  loginText: {
    fontSize: 14,
    color: "#888",
  },

  loginBold: {
    fontWeight: "700",
    color: "#E63946",
  },
});
