import {getRandomPositiveInteger, getRandomPositiveFloat} from './util.js';

const ID_AVATAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_CHECKIN = ['12:00', '13:00', '14:00'];
const OFFER_CHECKOUT = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LOCATION_LAT_RANGE = [35.65, 35.7];
const LOCATION_LNG_RANGE = [139.7, 139.8];

const toAddZero = function(integer) {
  return integer < 10 && integer >= 0 ? `0${integer}` : integer;
};

const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};


const getAvatarIndex = () => getRandomPositiveInteger(0, ID_AVATAR.length - 1);

const avatarsIndexes = [];

const getUniqAvatarIndex = () => {
  let randomAvatarIndex = getAvatarIndex();
  while (avatarsIndexes.includes(randomAvatarIndex)) {
    randomAvatarIndex = getAvatarIndex();
  }
  avatarsIndexes.push(randomAvatarIndex);
  return randomAvatarIndex;
};

const createObject = () => {
  const randomUniqAvatarIndex =`img/avatars/user${toAddZero(getUniqAvatarIndex())}.png`;
  return {
    author: randomUniqAvatarIndex,
    offer: {
      title: `Лучшее место на земле${getRandomPositiveInteger(0, 10)}`,
      address: `${getRandomPositiveFloat(1, 3, 3)}, ${getRandomPositiveFloat(1, 3, 3)}`, // come back
      price: getRandomPositiveInteger(50, 400),
      type: getRandomArrayElement(OFFER_TYPE),
      rooms: getRandomPositiveInteger(0, 10),
      guests: getRandomPositiveInteger(0, 10),
      checkin: getRandomArrayElement(OFFER_CHECKIN),
      checkout: getRandomArrayElement(OFFER_CHECKOUT),
      features: OFFER_FEATURES.slice(0, getRandomPositiveInteger(1, OFFER_FEATURES.length - 1)),// вопрос
      description: 'Хорошое описание помещения',
      photos: OFFER_PHOTOS.slice(0, getRandomPositiveInteger(1, OFFER_PHOTOS.length - 1)),// вопрос
    },
    location: {
      lat: getRandomPositiveFloat(LOCATION_LAT_RANGE[0], LOCATION_LAT_RANGE[1], 5),
      lng: getRandomPositiveFloat(LOCATION_LNG_RANGE[0], LOCATION_LNG_RANGE[1], 5),
    },
  };
};

const SIMILAR_OBJECT_COUNT = 10;

const similarObjects = new Array(SIMILAR_OBJECT_COUNT).fill('').map(() => createObject());

const getSimilarObjects = () => similarObjects;

export {getSimilarObjects};
