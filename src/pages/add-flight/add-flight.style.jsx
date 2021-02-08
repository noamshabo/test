import styled from 'styled-components';
import { Colors } from '../../services/utils/colors';

export const AddFlightsContainer = styled.div`
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
