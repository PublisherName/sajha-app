import { TextInput, View } from "react-native";

import { styles } from "./SearchBar.styles";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Search jobs, rooms, market...",
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#999"
      />
    </View>
  );
}
