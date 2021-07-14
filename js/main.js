import {createObject} from './data.js';
// import {createPopup} from './popup.js';
import {disabledForm, activateForm} from './form.js';
import {getMap} from './map.js';

getMap();
createObject();
// createPopup(createObject());
disabledForm();
activateForm();
