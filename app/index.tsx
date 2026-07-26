import { ListingsProvider } from "@/context/ListingsContext";
import AppNavigator from "@/navigation/AppNavigator";

export default function Index() {
  return (
    <ListingsProvider>
      <AppNavigator />
    </ListingsProvider>
  );
}
