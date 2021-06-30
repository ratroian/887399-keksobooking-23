const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const mapFeatures = document.querySelector('.map__features');
const mapFeaturesElements = mapFeatures.querySelectorAll('.map__checkbox');

const disabledItem = (item, addAttribute) => {
  item.classList.add('ad-form--disabled');
  addAttribute.forEach((element) => element.setAttribute('disabled', 'disabled'));
};

const activateItem = (item, addAttribute) => {
  item.classList.remove('ad-form--disabled');
  addAttribute.forEach((element) => element.removeAttribute('disabled', 'disabled'));
};

const disabledForm = () => {
  disabledItem(adForm, adFormElements);
  disabledItem(mapFilters, mapFiltersElements);
  disabledItem(mapFeatures, mapFeaturesElements);
};

const activateForm = () => {
  activateItem(adForm, adFormElements);
  activateItem(mapFilters, mapFiltersElements);
  activateItem(mapFeatures, mapFeaturesElements);
};

export {disabledForm, activateForm};
