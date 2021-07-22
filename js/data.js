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
const MAP_ZOOM_LEVEL = 10;
const MAIN_PIN_ICON_SIZE = [52, 52];
const MAIN_PIN_ICON_ANCHOR = [26, 52];
const REGULAR_ADS_ICON_SIZE = [40, 40];
const REGULAR_ADS_ICON_ANCHOR = [20, 40];
const MAX_QUANTITY_ADS = 10;
const DEBOUNCE_TIMEOUT_DELAY = 500;
const ALERT_SHOW_TIME = 5000;
const STYLE_ERROR_FIELD = '2px solid red';
const MESSAGE_ERROR = 'При загрузке данных с сервера произошла ошибка запроса!';
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

export {OFFER_TYPES, MAX_QUANTITY_ADS, DEBOUNCE_TIMEOUT_DELAY, PRICE_VALUES, DISABLED_FORM_CLASSNAME, MAX_PRICE_VALUE,
  MIN_LABEL_LENGTH, MAX_LABEL_LENGTH, OFFER_TYPES_PRICE, STARTING_COORDINATES, MAP_ZOOM_LEVEL, ALERT_SHOW_TIME, STYLE_ERROR_FIELD,
  MESSAGE_ERROR, FILE_TYPES, MAIN_PIN_ICON_SIZE, MAIN_PIN_ICON_ANCHOR, REGULAR_ADS_ICON_SIZE, REGULAR_ADS_ICON_ANCHOR};
