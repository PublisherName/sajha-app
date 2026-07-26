import { ListingsProvider } from "../src/context/ListingsContext";
import AppNavigator from "../src/navigation/AppNavigator";

export default function Index() {
  return (
    <ListingsProvider>
      <AppNavigator />
    </ListingsProvider>
  );
}
