import { AccordionElement } from '../AccordionElement';
import { IAccordionElementProps } from '../AccordionElement/types';
import Pagination from '@mui/material/Pagination';
import styles from './Accordion.module.scss';

const Accordion = ({ data }: { data: IAccordionElementProps[] }) => {
	return (
		<>
			<div className={styles['accordion-root']}>
				{data.map((props: IAccordionElementProps) => (
					<AccordionElement
						key={props.description}
						label={props.label}
						photo={props.photo}
						description={props.description}
						country={props.country}
						sub={props.sub}
						raiting={props.raiting}
					/>
				))}
			</div>
			<div className={styles['accordion-pagination']}>
				<Pagination count={10} color="secondary" />
			</div>
		</>
	);
};

export { Accordion };
