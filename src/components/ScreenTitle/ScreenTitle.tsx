import { Text, View } from "react-native";

import { styles } from "./ScreenTitle.styles";

interface ScreenTitleProps {
  title: string;
  subtitle?: string;
}

export default function ScreenTitle({ title, subtitle }: ScreenTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}
