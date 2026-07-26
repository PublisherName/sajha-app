import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import type { RootStackParamList } from "../types";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 18,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#F5D7A1",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  avatarText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#222",
  },

  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
    marginBottom: 28,
  },

  menuButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  menuText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
});
