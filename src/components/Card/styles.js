import styled from 'styled-components';
import { COLORS } from '../../App';

const StyledCard = styled.div`
	display: flex;
	width: 250px;
	height: 215px;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 10px;
	background-color: ${({ dark }) =>
		dark ? COLORS.bgcolordark : COLORS.bgcolorlight};
`;

const StyledSocialMedia = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

const StyledAt = styled.p`
	font-size: 1rem;
	color: ${({ dark }) =>
		dark ? COLORS.subtitlecolordark : COLORS.subtitlecolorlight};
`;

const StyledFollowersContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledFollowers = styled.h1`
	font-size: 2.5rem;
	margin: 0;
	color: ${({ dark }) => (dark ? COLORS.colordark : COLORS.colorlight)};
`;

const StyledFollowersTitle = styled.p`
	font-size: 1.2rem;
	margin: 0;
	letter-spacing: 5px;
	color: ${({ dark }) =>
		dark ? COLORS.subtitlecolordark : COLORS.subtitlecolorlight};
`;

export {
	StyledCard,
	StyledSocialMedia,
	StyledAt,
	StyledFollowersContainer,
	StyledFollowers,
	StyledFollowersTitle
};
