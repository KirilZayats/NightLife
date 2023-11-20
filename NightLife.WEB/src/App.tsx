import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { EarthMap } from './components';
import { AuthBtn } from './components/Auth';
import { useDispatch } from 'react-redux';
import { signUp } from './redux/action-creators';
import { Menu } from './components/Menu';

function App() {
	const dispatch = useDispatch();
	const [token, setToken] = useState('');

	useEffect(() => {
		dispatch(signUp(token));
	}, [token]);
	return (
		<GoogleOAuthProvider clientId="487879785924-n4kaoirs6fd3bndb1jd1aq9vbg9lgk7h.apps.googleusercontent.com">
			<div
				style={{
					display: 'flex',
					overflow: 'hidden'
				}}
			>
				<EarthMap />
				<Menu/>
				{/* <AuthBtn
					title="Auth"
					style={{
						position: 'absolute',
						zIndex: 1000,
					}}
					setAuthToken={setToken}
				/> */}
			</div>
		</GoogleOAuthProvider>
	);
}

export default App;
