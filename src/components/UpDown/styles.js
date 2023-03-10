import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const StyledImg = styled.img`
	width: 9px;
	height: 9px;
`;

const StyledWords = styled.p`
	color: ${({ color }) => color};
	font-size: 1rem;
`;
export { StyledContainer, StyledImg, StyledWords };
