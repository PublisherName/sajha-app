import { Text, TouchableOpacity } from "react-native";

import { styles } from "./WhatsAppButton.styles";

interface WhatsAppButtonProps {
  onPress?: () => void;
  label?: string;
}

export default function WhatsAppButton({ onPress, label = "Contact on WhatsApp" }: WhatsAppButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
