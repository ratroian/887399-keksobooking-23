import {addClassName, removeClassName, addAttributeDisabled, removeAttributeDisabled, showMessageError} from './utils.js';
import {getStartingCoordinats, setDefaultCoordinates} from './map.js';
import {sendData} from './api.js';

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
const adFormResetButton = adForm.querySelector('.ad-form__reset');

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
      break;
    case '2':
      formCapacityArray[0].removeAttribute('disabled', 'disabled');
      formCapacityArray[1].removeAttribute('disabled', 'disabled');
      break;
    case '3':
      formCapacityArray[0].removeAttribute('disabled', 'disabled');
      formCapacityArray[1].removeAttribute('disabled', 'disabled');
      formCapacityArray[2].removeAttribute('disabled', 'disabled');
      break;
    case '100':
      formCapacityInput.value = '0';
      formCapacityArray[3].removeAttribute('disabled', 'disabled');
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

const resetFormLabelInput = () => {
  adForm.reset();
  setDefaultCoordinates();
};

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

  if (adFormPriceInput.value < minPriceValue) {
    adFormTypeList.setCustomValidity(`Минимальная цена за ночь ${OFFER_TYPES_PRICE[evt.target.value]} руб.`);
  } else {
    adFormPriceInput.setCustomValidity('');
  }

  adFormTypeList.reportValidity();
});

adFormElementTime.addEventListener('change', (evt) => {
  adFormTimeIn.value = evt.target.value;
  adFormTimeOut.value = evt.target.value;
});

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      onSuccess,
      showMessageError,
      new FormData(evt.target),
    );
  });
};

adFormResetButton.addEventListener('click', (evt) =>{
  evt.preventDefault();

  resetFormLabelInput();
  getStartingCoordinats();
});


export {disabledForm, activateForm, setUserFormSubmit, resetFormLabelInput};
