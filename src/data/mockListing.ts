import type { Listing } from "@/types";

export const listings: Listing[] = [
  {
    id: "1",
    type: "job",
    title: "Kitchen Assistant Needed",
    location: "Aldershot, UK",
    price: "\u00A311.50/hr",
    description: "Part-time kitchen assistant needed for Nepali restaurant.",
    postedAt: "2h ago",
  },
  {
    id: "2",
    type: "room",
    title: "Single Room Available",
    location: "Reading, UK",
    price: "\u00A3450/month",
    description: "Clean single room near town centre. Bills included.",
    postedAt: "5h ago",
  },
  {
    id: "3",
    type: "market",
    title: "iPhone 13 for Sale",
    location: "London, UK",
    price: "\u00A3320",
    description: "Good condition, unlocked, battery health 88%.",
    postedAt: "1d ago",
  },
  {
    id: "4",
    type: "job",
    title: "Care Assistant Vacancy",
    location: "Maidstone, UK",
    price: "\u00A312/hr",
    description: "Care assistant role available. Experience preferred.",
    postedAt: "1d ago",
  },
];
