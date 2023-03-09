import styled from 'styled-components';

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
	background-color: ${({ bgcolor }) => bgcolor};
`;

const StyledSocialMedia = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

const StyledAt = styled.p`
	font-size: 1rem;
	color: #8c98c6;
`;

const StyledFollowersContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledFollowers = styled.h1`
	font-size: 2.5rem;
	margin: 0;
	color: ${({ colordark }) => colordark};
`;

const StyledFollowersTitle = styled.p`
	font-size: 1.2rem;
	margin: 0;
	letter-spacing: 5px;
	color: #8c98c6;
`;

export {
	StyledCard,
	StyledSocialMedia,
	StyledAt,
	StyledFollowersContainer,
	StyledFollowers,
	StyledFollowersTitle
};
