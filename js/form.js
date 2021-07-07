import {addClassName, removeClassName, addAttributeDisabled, removeAttributeDisabled} from './utils.js';

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
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const mapFeatures = document.querySelector('.map__features');
const mapFeaturesElements = mapFeatures.querySelectorAll('.map__checkbox');
const formRoomNumberInput = document.querySelector('#room_number');
const formCapacityInput = document.querySelector('#capacity');
const adFormLabelInput = adForm.querySelector('#title');
const adFormPriceInput = adForm.querySelector('#price');
const adFormTypeList = adForm.querySelector('#type');
const adFormTimeIn = adForm.querySelector('#timein');
const adFormTimeOut = adForm.querySelector('#timeout');
const adFormElementTime = adForm.querySelector('.ad-form__element--time');

const disabledForm = () => {
  addClassName(adForm, DISABLED_FORM_CLASSNAME);
  addClassName(mapFilters, DISABLED_FORM_CLASSNAME);
  addClassName(mapFeatures, DISABLED_FORM_CLASSNAME);

  addAttributeDisabled(adFormElements);
  addAttributeDisabled(mapFiltersElements);
  addAttributeDisabled(mapFeaturesElements);
};

const activateForm = () => {
  removeClassName(adForm, DISABLED_FORM_CLASSNAME);
  removeClassName(mapFilters, DISABLED_FORM_CLASSNAME);
  removeClassName(mapFeatures, DISABLED_FORM_CLASSNAME);

  removeAttributeDisabled(adFormElements);
  removeAttributeDisabled(mapFiltersElements);
  removeAttributeDisabled(mapFeaturesElements);
};

const formCapacityArray = Array.from(formCapacityInput);
const formRoomNumberArray = Array.from(formRoomNumberInput);


formCapacityInput.addEventListener('change', (evt) => {
  formRoomNumberInput.value = evt.target.value;
  // formCapacityInput.reportValidity();

  // formRoomNumberArray.forEach((option) => {
  //   option.setAttribute('disabled' ,'disabled');
  // });

  // switch (formCapacityInput.value) {
  //   case '1':
  //     // formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
  //     // formRoomNumberArray[1].removeAttribute('disabled', 'disabled');
  //     // formRoomNumberArray[2].removeAttribute('disabled', 'disabled');
  //     // formCapacityInput.setCustomValidity('Вы можете выбрать номера на 1, 2, 3 комнаты');
  //     break;
  //   case '2':
  //     // formRoomNumberArray[1].removeAttribute('disabled', 'disabled');
  //     // formRoomNumberArray[2].removeAttribute('disabled', 'disabled');
  //     // formCapacityInput.setCustomValidity('Вы можете выбрать номера на 2, 3 комнаты');
  //     break;
  //   case '3':
  //     // formRoomNumberArray[2].removeAttribute('disabled', 'disabled');
  //     // formCapacityInput.setCustomValidity('Вы можете выбрать номера на 3 комнаты');
  //     break;
  //   case '0':
  //     // formRoomNumberInput.value = '100';
  //     // formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
  //     break;
  //   default:
  //     formCapacityInput.setCustomValidity('');
  // }
});

formRoomNumberInput.addEventListener('change', (evt) => {
  formCapacityInput.value = evt.target.value;
  formRoomNumberInput.reportValidity();

  formCapacityArray.forEach((option) => {
    option.setAttribute('disabled' ,'disabled');
  });

  switch (formRoomNumberInput.value) {
    case '1':
      formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
      // formRoomNumberInput.setCustomValidity('Допустимое количество гостей: 1');
      break;
    case '2':
      formCapacityArray[0].removeAttribute('disabled', 'disabled');
      formCapacityArray[1].removeAttribute('disabled', 'disabled');
      // formRoomNumberInput.setCustomValidity('Допустимое количество гостей: 1 или 2');
      break;
    case '3':
      formCapacityArray[0].removeAttribute('disabled', 'disabled');
      formCapacityArray[1].removeAttribute('disabled', 'disabled');
      formCapacityArray[2].removeAttribute('disabled', 'disabled');
      // formRoomNumberInput.setCustomValidity('Допустимое количество гостей: 1, 2 или 3');
      break;
    case '100':
      formCapacityInput.value = '0';
      formCapacityArray[3].removeAttribute('disabled', 'disabled');
      // formRoomNumberInput.setCustomValidity('Допустимое количество гостей: не для гостей');
  }
});

adFormLabelInput.addEventListener('input', () => {
  const valueLength = adFormLabelInput.value.length;

  if (valueLength < MIN_LABEL_LENGTH) {
    adFormLabelInput.setCustomValidity(`Ещё ${MIN_LABEL_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_LABEL_LENGTH) {
    adFormLabelInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_LABEL_LENGTH} симв.`);
  } else {
    adFormLabelInput.setCustomValidity('');
  }

  adFormLabelInput.reportValidity();
});

adFormPriceInput.addEventListener('input', () => {
  if (adFormPriceInput.value > MAX_PRICE_VALUE) {
    adFormPriceInput.setCustomValidity(`Максимальная сумма  ${MAX_PRICE_VALUE} руб.`);
  } else {
    adFormPriceInput.setCustomValidity('');
  }

  adFormPriceInput.reportValidity();
});

adFormTypeList.addEventListener('change', (evt) => {
  const minPriceValue = OFFER_TYPES_PRICE[evt.target.value];
  adFormPriceInput.value = OFFER_TYPES_PRICE[evt.target.value];

  adFormPriceInput.setAttribute('min', minPriceValue);

  adFormPriceInput.value = Math.max(minPriceValue, adFormPriceInput.value);

  adFormTypeList.setCustomValidity(`Минимальная цена за ночь ${OFFER_TYPES_PRICE[evt.target.value]} руб.`);

  adFormTypeList.reportValidity();
});

adFormElementTime.addEventListener('change', (evt) => {
  adFormTimeIn.value = evt.target.value;
  adFormTimeOut.value = evt.target.value;
});

export {disabledForm, activateForm};
