import { Rating } from '@mui/material';
import { ImageUploader } from '../ImageUploader';
import styles from './CreatePlace.module.scss';

const CreatePlace = () => {
	return (
		<div className={styles['acc-ell-info-root']}>
			<div className={styles['acc-ell-info-title']}>
				<div className={styles['acc-ell-photo-label-country']}>
					<div className={styles['acc-ell__photo']}>
						<ImageUploader />
					</div>
					<div className={styles['acc-ell__label-country']}>
						<input type="text" placeholder='Name' /> <input type="text" placeholder='City' />
					</div>
				</div>
				<Rating value={5} precision={0.2} size="large" />
				<div className={styles['acc-ell__description']}><textarea></textarea></div>
			</div>
		</div>
	);
};

export { CreatePlace };
