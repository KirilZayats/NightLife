import { IPlacesState } from '../../types';
import {
	IS_CREATE_PLACE_MODE,
	SET_CURRENT_PLACE_POSITION,
	SET_MAP_POSITION,
	SET_PLACES,
} from '../action-types';

const initialState = {
	mapPosition: {
		lon: 0,
		lat: 0,
	},
	currentPosition: {
		lon: 0,
		lat: 0,
	},
	placeCreateMode: false,
	places: []
};

const placesReduser = (state: IPlacesState = initialState, action: any) => {
	switch (action.type) {
		case SET_MAP_POSITION: {
			return { ...state, mapPosition: action.mapPosition };
		}
		case IS_CREATE_PLACE_MODE: {
			return { ...state, placeCreateMode: action.placeCreateMode };
		}

		case SET_CURRENT_PLACE_POSITION: {
			return { ...state, currentPosition: action.currentPosition };
		}
		case SET_PLACES: {
			return { ...state, places: action.places };
		}
		default: {
			return state;
		}
	}
};

export { placesReduser };
