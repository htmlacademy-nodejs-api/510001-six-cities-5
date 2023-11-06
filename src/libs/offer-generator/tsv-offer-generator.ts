import {OfferGenerator} from './offer-generator.interface.js';
import {faker} from '@faker-js/faker';
import {
  AVAILABLE_LOCATIONS,
  AVATAR_IMG_PREFIX,
  MAX_AVATAR_IND,
  MAX_PHOTO_IND,
  MAX_PREVIEW_IMG_IND,
  OPTIONS_GETTERS,
  PHOTO_IMG_PREFIX,
  PREVIEW_IMG_PREFIX
} from '@/helpers/mocks';
import {getRandomBool} from '@/helpers/common';
import {stringifyArr} from '@/libs/file-reader/utils';


export class TSVOfferGenerator implements OfferGenerator {
  public generate(): string {
    const title = faker.helpers.arrayElement(OPTIONS_GETTERS);
    const description = faker.commerce.productDescription();
    const postDate = faker.date.past({refDate: new Date()}).toISOString();
    const previewImgLink = `${PREVIEW_IMG_PREFIX}${faker.number.int({min: 1, max: MAX_PREVIEW_IMG_IND})}.jpg`;
    const photos = stringifyArr(faker.helpers.uniqueArray(() => faker.number.int({
      min: 1, max: MAX_PHOTO_IND
    }), 6).map((photoNumber) => `${PHOTO_IMG_PREFIX}${photoNumber}.jpg`));
    const isPremium = String(getRandomBool());
    const isFavorite = String(getRandomBool());
    const rating = String(faker.number.int({min: 1, max: 5}));
    const getOption = faker.helpers.arrayElement(OPTIONS_GETTERS);
    const {
      type, roomsCount, guestsCount, price, conveniences,
    } = getOption();
    const location: string = JSON.stringify(faker.helpers.arrayElement(AVAILABLE_LOCATIONS));
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet.email();
    const avatar = `${AVATAR_IMG_PREFIX}${faker.number.int({min: 1, max: MAX_AVATAR_IND})}.jpg`;

    return [title, description, postDate, previewImgLink, photos, type, isPremium, isFavorite, rating, price, roomsCount, guestsCount, stringifyArr(conveniences), location, firstname, lastname, email, avatar].join('\t');
  }
}
