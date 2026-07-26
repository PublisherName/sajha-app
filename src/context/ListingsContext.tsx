import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

import { listings as initialListings } from "@/data/mockListing";
import type { Listing, ListingsContextValue } from "@/types";

const ListingsContext = createContext<ListingsContextValue | null>(null);

export function ListingsProvider({ children }: { children: ReactNode }) {
  const [listings, setListings] = useState<Listing[]>(initialListings);
  const [savedListingIds, setSavedListingIds] = useState<string[]>([]);

  const addListing = (newListing: Listing) => {
    setListings((prev) => [newListing, ...prev]);
  };

  const deleteListing = (listingId: string) => {
    setListings((prev) => prev.filter((item) => item.id !== listingId));
    setSavedListingIds((prev) => prev.filter((id) => id !== listingId));
  };

  const updateListing = (listingId: string, data: Partial<Listing>) => {
    setListings((prev) => prev.map((item) => (item.id === listingId ? { ...item, ...data } : item)));
  };

  const toggleSaveListing = (listingId: string) => {
    setSavedListingIds((prev) =>
      prev.includes(listingId) ? prev.filter((id) => id !== listingId) : [...prev, listingId],
    );
  };

  const isListingSaved = (listingId: string) => {
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

export function useListings(): ListingsContextValue {
  const context = useContext(ListingsContext);
  if (!context) {
    throw new Error("useListings must be used within a ListingsProvider");
  }
  return context;
}
