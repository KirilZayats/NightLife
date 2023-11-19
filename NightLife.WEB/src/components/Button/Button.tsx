import styles from './Button.module.scss';
import { IButtonProps } from './types';

const Button = (props: IButtonProps) => {
	const { label, onClick } = props;
	return (
		<div className={styles['btn-root']} onClick={onClick}>
			{label && label}
		</div>
	);
};

export { Button };
