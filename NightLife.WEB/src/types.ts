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
	placeCreateMode: boolean;
}

interface IStoreState {
	users: IUsersState;
	places: IPlacesState;
}

export {
	type UserInfo,
	type GooglAuthResponse,
	type IUsersState,
	type IPlacesState,
	type IStoreState,
};
