import { IS_CREATE_PLACE_MODE, SET_MAP_POSITION } from '../action-types';

const setMapPosition = (mapPosition: { lon: number; lat: number }) => ({
	type: SET_MAP_POSITION,
	mapPosition,
});

const setPlaceCreateMode = (placeCreateMode: boolean) => ({
	type: IS_CREATE_PLACE_MODE,
	placeCreateMode,
});

export { setMapPosition, setPlaceCreateMode };
