import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthBtn } from './GoogleAuthBtn';

function App() {
	return (
		<GoogleOAuthProvider clientId="487879785924-n4kaoirs6fd3bndb1jd1aq9vbg9lgk7h.apps.googleusercontent.com">
			<AuthBtn />
		</GoogleOAuthProvider>
	);
}

export default App;
