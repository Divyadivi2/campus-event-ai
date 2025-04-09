
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  university?: string;
  interests: string[];
  skills: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  subCategory?: string;
  date: string;
  time: string;
  location: string;
  organizerId: string;
  organizer: string;
  organizerLogo?: string;
  image?: string;
  tags: string[];
  price: number;
  capacity: number;
  registered: number;
  isFeatured?: boolean;
}

export type EventCategory = 
  | "tech" 
  | "career" 
  | "arts" 
  | "sports" 
  | "academic" 
  | "social" 
  | "other";

export interface UserProfile {
  user: User;
  registeredEvents: string[];
  savedEvents: string[];
}
