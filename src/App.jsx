import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { StyleCont } from './components/styles';
import { CARDS } from './constants/CARDS';

const App = () => {
	return (
		<div>
			<Header />
			<StyleCont>
				{CARDS.map(card => (
					<Card key={card.id} {...card}></Card>
				))}
			</StyleCont>
		</div>
	);
};

export default App;
