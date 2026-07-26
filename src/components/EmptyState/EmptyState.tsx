import { Text, View } from "react-native";

import { styles } from "./EmptyState.styles";

interface EmptyStateProps {
  title: string;
  text: string;
}

export default function EmptyState({ title, text }: EmptyStateProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
