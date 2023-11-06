import {faker} from '@faker-js/faker';
import {parseArr, parseBool} from '@/libs/file-reader';
import {AccommodationType} from '@/types/accommodationtype.enum';
import {Convenience} from '@/types/convenience.enum';
import {UserType} from '@/types/usertype.enum';
import {Offering} from '@/types/offering.interface';

export const getRandomBool = (): boolean => !!faker.number.int({min: 0, max: 1});

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '';
}

export const createOffering = (tsvLine: string): Offering => {
  const [
    title,
    description,
    postDate,
    previewImgLink,
    photos,
    isPremium,
    isFavorite,
    rating,
    type,
    roomsCount,
    guestsCount,
    price,
    conveniences,
    lat,
    long,
    firstname,
    lastname,
    email,
    avatarPath,
    userType,
  ] = tsvLine.split('\t');

  return {
    title,
    description,
    postDate: new Date(postDate),
    previewImgLink,
    photos: parseArr(photos),
    isPremium: parseBool(isPremium),
    isFavorite: parseBool(isFavorite),
    rating: parseInt(rating, 10),
    type: type as AccommodationType,
    roomsCount: parseInt(roomsCount, 10),
    guestsCount: parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    conveniences: parseArr(conveniences) as Convenience[],
    author: {email, firstname, lastname, type: userType as UserType, avatarPath},
    location: {lat: parseFloat(lat), long: parseFloat(long)}
  };
};


