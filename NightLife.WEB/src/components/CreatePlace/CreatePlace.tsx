import { Rating } from '@mui/material';
import { ImageUploader } from '../ImageUploader';
import styles from './CreatePlace.module.scss';
import { Button } from '../Button';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../../types';
import { useEffect, useState } from 'react';
import {
	createPlace,
	setPlaceCreateMode,
} from '../../redux/action-creators/places-action-creators';

const CreatePlace = () => {
	const mapPosition = useSelector((store: IStoreState) => store.places.mapPosition);
	const currentPosition = useSelector(
		(store: IStoreState) => store.places.currentPosition
	);
	const dispatch = useDispatch();

	const [image, setImage] = useState<File | undefined>();
	const [placeName, setPlaceName] = useState('');
	const [city, setCity] = useState('');
	const [raitingValue, setRaiting] = useState(0);
	const [description, setDescription] = useState('');

	useEffect(() => {
		dispatch(setPlaceCreateMode(true));
	}, []);

	const handleClick = () => {
		image &&
			dispatch(
				createPlace({
					sub: '0',
					images: [image],
					info: JSON.stringify({
						name: placeName,
						city: city,
						description: description,
					}),
					raiting: raitingValue,
					coords: `${currentPosition.lat} ${currentPosition.lon}`,
				})
			);
		window.location.pathname = '/';
	};

	return (
		<div className={styles['acc-ell-info-root']}>
			<div className={styles['acc-ell-info-title']}>
				<div className={styles['acc-ell-photo-label-country']}>
					<div className={styles['acc-ell__photo']}>
						<ImageUploader onUpload={setImage} />
					</div>
					<div className={styles['acc-ell__label-country']}>
						<input
							onChange={(event: any) => setPlaceName(event.target.value)}
							value={placeName}
							className={styles['inpt-place-name']}
							type="text"
							placeholder="Name"
						/>
						<input
							onChange={(event: any) => setCity(event.target.value)}
							value={city}
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
						value={raitingValue}
						onChange={(event, value) => setRaiting(value ?? 0)}
					/>
					<div className={styles['second-line-block__pos']}>
						<div className="">Position:</div>
						<div className="">
							{!currentPosition.lat && !currentPosition.lon ? (
								<>
									<p>Lattitude: {mapPosition.lat}</p>
									<p>Longitude: {mapPosition.lon}</p>
								</>
							) : (
								<>
									<p>Lattitude: {currentPosition.lat}</p>
									<p>Longitude: {currentPosition.lon}</p>
								</>
							)}
						</div>
					</div>
				</div>
				<div>
					<textarea
						className={styles['acc-ell__description']}
						placeholder="Description..."
						value={description}
						onChange={(event: any) => setDescription(event.target.value)}
					></textarea>
				</div>
			</div>
			<Button
				style={{
					margin: 'auto',
					backgroundColor: '#329F5B',
				}}
				label={<DoneIcon />}
				onClick={handleClick}
			/>
		</div>
	);
};

export { CreatePlace };
