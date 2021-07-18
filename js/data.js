// import {getRandomPositiveInteger, getRandomPositiveFloat} from './utils.js';

// const ID_AVATARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const OFFER_TYPES = {
//   'palace': 'Дворец',
//   'flat': 'Квартира',
//   'house': 'Дом',
//   'bungalow': 'Бунгало',
//   'hotel': 'Отель',
// };
// const OFFER_CHECKINS = ['12:00', '13:00', '14:00'];
// const OFFER_CHECKOUTS = ['12:00', '13:00', '14:00'];
// const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// const OFFER_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
// const LOCATION_LAT_RANGE_ARRAY = [35.65, 35.7];
// const LOCATION_LNG_RANGE_ARRAY = [139.7, 139.8];
// const SIMILAR_OBJECT_COUNT = 10;

// const toAddZero = (integer) => integer < 10 && integer >=0 ? `0${integer}` : integer;
// const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
// const getAvatarIndex = () => getRandomPositiveInteger(1, ID_AVATARS.length);
// let avatarsIndexes = [];
// const getUniqAvatarIndex = () => {
//   let randomAvatarIndex = getAvatarIndex();

//   while (avatarsIndexes.includes(randomAvatarIndex)) {
//     randomAvatarIndex = getAvatarIndex();
//   }
//   avatarsIndexes.push(randomAvatarIndex);

//   return randomAvatarIndex;
// };

// const createObject = () => {
//   const UniqAvatarIndex =`img/avatars/user${toAddZero(getUniqAvatarIndex())}.png`;

//   return {
//     author: UniqAvatarIndex,
//     offer: {
//       title: `Лучшее место на земле${getRandomPositiveInteger(0, 10)}`,
//       address: `${getRandomPositiveFloat(35.5, 35.8, 5)}, ${getRandomPositiveFloat(139.5, 139.8, 5)}`,
//       price: getRandomPositiveInteger(50, 400),
//       type: getRandomArrayElement(Object.keys(OFFER_TYPES)),
//       rooms: getRandomPositiveInteger(0, 10),
//       guests: getRandomPositiveInteger(0, 10),
//       checkin: getRandomArrayElement(OFFER_CHECKINS),
//       checkout: getRandomArrayElement(OFFER_CHECKOUTS),
//       features: OFFER_FEATURES.slice(0, getRandomPositiveInteger(1, OFFER_FEATURES.length - 1)),
//       description: 'Хорошое описание помещения',
//       photos: OFFER_PHOTOS,
//     },
//     location: {
//       lat: getRandomPositiveFloat(LOCATION_LAT_RANGE_ARRAY[0], LOCATION_LAT_RANGE_ARRAY[1], 5),
//       lng: getRandomPositiveFloat(LOCATION_LNG_RANGE_ARRAY[0], LOCATION_LNG_RANGE_ARRAY[1], 5),
//     },
//   };
// };

// const similarObjects = new Array(SIMILAR_OBJECT_COUNT).fill('').map(() => createObject());
// const getSimilarObjects = () => similarObjects;

// avatarsIndexes = [];

// export {getSimilarObjects, createObject, OFFER_TYPES, OFFER_PHOTOS, OFFER_FEATURES};


import {getRandomPositiveInteger, getRandomPositiveFloat} from './utils.js';

const ID_AVATARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OFFER_TYPES = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};
const OFFER_CHECKINS = ['12:00', '13:00', '14:00'];
const OFFER_CHECKOUTS = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LOCATION_LAT_RANGE_ARRAY = [35.65, 35.7];
const LOCATION_LNG_RANGE_ARRAY = [139.7, 139.8];
const SIMILAR_OBJECT_COUNT = 10;

const toAddZero = (integer) => integer < 10 && integer >=0 ? `0${integer}` : integer;
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const getAvatarIndex = () => getRandomPositiveInteger(1, ID_AVATARS.length);
let avatarsIndexes = [];
const getUniqAvatarIndex = () => {
  let randomAvatarIndex = getAvatarIndex();

  while (avatarsIndexes.includes(randomAvatarIndex)) {
    randomAvatarIndex = getAvatarIndex();
  }
  avatarsIndexes.push(randomAvatarIndex);

  return randomAvatarIndex;
};

const createObject = () => {
  const UniqAvatarIndex =`img/avatars/user${toAddZero(getUniqAvatarIndex())}.png`;

  return {
    author: UniqAvatarIndex,
    offer: {
      title: `Лучшее место на земле${getRandomPositiveInteger(0, 10)}`,
      address: `${getRandomPositiveFloat(35.5, 35.8, 5)}, ${getRandomPositiveFloat(139.5, 139.8, 5)}`,
      price: getRandomPositiveInteger(50, 400),
      type: getRandomArrayElement(Object.keys(OFFER_TYPES)),
      rooms: getRandomPositiveInteger(0, 10),
      guests: getRandomPositiveInteger(0, 10),
      checkin: getRandomArrayElement(OFFER_CHECKINS),
      checkout: getRandomArrayElement(OFFER_CHECKOUTS),
      features: OFFER_FEATURES.slice(0, getRandomPositiveInteger(1, OFFER_FEATURES.length - 1)),
      description: 'Хорошое описание помещения',
      photos: OFFER_PHOTOS,
    },
    location: {
      lat: getRandomPositiveFloat(LOCATION_LAT_RANGE_ARRAY[0], LOCATION_LAT_RANGE_ARRAY[1], 5),
      lng: getRandomPositiveFloat(LOCATION_LNG_RANGE_ARRAY[0], LOCATION_LNG_RANGE_ARRAY[1], 5),
    },
  };
};

const similarObjects = new Array(SIMILAR_OBJECT_COUNT).fill('').map(() => createObject());
const getSimilarObjects = () => similarObjects;

avatarsIndexes = [];

export {getSimilarObjects, createObject, OFFER_TYPES, OFFER_PHOTOS, OFFER_FEATURES};
