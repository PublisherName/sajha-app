import AppNavigator from '../src/navigation/AppNavigator';
import { ListingsProvider } from '../src/context/ListingsContext';

export default function Index() {
  return (
    <ListingsProvider>
      <AppNavigator />
    </ListingsProvider>
  );
}