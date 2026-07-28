import { Ionicons } from "@expo/vector-icons";
import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { RootStackParamList } from "@/types";

import { styles } from "./SidebarDrawer.styles";

const menuItems = [
  { icon: "home-outline" as const, label: "Home", route: "Home" as const },
  { icon: "briefcase-outline" as const, label: "Jobs", route: "Jobs" as const },
  { icon: "bed-outline" as const, label: "Rooms", route: "Rooms" as const },
  { icon: "cart-outline" as const, label: "Market", route: "Market" as const },
  { icon: "person-outline" as const, label: "Profile", route: "Profile" as const },
];

export default function SidebarDrawer(props: DrawerContentComponentProps) {
  const { navigation, state } = props;
  const rootNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const currentRoute = state.routes[state.index]?.name;
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.profileSection, { paddingTop: insets.top + 20 }]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SU</Text>
        </View>
        <Text style={styles.name}>Sajha User</Text>
        <Text style={styles.handle}>@sajhauser</Text>
      </View>

      <ScrollView style={styles.menuSection} contentContainerStyle={styles.menuContent}>
        {menuItems.map((item) => {
          const isActive = currentRoute === item.route;
          return (
            <TouchableOpacity
              key={item.route}
              style={[styles.menuItem, isActive && styles.menuItemActive]}
              onPress={() => {
                if (isActive) {
                  navigation.closeDrawer();
                  return;
                }
                navigation.navigate(item.route);
              }}
            >
              <Ionicons name={item.icon} size={22} color={isActive ? "#E63946" : "#333"} />
              <Text style={[styles.menuLabel, isActive && styles.menuLabelActive]}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={[styles.bottomSection, { paddingBottom: insets.bottom + 20 }]}>
        <TouchableOpacity
          style={styles.postButton}
          onPress={() => {
            navigation.closeDrawer();
            rootNavigation.navigate("PostListing");
          }}
        >
          <Ionicons name="add" size={24} color="#FFFFFF" />
          <Text style={styles.postButtonText}>New Post</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomMenuItem}
          onPress={() => {
            navigation.closeDrawer();
            rootNavigation.navigate("Settings");
          }}
        >
          <Ionicons name="settings-outline" size={20} color="#666" />
          <Text style={styles.bottomMenuLabel}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomMenuItem}>
          <Ionicons name="log-out-outline" size={20} color="#666" />
          <Text style={styles.bottomMenuLabel}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
