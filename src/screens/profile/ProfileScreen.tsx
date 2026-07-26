import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

import type { RootStackParamList } from "@/types";

import { styles } from "./ProfileScreen.styles";

export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>SG</Text>
      </View>

      <Text style={styles.name}>Sajha User</Text>

      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Saved")}>
        <Text style={styles.menuText}>❤️ Saved Listings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("MyListings")}>
        <Text style={styles.menuText}>📄 My Listings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>⚙️ Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
