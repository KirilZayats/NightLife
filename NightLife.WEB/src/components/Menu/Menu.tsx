import { AccordionElement } from '../AccordionElement';
import { Search } from '../Search';
import styles from './Menu.module.scss';

const Menu = () => {
	return (
		<div className={styles['menu-root']}>
			<Search />
			<AccordionElement
				label="Black Horse"
				country="Minsk"
				raiting={4.4}
				description="sadadadadsdadsdwdwdadawdawdadawd"
			/>
			<AccordionElement
				label="Black Horse"
				country="Minsk"
				raiting={4.4}
				description="sadadadadsdadsdwdwdadawdawdadawd"
			/>
		</div>
	);
};

export { Menu };
