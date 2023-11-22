import { takeEvery } from 'redux-saga/effects';
import { SIGNUP_USER } from '../action-types';
import axios from 'axios';
import { GooglAuthResponse } from '../../types';

const signUp = (token: string) => ({
	type: SIGNUP_USER,
	token,
});

function* fetchSignUpUserInfo(action: any) {
	const response: GooglAuthResponse = yield axios.get(
		'https://www.googleapis.com/oauth2/v3/userinfo',
		{
			headers: { Authorization: `Bearer ${action.token}` },
		}
	);
	console.log(response.data);
	yield axios.post('http://localhost:21891/SignUp', response.data);
}

function* watcherUsers() {
	// yield takeEvery(SIGNUP_USER, fetchSignUpUserInfo);
}

export { signUp, watcherUsers };
