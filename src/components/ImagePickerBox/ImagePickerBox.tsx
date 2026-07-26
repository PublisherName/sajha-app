import { Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./ImagePickerBox.styles";

interface ImagePickerBoxProps {
  imageUri?: string | null;
  label?: string;
  onPress?: () => void;
}

export default function ImagePickerBox({ imageUri, label = "+ Add Image", onPress }: ImagePickerBoxProps) {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress} activeOpacity={0.7}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.preview} />
      ) : (
        <Text style={styles.placeholderText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
