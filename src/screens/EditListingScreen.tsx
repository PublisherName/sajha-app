import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import { useListings } from "../context/ListingsContext";
import type { RootStackParamList } from "../types";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 18,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#222",
    marginTop: 20,
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    fontSize: 14,
    outlineWidth: 1,
    outlineColor: "#F5A1A8",
  },

  textArea: {
    minHeight: 120,
    textAlignVertical: "top",
  },

  saveButton: {
    backgroundColor: "#E63946",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 24,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  cancelText: {
    textAlign: "center",
    color: "#777",
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 40,
  },
});
