import {FileReader} from './filereader.interface.js';
import {readFileSync} from 'node:fs';
import {Offering} from '@/types/offering.interface';
import {parseArr, parseBool} from './utils.js';
import {Convenience} from '@/types/convenience.enum';
import {AccommodationType} from '@/types/accommodationtype.enum';
import {UserType} from '@/types/usertype.enum';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {
  }

  public read(): void {
    this.rawData = readFileSync(this.filename, {encoding: 'utf-8'});
  }

  public toArray(): Offering[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map((
        [
          name,
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
          firstname,
          avatarPath,
          email,
          userType,
          lat,
          long,
        ]
      ) => ({
        title: name,
        description: '',
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
        author: {email, firstname, type: userType as UserType, avatarPath},
        location: {lat: parseFloat(lat), long: parseFloat(long)}
      }));
  }
}


