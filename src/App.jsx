import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { StyleCont, StyledMain, StyledOverviewCont } from './components/styles';
import { v4 } from 'uuid';
import Overview from './components/Overview/Overview';
import { useState } from 'react';

export const CARDS = [
	{
		id: v4(),
		img: './public/images/icon-facebook.svg',
		at: '@nathan',
		followers: '1987',
		updown: '12',
		icon: './public/images/icon-up.svg',
		updowncolor: '#1EB589',
		barcolor: '#178FF5'
	},
	{
		id: v4(),
		img: './public/images/icon-twitter.svg',
		at: '@nathanf',
		followers: '1044',
		updown: '199',
		updowncolor: '#1EB589',
		icon: './public/images/icon-up.svg',
		barcolor: '#1DA1F2'
	},
	{
		id: v4(),
		img: './public/images/icon-instagram.svg',
		at: '@realnathanf',
		followers: '11000',
		updown: '1089',
		icon: './public/images/icon-up.svg',
		updowncolor: '#1EB589',
		barcolor: '#EF897D'
	},
	{
		id: v4(),
		img: './public/images/icon-youtube.svg',
		at: 'Nathan F',
		followers: '8239',
		updown: '144',
		icon: './public/images/icon-down.svg',
		updowncolor: '#DC414C',
		barcolor: '#C4032B'
	}
];

const CARDS_OVERVIEW = [
	{
		id: v4(),
		title: 'Page Views',
		img: './public/images/icon-facebook.svg',
		number: '87',
		icon: './public/images/icon-up.svg',
		updown: '3%',
		updowncolor: '#1EB589'
	},
	{
		id: v4(),
		title: 'Likes',
		img: './public/images/icon-facebook.svg',
		number: '52',
		icon: './public/images/icon-up.svg',
		updowm: '2%',
		updowncolor: '#DC414C'
	},
	{
		id: v4(),
		title: 'Likes',
		img: './public/images/icon-instagram.svg',
		number: '5462',
		icon: './public/images/icon-up.svg',
		updown: '2257%',
		updowncolor: '#1EB589'
	},
	{
		id: v4(),
		title: 'Profile Views',
		img: './public/images/icon-instagram.svg',
		number: '52k',
		icon: './public/images/icon-up.svg',
		updowm: '1375%',
		updowncolor: '#1EB589'
	},
	{
		id: v4(),
		title: 'Retweets',
		img: './public/images/icon-twitter.svg',
		number: '117',
		icon: './public/images/icon-up.svg',
		updown: '303%',
		updowncolor: '#1EB589'
	},
	{
		id: v4(),
		title: 'Likes',
		img: './public/images/icon-twitter.svg',
		number: '507',
		icon: './public/images/icon-up.svg',
		updown: '553',
		updowncolor: '#1EB589'
	},
	{
		id: v4(),
		title: 'Likes',
		img: './public/images/icon-youtube.svg',
		number: '107',
		icon: './public/images/icon-down.svg',
		updown: '19%',
		updowncolor: '#DC414C'
	},
	{
		id: v4(),
		title: 'Total Views',
		img: './public/images/icon-youtube.svg',
		number: '1407',
		icon: './public/images/icon-down.svg',
		updowmn: '12%',
		updowncolor: '#DC414C'
	}
];

export const COLORS = {
	colordark: '#FFFFFF',
	bgcolordark: '#252B42',
	subtitlecolorlight: '#63687D',
	subtitlecolordark: '#8C98C6',
	colorlight: '#1D1F29',
	bgcolorlight: '#F1F3FA',
	bodycolordark: '#20222F',
	bodycolorlight: '#F7F9FF'
};

export const COLORS2 = {
	colordark: '#FFFFFF',
	bgcolordark: '#252B42',
	subtitlecolorlight: '#63687D',
	subtitlecolordark: '#8C98C6',
	colorlight: '#1D1F29',
	bgcolorlight: '#F1F3FA'
};

const App = () => {
	const [dark, setDark] = useState(true);
	return (
		<StyledMain dark={dark}>
			<Header dark={dark} setDark={setDark} />
			<StyleCont>
				{CARDS.map(card => (
					<Card key={card.id} {...card} dark={dark}></Card>
				))}
			</StyleCont>
			<StyledOverviewCont>
				{CARDS_OVERVIEW.map(overview => (
					<Overview key={overview.id} {...overview} dark={dark}></Overview>
				))}
			</StyledOverviewCont>
		</StyledMain>
	);
};

export default App;
