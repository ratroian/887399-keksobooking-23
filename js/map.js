import {activateForm} from './form.js';
import {createPopup} from './popup.js';
import {STARTING_COORDINATES, MAP_ZOOM_LEVEL, MAX_QUANTITY_ADS, MAIN_PIN_ICON_SIZE, MAIN_PIN_ICON_ANCHOR,
  REGULAR_ADS_ICON_SIZE, REGULAR_ADS_ICON_ANCHOR} from './data.js';
import { getData } from './api.js';

const adFormAdressInput = document.querySelector('#address');

const setCoordinatesValue = ({lat, lng}) => `${lat}, ${lng}`;

const getStartingCoordinats = () => adFormAdressInput.value = setCoordinatesValue(STARTING_COORDINATES);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: MAIN_PIN_ICON_SIZE,
  iconAnchor: MAIN_PIN_ICON_ANCHOR,
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
  iconSize: REGULAR_ADS_ICON_SIZE,
  iconAnchor: REGULAR_ADS_ICON_ANCHOR,
});

const markersGroup = L.layerGroup();

const createMarker = (item) => {
  const marker = L.marker(
    item.location,
    {
      regularAdsIcon,
    },
  );

  marker
    .addTo(markersGroup)
    .bindPopup(
      createPopup(item),
      {
        keepInView: true,
      },
    );
};

const getMarkersGroup = (offers) => {
  markersGroup.clearLayers();

  if (offers.length) {
    offers.forEach((point) => {
      createMarker(point);
    });
  }
};

const getMap = () => {
  const map = L.map('map')
    .on('load', async () => {
      const offers = await getData();
      activateForm();
      getStartingCoordinats();
      getMarkersGroup(offers.slice(0, MAX_QUANTITY_ADS));
    })
    .setView(STARTING_COORDINATES, MAP_ZOOM_LEVEL);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'},
  ).addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();

    coordinates.lat = coordinates.lat.toFixed(5);
    coordinates.lng = coordinates.lng.toFixed(5);

    adFormAdressInput.value = setCoordinatesValue(coordinates);
  });

  mainPinMarker.addTo(map);
  markersGroup.addTo(map);
};

export {getMap, getStartingCoordinats, setDefaultCoordinates, getMarkersGroup};
