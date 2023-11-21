import { Button } from '../Button';
import styles from './NavBar.module.scss';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useGoogleLogin } from '@react-oauth/google';
import { GooglAuthResponse, UserInfo } from '../../types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NavBar = () => {
	const [user, setUser] = useState<UserInfo>();

	useEffect(() => {
		if (user) window.location.pathname = '/user';
	}, [user]);
	const googleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			const response: GooglAuthResponse = await axios.get(
				'https://www.googleapis.com/oauth2/v3/userinfo',
				{
					headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
				}
			);
			localStorage['user_info'] = JSON.stringify(response.data);
			setUser(response.data);
		},
		onError: (errorResponse) => console.log(errorResponse),
	});

	const handleUserClick = () => {
		if (!localStorage['user_info']) {
			googleLogin();
		}
	};
	return (
		<div className={styles['nav-bar-root']}>
			<Button
				label={<HomeIcon />}
				onClick={() => (window.location.pathname = '/')}
			/>
			<Button
				label={<AddIcon />}
				onClick={() => (window.location.pathname = '/new')}
			/>
			<Button label={<PersonIcon />} onClick={handleUserClick} />
		</div>
	);
};

export { NavBar };
