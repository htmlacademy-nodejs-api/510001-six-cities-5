import {User} from "./user.js";

export type AccommodationType = 'apartment'
  | 'house'
  | 'room'
  | 'hotel';

export type Convenience = 'Breakfast'
  | 'Air conditioning'
  | 'Laptop friendly workspace'
  | 'Baby seat'
  | 'Washer'
  | 'Towels'
  | 'Fridge'

export type Coordinates = {
  lat: number;
  long: number;
}

export interface Offering {
  name: string;
  description: string;
  publishDate: string;
  previewImgLink: string;
  photo: string[]
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: AccommodationType;
  roomsCount: number;
  guestsCount: number;
  price: number;
  conveniences: Convenience | Convenience[];
  author: User;
  readonly commentsCount: number;
  location: Coordinates;
}
