import { useGoogleLogin } from '@react-oauth/google';
import * as React from 'react';
import axios from 'axios';
const AuthBtn = () => {
	const googleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			console.log(tokenResponse);
			const userInfo = await axios.get(
				'https://www.googleapis.com/oauth2/v3/userinfo',
				{ headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
			);

			console.log(userInfo.data);
		},
		onError: (errorResponse) => console.log(errorResponse),
	});

	return <button onClick={() => googleLogin()}>Sign in with Google 🚀 </button>;
};

export { AuthBtn };
