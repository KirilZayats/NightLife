import { Button } from '../Button';
import { ISearchProps } from './types';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.scss';
import { useState } from 'react';

const Search = (props: ISearchProps) => {
	const [serched, setSearched] = useState('');
	return (
		<div className={styles['search-root']}>
			<input
				className={styles['search-input']}
				type="text"
				value={serched}
				onChange={(event: any) => {
					setSearched(event.target.value);
				}}
				placeholder="Search..."
			/>
			<div onClick={() => setSearched('')}>
				<CloseIcon
					style={{
						cursor: 'pointer',
					}}
				/>
			</div>
			<Button label={<SearchIcon />} />
		</div>
	);
};

export { Search };
