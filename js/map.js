import {activateForm} from './form.js';
import {createPopup} from './popup.js';
import {STARTING_COORDINATES} from './data.js';

const adFormAdressInput = document.querySelector('#address');

const setCoordinatesValue = ({lat, lng}) => `LatLng(${lat}, ${lng})`;

const getStartingCoordinats = () => adFormAdressInput.value = setCoordinatesValue(STARTING_COORDINATES);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  STARTING_COORDINATES,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const setDefaultCoordinates = () => {
  mainPinMarker.setLatLng(STARTING_COORDINATES);
  adFormAdressInput.value = setCoordinatesValue(STARTING_COORDINATES);
};

const regularAdsIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup();

const createMarker = (item) => {
  const marker = L.marker(
    item.location,
    {
      regularAdsIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      createPopup(item),
      {
        keepInView: true,
      },
    );
};

const getMarkerGroup = (offers) => {
  markerGroup.clearLayers();

  if (offers.length) {
    offers.forEach((point) => {
      createMarker(point);
    });
  }
};

const getMap = (offers) => {
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

  getStartingCoordinats();

  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();

    coordinates.lat = coordinates.lat.toFixed(5);
    coordinates.lng = coordinates.lng.toFixed(5);

    adFormAdressInput.value = setCoordinatesValue(coordinates);
  });

  mainPinMarker.addTo(map);
  markerGroup.addTo(map);
  getMarkerGroup(offers);
};

export {getMap, getStartingCoordinats, setDefaultCoordinates, getMarkerGroup};
