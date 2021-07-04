import {addClassName, removeClassName, addAttributeDisabled, removeAttributeDisabled} from './utils.js';

const DISABLED_FORM_CLASSNAME = 'ad-form--disabled';
const MAX_PRICE_VALUE = '1 000 000';
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
const formRoomNumber = document.querySelector('#room_number');
const formCapacity = document.querySelector('#capacity');
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

const formCapacityArray = Array.from(formCapacity);
const formRoomNumberArray = Array.from(formRoomNumber);

// adForm.addEventListener('change', (evt) => {

//   console.log(formCapacityArray[2])

//   formRoomNumber.value = evt.target.value;
//   formCapacity.value = evt.target.value;
//   if (formRoomNumber[3]) {
//     formCapacity.value = formRoomNumber[3].value
//     formCapacityArray[2].setAttribute('disabled', 'disabled');
//     formCapacityArray[1].setAttribute('disabled', 'disabled');
//     formCapacityArray[0].setAttribute('disabled', 'disabled');
//   }
//   if (formRoomNumber.value === '2') {
//     // formCapacity.value = evt.target.value || '2';
//     // formCapacity.value.setAttribute('disabled', 'disabled')
//   // } else {formCapacity.value = formCapacity.setAttribute('disabled', 'disabled');
//   }

// });

// adForm.addEventListener('change', (evt) => {
//   formRoomNumber.value = evt.target.value;
//   // formCapacity.value = evt.target.value;
//   if (formCapacity.value === '1') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//   } else {
//     formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
//   }
//   if (formCapacity.value === '2') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].setAttribute('disabled', 'disabled');
//   } else {
//     formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
//   }
//   if (formCapacity.value === '3') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[1].setAttribute('disabled', 'disabled');
//   } else {
//     formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
//     formRoomNumberArray[1].removeAttribute('disabled', 'disabled');
//   }
// });

// formCapacity.addEventListener('change', (evt) => {
//   // formRoomNumber.value = evt.target.value;
//   if (formCapacity.value === '1') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//   } else {
//     formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
//   }
//   if (formCapacity.value === '2') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].setAttribute('disabled', 'disabled');
//   } else {
//     // formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
//   }
//   if (formCapacity.value === '3') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[1].setAttribute('disabled', 'disabled');
//   } else {
//     // formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
//     // formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
//     formRoomNumberArray[1].removeAttribute('disabled', 'disabled');
//   }
//   console.log(1)

// });

// formCapacity.addEventListener('change', (evt) => {
//   // formRoomNumber.value = evt.target.value;
//   if (formCapacity.value === '1') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//   } else if (formCapacity.value === '2') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].setAttribute('disabled', 'disabled');
//   } else if (formCapacity.value === '3') {
//     formRoomNumberArray[3].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[1].setAttribute('disabled', 'disabled');
//   } else if (formCapacity.value === '0') {
//     formRoomNumberArray[2].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].setAttribute('disabled', 'disabled');
//     formRoomNumberArray[1].setAttribute('disabled', 'disabled');
//   } else {
//     formRoomNumberArray[2].removeAttribute('disabled', 'disabled');
//     formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
//     formRoomNumberArray[1].removeAttribute('disabled', 'disabled');
//     formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
//   }

//   console.log(1)

// });

formCapacity.addEventListener('change', (evt) => {
  formRoomNumber.value = evt.target.value;
  formRoomNumberArray[0].setAttribute('disabled', 'disabled');
  formRoomNumberArray[1].setAttribute('disabled', 'disabled');
  formRoomNumberArray[2].setAttribute('disabled', 'disabled');
  formRoomNumberArray[3].setAttribute('disabled', 'disabled');
  if (formCapacity.value === '1') {
    formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
    formRoomNumberArray[1].removeAttribute('disabled', 'disabled');
    formRoomNumberArray[2].removeAttribute('disabled', 'disabled');
    formCapacity.setCustomValidity('Вы можете выбрать номера на 1, 2, 3 комнаты');
  } else if (formCapacity.value === '2') {
    formRoomNumberArray[1].removeAttribute('disabled', 'disabled');
    formRoomNumberArray[2].removeAttribute('disabled', 'disabled');
    formCapacity.setCustomValidity('Вы можете выбрать номера на 2, 3 комнаты');
  } else if (formCapacity.value === '3') {
    formRoomNumberArray[2].removeAttribute('disabled', 'disabled');
    formCapacity.setCustomValidity('Вы можете выбрать номера на 3 комнаты');
  } else if (formCapacity.value === '0') {
    formRoomNumber.value = '100';
    formRoomNumberArray[3].removeAttribute('disabled', 'disabled');
  } else {
    formCapacity.setCustomValidity('');
  }
});

formRoomNumber.addEventListener('change', (evt) => {
  formCapacity.value = evt.target.value;
  formCapacityArray[0].setAttribute('disabled', 'disabled');
  formCapacityArray[1].setAttribute('disabled', 'disabled');
  formCapacityArray[2].setAttribute('disabled', 'disabled');
  formCapacityArray[3].setAttribute('disabled', 'disabled');
  if (formRoomNumber.value === '1') {
    formRoomNumberArray[0].removeAttribute('disabled', 'disabled');
  } else if (formRoomNumber.value === '2') {
    formCapacityArray[0].removeAttribute('disabled', 'disabled');
    formCapacityArray[1].removeAttribute('disabled', 'disabled');
  } else if (formRoomNumber.value === '3') {
    formCapacityArray[0].removeAttribute('disabled', 'disabled');
    formCapacityArray[1].removeAttribute('disabled', 'disabled');
    formCapacityArray[2].removeAttribute('disabled', 'disabled');
  } else if (formRoomNumber.value === '100') {
    formCapacity.value = '0';
    formCapacityArray[3].removeAttribute('disabled', 'disabled');
  }
});

adFormLabelInput.addEventListener('input', () => {
  const valueLength = adFormLabelInput.value.length;

  if (valueLength < MIN_LABEL_LENGTH) {
    adFormLabelInput.setCustomValidity(`Ещё ${  MIN_LABEL_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_LABEL_LENGTH) {
    adFormLabelInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_LABEL_LENGTH } симв.`);
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

adFormTypeList.addEventListener('change', function () {
  const minPriceValue = OFFER_TYPES_PRICE[this.value];
  adFormPriceInput.value = OFFER_TYPES_PRICE[this.value];
  adFormPriceInput.setAttribute('min', minPriceValue);
  adFormPriceInput.value = Math.max(minPriceValue, adFormPriceInput.value);
  adFormTypeList.setCustomValidity(`Минимальная цена за ночь ${  OFFER_TYPES_PRICE[this.value] } руб.`);
  adFormTypeList.reportValidity();
});

adFormElementTime.addEventListener('change', (evt) => {
  adFormTimeIn.value = evt.target.value;
  adFormTimeOut.value = evt.target.value;
});

export {disabledForm, activateForm};
