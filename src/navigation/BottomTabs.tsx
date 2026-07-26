import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import JobsScreen from "../screens/JobsScreen";
import MarketScreen from "../screens/MarketScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RoomsScreen from "../screens/RoomsScreen";
import type { RootStackParamList, TabParamList } from "../types";

const Tab = createBottomTabNavigator<TabParamList>();

function PostButton() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity style={styles.postButtonContainer}>
      <TouchableOpacity style={styles.postButton} onPress={() => navigation.navigate("PostListing")}>
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#E63946",
        tabBarInactiveTintColor: "#888",

        tabBarStyle: {
          position: "absolute",
          height: 68,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 8,
        },

        tabBarIcon: ({ color }) => {
          let iconName: React.ComponentProps<typeof Ionicons>["name"] = "home";

          if (route.name === "Home") iconName = "home";
          if (route.name === "Jobs") iconName = "briefcase";
          if (route.name === "Rooms") iconName = "bed";
          if (route.name === "Market") iconName = "cart";
          if (route.name === "Profile") iconName = "person";
          if (route.name === "Post") return null;

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Jobs" component={JobsScreen} />

      <Tab.Screen
        name="Post"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarButton: () => <PostButton />,
        }}
      />

      <Tab.Screen name="Rooms" component={RoomsScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  postButtonContainer: {
    flex: 1,
    alignItems: "center",
  },

  postButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#E63946",

    alignItems: "center",
    justifyContent: "center",

    top: -18,

    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 8,
  },
});
