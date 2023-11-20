import { Button } from '../Button';
import styles from './NavBar.module.scss';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const NavBar = () => {
	return (
		<div className={styles['nav-bar-root']}>
			<Button label={<HomeIcon />} />
			<Button label={<AddIcon />} />
			<Button label={<PersonIcon />} />
		</div>
	);
};

export { NavBar };
