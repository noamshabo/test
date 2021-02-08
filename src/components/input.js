import styled from 'styled-components';
import { Colors } from '../services/utils/colors';
export const Input = styled.input`
	padding: 0px 15px;
	font-size: 30px;
	min-width: 400px;
	min-height: 50px;
	border-radius: 8px;
	color: ${Colors.textGray4};
	font-family: 'Rubik', sans-serif;
	border: none;
	background-color: ${Colors.grayLight1};
	outline: none;

	&:focus {
		border: none;
	}
	&:active {
		border: none;
	}
`;
