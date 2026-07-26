import { Text, View } from "react-native";

import { styles } from "./Header.styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Sajha</Text>
      <Text style={styles.subtitle}>UK Nepali Community Hub</Text>
    </View>
  );
}
