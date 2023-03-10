import { CARDS } from '../../App';

import {
	StyledHeaderContainer,
	StyledInput,
	StyledLabel,
	StyledSubTitle,
	StyledTitleContainer,
	StyledTitleHeader,
	StyledToggleButton
} from './styles';

const totalFollowers = () => {
	let followers = 0;
	CARDS.map(card => {
		followers = followers + Number(card.followers);
	});

	return followers;
};

const Header = ({ dark, setDark }) => {
	return (
		<StyledHeaderContainer>
			<StyledTitleContainer>
				<StyledTitleHeader dark={dark}>
					Social Media Dashboard
				</StyledTitleHeader>
				<StyledSubTitle>Total Followers: {totalFollowers()}</StyledSubTitle>
			</StyledTitleContainer>
			<StyledToggleButton>
				<StyledSubTitle>{dark ? 'Dark Mode' : 'Light Mode'}</StyledSubTitle>
				<div>
					<StyledInput type='checkbox' id='toggle' />
					<StyledLabel onClick={() => setDark(!dark)} htmlFor='toggle' />
				</div>
			</StyledToggleButton>
		</StyledHeaderContainer>
	);
};

export default Header;
