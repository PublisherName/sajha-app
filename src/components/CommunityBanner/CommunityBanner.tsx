import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./CommunityBanner.styles";

interface CommunityBannerProps {
  title?: string;
  subtitle?: string;
  onPress?: () => void;
}

export default function CommunityBanner({
  title = "Join the community",
  subtitle = "Verify your phone to message landlords, post jobs and chat.",
  onPress,
}: CommunityBannerProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🛡️</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
}
