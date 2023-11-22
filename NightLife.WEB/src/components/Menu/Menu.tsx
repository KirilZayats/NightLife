import { Accordion } from '../Accordion';
import { NavBar } from '../NavBar';
import { Search } from '../Search';
import styles from './Menu.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatePlace } from '../CreatePlace';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../User';
import { loadPlaces } from '../../redux/action-creators';
import { IStoreState } from '../../types';

const Menu = () => {
	const dispatch = useDispatch();
	const places = useSelector((store: IStoreState) => store.places.places);

	useEffect(() => {
		dispatch(
			loadPlaces({
				search: '',
				page: 1,
				sort: 'asc',
			})
		);
	}, []);

	return (
		<div className={styles['menu-root']}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route
							index
							element={
								<>
									<Search />
									<Accordion data={places} />
								</>
							}
						/>
						<Route path="new" element={<CreatePlace />} />\
						<Route path="user" element={<User />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<NavBar />
		</div>
	);
};

export { Menu };
