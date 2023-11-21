import { takeEvery } from 'redux-saga/effects';
import { IAccordionElementProps } from '../../components/AccordionElement/types';
import { IPostPlace } from '../../types';
import {
	IS_CREATE_PLACE_MODE,
	LOAD_PLACES,
	POST_PLACE,
	SET_CURRENT_PLACE_POSITION,
	SET_MAP_POSITION,
} from '../action-types';

const setMapPosition = (mapPosition: { lon: number; lat: number }) => ({
	type: SET_MAP_POSITION,
	mapPosition,
});

const loadPosts = (posts: { search: string; page: number; sort: string }) => ({
	type: LOAD_PLACES,
	posts,
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
	const place = action.place;
	const formData = new FormData();
	Object.entries(place).forEach(([key, value]: any) => {
		formData.append(key, value);
	});

	yield fetch('http://localhost:5183/places/new', {
		method: 'POST',
		body: formData,
	});
}

function* fetchPlaces(action: any) {
	const posts = action.posts;
	let resp: Response = yield fetch(
		`http://localhost:5183/places?search=${posts.search}&page=${posts.page}`
	);
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
	loadPosts,
};
