import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

import FormInput from "@/components/FormInput";
import ScreenTitle from "@/components/ScreenTitle";
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
      <ScreenTitle title="Edit Listing" />

      <FormInput label="Title" value={title} onChangeText={setTitle} />
      <FormInput label="Price / Pay" value={price} onChangeText={setPrice} />
      <FormInput label="Location" value={location} onChangeText={setLocation} />
      <FormInput label="Description" value={description} onChangeText={setDescription} multiline />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
