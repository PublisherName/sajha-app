import { Redirect } from "expo-router";

import { useAuth } from "@/context/AuthContext";
import { ListingsProvider } from "@/context/ListingsContext";
import AppNavigator from "@/navigation/AppNavigator";

export default function Index() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <ListingsProvider>
      <AppNavigator />
    </ListingsProvider>
  );
}
