import { useEffect, useState } from 'react';
import { UserInfo } from '../../types';
import styles from './User.module.scss';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '../Button';

const User = () => {
	const [user, setUser] = useState<UserInfo>();

	useEffect(() => {
		let usr = JSON.parse(localStorage['user_info']);
		setUser({
			name: usr.name,
			email: usr.email,
			picture: usr.picture,
			sub: usr.sub,
		});
		console.log(usr.picture);
	}, []);

	const handleLogOut = () => {
		localStorage.removeItem('user_info');
		window.location.pathname = '/';
	};
	return (
		<div className={styles['acc-ell-info-root']}>
			<div className={styles['acc-ell-info-title']}>
				<div className={styles['acc-ell-photo-label-country']}>
					<div className={styles['acc-ell__photo']}>
						<img src={user?.picture} alt="" />
					</div>
					<div className={styles['acc-ell__label-country']}>
						<input
							placeholder={user?.name}
							className={styles['inpt-place-name']}
							type="text"
							readOnly
						/>
						<input
							placeholder={user?.email}
							className={styles['inpt-city']}
							type="text"
							readOnly
						/>
					</div>
					<Button label={<LoginIcon />} onClick={handleLogOut} />
				</div>
			</div>
		</div>
	);
};

export { User };
