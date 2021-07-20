const OFFER_TYPES = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

const PRICE_VALUES = {
  MIDDLE_START: 10000,
  MIDDLE_FINAL: 50000,
};

const DISABLED_FORM_CLASSNAME = 'ad-form--disabled';
const MAX_PRICE_VALUE = 1000000;
const MIN_LABEL_LENGTH = 30;
const MAX_LABEL_LENGTH = 150;
const OFFER_TYPES_PRICE = {
  'palace': 10000,
  'flat': 1000,
  'house': 5000,
  'bungalow': 0,
  'hotel': 3000,
};

const STARTING_COORDINATES = {
  lat: '35.68950',
  lng: '139.69171',
};

const MAX_QUANTITY_ADS = 10;
const DEBOUNCE_TIMEOUT_DELAY = 500;

export {OFFER_TYPES, MAX_QUANTITY_ADS, DEBOUNCE_TIMEOUT_DELAY, PRICE_VALUES, DISABLED_FORM_CLASSNAME, MAX_PRICE_VALUE,
  MIN_LABEL_LENGTH, MAX_LABEL_LENGTH, OFFER_TYPES_PRICE, STARTING_COORDINATES};
