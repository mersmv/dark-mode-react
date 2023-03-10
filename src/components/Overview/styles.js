import styled from 'styled-components';
import { COLORS, COLORS2 } from '../../App';

const StyledOverviewCard = styled.div`
	width: 250px;
	height: 125px;
	border-radius: 15px;
	background-color: ${({ dark }) =>
		dark ? COLORS2.bgcolordark : COLORS2.bgcolorlight};
	display: flex;
	align-items: center;
`;

const StyledInfoCont = styled.div`
	width: 110px;
	padding-left: 15px;
	display: flex;
	flex-direction: column;
	justify-content: start;
`;

const StyledIconsCont = styled.div`
	width: 110px;
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	padding-right: 15px;
`;

const StyledMiniTile = styled.h2`
	color: ${({ dark }) =>
		dark ? COLORS.subtitlecolordark : COLORS.subtitlecolorlight};
	font-size: 1rem;
`;

const StyledTitle = styled.h1`
	color: ${({ dark }) => (dark ? COLORS2.colordark : COLORS2.colorlight)};
	font-size: 1.6rem;
`;

export {
	StyledIconsCont,
	StyledOverviewCard,
	StyledMiniTile,
	StyledTitle,
	StyledInfoCont
};
