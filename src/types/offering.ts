/**
 * 3.2.1. Предложение по аренде представлено набором информации:
 *
 * Наименование. Обязательное. Мин. длин 10 символов, макс. длина 100;
 * Описание предложения. Обязательное. Мин. длина 20 символов, макс. длина 1024 символа;
 * Дата публикации предложения. Обязательное.
 * Город. Обязательное. Один из шести городов.
 * Превью изображения. Обязательное. Ссылка на изображение, которое используется в качестве превью;
 * Фотографии жилья. Обязательное. Список ссылок на фотографии жилья. Всегда 6 фотографий;
 * Флаг «Премиум». Обязательное. Признак премиальности предложения;
 * Флаг «Избранное». Обязательное. Признак того, что предложение принадлежит списку избранных предложений пользователя;
 * Рейтинг. Обязательное. Число от 1 до 5. Допускаются числа с запятой (1 знак после запятой);
 * Тип жилья. Обязательное. Один из вариантов: apartment, house, room, hotel;
 * Количество комнат. Обязательное. Мин. 1, Макс. 8;
 * Количество гостей. Обязательное. Мин. 1, Макс. 10;
 * Стоимость аренды. Обязательное. Мин. 100, Макс. 100 000;
 * Удобства. Обязательное. Список удобств. Один или несколько вариантов из списка: Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, Fridge;
 * Автор предложения. Обязательное. Ссылка на сущность «Пользователь»;
 * Количество комментариев. Рассчитывается автоматически;
 * Координаты предложения для аренды. Обязательное. Координаты представлены широтой и долготой.
 * 3.2.2. Список городов и их географические координаты:
 *
 * Paris (latitude: 48.85661, longitude: 2.351499);
 * Cologne (latitude: 50.938361, longitude: 6.959974);
 * Brussels (latitude: 50.846557, longitude: 4.351697);
 * Amsterdam (latitude: 52.370216, longitude: 4.895168);
 * Hamburg (latitude: 53.550341, longitude: 10.000654);
 * Dusseldorf (latitude: 51.225402, longitude: 6.776314).
 */
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
  conveniences: Convenience;
  author: User;
  readonly commentsCount: number;
  location: Coordinates;
}
