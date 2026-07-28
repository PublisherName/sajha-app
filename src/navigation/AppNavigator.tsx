import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditListingScreen from "@/screens/listings/EditListingScreen";
import MyListingsScreen from "@/screens/listings/MyListingsScreen";
import PostListingScreen from "@/screens/listings/PostListingScreen";
import SavedScreen from "@/screens/listings/SavedScreen";
import ViewListingScreen from "@/screens/listings/ViewListingScreen";
import type { RootStackParamList } from "@/types";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
      <Stack.Screen name="ListingDetail" component={ViewListingScreen} />
      <Stack.Screen name="PostListing" component={PostListingScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen name="MyListings" component={MyListingsScreen} />
      <Stack.Screen name="EditListing" component={EditListingScreen} />
    </Stack.Navigator>
  );
}
