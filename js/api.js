import {resetFormLabelInput} from './form.js';
import { getStartingCoordinats} from './map.js';

const getData = (onSuccess) =>{
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers.slice(0, 10));
    })
    .catch(() => onSuccess([]));
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      'https://23.javascript.pages.academy/keksobooking',
      // 'https://23.javascript.pages.academy/404',
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

export {getData, sendData};
