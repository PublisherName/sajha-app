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
  addListing: (listing: Listing) => void;
  deleteListing: (listingId: string) => void;
  updateListing: (listingId: string, data: Partial<Listing>) => void;
  savedListingIds: string[];
  toggleSaveListing: (listingId: string) => void;
  isListingSaved: (listingId: string) => boolean;
}

export type RootStackParamList = {
  MainDrawer: undefined;
  ListingDetail: { item: Listing };
  PostListing: undefined;
  Saved: undefined;
  MyListings: undefined;
  EditListing: { item: Listing };
};

export type DrawerParamList = {
  Home: undefined;
  Jobs: undefined;
  Rooms: undefined;
  Market: undefined;
  Saved: undefined;
  MyListings: undefined;
  Profile: undefined;
};
