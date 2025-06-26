export interface Vendor {
  id: string;
  name: string;
  location: string;
  rating: number;
  projects: number;
  timeline: string;
  price: string;
  experience: string;
  verified: boolean;
  avatar: string;
}

export interface User {
  id: string;
  name: string;
  location: string;
  avatar: string;
  bio: string;
  verified: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  categories: string[];
}

export type UserType = 'vendor' | 'property-owner';