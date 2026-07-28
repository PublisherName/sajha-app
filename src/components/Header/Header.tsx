import { Text, View } from "react-native";

import DrawerMenuButton from "@/components/DrawerMenuButton";

import { styles } from "./Header.styles";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <DrawerMenuButton />
        <View style={styles.headerText}>
          <Text style={styles.logo}>{title || "Sajha"}</Text>
          {subtitle ? (
            <Text style={styles.subtitle}>{subtitle}</Text>
          ) : (
            !title && <Text style={styles.subtitle}>UK Nepali Community Hub</Text>
          )}
        </View>
      </View>
    </View>
  );
}
