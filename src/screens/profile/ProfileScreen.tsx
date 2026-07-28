import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";

import DrawerMenuButton from "@/components/DrawerMenuButton";
import MenuItem from "@/components/MenuItem";
import ProfileHeader from "@/components/ProfileHeader";
import type { RootStackParamList } from "@/types";

import { styles } from "./ProfileScreen.styles";

export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DrawerMenuButton />
      </View>

      <ProfileHeader name="Sajha User" email="user@sajha.co.uk" />

      <MenuItem icon="heart-outline" label="Saved Listings" onPress={() => navigation.navigate("Saved")} />
      <MenuItem icon="document-text-outline" label="My Listings" onPress={() => navigation.navigate("MyListings")} />
      <MenuItem icon="settings-outline" label="Settings" />
      <MenuItem icon="information-circle-outline" label="About" />
      <MenuItem icon="log-out-outline" label="Sign Out" />
    </View>
  );
}
