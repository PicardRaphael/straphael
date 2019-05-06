import {Home} from 'components/Home';
import Galerie from 'components/Galerie';
import Carousel from 'components/Carousel';

export const defaultRoutes = () => {
	const data = [
		{
			id: 'Home',
			path: '/',
			exact: true,
			component: Home,
		},
		{
			id: 'Galerie',
			path: '/galerie',
			component: Galerie,
		}
	]
	return data
}