import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";

import FormInput from "@/components/FormInput";
import { useListings } from "@/context/ListingsContext";
import type { ListingCategory, RootStackParamList } from "@/types";

import { styles } from "./EditListingScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "EditListing">;

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

const categoryLabels: Record<ListingCategory, string> = {
  job: "JOB",
  room: "ROOM",
  market: "MARKET",
};

export default function EditListingScreen({ route, navigation }: Props) {
  const { item } = route.params;
  const { updateListing } = useListings();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getInitialValue = (key: string): string => {
    if (key === "title") return item.title;
    if (key === "price") return item.price;
    if (key === "location") return item.location;
    if (key === "description") return item.description;
    if (key === "phoneNumber") return item.phoneNumber ?? "";
    return item.extra?.[key] ?? "";
  };

  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const field of formFields[item.type]) {
      initial[field.key] = getInitialValue(field.key);
    }
    return initial;
  });

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setError("");
    if (!formData.title?.trim()) {
      setError("Please fill in the title.");
      return;
    }

    setLoading(true);
    await updateListing(item.id, {
      title: formData.title,
      price: formData.price,
      location: formData.location,
      description: formData.description,
      phoneNumber: formData.phoneNumber,
      extra: { ...item.extra, ...formData },
    });
    setLoading(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Listing</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>{categoryLabels[item.type]}</Text>
        </View>

        {error ? (
          <View style={styles.errorRow}>
            <Ionicons name="alert-circle" size={16} color="#E63946" />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        {formFields[item.type].map((field) => (
          <FormInput
            key={field.key}
            label={field.label}
            value={formData[field.key] || ""}
            onChangeText={(value) => updateField(field.key, value)}
            placeholder={field.placeholder}
            multiline={field.multiline}
          />
        ))}

        <TouchableOpacity
          style={[styles.saveButton, loading && { opacity: 0.7 }]}
          onPress={handleSave}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.saveText}>Save Changes</Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
