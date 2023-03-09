import {
	StyledHeaderContainer,
	StyledInput,
	StyledLabel,
	StyledSubTitle,
	StyledTitleContainer,
	StyledTitleHeader,
	StyledToggleButton
} from './styles';

const Header = () => {
	return (
		<StyledHeaderContainer>
			<StyledTitleContainer>
				<StyledTitleHeader>Social Media Dashboard</StyledTitleHeader>
				<StyledSubTitle>Total Followers: 23,004</StyledSubTitle>
			</StyledTitleContainer>
			<StyledToggleButton>
				<StyledSubTitle>Dark Mode</StyledSubTitle>
				<div>
					<StyledInput type='checkbox' id='toggle' />
					<StyledLabel htmlFor='toggle' />
				</div>
			</StyledToggleButton>
		</StyledHeaderContainer>
	);
};

export default Header;
