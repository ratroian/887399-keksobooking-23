import {getData} from './api.js';
import {disabledForm, setUserFormSubmit} from './form.js';
import {showMessageSuccess} from './user-popup.js';
import {getMap} from './map.js';
import {startEventListener} from './filter.js';

disabledForm();
setUserFormSubmit(showMessageSuccess);
getData(getMap);
startEventListener();
