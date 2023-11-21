import { Rating } from '@mui/material';
import { ImageUploader } from '../ImageUploader';
import styles from './CreatePlace.module.scss';
import { Button } from '../Button';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../../types';
import { useEffect } from 'react';
import { setPlaceCreateMode } from '../../redux/action-creators/places-action-creators';

const CreatePlace = () => {
	const mapPosition = useSelector((store: IStoreState) => store.places.mapPosition);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPlaceCreateMode(true));
	}, []);
	return (
		<div className={styles['acc-ell-info-root']}>
			<div className={styles['acc-ell-info-title']}>
				<div className={styles['acc-ell-photo-label-country']}>
					<div className={styles['acc-ell__photo']}>
						<ImageUploader />
					</div>
					<div className={styles['acc-ell__label-country']}>
						<input
							className={styles['inpt-place-name']}
							type="text"
							placeholder="Name"
						/>
						<input
							className={styles['inpt-city']}
							type="text"
							placeholder="City"
						/>
					</div>
				</div>
				<div className={styles['second-line-block']}>
					<Rating
						className={styles['cp-raiting']}
						defaultValue={0}
						precision={0.2}
						size="large"
					/>
					<div className={styles['second-line-block__pos']}>
						<div className="">Position:</div>
						<div className="">
							<p>Lattitude: {mapPosition.lat}</p>{' '}
							<p> Longitude: {mapPosition.lon}</p>
						</div>
					</div>
				</div>
				<div>
					<textarea
						className={styles['acc-ell__description']}
						placeholder="Description..."
					></textarea>
				</div>
			</div>
			<Button
				style={{
					margin: 'auto',
					backgroundColor: '#329F5B',
				}}
				label={<DoneIcon />}
			/>
		</div>
	);
};

export { CreatePlace };
