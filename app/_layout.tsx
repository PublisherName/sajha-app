import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

import { AuthProvider, useAuth } from "@/context/AuthContext";

function RootLayout() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F7F7F7" }}>
        <ActivityIndicator size="large" color="#E63946" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

export default function Layout() {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}
