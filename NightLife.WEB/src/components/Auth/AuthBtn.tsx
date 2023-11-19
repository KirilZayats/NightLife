import { useGoogleLogin } from '@react-oauth/google';
import { AuthBtnProps } from './types';

const AuthBtn = (props: AuthBtnProps) => {
	const { style, title, setAuthToken } = props;

	const googleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			console.log(tokenResponse.access_token)
			setAuthToken && setAuthToken(tokenResponse.access_token);
		},
		onError: (errorResponse) => console.log(errorResponse),
	});

	const handleClick = () => {
		googleLogin();
	};
	return (
		<button style={style} onClick={handleClick}>
			{title}
		</button>
	);
};

export { AuthBtn };
