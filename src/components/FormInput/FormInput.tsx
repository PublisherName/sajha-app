import { Text, TextInput, View } from "react-native";

import { styles } from "./FormInput.styles";

interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
}

export default function FormInput({ label, value, onChangeText, placeholder, multiline }: FormInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777"
        multiline={multiline}
      />
    </View>
  );
}
