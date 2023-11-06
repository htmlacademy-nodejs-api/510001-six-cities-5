import {Offering} from '@/types/offering.interface';
import {faker} from '@faker-js/faker';
import {AccommodationType} from '@/types/accommodationtype.enum';
import {Convenience} from '@/types/convenience.enum';

type FakeAccommodationOption = Pick<Offering, 'title' | 'price' | 'roomsCount' | 'guestsCount' | 'conveniences' | 'type'>

const ALL_CONVENIENCES: string[] = [
  Convenience.Breakfast,
  Convenience.AirConditioning,
  Convenience.LaptopFriendly,
  Convenience.BabySeat,
  Convenience.Washer,
  Convenience.Towels,
  Convenience.Fridge,
];
export const OPTIONS_GETTERS: Array<() => FakeAccommodationOption> = [
  () => ({
    title: 'Королевские палаты в пяти минутах от главных достопримечательностей',
    price: faker.number.int({min: 30, max: 65}) * 100,
    roomsCount: faker.number.int({min: 10, max: 16}),
    guestsCount: faker.number.int({min: 10, max: 16}),
    conveniences: ALL_CONVENIENCES.slice(),
    type: AccommodationType.Apartment
  }),
  () => ({
    title: 'Роскошная двушка в историческом районе',
    price: faker.number.int({min: 10, max: 22}) * 100,
    roomsCount: 2,
    guestsCount: 2,
    conveniences: [Convenience.Fridge, Convenience.Washer, Convenience.Towels, Convenience.Breakfast],
    type: AccommodationType.Apartment
  }),
  () => ({
    title: 'Уютное шале',
    price: faker.number.int({min: 60, max: 150}) * 100,
    roomsCount: faker.number.int({min: 22, max: 34}),
    guestsCount: faker.number.int({min: 10, max: 22}),
    conveniences: ALL_CONVENIENCES.slice(),
    type: AccommodationType.House
  }),
  () => ({
    title: 'Элитная студия в бизнес-квартале',
    price: faker.number.int({min: 10, max: 22}) * 100,
    roomsCount: 1,
    guestsCount: 2,
    conveniences: [Convenience.Fridge, Convenience.Washer, Convenience.Towels, Convenience.LaptopFriendly, Convenience.AirConditioning],
    type: AccommodationType.Apartment
  }),
  () => ({
    title: 'Просторная трешка в спальном районе рядом со школой и детским садиком',
    price: faker.number.int({min: 19, max: 25}) * 100,
    roomsCount: 3,
    guestsCount: 4,
    conveniences: [Convenience.Fridge, Convenience.Washer, Convenience.Towels, Convenience.BabySeat, Convenience.AirConditioning],
    type: AccommodationType.Apartment
  }),
  () => ({
    title: 'Двушка в новостройке',
    price: faker.number.int({min: 19, max: 25}) * 100,
    roomsCount: 2,
    guestsCount: 4,
    conveniences: ALL_CONVENIENCES.slice(),
    type: AccommodationType.Apartment
  }),
  () => ({
    title: 'Комната в студенческой коммуналке',
    price: faker.number.int({min: 9, max: 13}) * 100,
    roomsCount: 1,
    guestsCount: 1,
    conveniences: [Convenience.Fridge, Convenience.Washer],
    type: AccommodationType.Room
  }),
  () => ({
    title: 'Таунхаус в низкоэтажном квартале за городом',
    price: faker.number.int({min: 25, max: 44}) * 100,
    roomsCount: faker.number.int({min: 8, max: 13}),
    guestsCount: 6,
    conveniences: ALL_CONVENIENCES.slice(),
    type: AccommodationType.House
  }),
  () => ({
    title: 'Пентхаус с панорамной мансардой и видом на центр и круговой террасой, огороженной лепниной',
    price: faker.number.int({min: 45, max: 100}) * 100,
    roomsCount: faker.number.int({min: 8, max: 13}),
    guestsCount: 6,
    conveniences: ALL_CONVENIENCES.slice(),
    type: AccommodationType.Apartment
  }),
];

export const PREVIEW_IMG_PREFIX = 'preview';
export const PHOTO_IMG_PREFIX = 'apartment_photo';
export const AVATAR_IMG_PREFIX = 'avatar';
export const MAX_PREVIEW_IMG_IND = 7;
export const MAX_PHOTO_IND = 20;
