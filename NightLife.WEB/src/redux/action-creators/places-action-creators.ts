import { put, takeEvery } from 'redux-saga/effects';
import { IAccordionElementProps } from '../../components/AccordionElement/types';
import { IPostPlace } from '../../types';
import {
	IS_CREATE_PLACE_MODE,
	LOAD_PLACES,
	POST_PLACE,
	SET_CURRENT_PLACE_POSITION,
	SET_MAP_POSITION,
	SET_PLACES,
} from '../action-types';
import axios from 'axios';

const setMapPosition = (mapPosition: { lon: number; lat: number }) => ({
	type: SET_MAP_POSITION,
	mapPosition,
});

const loadPlaces = (posts: { search: string; page: number; sort: string }) => ({
	type: LOAD_PLACES,
	posts,
});

const setPlaces = (places: IAccordionElementProps[]) => ({
	type: SET_PLACES,
	places,
});

const setPlaceCreateMode = (placeCreateMode: boolean) => ({
	type: IS_CREATE_PLACE_MODE,
	placeCreateMode,
});

const setCurrentPlacePosition = (currentPosition: { lon: number; lat: number }) => ({
	type: SET_CURRENT_PLACE_POSITION,
	currentPosition,
});

const createPlace = (place: IPostPlace) => ({
	type: POST_PLACE,
	place,
});

function* postPlace(action: any) {
	const place: IPostPlace = action.place;
	const formData = new FormData();
	formData.append('Images', place.images[0]);

	yield axios.post(
		`http://localhost:5183/new?Sub=${place.sub}&Info=${place.info}&Coords=${place.coords}&Raiting=${place.raiting}`,
		formData,
		{
			headers: { 'Content-Type': 'multipart/form-data' },
		}
	);
}

function* fetchPlaces(action: any) {
	let resp: { data: IPostPlace[] } = yield axios.get('http://localhost:5183/all');
	let resData = resp.data.map((el) => {
		let info = JSON.parse(el.info);
		return {
			...el,
			...info,
		};
	});
	yield put(setPlaces(resData));
}

function* watcherPlaces() {
	yield takeEvery(POST_PLACE, postPlace);
	yield takeEvery(LOAD_PLACES, fetchPlaces);
}

export {
	setMapPosition,
	setPlaceCreateMode,
	watcherPlaces,
	createPlace,
	setCurrentPlacePosition,
	loadPlaces,
};
