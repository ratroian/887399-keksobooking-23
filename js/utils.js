const getRandomPositiveFloat =(first, second, digits = 1) => {
  const lower = Math.min(Math.abs(first), Math.abs(second));
  const upper = Math.max(Math.abs(first), Math.abs(second));
  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
};

const getRandomPositiveInteger =(first, second) => {
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createImage = (source) => {
  const imageElement = document.createElement('img');

  imageElement.classList.add('popup__photo');
  imageElement.width='45';
  imageElement.height='40';
  imageElement.alt='Фотография жилья';
  imageElement.src = source;

  return imageElement;
};

const createListItem = (featureName) => {
  const listElement = document.createElement('li');

  listElement.className = `popup__feature popup__feature--${featureName}`;

  return listElement;
};

const addClassName = (element, className) => {
  element.classList.add(className);
};

const removeClassName = (element, className) => {
  element.classList.remove(className);
};

const addAttributeDisabled = (elements) => {
  elements.forEach((element) => element.setAttribute('disabled', 'disabled'));
};

const removeAttributeDisabled = (elements) => {
  elements.forEach((element) => element.removeAttribute('disabled', 'disabled'));
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const body = document.querySelector('body');
let messageTemplate;
let messageElement;

const deletedMessage = () => {
  messageElement.remove();
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    deletedMessage();
    body.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const showMessageSuccess = () => {
  messageTemplate = document.querySelector('#success').content.querySelector('.success');
  messageElement = messageTemplate.cloneNode(true);

  body.appendChild(messageElement);

  body.addEventListener('click', deletedMessage, {once: true});

  body.addEventListener('keydown', onPopupEscKeydown);
};

const showMessageError = () => {
  // const body = document.querySelector('body');
  messageTemplate = document.querySelector('#error').content.querySelector('.error');
  const closeErrorButton = messageTemplate.querySelector('.error__button');
  messageElement = messageTemplate.cloneNode(true);
  // const messageElement = messageTemplate.cloneNode(true);

  body.appendChild(messageElement);

  // messageElement.addEventListener('click', deletedMessage.bind(null, messageElement), {once: true});
  body.addEventListener('click', deletedMessage, {once: true});

  // body.addEventListener('keydown', () => {
  //   if(isEscEvent) {
  //     messageElement.remove();
  //     body.removeEventListener('keydown', () => {});
  //   }
  // });
  body.addEventListener('keydown', onPopupEscKeydown);

  // if (closeErrorButton) {
  //   closeErrorButton.addEventListener('click', () => {
  //     messageElement.remove();
  //     closeErrorButton.removeEventListener('click', () => {});
  //   });
  // }
  closeErrorButton.addEventListener('click', deletedMessage, {once: true});
};

export {getRandomPositiveFloat, getRandomPositiveInteger, createImage, createListItem,
  addClassName, removeClassName, addAttributeDisabled, removeAttributeDisabled, isEscEvent, showMessageSuccess,
  showMessageError};
