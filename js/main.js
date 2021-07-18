// import {createObject} from './data.js';
// import {createPopup} from './popup.js';
import {disabledForm, setUserFormSubmit} from './form.js';
import {showMessageSuccess} from './utils.js';
import {getMap} from './map.js';
import {getData} from './api.js';

disabledForm();
setUserFormSubmit(showMessageSuccess);

getData(getMap);
