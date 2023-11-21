import { IPlacesState } from '../../types';
import { IS_CREATE_PLACE_MODE, SET_MAP_POSITION } from '../action-types';

const initialState = {
	mapPosition: {
		lon: 0,
		lat: 0,
	},
	placeCreateMode: false,
};

const placesReduser = (state: IPlacesState = initialState, action: any) => {
	switch (action.type) {
		case SET_MAP_POSITION: {
			return { ...state, mapPosition: action.mapPosition };
		}
		case IS_CREATE_PLACE_MODE: {
			return { ...state, placeCreateMode: action.placeCreateMode };
		}
		default: {
			return state;
		}
	}
};

export { placesReduser };
