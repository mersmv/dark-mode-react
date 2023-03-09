import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	gap: 5px;
`;

const StyledImg = styled.div`
	width: 20px;
	height: 20px;
`;

const StyledWords = styled.p`
	color: ${({ color }) => color};
	font-size: 1rem;
`;
export { StyledContainer, StyledImg, StyledWords };
