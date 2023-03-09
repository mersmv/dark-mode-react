import Icon from '../Icon/Icon';
import UpDown from '../UpDown/UpDowm';
import {
	StyledAt,
	StyledCard,
	StyledFollowers,
	StyledFollowersContainer,
	StyledFollowersTitle,
	StyledSocialMedia
} from './styles';

const Card = ({
	img,
	at,
	followers,
	updown,
	icon,
	colordark,
	bgcolordark,
	updowncolor,
	barcolor
}) => {
	return (
		<StyledCard bgcolor={bgcolordark}>
			<StyledSocialMedia>
				<Icon src={img} alt='Icono' />
				<StyledAt>{at}</StyledAt>
			</StyledSocialMedia>
			<StyledFollowersContainer>
				<StyledFollowers colordark={colordark}>{followers}</StyledFollowers>
				<StyledFollowersTitle>FOLLOWERS</StyledFollowersTitle>
			</StyledFollowersContainer>
			<UpDown updowncolor={updowncolor} updown={updown} icon={icon} />
		</StyledCard>
	);
};

export default Card;
