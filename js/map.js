import {activateForm} from './form.js';
import {getSimilarObjects} from './data.js';
import {createPopup} from './popup.js';

const adFormAdressInput = document.querySelector('#address');

const map = L.map('map')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'},
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

adFormAdressInput.value = 'LatLng(35.68950, 139.69171)';

mainPinMarker.on('moveend', (evt) => {
  adFormAdressInput.value = evt.target.getLatLng();
});

const points = getSimilarObjects();

points.forEach((item) => {
  const regularAdsIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const addresses = item.offer.address.split(', ');

  const marker = L.marker(
    {
      lat: addresses[0],
      lng: addresses[1],
    },
    {
      regularAdsIcon,
    },
  );

  marker.addTo(map).bindPopup(createPopup(item)),
  {
    keepInView: true,
  };
});

mainPinMarker.addTo(map);

export {map};
