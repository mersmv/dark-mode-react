import Icon from '../Icon/Icon';
import UpDown from '../UpDown/UpDown';
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
	dark,
	updowncolor,
	barcolor
}) => {
	console.log(img);
	return (
		<StyledCard dark={dark}>
			<StyledSocialMedia>
				<Icon img={img} alt='Icono' />
				<StyledAt>{at}</StyledAt>
			</StyledSocialMedia>
			<StyledFollowersContainer>
				<StyledFollowers dark={dark}>{followers}</StyledFollowers>
				<StyledFollowersTitle>FOLLOWERS</StyledFollowersTitle>
			</StyledFollowersContainer>
			<UpDown updowncolor={updowncolor} updown={updown} icon={icon} />
		</StyledCard>
	);
};

export default Card;
