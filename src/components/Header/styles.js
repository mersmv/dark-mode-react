import styled from 'styled-components';
import { COLORS } from '../../App';

const StyledHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	padding: 15px;
`;

const StyledTitleContainer = styled.div`
	display: flex;
	text-align: start;
	flex-direction: column;
`;
const StyledTitleHeader = styled.h1`
	color: ${({ dark }) => (dark ? COLORS.colordark : COLORS.colorlight)};
	font-size: 1.2rem;
`;

const StyledSubTitle = styled.div`
	color: ${({ dark }) =>
		dark ? COLORS.subtitlecolordark : COLORS.subtitlecolorlight};
	font-size: 0.9rem;
`;
const StyledToggleButton = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	align-items: center;
`;

const StyledLabel = styled.label`
	display: block;
	background-image: linear-gradient(45deg, #40db82 50%, #388fe7 100%);
	width: 50px;
	height: 30px;
	border-radius: 50px;
	position: relative;

	&::after {
		content: '';
		width: 28px;
		height: 28px;
		top: 1px;
		border-radius: 50%;
		background-color: black;
		position: absolute;
		left: 1px;
	}
`;

const StyledInput = styled.input`
	display: none;

	&:checked + ${StyledLabel}::after {
		transition: transform;
		transform: translateX(19px);
		transition-duration: 0.5s;
	}
	&:checked + ${StyledLabel} {
		background-color: #979797;
		background-image: none;
	}
`;

export {
	StyledHeaderContainer,
	StyledTitleHeader,
	StyledTitleContainer,
	StyledSubTitle,
	StyledLabel,
	StyledInput,
	StyledToggleButton
};
