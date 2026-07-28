import { Text, View } from "react-native";

import DrawerMenuButton from "@/components/DrawerMenuButton";

import { styles } from "./Header.styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <DrawerMenuButton />
        <View style={styles.headerText}>
          <Text style={styles.logo}>Sajha</Text>
          <Text style={styles.subtitle}>UK Nepali Community Hub</Text>
        </View>
      </View>
    </View>
  );
}
