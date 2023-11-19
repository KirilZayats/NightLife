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

export { type UserInfo, type GooglAuthResponse, type IUsersState };
