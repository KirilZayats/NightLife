import styles from './Button.module.scss';
import { IButtonProps } from './types';

const Button = (props: IButtonProps) => {
	const { label, onClick, style } = props;
	return (
		<div className={styles['btn-root']} style={style} onClick={onClick}>
			{label && label}
		</div>
	);
};

export { Button };
