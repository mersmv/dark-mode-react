import Icon from '../Icon/Icon';
import UpDown from '../UpDown/UpDown';
import {
	StyledIconsCont,
	StyledInfoCont,
	StyledMiniTile,
	StyledOverviewCard,
	StyledTitle
} from './styles';

const Overview = ({
	img,
	icon,
	updown,
	updowncolor,
	colordark,
	title,
	bgcolordark,
	number,
	dark
}) => {
	return (
		<StyledOverviewCard dark={dark}>
			<StyledInfoCont>
				<StyledMiniTile>{title}</StyledMiniTile>
				<StyledTitle dark={dark}>{number}</StyledTitle>
			</StyledInfoCont>
			<StyledIconsCont>
				<Icon img={img} alt='' />
				<UpDown updown={updown} updowncolor={updowncolor} icon={icon} />
			</StyledIconsCont>
		</StyledOverviewCard>
	);
};

export default Overview;
