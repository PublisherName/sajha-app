import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useAuth } from "@/context/AuthContext";

import { styles } from "@/screens/auth/login.styles";

export default function ForgotPasswordScreen() {
  const { resetPassword } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleReset = async () => {
    setError("");
    setSuccess(false);
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    setLoading(true);
    const result = await resetPassword(email.trim());
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.content}>
        <View style={styles.logoSection}>
          <View style={styles.logoIcon}>
            <View style={styles.logoIconInner} />
          </View>
          <Text style={styles.appName}>Sajha</Text>
          <Text style={styles.tagline}>Reset Your Password</Text>
        </View>

        <View style={styles.formSection}>
          {error ? (
            <View style={styles.errorBox}>
              <Ionicons name="alert-circle" size={16} color="#E63946" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          {success ? (
            <View style={styles.successBox}>
              <Ionicons name="checkmark-circle" size={16} color="#2ECC71" />
              <Text style={styles.successText}>Password reset link sent! Check your email.</Text>
            </View>
          ) : null}

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#AAA"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TouchableOpacity
            style={[styles.loginButton, loading && { opacity: 0.7 }]}
            onPress={handleReset}
            activeOpacity={0.85}
            disabled={loading}
          >
            {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.loginButtonText}>Send Reset Link</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupLink} onPress={() => router.back()}>
            <Text style={styles.signupText}>
              Back to <Text style={styles.signupBold}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
