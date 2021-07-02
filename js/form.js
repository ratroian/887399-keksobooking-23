import {addClassName, removeClassName, addAttributeDisabled, removeAttributeDisabled} from './utils.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const mapFeatures = document.querySelector('.map__features');
const mapFeaturesElements = mapFeatures.querySelectorAll('.map__checkbox');
const disabledFormClass = 'ad-form--disabled';

const disabledForm = () => {
  addClassName(adForm, disabledFormClass);
  addClassName(mapFilters, disabledFormClass);
  addClassName(mapFeatures, disabledFormClass);

  addAttributeDisabled(adFormElements);
  addAttributeDisabled(mapFiltersElements);
  addAttributeDisabled(mapFeaturesElements);
};

const activateForm = () => {
  removeClassName(adForm, disabledFormClass);
  removeClassName(mapFilters, disabledFormClass);
  removeClassName(mapFeatures, disabledFormClass);

  removeAttributeDisabled(adFormElements);
  removeAttributeDisabled(mapFiltersElements);
  removeAttributeDisabled(mapFeaturesElements);
};

export {disabledForm, activateForm};
