import { createDrawerNavigator } from "@react-navigation/drawer";
import SidebarDrawer from "@/components/SidebarDrawer";
import JobsScreen from "@/screens/explore/JobsScreen";
import MarketScreen from "@/screens/explore/MarketScreen";
import RoomsScreen from "@/screens/explore/RoomsScreen";
import HomeScreen from "@/screens/home/HomeScreen";
import MyListingsScreen from "@/screens/listings/MyListingsScreen";
import SavedScreen from "@/screens/listings/SavedScreen";
import ProfileScreen from "@/screens/profile/ProfileScreen";
import type { DrawerParamList } from "@/types";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SidebarDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerStyle: {
          width: 280,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Jobs" component={JobsScreen} />
      <Drawer.Screen name="Rooms" component={RoomsScreen} />
      <Drawer.Screen name="Market" component={MarketScreen} />
      <Drawer.Screen name="Saved" component={SavedScreen} />
      <Drawer.Screen name="MyListings" component={MyListingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
