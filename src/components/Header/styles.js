import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const StyledTitleContainer = styled.div`
	display: flex;
	text-align: start;
	flex-direction: column;
`;
const StyledTitleHeader = styled.h1`
	color: white;
	font-size: 1.2rem;
`;

const StyledSubTitle = styled.div`
	color: #8c98c6;
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
	background-color: green;
	width: 50px;
	height: 30px;
	border-radius: 50px;
	position: relative;

	&::after {
		content: '';
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: black;
		position: absolute;
		left: 0;
	}
`;

const StyledInput = styled.input`
	display: none;

	&:checked + ${StyledLabel}::after {
		transition: transform;
		transform: translateX(20px);
		transition-duration: 0.5s;
	}
	&:checked + ${StyledLabel} {
		background-color: grey;
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
