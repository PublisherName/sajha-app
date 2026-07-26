import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./MenuItem.styles";

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
}

export default function MenuItem({ icon, label, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={20} color="#E63946" />
      </View>

      <Text style={styles.label}>{label}</Text>

      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}
