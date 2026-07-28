import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import type { Listing, ListingsContextValue } from "@/types";

const ListingsContext = createContext<ListingsContextValue | null>(null);

export function ListingsProvider({ children }: { children: ReactNode }) {
  const [listings, setListings] = useState<Listing[]>([]);
  const [savedListingIds, setSavedListingIds] = useState<string[]>([]);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    const { data, error } = await supabase.from("listings").select("*").order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch listings:", error.message);
      return;
    }

    const mapped: Listing[] = data.map((row) => ({
      id: row.id,
      type: row.type,
      title: row.title,
      location: row.location,
      price: row.price,
      description: row.description,
      postedAt: row.posted_at,
      image: row.image ?? undefined,
      phoneNumber: row.phone_number ?? undefined,
      isMine: row.is_mine ?? false,
      extra: row.extra ?? undefined,
    }));

    setListings(mapped);
  };

  const addListing = async (newListing: Listing) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("listings").insert({
      id: newListing.id,
      type: newListing.type,
      title: newListing.title,
      location: newListing.location,
      price: newListing.price,
      description: newListing.description,
      posted_at: newListing.postedAt,
      image: newListing.image ?? null,
      phone_number: newListing.phoneNumber ?? null,
      is_mine: true,
      extra: newListing.extra ?? null,
      user_id: user?.id ?? null,
    });

    if (error) {
      console.error("Failed to add listing:", error.message);
      return;
    }

    setListings((prev) => [newListing, ...prev]);
  };

  const deleteListing = async (listingId: string) => {
    const { error } = await supabase.from("listings").delete().eq("id", listingId);

    if (error) {
      console.error("Failed to delete listing:", error.message);
      return;
    }

    setListings((prev) => prev.filter((item) => item.id !== listingId));
    setSavedListingIds((prev) => prev.filter((id) => id !== listingId));
  };

  const updateListing = async (listingId: string, data: Partial<Listing>) => {
    const updates: Record<string, unknown> = {};
    if (data.title !== undefined) updates.title = data.title;
    if (data.location !== undefined) updates.location = data.location;
    if (data.price !== undefined) updates.price = data.price;
    if (data.description !== undefined) updates.description = data.description;
    if (data.image !== undefined) updates.image = data.image ?? null;
    if (data.phoneNumber !== undefined) updates.phone_number = data.phoneNumber ?? null;
    if (data.extra !== undefined) updates.extra = data.extra ?? null;

    const { error } = await supabase.from("listings").update(updates).eq("id", listingId);

    if (error) {
      console.error("Failed to update listing:", error.message);
      return;
    }

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
