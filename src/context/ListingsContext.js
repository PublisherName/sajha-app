import React, { createContext, useContext, useState } from 'react';
import { listings as initialListings } from '../data/mockListing';

const ListingsContext = createContext();

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState(initialListings);
  const [savedListingIds, setSavedListingIds] = useState([]);

  const addListing = (newListing) => {
    setListings((prevListings) => [newListing, ...prevListings]);
  };

  const deleteListing = (listingId) => {
    setListings((prevListings) =>
      prevListings.filter((item) => item.id !== listingId)
    );

    setSavedListingIds((prevIds) =>
      prevIds.filter((id) => id !== listingId)
    );
  };

  const updateListing = (listingId, updatedData) => {
    setListings((prevListings) =>
      prevListings.map((item) =>
        item.id === listingId
          ? { ...item, ...updatedData }
          : item
      )
    );
  };

  const toggleSaveListing = (listingId) => {
    setSavedListingIds((prevIds) =>
      prevIds.includes(listingId)
        ? prevIds.filter((id) => id !== listingId)
        : [...prevIds, listingId]
    );
  };

  const isListingSaved = (listingId) => {
    return savedListingIds.includes(listingId);
  };

  return (
    <ListingsContext.Provider
      value={{
        listings,
        addListing,
        deleteListing,
        updateListing,
        savedListingIds,
        toggleSaveListing,
        isListingSaved,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
}

export function useListings() {
  return useContext(ListingsContext);
}