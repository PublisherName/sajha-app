export type ListingCategory = "job" | "room" | "market";

export interface Listing {
  id: string;
  type: ListingCategory;
  title: string;
  location: string;
  price: string;
  description: string;
  postedAt: string;
  image?: string;
  phoneNumber?: string;
  isMine?: boolean;
  extra?: Record<string, string>;
}

export interface ListingsContextValue {
  listings: Listing[];
  addListing: (listing: Listing) => Promise<void>;
  deleteListing: (listingId: string) => Promise<void>;
  updateListing: (listingId: string, data: Partial<Listing>) => Promise<void>;
  savedListingIds: string[];
  toggleSaveListing: (listingId: string) => Promise<void>;
  isListingSaved: (listingId: string) => boolean;
}

export type RootStackParamList = {
  MainDrawer: undefined;
  ListingDetail: { item: Listing };
  PostListing: undefined;
  Saved: undefined;
  MyListings: undefined;
  EditListing: { item: Listing };
  Settings: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Jobs: undefined;
  Rooms: undefined;
  Market: undefined;
  Profile: undefined;
};
