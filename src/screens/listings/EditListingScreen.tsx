import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import { useListings } from "@/context/ListingsContext";
import type { RootStackParamList } from "@/types";

import { styles } from "./EditListingScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "EditListing">;

export default function EditListingScreen({ route, navigation }: Props) {
  const { item } = route.params;
  const { updateListing } = useListings();

  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [location, setLocation] = useState(item.location);
  const [description, setDescription] = useState(item.description);

  const handleSave = () => {
    updateListing(item.id, { title, price, location, description });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Edit Listing</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Price / Pay</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} />

      <Text style={styles.label}>Location</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={[styles.input, styles.textArea]} value={description} onChangeText={setDescription} multiline />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
