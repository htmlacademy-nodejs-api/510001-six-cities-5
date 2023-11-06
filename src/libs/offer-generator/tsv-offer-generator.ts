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
import {UserType} from '@/types/usertype.enum';


export class TSVOfferGenerator implements OfferGenerator {
  public generate(): string {
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
      title, type, roomsCount, guestsCount, price, conveniences,
    } = getOption();
    const {lat, long} = faker.helpers.arrayElement(AVAILABLE_LOCATIONS);
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet.email();
    const avatar = `${AVATAR_IMG_PREFIX}${faker.number.int({min: 1, max: MAX_AVATAR_IND})}.jpg`;
    const userType = getRandomBool() ? UserType.Pro : UserType.Regular;

    return [title, description, postDate, previewImgLink, photos, isPremium, isFavorite, rating, type, roomsCount, guestsCount, price, stringifyArr(conveniences), lat, long, firstname, lastname, email, avatar, userType].join('\t');
  }
}
