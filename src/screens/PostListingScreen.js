import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useListings } from '../context/ListingsContext';

const formFields = {
  job: [
    { key: 'title', label: 'Job Title', placeholder: 'e.g. Kitchen Assistant Needed' },
    { key: 'price', label: 'Salary / Pay', placeholder: 'e.g. £11.50/hr' },
    { key: 'location', label: 'Location', placeholder: 'e.g. Aldershot, UK' },
    { key: 'employmentType', label: 'Employment Type', placeholder: 'e.g. Part-time / Full-time' },
    { key: 'phoneNumber', label: 'WhatsApp Number', placeholder: 'e.g. 447700900123' },
    { key: 'description', label: 'Description', placeholder: 'Write details about the job...', multiline: true },
  ],

  room: [
    { key: 'title', label: 'Room Type', placeholder: 'e.g. Single Room / Double Room' },
    { key: 'price', label: 'Rent', placeholder: 'e.g. £450/month' },
    { key: 'location', label: 'Location', placeholder: 'e.g. Reading, UK' },
    { key: 'billsIncluded', label: 'Bills Included?', placeholder: 'e.g. Yes / No' },
    { key: 'availableFrom', label: 'Available From', placeholder: 'e.g. 1st June 2026' },
    { key: 'phoneNumber', label: 'WhatsApp Number', placeholder: 'e.g. 447700900123' },
    { key: 'description', label: 'Description', placeholder: 'Write details about the room...', multiline: true },
  ],

  market: [
    { key: 'title', label: 'Item Name', placeholder: 'e.g. Rice Cooker' },
    { key: 'condition', label: 'Condition', placeholder: 'e.g. Used - Good / Brand New' },
    { key: 'price', label: 'Price', placeholder: 'e.g. £20' },
    { key: 'brand', label: 'Brand', placeholder: 'e.g. Panasonic / Optional' },
    { key: 'location', label: 'Location', placeholder: 'e.g. London, UK' },
    { key: 'phoneNumber', label: 'WhatsApp Number', placeholder: 'e.g. 447700900123' },
    { key: 'description', label: 'Description', placeholder: 'Write details about the item...', multiline: true },
  ],
};

const imageLabels = {
  job: 'Company Logo / Flyer (Optional)',
  room: 'Room Photo',
  market: 'Item Photo',
};

export default function PostListingScreen({ navigation }) {
  const [category, setCategory] = useState('job');
  const [formData, setFormData] = useState({});
  const [imageUri, setImageUri] = useState(null);

  const { addListing } = useListings();

  const updateField = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access photos is required.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
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
      title: formData.title || 'Untitled Listing',
      price: formData.price || 'Price not set',
      location: formData.location || 'Location not set',
      description: formData.description || 'No description provided.',
      phoneNumber: formData.phoneNumber || '447000000000',
      postedAt: 'Just now',
      image: imageUri,
      extra: formData,
    };

    addListing(newListing);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Post a Listing</Text>
      <Text style={styles.subtitle}>
        Share jobs, rooms, or marketplace items with the community.
      </Text>

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryRow}>
        {['job', 'room', 'market'].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => {
              setCategory(item);
              setFormData({});
              setImageUri(null);
            }}
            style={[
              styles.categoryChip,
              category === item && styles.activeCategoryChip,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                category === item && styles.activeCategoryText,
              ]}
            >
              {item.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>{imageLabels[category]}</Text>

      <TouchableOpacity style={styles.imagePickerBox} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imagePickerText}>+ Add Image</Text>
        )}
      </TouchableOpacity>

      {formFields[category].map((field) => (
        <View key={field.key}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={[styles.input, field.multiline && styles.textArea]}
            placeholder={field.placeholder}
            multiline={field.multiline}
            placeholderTextColor="#777"
            value={formData[field.key] || ''}
            onChangeText={(value) => updateField(field.key, value)}
          />
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 18,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#222',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    marginTop: 12,
  },

  categoryRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },

  categoryChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  activeCategoryChip: {
    backgroundColor: '#E63946',
    borderColor: '#E63946',
  },

  categoryText: {
    color: '#555',
    fontWeight: '700',
    fontSize: 12,
  },

  activeCategoryText: {
    color: '#FFFFFF',
  },

  imagePickerBox: {
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  imagePickerText: {
    color: '#E63946',
    fontWeight: '800',
  },

  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    fontSize: 14,
    outlineWidth: 1,
    outlineColor: '#F5A1A8',
  },

  textArea: {
    minHeight: 110,
    textAlignVertical: 'top',
  },

  submitButton: {
    backgroundColor: '#E63946',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 24,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  cancelText: {
    textAlign: 'center',
    color: '#777',
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 40,
  },
});