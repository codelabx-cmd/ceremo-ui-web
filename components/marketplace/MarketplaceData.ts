// src/components/marketplace/MarketplaceData.ts

export interface Vendor {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  category: string;
  capacity: string;
  price: string;
}

export const vendors: Vendor[] = [
  {
    id: 1,
    name: "Royal Palace Hall",
    image: "https://images.unsplash.com/photo-1519167758481-83f29c8cde4e?q=80&w=1200",
    location: "Bangalore, Karnataka",
    rating: 4.9,
    reviews: 128,
    category: "Banquet Hall",
    capacity: "500-1000 Guests",
    price: "₹50,000",
  },
  {
    id: 2,
    name: "Grand Celebration Resort",
    image: "https://images.unsplash.com/photo-1519167758481-83f29c8cde4e?q=80&w=1200",
    location: "Bangalore, Karnataka",
    rating: 4.8,
    reviews: 96,
    category: "Resort",
    capacity: "300-800 Guests",
    price: "₹45,000",
  },
  {
    id: 3,
    name: "Garden Venue",
    image: "https://images.unsplash.com/photo-1519167758481-83f29c8cde4e?q=80&w=1200",
    location: "Bangalore, Karnataka",
    rating: 4.7,
    reviews: 75,
    category: "Outdoor",
    capacity: "200-500 Guests",
    price: "₹60,000",
  },
  {
    id: 4,
    name: "Lake View Pavilion",
    image: "https://images.unsplash.com/photo-1519167758481-83f29c8cde4e?q=80&w=1200",
    location: "Bangalore, Karnataka",
    rating: 4.8,
    reviews: 82,
    category: "Waterfront",
    capacity: "100-500 Guests",
    price: "₹55,000",
  },
  {
    id: 5,
    name: "Heritage Wedding Palace",
    image: "https://images.unsplash.com/photo-1519167758481-83f29c8cde4e?q=80&w=1200",
    location: "Mysore, Karnataka",
    rating: 5.0,
    reviews: 145,
    category: "Palace",
    capacity: "500-1200 Guests",
    price: "₹80,000",
  },
  {
    id: 6,
    name: "Sunshine Banquet Hall",
    image: "https://images.unsplash.com/photo-1519167758481-83f29c8cde4e?q=80&w=1200",
    location: "Bangalore, Karnataka",
    rating: 4.6,
    reviews: 65,
    category: "Banquet Hall",
    capacity: "300-700 Guests",
    price: "₹40,000",
  },
];