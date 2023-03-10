import styled from 'styled-components';
import { COLORS } from '../App';

const StyleCont = styled.div`
	width: 1110px;
	height: 226px;
	margin-top: 100px;
	gap: 15px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
`;

const StyledOverviewCont = styled.div`
	width: 1110px;
	margin-top: 100px;
	display: grid;
	grid-template-columns: repeat(4, 260px);
	gap: 10px;
	margin-left: auto;
	margin-right: auto;
`;

const StyledMain = styled.div`
	width: 100vw;
	height: 100vh;

	background-color: ${({ dark }) =>
		dark ? COLORS.bodycolordark : COLORS.bodycolorlight};
`;

export { StyleCont, StyledOverviewCont, StyledMain };
