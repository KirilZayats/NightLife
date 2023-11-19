import { IAccordionElementProps } from './types';
import Rating from '@mui/material/Rating';
import styles from './AccordionElement.module.scss';

const AccordionElement = (props: IAccordionElementProps) => {
	const { label, country, photo, description, sub, raiting } = props;

	return (
		<div className={styles['acc-ell-root']}>
			<div className={styles['acc-ell-header']}>
				<div className="">
					{label}, {country}
				</div>
				<Rating value={raiting} readOnly precision={0.2} size="large" />
			</div>

			<div className="info">
				<div className="place-info">
					<div className="photo-label-country">
						<div className="photo"></div>
						<div className="label-country">
							<h2>{label}</h2> <h3>{country}</h3>
						</div>
					</div>
					<Rating value={raiting} readOnly precision={0.2} size="large" />
					<div className="description">{description}</div>
				</div>
				<div className="commnts"></div>
			</div>
		</div>
	);
};

export { AccordionElement };
