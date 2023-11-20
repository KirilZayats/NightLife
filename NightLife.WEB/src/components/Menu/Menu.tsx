import { Accordion } from '../Accordion';
import { NavBar } from '../NavBar';
import { Search } from '../Search';
import styles from './Menu.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatePlace } from '../CreatePlace';

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
						<Route path="new" element={<CreatePlace />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<NavBar />
		</div>
	);
};

export { Menu };
