import {User} from './user.interface';
import {Coordinates} from '@/types/coordinates.interface';
import {Convenience} from '@/types/convenience.enum';
import {AccommodationType} from '@/types/accommodationtype.enum';

export interface Offering {
  name: string;
  description: string;
  postDate: Date;
  previewImgLink: string;
  photos: string[]
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: AccommodationType;
  roomsCount: number;
  guestsCount: number;
  price: number;
  conveniences: Convenience[];
  location: Coordinates;
  author: User;
}
