import { IAccordionElementProps } from "./components/AccordionElement/types";

interface UserInfo {
	email: string;
	name: string;
	picture: string;
	sub: string;
}

interface GooglAuthResponse {
	data: UserInfo;
}

interface IUsersState {
	user: any;
}

interface IPlacesState {
	mapPosition: {
		lon: number;
		lat: number;
	};
	currentPosition: {
		lon: number;
		lat: number;
	};
	placeCreateMode: boolean;
	places: IAccordionElementProps[];
}

interface IStoreState {
	users: IUsersState;
	places: IPlacesState;
}

interface IPostPlace {
	sub: string;
	info: string;
	coords: string;
	images: File[];
	raiting: number;
}

export {
	type UserInfo,
	type GooglAuthResponse,
	type IUsersState,
	type IPlacesState,
	type IStoreState,
	type IPostPlace,
};
