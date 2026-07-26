import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditListingScreen from "../screens/EditListingScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import MyListingsScreen from "../screens/MyListingsScreen";
import PostListingScreen from "../screens/PostListingScreen";
import SavedScreen from "../screens/SavedScreen";
import type { RootStackParamList } from "../types";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="ListingDetail" component={ListingDetailScreen} />
      <Stack.Screen name="PostListing" component={PostListingScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen name="MyListings" component={MyListingsScreen} />
      <Stack.Screen name="EditListing" component={EditListingScreen} />
    </Stack.Navigator>
  );
}
