import {faker} from '@faker-js/faker';

export const getRandomBool = (): boolean => !!faker.number.int({min: 0, max: 1});
