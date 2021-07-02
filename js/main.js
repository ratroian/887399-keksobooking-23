import {createObject} from './data.js';
import {createPopup} from './popup.js';
import {disabledForm, activateForm} from './form.js';

createPopup(createObject());
disabledForm();
activateForm();
