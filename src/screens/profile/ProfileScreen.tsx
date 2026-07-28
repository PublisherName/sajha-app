import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";
import { View } from "react-native";

import Header from "@/components/Header";
import MenuItem from "@/components/MenuItem";
import ProfileHeader from "@/components/ProfileHeader";
import { useAuth } from "@/context/AuthContext";
import type { RootStackParamList } from "@/types";

import { styles } from "./ProfileScreen.styles";

export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const router = useRouter();
  const { logout, user } = useAuth();

  return (
    <View style={styles.container}>
      <Header title="Profile" />

      <ProfileHeader name={user?.name ?? "Sajha User"} email={user?.email} initials={user?.initials} />

      <View style={styles.menuSection}>
        <MenuItem icon="heart-outline" label="Saved Listings" onPress={() => navigation.navigate("Saved")} />
        <MenuItem icon="document-text-outline" label="My Listings" onPress={() => navigation.navigate("MyListings")} />
        <MenuItem icon="settings-outline" label="Settings" onPress={() => navigation.navigate("Settings")} />
        <MenuItem
          icon="log-out-outline"
          label="Sign Out"
          onPress={() => {
            logout();
            router.replace("/login");
          }}
        />
      </View>
    </View>
  );
}
