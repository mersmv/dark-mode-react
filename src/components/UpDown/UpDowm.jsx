import { StyledContainer, StyledImg, StyledWords } from './styles';

const UpDown = ({ updown, updowncolor, icon }) => {
	return (
		<StyledContainer>
			<StyledImg src={icon} alt='Up Icon or Down Icon' />
			<StyledWords color={updowncolor}>{updown}</StyledWords>
		</StyledContainer>
	);
};

export default UpDown;
