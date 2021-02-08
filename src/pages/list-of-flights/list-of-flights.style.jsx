import styled from 'styled-components';
import { Colors } from '../../services/utils/colors';

export const FlightsContainer = styled.div`
	position: relative;
	border-radius: 12px;
	padding: 60px 100px;
	width: 60%;
	height: 80%;
	background: ${Colors.white};
	display: flex;
	border: 1px solid ${Colors.gray};
	flex-direction: column;
	align-items: center;
	margin: auto;
`;

export const CardContainer = styled.div`
	position: relative;
	padding: 0rem 3rem;
	box-shadow: -7px 13px 16px -11px rgba(0, 0, 0, 0.2);
	background-color: ${(p) => p.backgroundColor || Colors.yellow};
	width: 100%;
	height: 65px;
	margin: 13px 0px;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	align-items: center;

	transition: all 0.3s;
	&:hover {
		transform: scale(1.02);
	}
`;

export const FlightRowHeaderContainer = styled.div`
	position: relative;
	padding: 0px 50px;
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ItemFlex = styled.div`
	flex: ${(p) => p.flex};
`;
export const ListContainer = styled.div`
	overflow-y: auto;
	padding: 20px;
	height: 600px;
	width: 100%;
	display: flex;
	flex-direction: column;
	::-webkit-scrollbar {
		width: 0px;
		background: transparent; /* make scrollbar transparent */
	}
`;
export const Row = styled.div`
	flex-direction: row;
	display: flex;
	align-items: center;
`;
