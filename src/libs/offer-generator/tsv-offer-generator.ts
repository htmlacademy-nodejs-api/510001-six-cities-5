import {OfferGenerator} from './offer-generator.interface.js';
import {faker} from '@faker-js/faker';
import {MAX_PHOTO_IND, MAX_PREVIEW_IMG_IND, OPTIONS_GETTERS, PHOTO_IMG_PREFIX, PREVIEW_IMG_PREFIX} from '@mocks/mocks';
import {getRandomBool} from '@/helpers/common';


export class TSVOfferGenerator implements OfferGenerator {
  constructor() {
  }

  public generate(): string {
    const title = faker.helpers.arrayElement(OPTIONS_GETTERS);
    const description = faker.commerce.productDescription();
    const postDate = faker.date.past({refDate: new Date()}).toISOString();
    const previewImgLink = `${PREVIEW_IMG_PREFIX}${faker.number.int({min: 1, max: MAX_PREVIEW_IMG_IND})}.jpg`;
    const photos = faker.helpers.uniqueArray(() => faker.number.int({
      min: 1,
      max: MAX_PHOTO_IND
    }), 6).map((photoNumber) => `${PHOTO_IMG_PREFIX}${photoNumber}.jpg`);
    const isPremium = getRandomBool();
    const isFavorite = getRandomBool();
    const rating = faker.number.int({min: 1, max: 5});
    const getOption = faker.helpers.arrayElement(OPTIONS_GETTERS);
    const {
      type,
      roomsCount,
      guestsCount,
      price,
      conveniences,
    } = getOption();
    const location: Coordinates;
    const author: User;


    const [firstname, lastname] = author.split(' ');

    return [
      title, description, postDate, previewImgLink,
      photos, type, isPremium,
      isFavorite,
      rating, price, roomsCount,
      guestsCount,
      conveniences, categories,
      firstname, lastname, email, avatar,
    ].join('\t');
  }
}
