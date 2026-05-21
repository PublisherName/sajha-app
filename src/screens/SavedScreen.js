import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ListingCard from '../components/ListingCard';
import { useListings } from '../context/ListingsContext';

export default function SavedScreen({ navigation }) {
  const { listings, savedListingIds } = useListings();

  const savedListings = listings.filter((item) =>
    savedListingIds.includes(item.id)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Listings</Text>
      <Text style={styles.subtitle}>
        Your saved jobs, rooms, and marketplace items.
      </Text>

      <FlatList
        data={savedListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListingCard
            item={item}
            onPress={() =>
              navigation.navigate('ListingDetail', { item })
            }
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>No saved listings yet</Text>
            <Text style={styles.emptyText}>
              Tap the heart icon on any listing to save it here.
            </Text>
          </View>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    marginBottom: 18,
  },

  list: {
    paddingBottom: 100,
  },

  emptyBox: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 10,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#222',
    marginBottom: 6,
  },

  emptyText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});