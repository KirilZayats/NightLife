import { IAccordionElementProps } from './types';
import Rating from '@mui/material/Rating';
import styles from './AccordionElement.module.scss';
import { useState } from 'react';

const AccordionElement = (props: IAccordionElementProps) => {
	const { name, city, photo, description, sub, raiting } = props;
	const [isOpen, setOpen] = useState(false);

	return (
		<div className={styles['acc-ell-root']}>
			<div
				className={styles['acc-ell-header']}
				onClick={() => setOpen((pv) => !pv)}
				style={{
					borderRadius: isOpen? '20px 20px 0 0': ''
				}}
			>
				<div>
					{name}, {city}
				</div>
				<Rating value={raiting} readOnly precision={0.2} size="large" />
			</div>

			{isOpen && (
				<div className={styles['acc-ell-info-root']}>
					<div className={styles['acc-ell-info-title']}>
						<div className={styles['acc-ell-photo-label-country']}>
							<div className={styles['acc-ell__photo']}></div>
							<div className={styles['acc-ell__label-country']}>
								<h2>{name}</h2> <h3>{city}</h3>
							</div>
						</div>
						<Rating value={raiting} readOnly precision={0.2} size="large" />
						<div className={styles["acc-ell__description"]}>{description}</div>
					</div>
					<div className="commnts"></div>
				</div>
			)}
		</div>
	);
};

export { AccordionElement };
