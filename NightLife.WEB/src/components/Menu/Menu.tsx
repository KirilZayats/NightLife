import { Accordion } from '../Accordion';
import { NavBar } from '../NavBar';
import { Search } from '../Search';
import styles from './Menu.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatePlace } from '../CreatePlace';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../User';

const data = [
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
	{
		label: 'Muratio',
		country: 'Morocco',
		raiting: 3.3,
		description: 'fsdgfadsgdsgarsg sdagdsg agd fg gadggvdgf dsg d fg dfgasgs',
	},
];

const Menu = () => {
	const dispatch = useDispatch();
	useEffect(() => {}, []);

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
									<Accordion data={data} />
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
