import {resetFormLabelInput} from './form.js';
import { getStartingCoordinats} from './map.js';
import {MAX_QUANTITY_ADS} from './data.js';

let OFFERS_LIST = [];

const getData = (onSuccess) =>{
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      OFFERS_LIST = [...offers];
      onSuccess(offers.slice(0, MAX_QUANTITY_ADS));
    })
    .catch(() => onSuccess([]));
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body,
      },
    );

    if (response.ok) {
      resetFormLabelInput();
      getStartingCoordinats();
      onSuccess();
    } else {
      onFail();
    }
  }
  catch (error) {
    onFail();
  }
};

export {getData, sendData, OFFERS_LIST};
