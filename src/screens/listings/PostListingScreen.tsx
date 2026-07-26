import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import FormInput from "@/components/FormInput";
import ImagePickerBox from "@/components/ImagePickerBox";
import ScreenTitle from "@/components/ScreenTitle";
import { useListings } from "@/context/ListingsContext";
import type { ListingCategory, RootStackParamList } from "@/types";

import { styles } from "./PostListingScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "PostListing">;

interface FieldDef {
  key: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
}

const formFields: Record<ListingCategory, FieldDef[]> = {
  job: [
    { key: "title", label: "Job Title", placeholder: "e.g. Kitchen Assistant Needed" },
    { key: "price", label: "Salary / Pay", placeholder: "e.g. \u00A311.50/hr" },
    { key: "location", label: "Location", placeholder: "e.g. Aldershot, UK" },
    { key: "employmentType", label: "Employment Type", placeholder: "e.g. Part-time / Full-time" },
    { key: "phoneNumber", label: "WhatsApp Number", placeholder: "e.g. 447700900123" },
    { key: "description", label: "Description", placeholder: "Write details about the job...", multiline: true },
  ],

  room: [
    { key: "title", label: "Room Type", placeholder: "e.g. Single Room / Double Room" },
    { key: "price", label: "Rent", placeholder: "e.g. \u00A3450/month" },
    { key: "location", label: "Location", placeholder: "e.g. Reading, UK" },
    { key: "billsIncluded", label: "Bills Included?", placeholder: "e.g. Yes / No" },
    { key: "availableFrom", label: "Available From", placeholder: "e.g. 1st June 2026" },
    { key: "phoneNumber", label: "WhatsApp Number", placeholder: "e.g. 447700900123" },
    { key: "description", label: "Description", placeholder: "Write details about the room...", multiline: true },
  ],

  market: [
    { key: "title", label: "Item Name", placeholder: "e.g. Rice Cooker" },
    { key: "condition", label: "Condition", placeholder: "e.g. Used - Good / Brand New" },
    { key: "price", label: "Price", placeholder: "e.g. \u00A320" },
    { key: "brand", label: "Brand", placeholder: "e.g. Panasonic / Optional" },
    { key: "location", label: "Location", placeholder: "e.g. London, UK" },
    { key: "phoneNumber", label: "WhatsApp Number", placeholder: "e.g. 447700900123" },
    { key: "description", label: "Description", placeholder: "Write details about the item...", multiline: true },
  ],
};

const imageLabels: Record<ListingCategory, string> = {
  job: "Company Logo / Flyer (Optional)",
  room: "Room Photo",
  market: "Item Photo",
};

export default function PostListingScreen({ navigation }: Props) {
  const [category, setCategory] = useState<ListingCategory>("job");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [imageUri, setImageUri] = useState<string | null>(null);

  const { addListing } = useListings();

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access photos is required.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handlePublish = () => {
    const newListing = {
      id: Date.now().toString(),
      isMine: true,
      type: category,
      title: formData.title || "Untitled Listing",
      price: formData.price || "Price not set",
      location: formData.location || "Location not set",
      description: formData.description || "No description provided.",
      phoneNumber: formData.phoneNumber || "447000000000",
      postedAt: "Just now",
      image: imageUri ?? undefined,
      extra: formData,
    };

    addListing(newListing);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <ScreenTitle title="Post a Listing" subtitle="Share jobs, rooms, or marketplace items with the community." />

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryRow}>
        {(["job", "room", "market"] as const).map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => {
              setCategory(item);
              setFormData({});
              setImageUri(null);
            }}
            style={[styles.categoryChip, category === item && styles.activeCategoryChip]}
          >
            <Text style={[styles.categoryText, category === item && styles.activeCategoryText]}>
              {item.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>{imageLabels[category]}</Text>

      <ImagePickerBox imageUri={imageUri} onPress={pickImage} />

      {formFields[category].map((field) => (
        <FormInput
          key={field.key}
          label={field.label}
          value={formData[field.key] || ""}
          onChangeText={(value) => updateField(field.key, value)}
          placeholder={field.placeholder}
          multiline={field.multiline}
        />
      ))}

      <TouchableOpacity style={styles.submitButton} onPress={handlePublish}>
        <Text style={styles.submitText}>Publish Listing</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
