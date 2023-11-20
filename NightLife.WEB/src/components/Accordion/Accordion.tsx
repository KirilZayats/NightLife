import { AccordionElement } from '../AccordionElement';
import { IAccordionElementProps } from '../AccordionElement/types';
import styles from './Accordion.module.scss';

const Accordion = ({ data }: { data: IAccordionElementProps[] }) => {
	return (
		<div className={styles['accordion-root']}>
			{data.map((props: IAccordionElementProps) => (
				<AccordionElement
					label={props.label}
					photo={props.photo}
					description={props.description}
					country={props.country}
					sub={props.sub}
					raiting={props.raiting}
				/>
			))}
		</div>
	);
};

export { Accordion };
